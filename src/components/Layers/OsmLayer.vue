<template>
  <vl-layer-tile :visible="getOsmLayerVisibility" :z-index="zIndex">
    <vl-source-osm></vl-source-osm>
  </vl-layer-tile>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "OsmLayer",
  props: {
    zIndex: Number
  },
  computed: {
    ...mapGetters(["getOsmLayerVisibility"])
  }
};
</script>
