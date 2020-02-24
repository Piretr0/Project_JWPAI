<template>
  <vl-interaction-draw :type="getBrush || 'Point'" :source="source" :active="!!getBrush" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "DrawInteraction",
  props: {
    source: String
  },
  computed: {
    ...mapGetters(["getBrush", "getDrawnFeatures"]),
    features: {
      get() {
        return this.getDrawnFeatures;
      },
      set(val) {
        this.setDrawnFeatures(val);
      }
    }
  },
  methods: {
    ...mapActions(["setDrawnFetaures"])
  }
};
</script>