---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
    # the hyphens in the text below are non-breaking hyphens (&#8209;)
    text: Simple, No‑Nonsense, Cross‑Platform GUI for Neovim
    actions:
        - theme: brand
          text: Installation
          link: /guide/installation
        - theme: alt
          text: Configuration
          link: /configuration

# TODO: create a custom features overview to really sell neovide ;)
features:
    - icon:
          src: /icons/rustacean.svg
          height: 48px
      title: Written in Rust
      details: By the Way
    - icon: =>
      title: Ligatures
      details: Supports ligatures and font shaping.
    - icon: I
      title: Animated Cursor
      details: Cursor animates into position with a smear effect to improve tracking of cursor position.
    - title: Smooth Scrolling
      details: Scroll operations on buffers in neovim will be animated smoothly pixel wise rather than line by line at a time.
    - title: Animated Windows
      details: Windows animate into position when they are moved making it easier to see how layout changes happen.
    - title: Blurred Floating Windows
      details: Improved visual separation between foreground and background from built-in window transparency.
---
