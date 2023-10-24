---
layout: home

# Hero section
hero:
  name: Sublime Text
  text: Community-driven Documentation
  image:
    src: /logo.svg
    alt: Sublime Community Documentation Logo
  tagline: Documenting the Sublime Text editor and accompanying its official documentation.
  actions:
    - theme: brand
      text: Guide
      link: /guide/
    - theme: alt
      text: Official Documentation
      link: https://sublimetext.com/docs/

# Features section
features:
  - icon: ⚡️
    title: The Guide
    link: /guide/
    details: Includes basic information on Sublime Text covers its usag and how it can be customized.
  - icon: 🎉
    title: The Reference
    link: /reference/
    details: Find details on structuring custom key bindings to disabling menu items for your plugin.
  - icon: 📕
    title: The Glossary
    link: /glossary
    details: Quickly understand terms used throughout the documentation with this glossary.

# Meta property
head:
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: Adocs
  - - meta
    - property: og:image
      content: https://user-images.githubusercontent.com/62628408/200117602-4b274d14-b1b2-4f61-8dcd-9f9482c677a0.png
  - - meta
    - property: og:url
      content: https://vitejs.dev/blog/announcing-vite3
  - - meta
    - name: title
      content: Adocs
  - - meta
    - name: twitter:card
      content: https://user-images.githubusercontent.com/62628408/200117602-4b274d14-b1b2-4f61-8dcd-9f9482c677a0.png
  - - link
    - rel: icon
      type: image/svg
      href: logo.svg
---

<!-- Custom home layout -->
<div class="custom-layout">
  <Contributors user="sublimetext-io" repo="docs.sublimetext.io" ></Contributors>
</div>

