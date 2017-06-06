export class MockedHeroStats {
    getMocked_herostats() {
        return this.herostats;
    }

    public getRequestUrl() {
        return this.requestUrl;
    }

    private tag;
    private region;
    private platform;
    private mode;
    private requestUrl = `https://api.lootbox.eu//${this.platform}/${this.region}/${this.tag}/${this.mode}/heroes`;

    private herostats = [{
        "name": "Roadhog",
        "playtime": "4 hours",
        "image": "https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000040.png",
        "percentage": 1
    }, {
        "name": "Zarya",
        "playtime": "4 hours",
        "image": "https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000068.png",
        "percentage": 0.9303670586968737
    }, {
        "name": "Tracer",
        "playtime": "3 hours",
        "image": "https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000003.png",
        "percentage": 0.7283795004270989
    }, {
        "name": "Symmetra",
        "playtime": "2 hours",
        "image": "https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000016.png",
        "percentage": 0.6149063041966696
    }, {
        "name": "L&#xFA;cio",
        "playtime": "2 hours",
        "image": "https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000079.png",
        "percentage": 0.49799070076406016
    }, {
        "name": "Mercy",
        "playtime": "1 hour",
        "image": "https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000004.png",
        "percentage": 0.25344940044581143
    }, {
        "name": "McCree",
        "playtime": "31 minutes",
        "image": "https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000042.png",
        "percentage": 0.11954368241860905
    }, {
        "name": "Soldier: 76",
        "playtime": "28 minutes",
        "image": "https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E000000000006E.png",
        "percentage": 0.1079995023309292
    }, {
        "name": "Reinhardt",
        "playtime": "21 minutes",
        "image": "https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000007.png",
        "percentage": 0.08233457334629143
    }, {
        "name": "Bastion",
        "playtime": "9 minutes",
        "image": "https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000015.png",
        "percentage": 0.036701756690036266
    }, {
        "name": "Pharah",
        "playtime": "7 minutes",
        "image": "https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000008.png",
        "percentage": 0.030652552085518914
    }, {
        "name": "Mei",
        "playtime": "4 minutes",
        "image": "https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E00000000000DD.png",
        "percentage": 0.016070839829145114
    }, {
        "name": "Widowmaker",
        "playtime": "3 minutes",
        "image": "https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E000000000000A.png",
        "percentage": 0.012458758757639058
    }, {
        "name": "Torbj&#xF6;rn",
        "playtime": "1 minute",
        "image": "https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000006.png",
        "percentage": 0.006325651556267065
    }, {
        "name": "Reaper",
        "playtime": "--",
        "image": "https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000002.png",
        "percentage": 0
    }, {
        "name": "Hanzo",
        "playtime": "--",
        "image": "https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000005.png",
        "percentage": 0
    }, {
        "name": "Winston",
        "playtime": "--",
        "image": "https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000009.png",
        "percentage": 0
    }, {
        "name": "Zenyatta",
        "playtime": "--",
        "image": "https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000020.png",
        "percentage": 0
    }, {
        "name": "Genji",
        "playtime": "--",
        "image": "https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000029.png",
        "percentage": 0
    }, {
        "name": "Junkrat",
        "playtime": "--",
        "image": "https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000065.png",
        "percentage": 0
    }, {
        "name": "D.Va",
        "playtime": "--",
        "image": "https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E000000000007A.png",
        "percentage": 0
    }, {
        "name": "Ana",
        "playtime": "--",
        "image": "https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E000000000013B.png",
        "percentage": 0
    }]
}


