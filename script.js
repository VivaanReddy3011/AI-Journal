const STORAGE_KEY = "student-journal-demo-entries";

const EMOTION_WORDS = {
  positive: ["happy", "good", "great", "proud", "calm", "grateful", "better", "excited", "relieved", "peaceful", "hopeful", "joy"],
  stress: ["stress", "stressed", "pressure", "overwhelmed", "panic", "anxious", "anxiety", "deadline", "exam", "homework", "busy", "too much", "can't breathe"],
  sadness: ["sad", "down", "lonely", "empty", "hurt", "cry", "crying", "tired", "drained", "hopeless", "unseen", "ignored"],
  anger: ["angry", "mad", "furious", "annoyed", "frustrated", "hate", "irritated", "upset"],
  hope: ["hope", "trying", "improve", "can", "will", "recover", "better", "progress", "learn", "grow"],
  fatigue: ["tired", "sleepy", "exhausted", "burned out", "burnt out", "drained", "worn out"],
  loneliness: ["alone", "lonely", "nobody", "no one", "forgotten", "left out"],
};

const THEME_WORDS = {
  school: ["school", "class", "teacher", "homework", "exam", "test", "assignment", "grade", "study"],
  friends: ["friend", "friends", "group", "classmate", "social", "hang out", "ignored"],
  family: ["mom", "dad", "mother", "father", "sister", "brother", "family", "home"],
  sleep: ["sleep", "sleepy", "insomnia", "rest", "rested", "bed", "night"],
  selfWorth: ["worthless", "useless", "fail", "failure", "not enough", "can't do it", "stupid"],
};

const CRISIS_PATTERNS = [
  "kill myself",
  "suicide",
  "end my life",
  "hurt myself",
  "self harm",
  "self-harm",
  "want to die",
];

const els = {
  entry: document.getElementById("journalEntry"),
  analyzeBtn: document.getElementById("analyzeBtn"),
  sampleBtn: document.getElementById("sampleBtn"),
  loadDemoBtn: document.getElementById("loadDemoBtn"),
  clearAllBtn: document.getElementById("clearAllBtn"),
  primaryMood: document.getElementById("primaryMood"),
  moodDetail: document.getElementById("moodDetail"),
  intensityScore: document.getElementById("intensityScore"),
  intensityDetail: document.getElementById("intensityDetail"),
  topTheme: document.getElementById("topTheme"),
  themeDetail: document.getElementById("themeDetail"),
  summaryText: document.getElementById("summaryText"),
  adviceList: document.getElementById("adviceList"),
  reflectionText: document.getElementById("reflectionText"),
  safetyBanner: document.getElementById("safetyBanner"),
  themeList: document.getElementById("themeList"),
  entryList: document.getElementById("entryList"),
  trendChart: document.getElementById("trendChart"),
  emotionChart: document.getElementById("emotionChart"),
  storageStatus: document.getElementById("storageStatus"),
  entryTemplate: document.getElementById("entryTemplate"),
};

let entries = loadEntries();

function loadEntries() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveEntries() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s'-]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function countMatches(text, list) {
  const normalized = text.toLowerCase();
  return list.reduce((count, phrase) => count + (normalized.includes(phrase) ? 1 : 0), 0);
}

function scoreEmotion(text) {
  const tokens = tokenize(text);
  const normalized = ` ${tokens.join(" ")} `;
  const counts = {
    positive: countMatches(text, EMOTION_WORDS.positive),
    stress: countMatches(text, EMOTION_WORDS.stress),
    sadness: countMatches(text, EMOTION_WORDS.sadness),
    anger: countMatches(text, EMOTION_WORDS.anger),
    hope: countMatches(text, EMOTION_WORDS.hope),
    fatigue: countMatches(text, EMOTION_WORDS.fatigue),
    loneliness: countMatches(text, EMOTION_WORDS.loneliness),
  };

  const intensifiers = countMatches(text, ["very", "so", "really", "extremely", "always", "never", "too", "super", "totally"]);
  const punctuationBoost = (text.match(/[!?]/g) || []).length * 0.2;

  const themeCounts = Object.fromEntries(
    Object.entries(THEME_WORDS).map(([theme, words]) => [theme, countMatches(text, words)])
  );

  const crisis = CRISIS_PATTERNS.some((pattern) => normalized.includes(` ${pattern} `) || text.toLowerCase().includes(pattern));
  const toneScore =
    (counts.positive * 1.1 + counts.hope * 0.7)
    - (counts.stress * 1.0 + counts.sadness * 0.9 + counts.anger * 0.8 + counts.loneliness * 0.9 + counts.fatigue * 0.6);

  const totalHits = Object.values(counts).reduce((sum, value) => sum + value, 0) || 1;
  const intensity = Math.max(0, Math.min(1, (totalHits * 0.12) + intensifiers * 0.08 + punctuationBoost));

  const topEmotion = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || "neutral";
  const mood = deriveMood(toneScore, counts, topEmotion);
  const topTheme = Object.entries(themeCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "general reflection";

  return {
    mood,
    topEmotion,
    topTheme,
    intensity,
    counts,
    themeCounts,
    crisis,
    toneScore,
  };
}

function deriveMood(toneScore, counts, topEmotion) {
  if (counts.stress >= 2 || counts.loneliness >= 2) return "stressed";
  if (counts.sadness >= 2 || topEmotion === "sadness") return "sad";
  if (counts.anger >= 2 || topEmotion === "anger") return "frustrated";
  if (toneScore > 1.4) return "hopeful";
  if (toneScore > 0.4) return "balanced";
  if (toneScore < -1.2) return "heavy";
  return "mixed";
}

function buildFeedback(analysis, text) {
  const themeLabel = {
    school: "school pressure",
    friends: "friendship and social life",
    family: "family life",
    sleep: "sleep and rest",
    selfWorth: "self-confidence",
  }[analysis.topTheme] || "day-to-day life";

  const summaryMap = {
    hopeful: `This entry sounds thoughtful and forward-looking. Even if things are not perfect, there is a sense that you are trying to move ahead.`,
    balanced: `This entry feels steady overall, with a mix of thoughts that seem manageable and reflective.`,
    mixed: `This entry feels mixed. There are likely a few different emotions happening at the same time.`,
    stressed: `This entry sounds overloaded or under pressure, especially around ${themeLabel}.`,
    sad: `This entry carries a heavier emotional tone and may be pointing to hurt, loneliness, or low energy.`,
    frustrated: `This entry sounds irritated or stuck, with some clear frustration coming through.`,
    heavy: `This entry feels emotionally heavy and may need extra care and rest.`,
  };

  const adviceMap = {
    hopeful: [
      "Keep the momentum going by naming one thing that went well today.",
      "Write down the next small step instead of the full problem.",
      "Save this entry so you can look back at your progress later.",
    ],
    balanced: [
      "Break the entry into one challenge and one small win.",
      "Notice whether the feeling changes once you rest or talk to someone.",
      "Try writing one sentence about what you need next.",
    ],
    mixed: [
      "Separate the entry into parts: what happened, how it felt, and what you need.",
      "If there are too many thoughts, circle the one that feels loudest.",
      "Choose one practical action you can do in under ten minutes.",
    ],
    stressed: [
      "Shrink the problem into the smallest next step you can complete.",
      "Take a short break from the thing causing pressure if you can.",
      "Try a reset routine: water, deep breath, and one clear task.",
    ],
    sad: [
      "Be gentle with yourself and avoid calling the feeling a failure.",
      "Reach out to a trusted person if the heaviness keeps building.",
      "Try writing one thing that felt even slightly okay today.",
    ],
    frustrated: [
      "Step away briefly so the frustration does not keep looping.",
      "Write what is actually in your control and ignore the rest for now.",
      "Use your next note to name the exact trigger instead of the whole problem.",
    ],
    heavy: [
      "Pause and do something grounding before making any big decisions.",
      "Write one sentence about what support you wish you had right now.",
      "If this keeps feeling overwhelming, talk to someone you trust in real life.",
    ],
  };

  const reflectionMap = {
    hopeful: "What is one thing you want to keep building from this moment?",
    balanced: "What part of today felt most steady or manageable?",
    mixed: "Which emotion seems strongest if you had to choose just one?",
    stressed: "What is the smallest part of this stress you can handle first?",
    sad: "What would feel comforting or supportive right now?",
    frustrated: "What is actually bothering you the most underneath the frustration?",
    heavy: "What kind of support would make today feel a little easier?",
  };

  const advice = adviceMap[analysis.mood] || adviceMap.mixed;
  const summary = summaryMap[analysis.mood] || summaryMap.mixed;
  const reflection = reflectionMap[analysis.mood] || reflectionMap.mixed;

  const keywords = extractKeywords(text);

  return {
    summary: keywords.length ? `${summary} I also noticed ${keywords.join(", ")}.` : summary,
    advice,
    reflection,
  };
}

function extractKeywords(text) {
  const allThemeWords = new Set([
    ...Object.values(EMOTION_WORDS).flat(),
    ...Object.values(THEME_WORDS).flat(),
  ]);

  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s'-]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

  const seen = [];
  for (const word of words) {
    if (allThemeWords.has(word) && !seen.includes(word)) {
      seen.push(word);
    }
    if (seen.length >= 3) break;
  }
  return seen;
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(dateString));
}

function intensityLabel(value) {
  if (value >= 0.7) return "very intense";
  if (value >= 0.45) return "moderately intense";
  if (value >= 0.2) return "lightly emotional";
  return "gentle";
}

function moodColor(mood) {
  const colors = {
    hopeful: "#9dffca",
    balanced: "#74d3ff",
    mixed: "#b7c4e4",
    stressed: "#ffcf6b",
    sad: "#9ba7ff",
    frustrated: "#ff8ca8",
    heavy: "#ff8ca8",
    neutral: "#b7c4e4",
  };
  return colors[mood] || colors.neutral;
}

function analyzeAndSave(text) {
  const analysis = scoreEmotion(text);
  const feedback = buildFeedback(analysis, text);
  const item = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    text,
    analysis,
    feedback,
  };
  entries.unshift(item);
  entries = entries.slice(0, 30);
  saveEntries();
  renderApp(item);
}

function renderFeedback(item) {
  const { analysis, feedback } = item;

  els.primaryMood.textContent = analysis.mood.replace(/^[a-z]/, (m) => m.toUpperCase());
  els.moodDetail.textContent = `Detected as ${analysis.topEmotion} with a ${analysis.mood} tone.`;
  els.intensityScore.textContent = `${Math.round(analysis.intensity * 100)}%`;
  els.intensityDetail.textContent = intensityLabel(analysis.intensity);
  els.topTheme.textContent = analysis.topTheme === "selfWorth" ? "self-confidence" : analysis.topTheme;
  els.themeDetail.textContent = `This is the most repeated topic in the entry.`;

  els.summaryText.textContent = feedback.summary;
  els.adviceList.innerHTML = "";
  feedback.advice.forEach((tip) => {
    const li = document.createElement("li");
    li.textContent = tip;
    els.adviceList.appendChild(li);
  });
  els.reflectionText.textContent = feedback.reflection;

  if (analysis.crisis) {
    els.safetyBanner.classList.remove("hidden");
    els.safetyBanner.textContent = "This entry includes language that may suggest immediate danger or self-harm. If this reflects how you feel right now, please contact local emergency services or a trusted adult, parent, counselor, or crisis line right away.";
  } else {
    els.safetyBanner.classList.add("hidden");
    els.safetyBanner.textContent = "";
  }
}

function renderThemeList() {
  const aggregate = {};
  entries.forEach((item) => {
    Object.entries(item.analysis.themeCounts || {}).forEach(([theme, value]) => {
      aggregate[theme] = (aggregate[theme] || 0) + value;
    });
  });

  const sorted = Object.entries(aggregate)
    .sort((a, b) => b[1] - a[1])
    .filter(([, value]) => value > 0)
    .slice(0, 5);

  els.themeList.innerHTML = "";

  if (!sorted.length) {
    const empty = document.createElement("p");
    empty.className = "microcopy";
    empty.textContent = "Write a few entries and the strongest recurring themes will appear here.";
    els.themeList.appendChild(empty);
    return;
  }

  sorted.forEach(([theme, value]) => {
    const row = document.createElement("div");
    row.className = "theme-chip";
    row.innerHTML = `<span>${theme === "selfWorth" ? "self-confidence" : theme}</span><span>${value}</span>`;
    els.themeList.appendChild(row);
  });
}

function renderEntries() {
  els.entryList.innerHTML = "";

  if (!entries.length) {
    const empty = document.createElement("p");
    empty.className = "microcopy";
    empty.textContent = "Your saved entries will appear here after the first analysis.";
    els.entryList.appendChild(empty);
    return;
  }

  entries.slice(0, 6).forEach((item) => {
    const node = els.entryTemplate.content.cloneNode(true);
    const card = node.querySelector(".entry-card");
    const date = node.querySelector(".entry-date");
    const mood = node.querySelector(".entry-mood");
    const excerpt = node.querySelector(".entry-excerpt");
    const del = node.querySelector(".entry-delete");

    date.textContent = formatDate(item.createdAt);
    mood.textContent = item.analysis.mood;
    mood.style.background = `${moodColor(item.analysis.mood)}22`;
    mood.style.color = moodColor(item.analysis.mood);
    excerpt.textContent = item.text.length > 160 ? `${item.text.slice(0, 160)}...` : item.text;
    del.addEventListener("click", () => {
      entries = entries.filter((entry) => entry.id !== item.id);
      saveEntries();
      renderApp();
    });

    els.entryList.appendChild(node);
  });
}

function drawChart(canvas, series, labels, colors) {
  const ctx = canvas.getContext("2d");
  const ratio = window.devicePixelRatio || 1;
  const width = canvas.clientWidth || canvas.width;
  const height = canvas.clientHeight || canvas.height;

  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  ctx.scale(ratio, ratio);

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "rgba(255,255,255,0.02)";
  roundRect(ctx, 0, 0, width, height, 16, true, false);

  if (!series.length) {
    ctx.fillStyle = "rgba(233, 240, 255, 0.65)";
    ctx.font = "14px Inter, sans-serif";
    ctx.fillText("No data yet", 18, 36);
    return;
  }

  const pad = 22;
  const plotW = width - pad * 2;
  const plotH = height - pad * 2;
  const max = Math.max(...series, 1);
  const min = Math.min(...series, -1);
  const range = max - min || 1;

  ctx.strokeStyle = "rgba(255,255,255,0.08)";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = pad + (plotH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(pad, y);
    ctx.lineTo(width - pad, y);
    ctx.stroke();
  }

  ctx.beginPath();
  series.forEach((value, index) => {
    const x = pad + (plotW / Math.max(series.length - 1, 1)) * index;
    const y = pad + plotH - ((value - min) / range) * plotH;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = colors.line;
  ctx.lineWidth = 3;
  ctx.stroke();

  series.forEach((value, index) => {
    const x = pad + (plotW / Math.max(series.length - 1, 1)) * index;
    const y = pad + plotH - ((value - min) / range) * plotH;
    ctx.beginPath();
    ctx.fillStyle = colors.point;
    ctx.arc(x, y, 4.5, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.fillStyle = "rgba(233, 240, 255, 0.7)";
  ctx.font = "12px Inter, sans-serif";
  labels.forEach((label, index) => {
    const x = pad + (plotW / Math.max(labels.length - 1, 1)) * index;
    ctx.fillText(label, x - 14, height - 6);
  });
}

function roundRect(ctx, x, y, w, h, r, fill, stroke) {
  if (typeof r === "number") r = { tl: r, tr: r, br: r, bl: r };
  ctx.beginPath();
  ctx.moveTo(x + r.tl, y);
  ctx.lineTo(x + w - r.tr, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r.tr);
  ctx.lineTo(x + w, y + h - r.br);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r.br, y + h);
  ctx.lineTo(x + r.bl, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r.bl);
  ctx.lineTo(x, y + r.tl);
  ctx.quadraticCurveTo(x, y, x + r.tl, y);
  ctx.closePath();
  if (fill) ctx.fill();
  if (stroke) ctx.stroke();
}

function renderDashboard() {
  const recent = entries.slice(0, 8).reverse();
  const scores = recent.map((item) => item.analysis.toneScore);
  const labels = recent.map((item) => new Intl.DateTimeFormat(undefined, { weekday: "short" }).format(new Date(item.createdAt)));
  const emotionTotals = aggregateEmotionCounts();
  const emotionSeries = [
    emotionTotals.positive || 0,
    emotionTotals.stress || 0,
    emotionTotals.sadness || 0,
    emotionTotals.anger || 0,
    emotionTotals.hope || 0,
  ];

  drawChart(els.trendChart, scores, labels, {
    line: "#74d3ff",
    point: "#9dffca",
  });

  drawChart(els.emotionChart, emotionSeries, ["Pos", "Stress", "Sad", "Anger", "Hope"], {
    line: "#9dffca",
    point: "#74d3ff",
  });
}

function aggregateEmotionCounts() {
  return entries.reduce((acc, item) => {
    Object.entries(item.analysis.counts || {}).forEach(([key, value]) => {
      acc[key] = (acc[key] || 0) + value;
    });
    return acc;
  }, {});
}

function renderApp(lastItem) {
  if (lastItem) {
    renderFeedback(lastItem);
    els.storageStatus.textContent = "Saved locally";
  } else if (entries[0]) {
    renderFeedback(entries[0]);
  } else {
    els.primaryMood.textContent = "No entry yet";
    els.moodDetail.textContent = "Write something and analyze it to see the tone.";
    els.intensityScore.textContent = "0%";
    els.intensityDetail.textContent = "How strong the emotional language feels.";
    els.topTheme.textContent = "Unknown";
    els.themeDetail.textContent = "Common topic detected in the text.";
    els.summaryText.textContent = "Your feedback summary will appear here.";
    els.adviceList.innerHTML = "";
    els.reflectionText.textContent = "A gentle question will appear here.";
    els.safetyBanner.classList.add("hidden");
  }

  renderThemeList();
  renderEntries();
  renderDashboard();
}

function insertSampleText() {
  els.entry.value = `Today school felt like a lot. I had too much homework, my brain felt tired, and I kept thinking about the exam. I am a little stressed, but I still want to do better tomorrow. Maybe if I sleep early and make a smaller plan, things will feel easier.`;
}

els.analyzeBtn.addEventListener("click", () => {
  const text = els.entry.value.trim();
  if (!text) {
    els.storageStatus.textContent = "Write something first";
    return;
  }
  analyzeAndSave(text);
  els.entry.value = "";
});

els.sampleBtn.addEventListener("click", insertSampleText);
els.loadDemoBtn.addEventListener("click", () => {
  insertSampleText();
  analyzeAndSave(els.entry.value.trim());
  els.entry.value = "";
});

els.clearAllBtn.addEventListener("click", () => {
  const ok = confirm("Clear all saved entries from this browser?");
  if (!ok) return;
  entries = [];
  localStorage.removeItem(STORAGE_KEY);
  renderApp();
});

window.addEventListener("resize", () => renderDashboard());
window.addEventListener("DOMContentLoaded", () => renderApp());

renderApp();
