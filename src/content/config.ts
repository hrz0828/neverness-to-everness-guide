import { defineCollection, z } from "astro:content";

const characters = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    rarity: z.string(),
    element: z.string(),
    role: z.string(),
    weapon: z.string(),
    cover: z.string(),
    updatedAt: z.string()
  })
});

const guides = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updatedAt: z.string()
  })
});

const maps = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string(),
    region: z.string().optional(),
    priority: z.string().optional(),
    route: z.array(z.string()).default([]),
    checklist: z.array(z.string()).default([]),
    events: z.array(z.string()).default([]),
    warnings: z.array(z.string()).default([]),
    updatedAt: z.string()
  })
});

const updates = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string()
  })
});

export const collections = { characters, guides, maps, updates };
