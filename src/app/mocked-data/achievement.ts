export class MockedAchievement {
    private tag;
    private region;
    private platform;
    private requestUri = `https://api.lootbox.eu/${this.platform}/${this.region}/${this.tag}/achievements`;

    private patch_note = {
        "finishedAchievements": "26/61",
        "achievements": [{
            "name": "Centenary",
            "finished": true,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000156.png"
        }, {
            "name": "Level 10",
            "finished": true,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000157.png"
        }, {
            "name": "Level 25",
            "finished": true,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000158.png"
        }, {
            "name": "Level 50",
            "finished": true,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000159.png"
        }, {
            "name": "Undying",
            "finished": true,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E6000000000015D.png"
        }, {
            "name": "Decorated",
            "finished": true,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000160.png"
        }, {
            "name": "Blackjack",
            "finished": true,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000161.png"
        }, {
            "name": "The Friend Zone",
            "finished": true,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000192.png"
        }, {
            "name": "The Path Is Closed",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E6000000000015E.png"
        }, {
            "name": "Survival Expert",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E6000000000015F.png"
        }, {
            "name": "Decked Out",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000162.png"
        }, {
            "name": "Whoa There!",
            "finished": true,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000165.png"
        }, {
            "name": "It&apos;s High Noon",
            "finished": true,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000166.png"
        }, {
            "name": "Clearing the Area",
            "finished": true,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000168.png"
        }, {
            "name": "Rocket Man",
            "finished": true,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000169.png"
        }, {
            "name": "Total Recall",
            "finished": true,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E6000000000016B.png"
        }, {
            "name": "Special Delivery",
            "finished": true,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E6000000000016C.png"
        }, {
            "name": "Die Die Die... Die",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000002.png"
        }, {
            "name": "Slice and Dice",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E6000000000015B.png"
        }, {
            "name": "Their Own Worst Enemy",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000163.png"
        }, {
            "name": "Waste Not, Want Not",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000164.png"
        }, {
            "name": "Death From Above",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000167.png"
        }, {
            "name": "Target Rich Environment",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E6000000000016A.png"
        }, {
            "name": "Ice Blocked",
            "finished": true,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000173.png"
        }, {
            "name": "Triple Threat",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E6000000000016D.png"
        }, {
            "name": "Charge!",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E6000000000016E.png"
        }, {
            "name": "Simple Geometry",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E6000000000016F.png"
        }, {
            "name": "The Dragon Is Sated",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000170.png"
        }, {
            "name": "Mine Like a Steel Trap",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000171.png"
        }, {
            "name": "Roadkill",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000172.png"
        }, {
            "name": "Cold Snap",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000174.png"
        }, {
            "name": "Raid Wipe",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000175.png"
        }, {
            "name": "Armor Up!",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000177.png"
        }, {
            "name": "Did That Sting?",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000178.png"
        }, {
            "name": "Smooth as Silk",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000179.png"
        }, {
            "name": "Giving You the Hook",
            "finished": true,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E6000000000017E.png"
        }, {
            "name": "The Power of Attraction",
            "finished": true,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000183.png"
        }, {
            "name": "Shot Down",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E6000000000017A.png"
        }, {
            "name": "Game Over",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E6000000000017B.png"
        }, {
            "name": "I Am Your Shield",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E6000000000017C.png"
        }, {
            "name": "Storm, Earth and Fire",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E6000000000017D.png"
        }, {
            "name": "Hog Wild",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E6000000000017F.png"
        }, {
            "name": "Mine Sweeper",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000180.png"
        }, {
            "name": "Anger Management",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000181.png"
        }, {
            "name": "Power Overwhelming",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000182.png"
        }, {
            "name": "Supersonic",
            "finished": true,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000185.png"
        }, {
            "name": "Group Health Plan",
            "finished": true,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000186.png"
        }, {
            "name": "The Car Wash",
            "finished": true,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000188.png"
        }, {
            "name": "Huge Success",
            "finished": true,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000189.png"
        }, {
            "name": "The Floor Is Lava",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000184.png"
        }, {
            "name": "Huge Rez",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000187.png"
        }, {
            "name": "Rapid Discord",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E6000000000018A.png"
        }, {
            "name": "The Iris Embraces You",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E6000000000018B.png"
        }, {
            "name": "Naptime",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000195.png"
        }, {
            "name": "Enabler",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000196.png"
        }, {
            "name": "Lockdown",
            "finished": true,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E6000000000018C.png"
        }, {
            "name": "Double Cap",
            "finished": true,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E6000000000018D.png"
        }, {
            "name": "Can&apos;t Touch This",
            "finished": true,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E6000000000018F.png"
        }, {
            "name": "Shutout",
            "finished": true,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000190.png"
        }, {
            "name": "World Traveler",
            "finished": true,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000191.png"
        }, {
            "name": "Escort Duty",
            "finished": false,
            "image": "https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E6000000000018E.png"
        }]
    }

    public getMockedAchievement() {
        return this.patch_note;
    }

    public getRequestUri = () => {
        if (!this.tag) {
            throw 'now userId'
        }
        if (!this.region) {
            throw 'now region'
        }
        if (!this.platform) {
            throw 'now platform'
        }

        return this.requestUri;
    }
}



