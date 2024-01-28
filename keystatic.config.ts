import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },


    collections: {
        players: collection({
            label: 'Players',
            slugField: 'name',
            path: 'src/content/players/*',
            format: { contentField: 'content' },
            schema: {
                name: fields.text({label: 'Name'}),
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
        
        },
});