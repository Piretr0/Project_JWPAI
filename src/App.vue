<template>
  <div style="position: relative; width: 100vw; height: 100vh; z-index: 100;">
    <vl-map
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      class="map"
      :logo="false"
    >
      <vl-view
        ref="mapView"
        :zoom.sync="zoom"
        :center.sync="center"
        :rotation.sync="rotation"
        :minZoom="2"
        :maxZoom="15"
      >
        <osm-layer :zIndex="0" />
        <bing-layer :zIndex="1" />
        <draw-layer :zIndex="2" sourceName="drawInteractionSource" />

        <draw-interaction source="drawInteractionSource" />

        <!-- <vl-interaction-draw
          source="features"
          v-for="(type, key) in drawTypes"
          :key="key"
          type="type"
        >
          <vl-style-box>
            <vl-style-stroke color="blue"></vl-style-stroke>
            <vl-style-fill color="rgba(255,255,255,0.5)"></vl-style-fill>
          </vl-style-box>
        </vl-interaction-draw>-->
      </vl-view>
    </vl-map>

    <map-navigation
      @scaleUp="handleScaleUp"
      @scaleDown="handleScaleDown"
      @toggleLayersManager="handleToggleLayersManager"
    />
    <layers-manager
      v-model="layersManagerVisible"
      @toggleLayersManager="handleToggleLayersManager"
    />
  </div>
</template>

<script>
import { Map } from "vuelayers";

import LayersManager from "./components/LayersManager";
import MapNavigation from "./components/MapNavigation";

import DrawInteraction from "./components/DrawInteraction";

import BingLayer from "./components/Layers/BingLayer";
import DrawLayer from "./components/Layers/DrawLayer";
import OsmLayer from "./components/Layers/OsmLayer";

export default {
  name: "App",
  components: {
    BingLayer,
    DrawInteraction,
    DrawLayer,
    LayersManager,
    MapNavigation,
    OsmLayer
  },
  data: () => ({
    zoom: 2,
    center: [0, 0],
    rotation: 0,
    features: [],
    drawTypes: ["Circle", "LineString", "Point", "Polygon"],
    layersManagerVisible: false
  }),
  methods: {
    handleScaleUp() {
      this.$refs.mapView.animate({
        zoom: this.zoom + 1,
        duration: 300
      });
    },
    handleScaleDown() {
      this.$refs.mapView.animate({
        zoom: this.zoom - 1,
        duration: 300
      });
    },
    handleToggleLayersManager() {
      this.layersManagerVisible = !this.layersManagerVisible;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

.ol-overlaycontainer-stopevent {
  display: none;
}
</style>

<style scoped>
.map {
  width: 100vw;
  height: 100vh;
}
</style>
