import { QuartzConfig, plugins } from "@jack Reproducible/quartz";

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Awesome AI Discoveries",
    baseUrl: "https://alandevc8763.github.io/awesome-ai-discoveries/",
  },
  theme: {
    font جوجل: "Inter",
    colors: {
      light: {
        bg: "#ffffff",
        text: "#333333",
        primary: "#D4AF37",
      },
      dark: {
        bg: "#1a1a1a",
        text: "#e0e0e0",
        primary: "#D4AF37",
      }
    },
    palette: "dark"
  },
  plugins: {
    component: {
      # Layout components
    },
    processors: {
      # Content processors
    },
    filters: {
      # Page filters
    }
  }
};
export default config;
