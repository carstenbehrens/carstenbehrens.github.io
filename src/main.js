// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import VueFuse from "vue-fuse";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.use(VueFuse);

  head.meta.push({
    name: "keywords",
    content: "Vue,React,JavaScript,TypeScript,Vue.js,VueJS",
  });

  head.meta.push({
    name: "description",
    content: "Carsten Behrens Blog",
  });

  head.meta.push({
    name: "author",
    content: "Carsten Behrens",
  });

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Nunito+Sans:400,700",
  });

  head.script.push({
    src: 'https://plausible.io/js/script.js',
    defer: true,
    "data-domain": "carstenbehrens.com",
  })
}
