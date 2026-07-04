import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://mrolbiecki.com",
    title: "Marcin Rolbiecki",
    description: "Personal website of Marcin Rolbiecki",
    author: "Marcin Rolbiecki",
    profile: "https://mrolbiecki.com",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Europe/Warsaw",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/mrolbiecki/" },
    { name: "x", url: "https://x.com/marolbiecki/" },
    { name: "linkedin", url: "https://www.linkedin.com/in/mrolbiecki/" },
    { name: "mail", url: "mailto:rolbieckidev@gmail.com" },
  ],
  shareLinks: [],
});
