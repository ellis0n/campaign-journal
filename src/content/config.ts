import { defineCollection, z } from "astro:content"; 

const players = defineCollection({
        type: "content",
        schema: z.object({
                name: z.string(),
                classN: z.string(),
                race: z.string(),
                background: z.string(),
                alignment: z.string(),
                player: z.string(),
                hitDice: z.string(),
                level: z.number(),
                xp: z.number(),
                ac: z.number(),
                hp: z.number(),
                speed: z.number(),
                str: z.number(),
                dex: z.number(),
                con: z.number(),
                int: z.number(),
                wis: z.number(),
                cha: z.number(),
                prof: z.number(),
        }),
});

const readings = defineCollection({
        type: "content",
        schema: z.object({
                title: z.string(),
                date: z.date(),
                draft: z.boolean(),
        }),
});

export const collections = { players, readings }