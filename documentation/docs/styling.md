---
id: styling
title: Styling
sidebar_label: Styling
---


Sass/Scss is used to style components. It's recommended to keep style files in the same directory with component's files and import it right from there when necessary.

Example:


 ```sh
├── src
│   ├── Components
│   │   ├── HelloWorld
│   │   │   ├── index.spec.js
│   │   │   ├── index.svelte
│   │   │   └── style.scss
│   │   └── index.ts
```


You need to import style.scss into HelloWorld/index.svelte
```
<style src="./style.scss">

</style>
```
