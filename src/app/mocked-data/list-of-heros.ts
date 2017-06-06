export interface Hero {
    name: string,
    position: string,
    img: string
}


export class ListOfheros {

    private arrayOfHero = [
        "Genji",
        "McCree",
        "Pharah",
        "Reaper",
        "Solder: 76",
        "Tracer",
        "Bastion",
        "Hanzo",
        "Junkrat",
        "Mei",
        "Widowmaker",
        "Reinhardt",
        "Roadhog",
        "Winston",
        "Zarya",
        "Ana",
        "Mercy",
        "Symmetra",
        "Zenyatta"
    ];

    private herosData = {
        Genji: {
            name: 'Genji',
            position: 'offense',
            img: `https://blzgdapipro-a.akamaihd.net/game/heroes/0x02E0000000000029.png`

        },

        McCree: {
            name: `McCree`,
            position: 'offense',
            img: `https://blzgdapipro-a.akamaihd.net/game/heroes/0x02E0000000000042.png`
        }
        ,
        Pharah: {
            name: `Pharah`,
            position: 'offense',
            img: `https://blzgdapipro-a.akamaihd.net/game/heroes/0x02E0000000000008.png`
        },

        Reaper: {
            name: `Reaper`,
            position: 'offense',
            img: `https://blzgdapipro-a.akamaihd.net/game/heroes/0x02E0000000000002.png`
        },

        Solder: {
            name: 'Soldier: 76',
            position: 'offense',
            img: `https://blzgdapipro-a.akamaihd.net/game/heroes/0x02E000000000006E.png`
        },

        Tracer: {
            name: `Tracer`,
            position: 'offense',
            img: `https://blzgdapipro-a.akamaihd.net/game/heroes/0x02E0000000000003.png`
        },
        Bastion: {
            name: `Bastion`,
            position: 'defense',
            img: `https://blzgdapipro-a.akamaihd.net/game/heroes/0x02E0000000000015.png`
        },
        Hanzo: {
            name: `Hanzo`,
            position: 'defense',
            img: `https://blzgdapipro-a.akamaihd.net/game/heroes/0x02E0000000000005.png`
        },
        Junkrat: {
            name: `Junkrat`,
            position: 'defense',
            img: `https://blzgdapipro-a.akamaihd.net/game/heroes/0x02E0000000000065.png`
        },
        Mei: {
            name: `Mei`,
            position: 'defense',
            img: `https://blzgdapipro-a.akamaihd.net/game/heroes/0x02E00000000000DD.png`
        },

        Torbjorn: {
            name: 'Torbjörn',
            position: 'defense',
            img: `https://blzgdapipro-a.akamaihd.net/game/heroes/0x02E0000000000006.png`
        },

        Widowmaker: {
            name: `Widomaker`,
            position: 'defense',
            img: `https://blzgdapipro-a.akamaihd.net/game/heroes/0x02E000000000000A.png`
        },

        Dva: {
            name: 'D.Va',
            position: 'tank',
            img: `https://blzgdapipro-a.akamaihd.net/game/heroes/0x02E000000000007A.png`
        },

        Reinhardt: {
            name: `Reinhardt`,
            position: 'tank',
            img: `https://blzgdapipro-a.akamaihd.net/game/heroes/0x02E0000000000007.png`
        },

        Roadhog: {
            name: `Roadhog`,
            position: 'tank',
            img: `https://blzgdapipro-a.akamaihd.net/game/heroes/0x02E0000000000040.png`
        },

        Winston: {
            name: `Winston`,
            position: 'tank',
            img: `https://blzgdapipro-a.akamaihd.net/game/heroes/0x02E0000000000009.png`
        },

        Zarya: {
            name: `Zarya`,
            position: 'tank',
            img: `https://blzgdapipro-a.akamaihd.net/game/heroes/0x02E0000000000068.png`
        },

        Ana: {
            name: `Ana`,
            position: 'support',
            img: `https://blzgdapipro-a.akamaihd.net/game/heroes/0x02E000000000013B.png`
        },

        Lucio: {
            name: 'Lúcio',
            position: 'support',
            img: `https://blzgdapipro-a.akamaihd.net/game/heroes/0x02E0000000000079.png`
        },

        Mercy: {
            name: `Mercy`,
            position: 'support',
            img: `https://blzgdapipro-a.akamaihd.net/game/heroes/0x02E0000000000004.png`
        },
        Symmetra: {
            name: `Symmetra`,
            position: 'support',
            img: `https://blzgdapipro-a.akamaihd.net/game/heroes/0x02E0000000000016.png`
        },
        Zenyatta: {
            name: `Zenyatta`,
            position: 'support',
            img: `https://blzgdapipro-a.akamaihd.net/game/heroes/0x02E0000000000020.png`
        }

    };

    public getheros () {
        return this.herosData;
    }


}