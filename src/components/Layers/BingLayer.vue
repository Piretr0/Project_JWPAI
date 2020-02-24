<template>
  <vl-layer-tile :visible="getBingLayerVisibility" :z-index="zIndex">
    <vl-source-bingmaps
      api-key="ArbsA9NX-AZmebC6VyXAnDqjXk6mo2wGCmeYM8EwyDaxKfQhUYyk0jtx6hX5fpMn"
      imagery-set="AerialWithLabels"
    ></vl-source-bingmaps>
  </vl-layer-tile>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BingLayer",
  props: {
    zIndex: Number
  },
  computed: {
    ...mapGetters(["getBingLayerVisibility"])
  }
};
</script>
