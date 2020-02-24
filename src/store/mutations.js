export default {
  SET_BING_LAYER_VISIBILITY: ({ layersVisibility }, visibility) => {
    layersVisibility.bing = visibility;
  },
  SET_DRAW_LAYER_VISIBILITY: ({ layersVisibility }, visibility) => {
    layersVisibility.draw = visibility;
  },
  SET_OSM_LAYER_VISIBILITY: ({ layersVisibility }, visibility) => {
    layersVisibility.osm = visibility;
  },
  SET_DRAWN_FEATURES: (store, features) => {
    store.drawnFeatures = features;
  },
  SET_BRUSH: (store, brush) => {
    store.brush = brush;
  },
};
