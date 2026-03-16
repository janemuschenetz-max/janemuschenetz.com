import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const poems = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/poems' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    type: z.enum(['image', 'image-pair', 'text']),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    image2: z.string().optional(),
    image2Alt: z.string().optional(),
    illustration: z.string().optional(),
    illustrationAlt: z.string().optional(),
    epigraphText: z.string().optional(),
    epigraphAttribution: z.string().optional(),
    poemText: z.string().optional(),
    srOnly: z.string().optional(),
    about: z.string(),
    footnotes: z.array(z.string()),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    publisher: z.string(),
    year: z.number(),
    link: z.string().optional(),
    order: z.number().optional(),
  }),
});

const press = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/press' }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    link: z.string().optional(),
    order: z.number().optional(),
  }),
});

const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  schema: z.object({
    title: z.string(),
    cover: z.string(),
    coverAlt: z.string(),
    link: z.string().optional(),
    quotes: z.array(z.object({
      text: z.string(),
      attribution: z.string(),
    })).optional(),
    order: z.number().optional(),
  }),
});

const featured = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/featured' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    link: z.string().optional(),
    linkText: z.string().optional(),
    active: z.boolean().optional(),
  }),
});

export const collections = { poems, publications, press, books, featured };
