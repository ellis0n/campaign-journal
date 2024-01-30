import { defineCollection, z } from "astro:content"; 

const players = defineCollection({
        type: "content",
        schema: ({ image }) =>
                z.object({
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
                        attributes: z.object({
                                "str": z.number(),
                                "dex": z.number(),
                                "con": z.number(),
                                "int": z.number(),
                                "wis": z.number(),
                                "cha": z.number(),
                        }),
                        spellbook: z.array(z.object({
                                name: z.string(),
                                level: z.number(),
                        })).optional(),
                        portrait: image(),
                })
        }
);

const readings = defineCollection({
        type: "content",
        schema: z.object({
                title: z.string(),
                draft: z.boolean(),
        }),
});

export const collections = { players, readings }