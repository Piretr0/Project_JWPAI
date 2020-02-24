export default {
  getBingLayerVisibility: ({ layersVisibility }) => layersVisibility.bing,
  getDrawLayerVisibility: ({ layersVisibility }) => layersVisibility.draw,
  getOsmLayerVisibility: ({ layersVisibility }) => layersVisibility.osm,
  getDrawnFeatures: ({ drawnFeatures }) => drawnFeatures,
  getBrush: ({ brush }) => brush,
};
