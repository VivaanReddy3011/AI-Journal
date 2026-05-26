const STORAGE_KEY = "student-journal-demo-entries";
const THEME_STORAGE_KEY = "student-journal-theme";
const MODEL_STORAGE_KEY = "student-journal-model";

const THEME_PRESETS = {
  paper: {
    label: "Paper",
    note: "Classic notebook",
    swatches: {
      light: "#fffdf8",
      dark: "#111827",
    },
    light: {
      bgTop: "#fbf8f3",
      bgBottom: "#efe7db",
      bgAccent1: "rgba(122, 92, 255, 0.08)",
      bgAccent2: "rgba(15, 139, 107, 0.08)",
      panel: "rgba(255, 255, 255, 0.9)",
      panelBorder: "rgba(70, 54, 34, 0.08)",
      surfaceStrong: "#fffdf8",
      surfaceSoft: "rgba(255, 255, 255, 0.55)",
      text: "#24190f",
      muted: "#6c5a4b",
      accent: "#7a5cff",
      accent2: "#0f8b6b",
      accentSoft: "rgba(122, 92, 255, 0.1)",
      danger: "#b0474f",
      dangerSoft: "rgba(176, 71, 79, 0.08)",
      shadow: "0 16px 40px rgba(74, 48, 23, 0.12)",
      buttonSecondaryBg: "rgba(255, 255, 255, 0.78)",
      buttonSecondaryText: "#24190f",
      buttonSecondaryBorder: "rgba(70, 54, 34, 0.08)",
      buttonGhostText: "#6c5a4b",
      buttonGhostBorder: "rgba(70, 54, 34, 0.08)",
      menuBg: "rgba(255, 255, 255, 0.96)",
      menuBorder: "rgba(70, 54, 34, 0.08)",
      menuItemBg: "rgba(255, 255, 255, 0.85)",
      menuItemHover: "rgba(122, 92, 255, 0.06)",
      menuItemActive: "rgba(122, 92, 255, 0.12)",
    },
    dark: {
      bgTop: "#111827",
      bgBottom: "#0b1220",
      bgAccent1: "rgba(122, 92, 255, 0.12)",
      bgAccent2: "rgba(15, 139, 107, 0.12)",
      panel: "rgba(17, 24, 39, 0.9)",
      panelBorder: "rgba(255, 255, 255, 0.08)",
      surfaceStrong: "#111827",
      surfaceSoft: "rgba(255, 255, 255, 0.04)",
      text: "#f3f4f6",
      muted: "#9ca3af",
      accent: "#9f8cff",
      accent2: "#31c48d",
      accentSoft: "rgba(159, 140, 255, 0.16)",
      danger: "#f87171",
      dangerSoft: "rgba(248, 113, 113, 0.08)",
      shadow: "0 18px 40px rgba(0, 0, 0, 0.28)",
      buttonSecondaryBg: "rgba(255, 255, 255, 0.06)",
      buttonSecondaryText: "#f3f4f6",
      buttonSecondaryBorder: "rgba(255, 255, 255, 0.1)",
      buttonGhostText: "#9ca3af",
      buttonGhostBorder: "rgba(255, 255, 255, 0.08)",
      menuBg: "rgba(17, 24, 39, 0.96)",
      menuBorder: "rgba(255, 255, 255, 0.08)",
      menuItemBg: "rgba(255, 255, 255, 0.04)",
      menuItemHover: "rgba(159, 140, 255, 0.12)",
      menuItemActive: "rgba(159, 140, 255, 0.2)",
    },
  },
  meadow: {
    label: "Meadow",
    note: "Fresh and calm",
    swatches: { light: "#f7fbf4", dark: "#0d1b17" },
    light: {
      bgTop: "#f8fbf4",
      bgBottom: "#e6f1e4",
      bgAccent1: "rgba(38, 162, 109, 0.08)",
      bgAccent2: "rgba(90, 121, 71, 0.08)",
      panel: "rgba(255, 255, 255, 0.92)",
      panelBorder: "rgba(38, 162, 109, 0.12)",
      surfaceStrong: "#fdfefb",
      surfaceSoft: "rgba(255, 255, 255, 0.56)",
      text: "#183025",
      muted: "#587163",
      accent: "#2d8a64",
      accent2: "#5a7947",
      accentSoft: "rgba(45, 138, 100, 0.12)",
      danger: "#a24b52",
      dangerSoft: "rgba(162, 75, 82, 0.08)",
      shadow: "0 16px 40px rgba(50, 90, 62, 0.12)",
      buttonSecondaryBg: "rgba(255, 255, 255, 0.82)",
      buttonSecondaryText: "#183025",
      buttonSecondaryBorder: "rgba(38, 162, 109, 0.12)",
      buttonGhostText: "#587163",
      buttonGhostBorder: "rgba(38, 162, 109, 0.12)",
      menuBg: "rgba(255, 255, 255, 0.98)",
      menuBorder: "rgba(38, 162, 109, 0.12)",
      menuItemBg: "rgba(255, 255, 255, 0.88)",
      menuItemHover: "rgba(38, 162, 109, 0.08)",
      menuItemActive: "rgba(38, 162, 109, 0.16)",
    },
    dark: {
      bgTop: "#0d1b17",
      bgBottom: "#07120f",
      bgAccent1: "rgba(38, 162, 109, 0.16)",
      bgAccent2: "rgba(90, 121, 71, 0.12)",
      panel: "rgba(11, 24, 19, 0.92)",
      panelBorder: "rgba(255, 255, 255, 0.08)",
      surfaceStrong: "#10221a",
      surfaceSoft: "rgba(255, 255, 255, 0.04)",
      text: "#e8f5ee",
      muted: "#9fbdaf",
      accent: "#69d3a0",
      accent2: "#9fca72",
      accentSoft: "rgba(105, 211, 160, 0.16)",
      danger: "#ff8d95",
      dangerSoft: "rgba(255, 141, 149, 0.08)",
      shadow: "0 18px 40px rgba(0, 0, 0, 0.3)",
      buttonSecondaryBg: "rgba(255, 255, 255, 0.06)",
      buttonSecondaryText: "#e8f5ee",
      buttonSecondaryBorder: "rgba(255, 255, 255, 0.1)",
      buttonGhostText: "#9fbdaf",
      buttonGhostBorder: "rgba(255, 255, 255, 0.08)",
      menuBg: "rgba(11, 24, 19, 0.96)",
      menuBorder: "rgba(255, 255, 255, 0.08)",
      menuItemBg: "rgba(255, 255, 255, 0.04)",
      menuItemHover: "rgba(105, 211, 160, 0.12)",
      menuItemActive: "rgba(105, 211, 160, 0.2)",
    },
  },
  ocean: {
    label: "Ocean",
    note: "Cool and focused",
    swatches: { light: "#f4fbff", dark: "#07111d" },
    light: {
      bgTop: "#f5fbff",
      bgBottom: "#e4f2fb",
      bgAccent1: "rgba(43, 140, 214, 0.08)",
      bgAccent2: "rgba(52, 191, 218, 0.08)",
      panel: "rgba(255, 255, 255, 0.92)",
      panelBorder: "rgba(43, 140, 214, 0.12)",
      surfaceStrong: "#fcfeff",
      surfaceSoft: "rgba(255, 255, 255, 0.56)",
      text: "#123044",
      muted: "#5b7486",
      accent: "#2b8cd6",
      accent2: "#2fadc1",
      accentSoft: "rgba(43, 140, 214, 0.12)",
      danger: "#ad5465",
      dangerSoft: "rgba(173, 84, 101, 0.08)",
      shadow: "0 16px 40px rgba(49, 93, 125, 0.12)",
      buttonSecondaryBg: "rgba(255, 255, 255, 0.84)",
      buttonSecondaryText: "#123044",
      buttonSecondaryBorder: "rgba(43, 140, 214, 0.12)",
      buttonGhostText: "#5b7486",
      buttonGhostBorder: "rgba(43, 140, 214, 0.12)",
      menuBg: "rgba(255, 255, 255, 0.98)",
      menuBorder: "rgba(43, 140, 214, 0.12)",
      menuItemBg: "rgba(255, 255, 255, 0.88)",
      menuItemHover: "rgba(43, 140, 214, 0.08)",
      menuItemActive: "rgba(43, 140, 214, 0.16)",
    },
    dark: {
      bgTop: "#07111d",
      bgBottom: "#091622",
      bgAccent1: "rgba(43, 140, 214, 0.16)",
      bgAccent2: "rgba(52, 191, 218, 0.12)",
      panel: "rgba(10, 20, 32, 0.92)",
      panelBorder: "rgba(255, 255, 255, 0.08)",
      surfaceStrong: "#0c1724",
      surfaceSoft: "rgba(255, 255, 255, 0.04)",
      text: "#e5f4ff",
      muted: "#9ab0bf",
      accent: "#6bb8ff",
      accent2: "#68dbe3",
      accentSoft: "rgba(107, 184, 255, 0.16)",
      danger: "#ff8da3",
      dangerSoft: "rgba(255, 141, 163, 0.08)",
      shadow: "0 18px 40px rgba(0, 0, 0, 0.3)",
      buttonSecondaryBg: "rgba(255, 255, 255, 0.06)",
      buttonSecondaryText: "#e5f4ff",
      buttonSecondaryBorder: "rgba(255, 255, 255, 0.1)",
      buttonGhostText: "#9ab0bf",
      buttonGhostBorder: "rgba(255, 255, 255, 0.08)",
      menuBg: "rgba(10, 20, 32, 0.96)",
      menuBorder: "rgba(255, 255, 255, 0.08)",
      menuItemBg: "rgba(255, 255, 255, 0.04)",
      menuItemHover: "rgba(107, 184, 255, 0.12)",
      menuItemActive: "rgba(107, 184, 255, 0.2)",
    },
  },
  sunset: {
    label: "Sunset",
    note: "Warm and creative",
    swatches: { light: "#fff8f2", dark: "#1e1010" },
    light: {
      bgTop: "#fff8f2",
      bgBottom: "#f8e4d3",
      bgAccent1: "rgba(229, 117, 82, 0.1)",
      bgAccent2: "rgba(232, 169, 84, 0.1)",
      panel: "rgba(255, 255, 255, 0.92)",
      panelBorder: "rgba(229, 117, 82, 0.14)",
      surfaceStrong: "#fffdfb",
      surfaceSoft: "rgba(255, 255, 255, 0.56)",
      text: "#341d16",
      muted: "#7a5f55",
      accent: "#e57552",
      accent2: "#d98a2d",
      accentSoft: "rgba(229, 117, 82, 0.12)",
      danger: "#b04b5f",
      dangerSoft: "rgba(176, 75, 95, 0.08)",
      shadow: "0 16px 40px rgba(109, 71, 45, 0.12)",
      buttonSecondaryBg: "rgba(255, 255, 255, 0.84)",
      buttonSecondaryText: "#341d16",
      buttonSecondaryBorder: "rgba(229, 117, 82, 0.14)",
      buttonGhostText: "#7a5f55",
      buttonGhostBorder: "rgba(229, 117, 82, 0.14)",
      menuBg: "rgba(255, 255, 255, 0.98)",
      menuBorder: "rgba(229, 117, 82, 0.14)",
      menuItemBg: "rgba(255, 255, 255, 0.9)",
      menuItemHover: "rgba(229, 117, 82, 0.08)",
      menuItemActive: "rgba(229, 117, 82, 0.16)",
    },
    dark: {
      bgTop: "#1e1010",
      bgBottom: "#0f0a0a",
      bgAccent1: "rgba(229, 117, 82, 0.16)",
      bgAccent2: "rgba(232, 169, 84, 0.12)",
      panel: "rgba(28, 16, 16, 0.92)",
      panelBorder: "rgba(255, 255, 255, 0.08)",
      surfaceStrong: "#261413",
      surfaceSoft: "rgba(255, 255, 255, 0.04)",
      text: "#fff2ea",
      muted: "#d1b2a5",
      accent: "#f0a07b",
      accent2: "#f0c16e",
      accentSoft: "rgba(240, 160, 123, 0.16)",
      danger: "#ff909f",
      dangerSoft: "rgba(255, 144, 159, 0.08)",
      shadow: "0 18px 40px rgba(0, 0, 0, 0.34)",
      buttonSecondaryBg: "rgba(255, 255, 255, 0.06)",
      buttonSecondaryText: "#fff2ea",
      buttonSecondaryBorder: "rgba(255, 255, 255, 0.1)",
      buttonGhostText: "#d1b2a5",
      buttonGhostBorder: "rgba(255, 255, 255, 0.08)",
      menuBg: "rgba(28, 16, 16, 0.96)",
      menuBorder: "rgba(255, 255, 255, 0.08)",
      menuItemBg: "rgba(255, 255, 255, 0.04)",
      menuItemHover: "rgba(240, 160, 123, 0.12)",
      menuItemActive: "rgba(240, 160, 123, 0.2)",
    },
  },
  rose: {
    label: "Rose",
    note: "Soft and expressive",
    swatches: { light: "#fff6f8", dark: "#1f1015" },
    light: {
      bgTop: "#fff7fa",
      bgBottom: "#f5e3ea",
      bgAccent1: "rgba(196, 70, 124, 0.08)",
      bgAccent2: "rgba(235, 141, 167, 0.08)",
      panel: "rgba(255, 255, 255, 0.92)",
      panelBorder: "rgba(196, 70, 124, 0.12)",
      surfaceStrong: "#fffdfd",
      surfaceSoft: "rgba(255, 255, 255, 0.56)",
      text: "#34191f",
      muted: "#785861",
      accent: "#c4467c",
      accent2: "#e08a9d",
      accentSoft: "rgba(196, 70, 124, 0.12)",
      danger: "#b34b58",
      dangerSoft: "rgba(179, 75, 88, 0.08)",
      shadow: "0 16px 40px rgba(117, 67, 89, 0.12)",
      buttonSecondaryBg: "rgba(255, 255, 255, 0.84)",
      buttonSecondaryText: "#34191f",
      buttonSecondaryBorder: "rgba(196, 70, 124, 0.12)",
      buttonGhostText: "#785861",
      buttonGhostBorder: "rgba(196, 70, 124, 0.12)",
      menuBg: "rgba(255, 255, 255, 0.98)",
      menuBorder: "rgba(196, 70, 124, 0.12)",
      menuItemBg: "rgba(255, 255, 255, 0.88)",
      menuItemHover: "rgba(196, 70, 124, 0.08)",
      menuItemActive: "rgba(196, 70, 124, 0.16)",
    },
    dark: {
      bgTop: "#1f1015",
      bgBottom: "#0f090c",
      bgAccent1: "rgba(196, 70, 124, 0.16)",
      bgAccent2: "rgba(235, 141, 167, 0.12)",
      panel: "rgba(31, 16, 21, 0.92)",
      panelBorder: "rgba(255, 255, 255, 0.08)",
      surfaceStrong: "#29131b",
      surfaceSoft: "rgba(255, 255, 255, 0.04)",
      text: "#fff1f6",
      muted: "#d0a8b8",
      accent: "#f18cb1",
      accent2: "#efadc0",
      accentSoft: "rgba(241, 140, 177, 0.16)",
      danger: "#ff91a0",
      dangerSoft: "rgba(255, 145, 160, 0.08)",
      shadow: "0 18px 40px rgba(0, 0, 0, 0.34)",
      buttonSecondaryBg: "rgba(255, 255, 255, 0.06)",
      buttonSecondaryText: "#fff1f6",
      buttonSecondaryBorder: "rgba(255, 255, 255, 0.1)",
      buttonGhostText: "#d0a8b8",
      buttonGhostBorder: "rgba(255, 255, 255, 0.08)",
      menuBg: "rgba(31, 16, 21, 0.96)",
      menuBorder: "rgba(255, 255, 255, 0.08)",
      menuItemBg: "rgba(255, 255, 255, 0.04)",
      menuItemHover: "rgba(241, 140, 177, 0.12)",
      menuItemActive: "rgba(241, 140, 177, 0.2)",
    },
  },
  lavender: {
    label: "Lavender",
    note: "Soft and focused",
    swatches: { light: "#fbf9ff", dark: "#15111f" },
    light: {
      bgTop: "#fbf9ff",
      bgBottom: "#ece6fb",
      bgAccent1: "rgba(128, 90, 213, 0.08)",
      bgAccent2: "rgba(178, 143, 245, 0.08)",
      panel: "rgba(255, 255, 255, 0.92)",
      panelBorder: "rgba(128, 90, 213, 0.12)",
      surfaceStrong: "#fffefe",
      surfaceSoft: "rgba(255, 255, 255, 0.56)",
      text: "#231a35",
      muted: "#736985",
      accent: "#805ad5",
      accent2: "#a17bdc",
      accentSoft: "rgba(128, 90, 213, 0.12)",
      danger: "#b35776",
      dangerSoft: "rgba(179, 87, 118, 0.08)",
      shadow: "0 16px 40px rgba(91, 69, 138, 0.12)",
      buttonSecondaryBg: "rgba(255, 255, 255, 0.84)",
      buttonSecondaryText: "#231a35",
      buttonSecondaryBorder: "rgba(128, 90, 213, 0.12)",
      buttonGhostText: "#736985",
      buttonGhostBorder: "rgba(128, 90, 213, 0.12)",
      menuBg: "rgba(255, 255, 255, 0.98)",
      menuBorder: "rgba(128, 90, 213, 0.12)",
      menuItemBg: "rgba(255, 255, 255, 0.88)",
      menuItemHover: "rgba(128, 90, 213, 0.08)",
      menuItemActive: "rgba(128, 90, 213, 0.16)",
    },
    dark: {
      bgTop: "#15111f",
      bgBottom: "#0c0a14",
      bgAccent1: "rgba(128, 90, 213, 0.16)",
      bgAccent2: "rgba(178, 143, 245, 0.12)",
      panel: "rgba(21, 17, 31, 0.92)",
      panelBorder: "rgba(255, 255, 255, 0.08)",
      surfaceStrong: "#1e172c",
      surfaceSoft: "rgba(255, 255, 255, 0.04)",
      text: "#f3ecff",
      muted: "#b8aacd",
      accent: "#b28ff5",
      accent2: "#d2b6ff",
      accentSoft: "rgba(178, 143, 245, 0.16)",
      danger: "#ff8eb0",
      dangerSoft: "rgba(255, 142, 176, 0.08)",
      shadow: "0 18px 40px rgba(0, 0, 0, 0.34)",
      buttonSecondaryBg: "rgba(255, 255, 255, 0.06)",
      buttonSecondaryText: "#f3ecff",
      buttonSecondaryBorder: "rgba(255, 255, 255, 0.1)",
      buttonGhostText: "#b8aacd",
      buttonGhostBorder: "rgba(255, 255, 255, 0.08)",
      menuBg: "rgba(21, 17, 31, 0.96)",
      menuBorder: "rgba(255, 255, 255, 0.08)",
      menuItemBg: "rgba(255, 255, 255, 0.04)",
      menuItemHover: "rgba(178, 143, 245, 0.12)",
      menuItemActive: "rgba(178, 143, 245, 0.2)",
    },
  },
  slate: {
    label: "Slate",
    note: "Minimal and crisp",
    swatches: { light: "#f8fafc", dark: "#0f172a" },
    light: {
      bgTop: "#fbfcfe",
      bgBottom: "#e7ebf2",
      bgAccent1: "rgba(71, 85, 105, 0.08)",
      bgAccent2: "rgba(37, 99, 235, 0.06)",
      panel: "rgba(255, 255, 255, 0.95)",
      panelBorder: "rgba(71, 85, 105, 0.12)",
      surfaceStrong: "#ffffff",
      surfaceSoft: "rgba(255, 255, 255, 0.56)",
      text: "#111827",
      muted: "#5b6472",
      accent: "#475569",
      accent2: "#2563eb",
      accentSoft: "rgba(71, 85, 105, 0.1)",
      danger: "#b4495d",
      dangerSoft: "rgba(180, 73, 93, 0.08)",
      shadow: "0 16px 40px rgba(51, 65, 85, 0.12)",
      buttonSecondaryBg: "rgba(255, 255, 255, 0.86)",
      buttonSecondaryText: "#111827",
      buttonSecondaryBorder: "rgba(71, 85, 105, 0.12)",
      buttonGhostText: "#5b6472",
      buttonGhostBorder: "rgba(71, 85, 105, 0.12)",
      menuBg: "rgba(255, 255, 255, 0.98)",
      menuBorder: "rgba(71, 85, 105, 0.12)",
      menuItemBg: "rgba(255, 255, 255, 0.9)",
      menuItemHover: "rgba(71, 85, 105, 0.08)",
      menuItemActive: "rgba(71, 85, 105, 0.16)",
    },
    dark: {
      bgTop: "#0f172a",
      bgBottom: "#090d17",
      bgAccent1: "rgba(71, 85, 105, 0.16)",
      bgAccent2: "rgba(37, 99, 235, 0.12)",
      panel: "rgba(15, 23, 42, 0.92)",
      panelBorder: "rgba(255, 255, 255, 0.08)",
      surfaceStrong: "#111827",
      surfaceSoft: "rgba(255, 255, 255, 0.04)",
      text: "#f8fafc",
      muted: "#cbd5e1",
      accent: "#94a3b8",
      accent2: "#60a5fa",
      accentSoft: "rgba(148, 163, 184, 0.16)",
      danger: "#ff8ea4",
      dangerSoft: "rgba(255, 142, 164, 0.08)",
      shadow: "0 18px 40px rgba(0, 0, 0, 0.34)",
      buttonSecondaryBg: "rgba(255, 255, 255, 0.06)",
      buttonSecondaryText: "#f8fafc",
      buttonSecondaryBorder: "rgba(255, 255, 255, 0.1)",
      buttonGhostText: "#cbd5e1",
      buttonGhostBorder: "rgba(255, 255, 255, 0.08)",
      menuBg: "rgba(15, 23, 42, 0.96)",
      menuBorder: "rgba(255, 255, 255, 0.08)",
      menuItemBg: "rgba(255, 255, 255, 0.04)",
      menuItemHover: "rgba(148, 163, 184, 0.12)",
      menuItemActive: "rgba(148, 163, 184, 0.2)",
    },
  },
  cocoa: {
    label: "Cocoa",
    note: "Warm and grounded",
    swatches: { light: "#fdf8f3", dark: "#1b1511" },
    light: {
      bgTop: "#fdf8f3",
      bgBottom: "#efe1d5",
      bgAccent1: "rgba(168, 110, 73, 0.1)",
      bgAccent2: "rgba(138, 84, 47, 0.08)",
      panel: "rgba(255, 255, 255, 0.92)",
      panelBorder: "rgba(168, 110, 73, 0.12)",
      surfaceStrong: "#fffdfb",
      surfaceSoft: "rgba(255, 255, 255, 0.56)",
      text: "#2b1c14",
      muted: "#7b665a",
      accent: "#a86e49",
      accent2: "#8a542f",
      accentSoft: "rgba(168, 110, 73, 0.12)",
      danger: "#b3534c",
      dangerSoft: "rgba(179, 83, 76, 0.08)",
      shadow: "0 16px 40px rgba(112, 81, 58, 0.12)",
      buttonSecondaryBg: "rgba(255, 255, 255, 0.84)",
      buttonSecondaryText: "#2b1c14",
      buttonSecondaryBorder: "rgba(168, 110, 73, 0.12)",
      buttonGhostText: "#7b665a",
      buttonGhostBorder: "rgba(168, 110, 73, 0.12)",
      menuBg: "rgba(255, 255, 255, 0.98)",
      menuBorder: "rgba(168, 110, 73, 0.12)",
      menuItemBg: "rgba(255, 255, 255, 0.9)",
      menuItemHover: "rgba(168, 110, 73, 0.08)",
      menuItemActive: "rgba(168, 110, 73, 0.16)",
    },
    dark: {
      bgTop: "#1b1511",
      bgBottom: "#0e0a09",
      bgAccent1: "rgba(168, 110, 73, 0.16)",
      bgAccent2: "rgba(138, 84, 47, 0.12)",
      panel: "rgba(27, 21, 17, 0.92)",
      panelBorder: "rgba(255, 255, 255, 0.08)",
      surfaceStrong: "#251b16",
      surfaceSoft: "rgba(255, 255, 255, 0.04)",
      text: "#fff2e7",
      muted: "#d3b9a9",
      accent: "#d2a27f",
      accent2: "#c78a60",
      accentSoft: "rgba(210, 162, 127, 0.16)",
      danger: "#ff928e",
      dangerSoft: "rgba(255, 146, 142, 0.08)",
      shadow: "0 18px 40px rgba(0, 0, 0, 0.34)",
      buttonSecondaryBg: "rgba(255, 255, 255, 0.06)",
      buttonSecondaryText: "#fff2e7",
      buttonSecondaryBorder: "rgba(255, 255, 255, 0.1)",
      buttonGhostText: "#d3b9a9",
      buttonGhostBorder: "rgba(255, 255, 255, 0.08)",
      menuBg: "rgba(27, 21, 17, 0.96)",
      menuBorder: "rgba(255, 255, 255, 0.08)",
      menuItemBg: "rgba(255, 255, 255, 0.04)",
      menuItemHover: "rgba(210, 162, 127, 0.12)",
      menuItemActive: "rgba(210, 162, 127, 0.2)",
    },
  },
};

const THEME_ORDER = ["paper", "meadow", "ocean", "sunset", "rose", "lavender", "slate", "cocoa"];
const DEFAULT_THEME = { id: "paper", mode: "light" };

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
  wordCountChip: document.getElementById("wordCountChip"),
  entryTemplate: document.getElementById("entryTemplate"),
  todayLabel: document.getElementById("todayLabel"),
  modeToggleBtn: document.getElementById("modeToggleBtn"),
  modeIcon: document.getElementById("modeIcon"),
  themeMenuBtn: document.getElementById("themeMenuBtn"),
  themeMenu: document.getElementById("themeMenu"),
  currentThemeLabel: document.getElementById("currentThemeLabel"),
  themeButtonSwatch: document.getElementById("themeButtonSwatch"),
  modelLearnedText: document.getElementById("modelLearnedText"),
  modelEntryCount: document.getElementById("modelEntryCount"),
  noteSearch: document.getElementById("noteSearch"),
};

let entries = loadEntries();
let themeState = loadThemeState();
let themeMenuOpen = false;
let modelState = loadModelState();

if (!modelState.entriesTrained && entries.length) {
  entries.slice().reverse().forEach((item) => {
    trainLocalModel(item.text, item.analysis);
  });
}

function loadThemeState() {
  try {
    const raw = localStorage.getItem(THEME_STORAGE_KEY);
    if (!raw) return { ...DEFAULT_THEME };
    const parsed = JSON.parse(raw);
    const themeId = THEME_PRESETS[parsed.id] ? parsed.id : DEFAULT_THEME.id;
    const mode = parsed.mode === "dark" ? "dark" : "light";
    return { id: themeId, mode };
  } catch {
    return { ...DEFAULT_THEME };
  }
}

function saveThemeState() {
  localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(themeState));
}

function loadModelState() {
  try {
    const raw = localStorage.getItem(MODEL_STORAGE_KEY);
    if (!raw) {
      return {
        version: 1,
        entriesTrained: 0,
        wordWeights: {},
      };
    }

    const parsed = JSON.parse(raw);
    return {
      version: 1,
      entriesTrained: Number(parsed.entriesTrained) || 0,
      wordWeights: parsed.wordWeights && typeof parsed.wordWeights === "object" ? parsed.wordWeights : {},
    };
  } catch {
    return {
      version: 1,
      entriesTrained: 0,
      wordWeights: {},
    };
  }
}

function saveModelState() {
  localStorage.setItem(MODEL_STORAGE_KEY, JSON.stringify(modelState));
}

function getThemeDefinition(themeId = themeState.id) {
  return THEME_PRESETS[themeId] || THEME_PRESETS[DEFAULT_THEME.id];
}

function applyThemeState() {
  const theme = getThemeDefinition(themeState.id);
  const palette = theme[themeState.mode];
  const root = document.documentElement;

  Object.entries(palette).forEach(([key, value]) => {
    root.style.setProperty(`--${toKebabCase(key)}`, value);
  });

  root.style.setProperty(
    "--card-bg",
    themeState.mode === "dark"
      ? "linear-gradient(180deg, rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.8))"
      : "linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(251, 247, 240, 0.96))"
  );
  root.style.setProperty(
    "--card-border",
    themeState.mode === "dark" ? "rgba(255, 255, 255, 0.08)" : "rgba(70, 54, 34, 0.08)"
  );

  root.dataset.theme = themeState.id;
  root.dataset.mode = themeState.mode;

  els.modeToggleBtn.setAttribute("aria-pressed", themeState.mode === "dark" ? "true" : "false");
  els.modeIcon.textContent = themeState.mode === "dark" ? "☾" : "☀";
  els.themeMenuBtn.setAttribute("aria-expanded", themeMenuOpen ? "true" : "false");
  els.currentThemeLabel.textContent = theme.label;
  els.themeButtonSwatch.style.setProperty("--theme-button-color", palette.accent);
  els.themeButtonSwatch.style.setProperty("--theme-light-surface", theme.light.surfaceStrong);
  els.themeButtonSwatch.style.setProperty("--theme-dark-surface", theme.dark.surfaceStrong);
}

function updateTodayLabel() {
  if (!els.todayLabel) return;
  els.todayLabel.textContent = new Intl.DateTimeFormat(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(new Date());
}

function toKebabCase(value) {
  return value.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
}

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

function renderThemeMenu() {
  els.themeMenu.innerHTML = "";

  THEME_ORDER.forEach((themeId) => {
    const theme = THEME_PRESETS[themeId];
    const button = document.createElement("button");
    button.type = "button";
    button.className = `theme-option${themeState.id === themeId ? " active" : ""}`;
    button.setAttribute("role", "menuitemradio");
    button.setAttribute("aria-checked", themeState.id === themeId ? "true" : "false");
    button.innerHTML = `
      <span class="theme-swatch" aria-hidden="true">
        <span class="theme-swatch-light"></span>
        <span class="theme-swatch-dark"></span>
      </span>
      <span>
        <span class="theme-option-name">${theme.label}</span>
        <span class="theme-option-note">${theme.note}</span>
      </span>
    `;
    button.style.setProperty("--theme-light-surface", theme.light.surfaceStrong);
    button.style.setProperty("--theme-dark-surface", theme.dark.surfaceStrong);
    button.addEventListener("click", () => {
      themeState = { ...themeState, id: themeId };
      saveThemeState();
      applyThemeState();
      renderThemeMenu();
      renderDashboard();
      closeThemeMenu();
    });
    els.themeMenu.appendChild(button);
  });
}

function openThemeMenu() {
  themeMenuOpen = true;
  els.themeMenu.classList.remove("hidden");
  els.themeMenuBtn.setAttribute("aria-expanded", "true");
}

function closeThemeMenu() {
  themeMenuOpen = false;
  els.themeMenu.classList.add("hidden");
  els.themeMenuBtn.setAttribute("aria-expanded", "false");
}

function toggleThemeMenu() {
  if (themeMenuOpen) closeThemeMenu();
  else openThemeMenu();
}

function toggleMode() {
  themeState = { ...themeState, mode: themeState.mode === "dark" ? "light" : "dark" };
  saveThemeState();
  applyThemeState();
  renderThemeMenu();
  renderDashboard();
}

function getThemeColor(varName) {
  return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
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

const MODEL_STOP_WORDS = new Set([
  "the",
  "and",
  "for",
  "with",
  "that",
  "this",
  "was",
  "were",
  "you",
  "your",
  "but",
  "not",
  "have",
  "has",
  "had",
  "are",
  "from",
  "they",
  "them",
  "been",
  "just",
  "too",
  "very",
  "really",
  "today",
  "yesterday",
  "tomorrow",
  "about",
  "into",
  "what",
  "when",
  "where",
  "there",
  "here",
  "feel",
  "feels",
  "feeling",
  "am",
  "im",
  "i'm",
  "it's",
  "its",
  "my",
  "me",
  "it",
  "of",
  "to",
  "in",
  "on",
  "at",
  "is",
  "a",
  "an",
  "as",
  "we",
  "us",
  "our",
  "or",
]);

function cloneWeightBucket() {
  return {
    positive: 0,
    stress: 0,
    sadness: 0,
    anger: 0,
    hope: 0,
    fatigue: 0,
    loneliness: 0,
    school: 0,
    friends: 0,
    family: 0,
    sleep: 0,
    selfWorth: 0,
  };
}

function ensureWeightBucket(token) {
  if (!modelState.wordWeights[token]) {
    modelState.wordWeights[token] = cloneWeightBucket();
  }
  return modelState.wordWeights[token];
}

function normalizeWeights(weights) {
  const rounded = {};
  Object.entries(weights).forEach(([key, value]) => {
    rounded[key] = Number(value.toFixed(3));
  });
  return rounded;
}

function getMoodTrainingProfile(analysis) {
  const profiles = {
    hopeful: { positive: 1, hope: 0.8 },
    balanced: { positive: 0.6, hope: 0.4 },
    mixed: { positive: 0.25, stress: 0.2, sadness: 0.2 },
    stressed: { stress: 1, fatigue: 0.55, loneliness: 0.4 },
    sad: { sadness: 1, loneliness: 0.45, fatigue: 0.35 },
    frustrated: { anger: 1, stress: 0.45 },
    heavy: { sadness: 0.8, fatigue: 0.6, loneliness: 0.35 },
  };

  const emotionProfile = profiles[analysis.mood] || profiles.mixed;
  return {
    ...emotionProfile,
    [analysis.topEmotion]: Math.max(emotionProfile[analysis.topEmotion] || 0, 0.7),
  };
}

function getThemeTrainingProfile(theme) {
  const profiles = {
    school: { school: 1 },
    friends: { friends: 1 },
    family: { family: 1 },
    sleep: { sleep: 1 },
    selfWorth: { selfWorth: 1 },
  };

  return profiles[theme] || {};
}

function getLearnedSignals(tokens) {
  const emotionalTotals = cloneWeightBucket();
  const themeTotals = cloneWeightBucket();

  tokens.forEach((token) => {
    const learned = modelState.wordWeights[token];
    if (!learned) return;

    Object.entries(learned).forEach(([key, value]) => {
      if (Object.hasOwn(emotionalTotals, key)) emotionalTotals[key] += value;
      if (Object.hasOwn(themeTotals, key)) themeTotals[key] += value;
    });
  });

  return { emotionalTotals, themeTotals };
}

function trainLocalModel(text, analysis) {
  const tokens = [...new Set(tokenize(text).filter((token) => token.length > 2 && !MODEL_STOP_WORDS.has(token)))];
  const emotionProfile = getMoodTrainingProfile(analysis);
  const themeProfile = getThemeTrainingProfile(analysis.topTheme);
  const learningRate = Math.min(0.45, 0.1 + analysis.intensity * 0.2);

  tokens.forEach((token) => {
    const bucket = ensureWeightBucket(token);
    Object.entries(emotionProfile).forEach(([key, value]) => {
      if (Object.hasOwn(bucket, key)) bucket[key] += value * learningRate;
    });
    Object.entries(themeProfile).forEach(([key, value]) => {
      if (Object.hasOwn(bucket, key)) bucket[key] += value * learningRate;
    });
    modelState.wordWeights[token] = normalizeWeights(bucket);
  });

  modelState.entriesTrained += 1;
  saveModelState();
}

function scoreEmotion(text) {
  const tokens = tokenize(text);
  const normalized = ` ${tokens.join(" ")} `;
  const learned = getLearnedSignals(tokens);
  const counts = {
    positive: countMatches(text, EMOTION_WORDS.positive),
    stress: countMatches(text, EMOTION_WORDS.stress),
    sadness: countMatches(text, EMOTION_WORDS.sadness),
    anger: countMatches(text, EMOTION_WORDS.anger),
    hope: countMatches(text, EMOTION_WORDS.hope),
    fatigue: countMatches(text, EMOTION_WORDS.fatigue),
    loneliness: countMatches(text, EMOTION_WORDS.loneliness),
  };

  Object.entries(learned.emotionalTotals).forEach(([key, value]) => {
    if (Object.hasOwn(counts, key)) counts[key] += value * 0.35;
  });

  const intensifiers = countMatches(text, ["very", "so", "really", "extremely", "always", "never", "too", "super", "totally"]);
  const punctuationBoost = (text.match(/[!?]/g) || []).length * 0.2;

  const themeCounts = Object.fromEntries(
    Object.entries(THEME_WORDS).map(([theme, words]) => [theme, countMatches(text, words)])
  );

  Object.entries(learned.themeTotals).forEach(([key, value]) => {
    if (Object.hasOwn(themeCounts, key)) themeCounts[key] += value * 0.35;
  });

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
  trainLocalModel(text, analysis);
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
  const query = els.noteSearch?.value.trim().toLowerCase() || "";
  const filteredEntries = query
    ? entries.filter((item) => item.text.toLowerCase().includes(query) || item.analysis.mood.toLowerCase().includes(query))
    : entries;

  if (!filteredEntries.length) {
    const empty = document.createElement("p");
    empty.className = "microcopy";
    empty.textContent = query
      ? "No entries match this search."
      : "Your saved entries will appear here after the first analysis.";
    els.entryList.appendChild(empty);
    return;
  }

  filteredEntries.slice(0, 6).forEach((item) => {
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
  ctx.fillStyle = getThemeColor("--surface-soft") || "rgba(255,255,255,0.02)";
  roundRect(ctx, 0, 0, width, height, 16, true, false);

  if (!series.length) {
    ctx.fillStyle = getThemeColor("--muted") || "rgba(233, 240, 255, 0.65)";
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

  ctx.strokeStyle = getThemeColor("--panel-border") || "rgba(255,255,255,0.08)";
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

  ctx.fillStyle = getThemeColor("--muted") || "rgba(233, 240, 255, 0.7)";
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

  const lineColor = getThemeColor("--accent") || "#74d3ff";
  const pointColor = getThemeColor("--accent-2") || "#9dffca";

  drawChart(els.trendChart, scores, labels, {
    line: lineColor,
    point: pointColor,
  });

  drawChart(els.emotionChart, emotionSeries, ["Pos", "Stress", "Sad", "Anger", "Hope"], {
    line: pointColor,
    point: lineColor,
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

  renderModelStatus();
  renderThemeList();
  renderEntries();
  renderDashboard();
  updateWordCount();
}

function renderModelStatus() {
  const trainedCount = modelState.entriesTrained || 0;
  if (els.modelEntryCount) {
    els.modelEntryCount.textContent = trainedCount;
  }
  if (els.modelLearnedText) {
    els.modelLearnedText.textContent = trainedCount
      ? `This local model has learned from ${trainedCount} saved journal entries and adjusts its word weights over time.`
      : "The analyzer learns from saved entries in this browser.";
  }
}

function updateWordCount() {
  if (!els.wordCountChip || !els.entry) return;
  const count = tokenize(els.entry.value.trim()).length;
  els.wordCountChip.textContent = `${count} word${count === 1 ? "" : "s"}`;
}

function insertSampleText() {
  els.entry.value = `Today school felt like a lot. I had too much homework, my brain felt tired, and I kept thinking about the exam. I am a little stressed, but I still want to do better tomorrow. Maybe if I sleep early and make a smaller plan, things will feel easier.`;
  updateWordCount();
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

els.entry.addEventListener("input", updateWordCount);
els.noteSearch?.addEventListener("input", renderEntries);
els.sampleBtn.addEventListener("click", insertSampleText);
els.loadDemoBtn.addEventListener("click", () => {
  insertSampleText();
  analyzeAndSave(els.entry.value.trim());
  els.entry.value = "";
  updateWordCount();
});

els.clearAllBtn.addEventListener("click", () => {
  const ok = confirm("Clear all saved entries from this browser?");
  if (!ok) return;
  entries = [];
  localStorage.removeItem(STORAGE_KEY);
  modelState = {
    version: 1,
    entriesTrained: 0,
    wordWeights: {},
  };
  saveModelState();
  renderApp();
});

els.modeToggleBtn.addEventListener("click", toggleMode);
els.themeMenuBtn.addEventListener("click", toggleThemeMenu);
document.addEventListener("click", (event) => {
  if (!themeMenuOpen) return;
  const target = event.target;
  if (target instanceof Element && target.closest(".theme-picker")) return;
  closeThemeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeThemeMenu();
});

window.addEventListener("resize", () => renderDashboard());
window.addEventListener("DOMContentLoaded", () => renderApp());

applyThemeState();
updateTodayLabel();
renderThemeMenu();
renderApp();
updateWordCount();
