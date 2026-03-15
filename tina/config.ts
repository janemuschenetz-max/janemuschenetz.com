import { defineConfig } from 'tinacms';

const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'main';

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      mediaRoot: 'images',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      {
        name: 'poem',
        label: 'Poems',
        path: 'src/content/poems',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Title', required: true },
          { type: 'string', name: 'slug', label: 'Slug', required: true },
          { type: 'string', name: 'description', label: 'Description', required: true },
          {
            type: 'string',
            name: 'type',
            label: 'Display Type',
            required: true,
            options: ['image', 'image-pair', 'text'],
          },
          { type: 'image', name: 'image', label: 'Primary Image' },
          { type: 'string', name: 'imageAlt', label: 'Primary Image Alt Text' },
          { type: 'image', name: 'image2', label: 'Second Image (for image-pair)' },
          { type: 'string', name: 'image2Alt', label: 'Second Image Alt Text' },
          { type: 'image', name: 'illustration', label: 'Illustration (for text type)' },
          { type: 'string', name: 'illustrationAlt', label: 'Illustration Alt Text' },
          { type: 'string', name: 'epigraphText', label: 'Epigraph Text' },
          { type: 'string', name: 'epigraphAttribution', label: 'Epigraph Attribution' },
          { type: 'string', name: 'poemText', label: 'Poem Text', ui: { component: 'textarea' } },
          { type: 'string', name: 'srOnly', label: 'Screen Reader Only Text', ui: { component: 'textarea' } },
          { type: 'string', name: 'about', label: 'About This Poem', required: true, ui: { component: 'textarea' } },
          {
            type: 'string',
            name: 'footnotes',
            label: 'Footnotes / Data Sources',
            list: true,
          },
        ],
      },
    ],
  },
});
