export class MockedProfile {
    private tag;
    private region;
    private platform;

    getMocked_profile() {
        return this.mocked_profile;
    }

    private requestUrl = `https://api.lootbox.eu/${this.platform}/${this.region}/${this.tag}/profile`;

    public getRequestUrl () {
        return this.requestUrl;
    }

    private mocked_profile = {
        "data": {
            "username": "Alderan",
            "level": 59,
            "games": {
                "quick": {
                    "wins": 153,
                    "lost": 134,
                    "played": 287
                },
                "competitive": {
                    "wins": 44,
                    "lost": 38,
                    "played": 82
                }
            },
            "playtime": {
                "quick": "36 hours",
                "competitive": "17 hours"
            },
            "avatar": "https://blzgdapipro-a.akamaihd.net/game/unlocks/0x02500000000009E7.png",
            "competitive": {
                "rank": 53,
                "rank_img": "https://blzgdapipro-a.akamaihd.net/game/rank-icons/rank-6.png"
            }
        }
    }

}