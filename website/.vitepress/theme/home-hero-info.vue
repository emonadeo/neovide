<script setup lang="ts">
import { useData, type DefaultTheme } from 'vitepress';
import { VPImage } from 'vitepress/theme';

import type { Config } from '.';

const { theme, frontmatter } = useData<Config>()
</script>

<template>
	<div class="container">
		<div class="logo">
			<VPImage class="logo" :image="theme.logo"></VPImage>
		</div>
		<div class="text-container">
			<h1 class="text" v-if="frontmatter.hero?.text">{{ frontmatter.hero.text }}</h1>
		</div>
		<div class="image">
			<VPImage :image="theme.hero.image"></VPImage>
		</div>
	</div>
</template>

<style scoped>
.container {
	max-height: 80vh;
}

/* taken from: https://github.com/vuejs/vitepress/blob/v1.0.0-rc.44/src/client/theme-default/components/VPHero.vue */
.text {
	letter-spacing: -0.4px;
	line-height: 40px;
	font-size: 32px;
	font-weight: 800;
	white-space: pre-wrap;
	text-wrap: pretty;
}

@media (min-width: 640px) {
	.text {
		line-height: 56px;
		font-size: 48px;
	}
}

@media (min-width: 960px) {
	.text {
		line-height: 64px;
		font-size: 56px;
	}
}

@media (min-width: 1280px) {
	.container {
		display: grid;
		grid-template-columns: 256px 1fr 1fr;
		grid-template-rows: 1fr max-content;
	}

	.logo {
		grid-column: 1 / 2;
		grid-row: 1 / 2;
		align-self: end;
		width: 128px;
	}

	.text-container {
		position: relative;
		grid-column: 1 / 3;
		grid-row: 2 / 3;
		background-image: linear-gradient(to right, var(--vp-c-bg) 256px, color-mix(in lch, var(--vp-c-bg), transparent 66%) 100%);
		padding: 64px 64px 0 0;

		.text {
			z-index: 1;
			position: relative;
		}

		&::after {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			content: '';
			border-top-right-radius: 16px;
			border-top: 1px solid var(--vp-c-border);
			border-right: 1px solid var(--vp-c-border);
			backdrop-filter: blur(4px);
			mask-image: linear-gradient(to right, transparent 196px, black 320px);
		}
	}

	.image {
		grid-column: 2 / 4;
		grid-row: 1 / 3;
	}
}


.image {
	overflow: hidden;
}
</style>
