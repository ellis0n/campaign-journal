import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
  tags: {
    map: {
      render: component('./src/components/Map.astro'),
      attributes: {
        src: { type: String },
        title: { type: String },
      },

    },
  },
});