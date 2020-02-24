<template>
  <vl-layer-vector :visible="getDrawLayerVisibility" :z-index="zIndex">
    <vl-source-vector :features.sync="features" :ident="sourceName"></vl-source-vector>
  </vl-layer-vector>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DrawLayer",
  props: {
    sourceName: String,
    value: Array,
    visible: Boolean,
    zIndex: Number
  },
  computed: {
    ...mapGetters(["getDrawLayerVisibility"]),
    features: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("value", val);
      }
    }
  }
};
</script>
