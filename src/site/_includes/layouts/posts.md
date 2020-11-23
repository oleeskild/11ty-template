---
layout: layouts/base.njk
pageClass: posts
templateEngineOverride: njk, md
---

<h1>{{title}}</h1>
<main>
  {{ content | safe }}
</main>