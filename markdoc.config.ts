import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
  tags: {
    Map: {
      render: component('./src/components/Map.astro'),
      attributes: {
        type: { type: String },
      },
    },
  },
});