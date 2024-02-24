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
            { text: "Guide", link: "/installation" },
            { text: "Configuration", link: "/configuration" },
        ],
        sidebar: [
            {
                text: "Installation",
                items: [
                    {
                        // TODO: "Binaries" shouldn't be a section
                        text: "Binaries",
                        link: "/installation#binaries",
                    },
                    {
                        text: "Windows",
                        link: "/installation#windows",
                        collapsed: true,
                        items: [
                            { text: "Scoop", link: "/installation#windows-scoop" },
                            { text: "Chocolatey", link: "/installation#windows-chocolatey" },
                            { text: "Windows Source", link: "/installation#windows-source" },
                        ],
                    },
                    {
                        text: "MacOS",
                        link: "/installation#macos",
                        collapsed: true,
                        items: [
                            { text: "Homebrew", link: "/installation#macos-homebrew" },
                            { text: "MacOS Source", link: "/installation#macos-source" },
                        ],
                    },
                    {
                        text: "Linux",
                        link: "/installation#linux",
                        collapsed: true,
                        items: [
                            { text: "Arch Linux", link: "/installation#arch-linux" },
                            { text: "Nix or NixOS", link: "/installation#nix" },
                            { text: "Snap", link: "/installation#snap" },
                            { text: "Linux Source", link: "/installation#linux-source" },
                        ],
                    },
                ],
            },
            // TODO: this...
            {
                text: "Configuration",
                items: [
                    {
                        text: "",
                    },
                ],
            },
            // TODO: ...or this? (or both?)
            {
                text: "Reference",
                items: [
                    // TODO: alts: runtime configuration, global vim settings
                    {
                        text: "Global Variables",
                        link: "/x",
                    },
                    // TODO: alts: launchtime options, cli flags, static configuration
                    {
                        text: "CLI Options",
                        link: "/x",
                    },

                    {
                        text: "Commands",
                        link: "/commands",
                    },
                ],
            },
            {
                text: "Other",
                items: [
                    {
                        text: "Frequently Asked Questions",
                        link: "/faq",
                    },
                    {
                        text: "Troubleshooting",
                        link: "/troubleshooting",
                    },
                    {
                        text: "Maintainer Cookbook",
                        link: "/maintainer-cookbook",
                    },
                ],
            },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/neovide/neovide" },
            { icon: "discord", link: "https://discord.gg/SjFpZdQys6" },
            // TODO: replace with matrix icon
            { icon: "slack", link: "https://matrix.to/#/#neovide_community:gitter.im" },
        ],
    },
});
