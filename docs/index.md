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
    link: /glossary.md
    details: Quickly understand terms used throughout the documentation with this glossary.

# Meta property
head:
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: Sublime Text Community-driven Documentation
  - - link
    - rel: icon
      type: image/svg
      href: logo.svg
---

<!-- Custom home layout -->
<div class="custom-layout">
  <div class="custom-container">
    <Contributors ></Contributors>
  </div>
</div>

<style scoped>
/* horizonal padding copied from .VPFeatures's padding */
.custom-layout {
  padding: 0 24px;
}

@media (min-width: 640px) {
  .custom-layout {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .custom-layout {
    padding: 0 64px;
  }
}

.custom-container {
  max-width: 1152px;
  margin: 2rem auto 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
}
</style>
