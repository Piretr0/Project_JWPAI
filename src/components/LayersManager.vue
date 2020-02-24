<template>
  <q-dialog v-model="vmodel">
    <q-card>
      <q-card-section>
        <div class="text-h6">Widoczność warstw</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-list padding>
          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Open Street Map</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle color="blue" v-model="osmVisibility" />
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Bing</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle color="blue" v-model="bingVisibility" />
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Rysunki</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle color="blue" v-model="drawVisibility" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" @click="$emit('toggleLayersManager')" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "LayersManager",
  props: {
    value: Boolean
  },
  computed: {
    ...mapGetters([
      "getBingLayerVisibility",
      "getDrawLayerVisibility",
      "getOsmLayerVisibility"
    ]),
    vmodel: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("value", val);
      }
    },
    bingVisibility: {
      get() {
        return this.getBingLayerVisibility;
      },
      set(val) {
        this.setBingLayerVisibility(val);
      }
    },
    drawVisibility: {
      get() {
        return this.getDrawLayerVisibility;
      },
      set(val) {
        this.setDrawLayerVisibility(val);
      }
    },
    osmVisibility: {
      get() {
        return this.getOsmLayerVisibility;
      },
      set(val) {
        this.setOsmLayerVisibility(val);
      }
    }
  },
  methods: {
    ...mapActions([
      "setBingLayerVisibility",
      "setDrawLayerVisibility",
      "setOsmLayerVisibility"
    ])
  }
};
</script>
