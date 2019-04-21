<template>
  <v-footer
    id="core-footer"
    absolute
    height="82"
  >
    <v-spacer/>
    <span class="font-weight-light copyright">
      &copy;
      {{ (new Date()).getFullYear() }}
      <a
        href="http://weilogg.com/"
        target="_blank">WEILOGG</a>, Learning is the
      <v-icon
        color="tertiary"
        size="17">mdi-lightbulb-on-outline</v-icon>
      in the dark
    </span>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name: 'Home', Link: '/dashboard' },
      { name: 'Creative Tim', Link: 'https://www.creative-tim.com' },
      { name: 'About Us', Link: 'https://creative-tim.com/presentation' },
      { name: 'Blog', Link: 'https://blog.creative-tim.com' }
    ]
  })
}
</script>

<style>
#core-footer {
  z-index: 0;
}
</style>
