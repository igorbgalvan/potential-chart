<template>
  <div
    @click="open"
    class="absolute border border-0 w-16 h-16 cursor-pointer bg-red-500"
    :style="{ top: entry.y + 'px', left: entry.x + 'px' }"
  ></div>
</template>

<style scoped>
</style>

<script>
export default {
  name: "PotentialChartEntry",
  props: {
    entry: {
      required: true,
    },
  },
  data() {
    return {};
  },

  methods: {
    open(e) {
      console.log("oppened", this.$el, e);
      window.ha = this.$el;
      window.document.(`<div class="w-20 h-20 bg-green-500 absolute"></div>`);
    }
  }
};
</script>




