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

export const collections = { poems };
