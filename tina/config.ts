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
      {
        name: 'publication',
        label: 'Publications',
        path: 'src/content/publications',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Title', required: true },
          { type: 'string', name: 'publisher', label: 'Publisher', required: true },
          { type: 'number', name: 'year', label: 'Year', required: true },
          { type: 'string', name: 'link', label: 'Link (poem slug or URL)' },
          { type: 'number', name: 'order', label: 'Sort Order' },
        ],
      },
      {
        name: 'press',
        label: 'Press & Recognitions',
        path: 'src/content/press',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Title', required: true },
          { type: 'number', name: 'year', label: 'Year', required: true },
          { type: 'string', name: 'link', label: 'External URL' },
          { type: 'number', name: 'order', label: 'Sort Order' },
        ],
      },
      {
        name: 'book',
        label: 'Books',
        path: 'src/content/books',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Title', required: true },
          { type: 'image', name: 'cover', label: 'Cover Image', required: true },
          { type: 'string', name: 'coverAlt', label: 'Cover Alt Text', required: true },
          {
            type: 'object',
            name: 'quotes',
            label: 'Quotes',
            list: true,
            fields: [
              { type: 'string', name: 'text', label: 'Quote Text', required: true, ui: { component: 'textarea' } },
              { type: 'string', name: 'attribution', label: 'Attribution', required: true },
            ],
          },
          { type: 'number', name: 'order', label: 'Sort Order' },
        ],
      },
      {
        name: 'featured',
        label: 'Featured',
        path: 'src/content/featured',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Title', required: true },
          { type: 'string', name: 'subtitle', label: 'Subtitle', required: true },
          { type: 'string', name: 'description', label: 'Description', required: true, ui: { component: 'textarea' } },
          { type: 'image', name: 'image', label: 'Banner Image', required: true },
          { type: 'string', name: 'imageAlt', label: 'Image Alt Text', required: true },
          { type: 'string', name: 'link', label: 'Link URL' },
          { type: 'string', name: 'linkText', label: 'Link Text' },
          { type: 'boolean', name: 'active', label: 'Active' },
        ],
      },
    ],
  },
});
