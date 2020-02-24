export default {
  setBingLayerVisibility: (context, visibility) => {
    context.commit('SET_BING_LAYER_VISIBILITY', visibility);
  },
  setDrawLayerVisibility: (context, visibility) => {
    context.commit('SET_DRAW_LAYER_VISIBILITY', visibility);
  },
  setOsmLayerVisibility: (context, visibility) => {
    context.commit('SET_OSM_LAYER_VISIBILITY', visibility);
  },
  setDrawnFeatures: (context, features) => {
    context.commit('SET_DRAWN_FEATURES', features);
  },
  setBrush: (context, brush) => {
    context.commit('SET_BRUSH', brush);
  },
};
