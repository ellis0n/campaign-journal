import { config, fields, collection } from '@keystatic/core';


//TODO: conditional for local vs cloud:
// see here: 
// https://github.com/simonswiss/better-dev/blob/main/keystatic.config.tsx

export default config({
    storage: {
        kind: 'cloud',
    },
    cloud: {
        project: 'ww-dnd/campaign-journal',
    },

    ui: {
        brand: {name: 'd&d campaign journal'}
    },


    collections: {

        // Players collection
        players: collection({
            label: 'Players',
            slugField: 'title',
            path: 'src/content/players/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' , description: "Set to characters primary name. This will define the slug field, which is used to set the URL for your characters page. You probably shouldn't change this.", validation: { length: {min: 2, max: 25}, }, defaultValue: "Your Characters Name" }}), // 
                name: fields.text({ label: 'Name' , description: "The characters full name."}),
                classN: fields.text({label: 'Class'}),
                race: fields.text({label: 'Race'}),
                background: fields.text({ label: 'Background' }),
                alignment: fields.text({ label: 'Alignment' }),
                player: fields.text({ label: 'Player' }),
                hitDice: fields.text({ label: 'Hit Dice' }),
                level: fields.number({ label: 'Level' }),
                xp: fields.number({ label: 'XP' }),
                ac: fields.number({ label: 'AC' }),
                hp: fields.number({ label: 'HP' }),
                speed: fields.number({ label: 'Speed' }),
                str: fields.number({ label: 'STR' }),
                dex: fields.number({ label: 'DEX' }),
                con: fields.number({ label: 'CON' }),
                int: fields.number({ label: 'INT' }),
                wis: fields.number({ label: 'WIS' }),
                cha: fields.number({ label: 'CHA' }),
                prof: fields.number({ label: 'Proficiency' }),
                content: fields.document({
                    label: 'Content',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: true,
                }),
            },  
        }),

        // Readings collection
        readings: collection({
            label: 'Readings',
            slugField: 'title',
            path: 'src/content/readings/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title', description: "Readings Title", validation: { length: { min: 2, max: 40 }, }, defaultValue: "Readings Title" } }),
                draft: fields.checkbox({ label: 'Draft' }),
                
                content: fields.document({
                    label: 'Content',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: true,
                }),
            },  
        }),
    },
});