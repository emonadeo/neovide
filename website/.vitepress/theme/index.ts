// https://vitepress.dev/guide/custom-theme
import { h, provide, ref } from "vue";
import type { DefaultTheme, Theme } from "vitepress";
import Default from "vitepress/theme";

import HomeHeroInfo from "./home-hero-info.vue";
import "./style.css";

export type Config = DefaultTheme.Config & {
    hero: {
        image: DefaultTheme.ThemeableImage;
    };
};

export default {
    extends: Default,
    Layout: () => {
        return h(Default.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
            "home-hero-info": () => h(HomeHeroInfo),
        });
    },
    enhanceApp({ app, router, siteData }) {
        // ...
    },
} satisfies Theme;
