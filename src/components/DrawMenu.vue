<template>
  <q-btn color="white" :icon="getBrushIcon" round text-color="indigo">
    <q-menu auto-close>
      <q-list style="min-width: 100px">
        <q-item clickable v-for="(value, key) in brushes" :key="key" @click="setBrush(value.brush)">
          <q-icon v-if="value.brush === getBrush" name="check" />
          <q-item-section>{{value.label}}</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import brushes from "../utils/brushes";

export default {
  name: "DrawMenu",
  data: () => ({
    brushes: [
      { label: "Wyłącz", brush: brushes["NULL"] },
      { label: "Okrąg", brush: brushes["CIRCLE"] },
      { label: "Linia", brush: brushes["LINE_STRING"] },
      { label: "Punkt", brush: brushes["POINT"] },
      { label: "Powierzchnia", brush: brushes["POLYGON"] }
    ]
  }),
  computed: {
    ...mapGetters(["getBrush"]),
    getBrushIcon() {
      return this.getBrush ? "cancel" : "edit";
    }
  },
  methods: {
    ...mapActions(["setBrush"])
  }
};
</script>