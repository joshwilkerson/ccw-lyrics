import { defineCollection, z } from 'astro:content'

const songsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
})

export const collections = {
  songs: songsCollection,
}
