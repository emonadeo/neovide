import { defineConfigWithTheme } from "vitepress";

import type { Config } from "./theme";

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<Config>({
    title: "Neovide",
    description: "No Nonsense Neovim Client in Rust",
    head: [
        ["link", { rel: "icon", href: "/favicon.ico", sizes: "32x32" }],
        ["link", { rel: "icon", href: "/icon.svg", type: "image/svg+xml" }],
    ],
    themeConfig: {
        // TODO: support light mode
        logo: "/icon.svg",
        // TODO: this would be nicer to define in `index.md` frontmatter
        hero: {
            image: "/hero.png",
        },
        nav: [
            { text: "Guide", link: "/guide" },
            { text: "Configuration", link: "/configuration" },
        ],
        sidebar: [],
        socialLinks: [
            { icon: "github", link: "https://github.com/neovide/neovide" },
            { icon: "discord", link: "https://discord.gg/SjFpZdQys6" },
            // TODO: replace with matrix icon
            { icon: "slack", link: "https://matrix.to/#/#neovide_community:gitter.im" },
        ],
    },
});
