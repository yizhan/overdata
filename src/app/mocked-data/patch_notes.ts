

export class MockedPatchNote {
    private requestUri = `https://api.lootbox.eu/patch_notes`;

    public getRequestUri () {
        return this.requestUri;
    }

    getPatchNote () {
        return this.patch_note;
    }

    private patch_note = `<h1>Overwatch Patch Notes – July 6, 2016</h1>

<p>A new patch is now live. Read below to learn about the latest changes.</p>

<p>To share your feedback, please post in the <a href="http://us.battle.net/forums/en/overwatch/22813879/" target="_blank">General Discussion</a> forum.<br />
For a list of known issues, visit our <a href="http://us.battle.net/forums/en/overwatch/22813881/" target="_blank">Bug Report </a>forum.<br />
For troubleshooting assistance, visit our <a href="http://us.battle.net/forums/en/overwatch/22813880/" target="_blank">Technical Support</a> forum.</p>

<h2>GENERAL</h2>

<p></p>

<p><strong>Competitive Play</strong></p>

<p></p>

<ul>
    <li>The duration of Sudden Death has been adjusted across all maps from 1m45s to the following values:
    <ul style="list-style-type:circle;">
        <li>Assault:
<ul>
    <li>Hanamura – 1m35s</li>
<li>Temple of Anubis – 1m30s</li>
<li>Volskaya Industries – 1m35s</li>
</ul>
</li>
<li>Escort:
<ul>
    <li>Dorado – 1m30s</li>
<li>Route 66 – 1m35s</li>
<li>Watchpoint: Gibraltar – 1m35s</li>
</ul>
</li>
<li>Hybrid:
<ul>
    <li>King’s Row – 1m30s</li>
<li>Numbani – 1m50s</li>
</ul>
</li>
<li>Note: Sudden Death duration is unchanged for Hollywood, which remains at 1m45s</li>
</ul>
</li>
</ul>

<p></p>

<p></p>

<h2>BUG FIXES</h2>

<p></p>

<p><strong>General</strong></p>

<ul>
    <li>Fixed a bug that prevented Overtime music from playing on Escort and Assault/Escort maps, if the payload was nearing the final checkpoint</li>
<li>Fixed a bug where display settings weren’t always saved after restarting the client</li>
<li>Fixed an issue that sometimes caused the in-game UI to display incorrectly at 4k resolutions</li>
<li>Fixed a bug where sometimes the wrong player level would appear in the Social menu</li>
</ul>

<p></p>

<p><strong>Maps</strong></p>

<ul>
    <li>Fixed an issue with collision not blocking line of sight on certain areas of Nepal</li>
</ul>

<p></p>

<p><strong>Heroes</strong></p>

<ul>
    <li>Fixed a bug that caused Mercy’s Caduceus Staff beam to disconnect from its target if the player a) quickly switched between healing and damage beams by holding down both mouse buttons and/or b) was facing away from the target at the time of the switch</li>
<li>Fixed even more bugs that allowed Reaper to Shadow Step to unintended locations on certain maps</li>
<li>Fixed a bug that caused Winston’s melee attack during Primal Rage to inconsistently hit targets in range</li>
<li>Fixed a bug that sometimes caused Zarya’s alternate fire to scale incorrectly with her damage boost modifier</li>
</ul>

<p></p>

<p><strong>Competitive Play</strong></p>

<ul>
    <li>Fixed a bug that caused the “Top 500” icon to incorrectly display for certain players in various places throughout the game UI</li>
<li>Fixed an issue where if you left and rejoined an in-progress Competitive Play match, the game would still track the match as a loss in your placement match history and when determining the amount of Skill Rating you receive for completing a match even if your team won
<ul style="list-style-type:circle;">
    <li>Note: You must be present for the conclusion of the match to be eligible for the win. If you leave a match and do not rejoin again before it’s over, it will count as a loss both in your placement match history and when calculating your Skill Rating adjustment.</li>
</ul>
</li>
<li>Fixed an issue where you would still receive a Competitive Play “leave” penalty even if you rejoined a match and completed it
<ul style="list-style-type:circle;">
    <li>Note: If you leave a single Competitive Play match <em>more than</em> 3 times, you will receive a Competitive Play “leave” penalty even if you complete the match.&#160;</li>
</ul>
</li>
</ul>

<p></p>`


}


/*
 {
 "patchNotes": [
 {
 "program": "OVERWATCH",
 "locale": "en_US",
 "type": "RETAIL",
 "patchVersion": "1.1.0.2b",
 "status": "LIVE",
 "detail": "<h1>Overwatch Patch Notes – July 21, 2016</h1>\r\n\r\n<p>A new patch is now live. Read below to learn about the latest changes.</p>\r\n\r\n<p>To share your feedback, please post in the <a href=\"http://us.battle.net/forums/en/overwatch/22813879/\" target=\"_blank\">General Discussion</a> forum.<br />\r\nFor a list of known issues, visit our <a href=\"http://us.battle.net/forums/en/overwatch/22813881/\" target=\"_blank\">Bug Report </a>forum.<br />\r\nFor troubleshooting assistance, visit our <a href=\"http://us.battle.net/forums/en/overwatch/22813880/\" target=\"_blank\">Technical Support</a> forum.</p>\r\n\r\n<h2>GENERAL UPDATES</h2>\r\n\r\n<p><strong>Competitive Play</strong></p>\r\n\r\n<ul>\r\n\t<li>Attacking teams now have 4 minutes to capture the first point on Assault maps (down from 5 minutes)</li>\r\n</ul>\r\n\r\n<p></p>\r\n\r\n<p><strong>Miscellaneous</strong></p>\r\n\r\n<ul>\r\n\t<li>The \"You Are Not Prepared\" spray and player icon is now available for all players</li>\r\n</ul>\r\n\r\n<h2>BUG FIXES</h2>\r\n\r\n<p><strong>Heroes</strong></p>\r\n\r\n<ul>\r\n\t<li>The correct hit pip sound will now play whenever one of Ana's darts impact with a barrier</li>\r\n\t<li>All of Ana's in-game sounds now have proper occlusion &#160;&#160;</li>\r\n</ul>\r\n\r\n<p></p>\r\n\r\n<p><strong>User Interface</strong></p>\r\n\r\n<ul>\r\n\t<li>Fixed a bug that caused \"Attack\" and \"Defend\" indicators to not always display on the hero select screen</li>\r\n\t<li>Fixed a bug that caused the scoreboard (default: Tab) to sometimes display the wrong stats if you switched heroes mid-match</li>\r\n\t<li>Fixed a bug in Competitive Play that caused the numbers on the post-match skill rating bar to not increment correctly&#160;</li>\r\n</ul>\r\n",
 "buildNumber": 30474,
 "publish": 1469143800000,
 "created": 1469151471898,
 "updated": 1469151645069,
 "develop": false,
 "slug": "1-1-0-2b",
 "version": "1.1.0.2b"
 },
 {
 "program": "OVERWATCH",
 "locale": "en_US",
 "type": "RETAIL",
 "patchVersion": "1.1.0.2",
 "status": "LIVE",
 "detail": "<h1>Overwatch Patch Notes – July 19, 2016</h1>\r\n\r\n<p>A new patch is now live. Read below to learn about the latest changes.</p>\r\n\r\n<p>To share your feedback, please post in the <a href=\"http://us.battle.net/forums/en/overwatch/22813879/\" target=\"_blank\">General Discussion</a> forum.<br />\r\nFor a list of known issues, visit our <a href=\"http://us.battle.net/forums/en/overwatch/22813881/\" target=\"_blank\">Bug Report </a>forum.<br />\r\nFor troubleshooting assistance, visit our <a href=\"http://us.battle.net/forums/en/overwatch/22813880/\" target=\"_blank\">Technical Support</a> forum.</p>\r\n\r\n<h2>PATCH FEATURES</h2>\r\n\r\n<p><strong><span style=\"color:#00a5e2;\">New Hero: Ana (Support)</span></strong><br />\r\nAfter being out of the fight for several years, one of Overwatch's founding members is returning. Introducing Ana—a battle-scarred veteran who supports her teammates from a distance using a unique and highly specialized collection of weapons.</p>\r\n\r\n<p>Ana’s primary weapon is her Biotic Rifle, which fires long-range darts that can restore the health of her allies or deal ongoing damage to her enemies. Meanwhile, her Biotic Grenade is perfect for a close-quarters clash, simultaneously healing teammates and injuring foes caught in its small area of effect. (Affected allies will also receive a temporary increase to all incoming healing, while affected enemies can’t be healed for a few moments.) And if the battle starts to get out of hand, Ana's sidearm can fire a Sleep Dart, knocking her adversaries unconscious.</p>\r\n\r\n<p>Plus, Ana's ultimate ability, Nano Boost, empowers one of her teammates, granting faster movement, increased damage, and resistance to enemy attacks.</p>\r\n\r\n<p>To learn more about Ana, <a href=\"https://playoverwatch.com/en-us/heroes/ana/\" target=\"_blank\">click here</a>.</p>\r\n\r\n<h2>GENERAL UPDATES</h2>\r\n\r\n<p><strong><span style=\"color:#00a5e2;\">Gameplay</span></strong></p>\r\n\r\n<ul>\r\n\t<li>If a match goes into Overtime for more than 20 seconds, the fuse will now start to \"burn down\" more quickly</li>\r\n\t<li>Players now respawn more slowly during Overtime (increased spawn time by 2 seconds)</li>\r\n</ul>\r\n\r\n<p><strong><span style=\"color: rgb(0, 165, 226);\">Competitive Play</span></strong></p>\r\n\r\n<ul>\r\n\t<li>Competitive Play matches can now only have one of each hero per team.\r\n\t<ul>\r\n\t\t<li>For more info, <a href=\"http://us.battle.net/forums/en/overwatch/topic/20746674467#1\" target=\"_blank\">click here</a>.</li>\r\n\t</ul>\r\n\t</li>\r\n</ul>\r\n\r\n<p><strong><span style=\"color:#00a5e2;\">Miscellaneous</span></strong></p>\r\n\r\n<ul>\r\n\t<li>Added Ana as an AI-controlled hero in Practice vs. AI, Play vs. AI, and Custom Game modes</li>\r\n\t<li>Timing on Zenyatta's Rapid Discord achievement is more lenient</li>\r\n\t<li>Targeted teammates now respond by saying \"I'm with you,\" when players use the “Group Up” communication</li>\r\n\t<li>Renamed five sprays to avoid duplicate titles</li>\r\n</ul>\r\n\r\n<h2>HERO BALANCE UPDATES</h2>\r\n\r\n<p><strong><span style=\"color: rgb(0, 165, 226);\">General</span></strong></p>\r\n\r\n<ul>\r\n\t<li>Self-healing abilities now charge ultimate abilities.&#160;As a result, some heroes’ ultimate costs have been adjusted (see below).</li>\r\n</ul>\r\n\r\n<p><strong><span style=\"color: rgb(0, 165, 226);\">Bastion</span></strong></p>\r\n\r\n<ul>\r\n\t<li>Configuration: Tank\r\n\t<ul style=\"list-style-type:circle;\">\r\n\t\t<li>Ultimate cost increased by 10%</li>\r\n\t</ul>\r\n\t</li>\r\n</ul>\r\n\r\n<p><strong><span style=\"color: rgb(0, 165, 226);\">D.Va</span></strong></p>\r\n\r\n<ul>\r\n\t<li>Defense Matrix\r\n\t<ul style=\"list-style-type:circle;\">\r\n\t\t<li>Cooldown decreased from 10 seconds to 1 second</li>\r\n\t\t<li>A new resource meter has been added. This meter will deplete while Defense Matrix is active and then recharge when it’s not in use.\r\n\t\t<ul>\r\n\t\t\t<li>Defense Matrix takes 10 seconds to reach full charge from empty</li>\r\n\t\t\t<li>At a full charge, Defense Matrix will last for 4 seconds</li>\r\n\t\t\t<li>Defense Matrix will now remain active as long as its assigned hotkey is held</li>\r\n\t\t</ul>\r\n\t\t</li>\r\n\t\t<li>Defense Matrix has been reclassified as an alternate fire and is now bound to RMB (by default)\r\n\t\t<ul>\r\n\t\t\t<li>An option to \"Toggle Defense Matrix\" has been added under Options &#62; Controls &#62; D.Va</li>\r\n\t\t</ul>\r\n\t\t</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>Self-Destruct\r\n\t<ul style=\"list-style-type:circle;\">\r\n\t\t<li>Ultimate cost decreased by 15%</li>\r\n\t\t<li>Explosion delay reduced from 4 seconds to 3 seconds</li>\r\n\t\t<li>Explosion no longer damages D.Va (the player who activates it)</li>\r\n\t</ul>\r\n\t</li>\r\n</ul>\r\n\r\n<p><strong><em>Developer Notes:</em></strong><em> D.Va isn't being selected as often as our other tanks, and we feel a lot of that stems from the underperformance of her damage absorption abilities. So, we've reconfigured her Defensive Matrix, making it more flexible and giving players the ability to use it more often. We’ve also given Self-Destruct a little more oomph, because it felt slightly underwhelming when compared to many of Overwatch's other ultimate abilities.</em></p>\r\n\r\n<p></p>\r\n\r\n<p><strong><span style=\"color: rgb(0, 165, 226);\">Lúcio</span></strong></p>\r\n\r\n<ul>\r\n\t<li>Sound Barrier\r\n\t<ul style=\"list-style-type:circle;\">\r\n\t\t<li>Ultimate cost increased by 10%</li>\r\n\t</ul>\r\n\t</li>\r\n</ul>\r\n\r\n<p><strong><span style=\"color: rgb(0, 165, 226);\">McCree</span></strong></p>\r\n\r\n<ul>\r\n\t<li>Peacekeeper\r\n\t<ul style=\"list-style-type:circle;\">\r\n\t\t<li>Now maintains full damage at longer distances, but will deal less damage at extreme ranges</li>\r\n\t</ul>\r\n\t</li>\r\n</ul>\r\n\r\n<p><strong><em>Developer Notes:</em></strong><em> While the game does feel better following the nerf to McCree’s close-range damage in a previous patch, it left him a little too weak. So, we're increasing his effective distance, making his range similar to Soldier: 76’s. This should hopefully give players another option for dealing with pesky long-range damage dealing heroes like Pharah and Hanzo.&#160;</em></p>\r\n\r\n<p></p>\r\n\r\n<p><strong><span style=\"color: rgb(0, 165, 226);\">Mercy</span></strong></p>\r\n\r\n<ul>\r\n\t<li>Caduceus Staff\r\n\t<ul style=\"list-style-type:circle;\">\r\n\t\t<li>Damage Boost\r\n\t\t<ul>\r\n\t\t\t<li>Effect will no longer stack with bonus damage provided by another Mercy</li>\r\n\t\t</ul>\r\n\t\t</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>Resurrect\r\n\t<ul style=\"list-style-type:circle;\">\r\n\t\t<li>Ultimate charge cost increased by 30%</li>\r\n\t\t<li>Movement is no longer prevented during activation</li>\r\n\t\t<li>Guardian Angel instantly resets upon use</li>\r\n\t</ul>\r\n\t</li>\r\n</ul>\r\n\r\n<p><strong><em>Developer Notes:</em></strong><em> Mercy's ultimate is one of the most powerful abilities in the game; however, players would often fly into the fray and die while using it. With this update, Resurrect will now take a bit longer to charge, but Mercy will be a lot safer when activating the ability in the middle of combat.&#160;</em></p>\r\n\r\n<p></p>\r\n\r\n<p><strong><span style=\"color: rgb(0, 165, 226);\">Roadhog</span></strong></p>\r\n\r\n<ul>\r\n\t<li>Whole Hog\r\n\t<ul style=\"list-style-type:circle;\">\r\n\t\t<li>Ultimate cost increased by 45%</li>\r\n\t</ul>\r\n\t</li>\r\n</ul>\r\n\r\n<p><strong><span style=\"color: rgb(0, 165, 226);\">Soldier: 76</span></strong></p>\r\n\r\n<ul>\r\n\t<li>Heavy Pulse Rifle\r\n\t<ul style=\"list-style-type:circle;\">\r\n\t\t<li>Spread recovery will begin after a short delay (rather than instantly)</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>Tactical Visor\r\n\t<ul style=\"list-style-type:circle;\">\r\n\t\t<li>Ultimate cost increased by 10%</li>\r\n\t</ul>\r\n\t</li>\r\n</ul>\r\n\r\n<p><font color=\"#00a5e2\"><b>Zenyatta</b></font></p>\r\n\r\n<ul>\r\n\t<li>Base shields increased by 50 (now 50 Health/150 Shield)</li>\r\n\t<li>Primary fire weapon damage decreased from 45 to 40</li>\r\n\t<li>Alternate fire weapon damage increased from 35 to 40</li>\r\n\t<li>Orb of Discord and Orb of Harmony\r\n\t<ul style=\"list-style-type:circle;\">\r\n\t\t<li>Projectile speed has been increased from 30 to 120</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>Transcendence\r\n\t<ul style=\"list-style-type:circle;\">\r\n\t\t<li>Movement speed is now doubled upon activation</li>\r\n\t\t<li>Healing amount increased from 200 to 300 health per second</li>\r\n\t</ul>\r\n\t</li>\r\n</ul>\r\n\r\n<p><strong><em>Developer Notes:</em></strong><em> While Zenyatta has never had the healing abilities of Lúcio or Mercy, he made up for it by dealing more damage. However, his lack of mobility and low health has meant he’s struggled to find a place in many games. To increase his effectiveness, we've made several changes, the biggest of which is an increased shield pool. This will allow him to go head-to-head with more enemies. The Orb of Harmony and Discord changes are also a quality of life change, helping Zenyatta move his orbs around and apply their effects more quickly. And lastly, we’ve increased Transcendence’s healing throughput. This ultimate was designed to be the most effective against sustained, high-damage fire and least effective against short, high-damage bursts (like D.Va’s or Junkrat's ultimates). But, due to the amount of healing it provided, there were times when it was possible for even sustained fire to overcome Transcendence’s output. We’ve made the heal powerful and also allowed Zenyatta to move around more quickly while it’s active.&#160;</em></p>\r\n\r\n<h2>USER INTERFACE UPDATES</h2>\r\n\r\n<p><strong><span style=\"color: rgb(0, 165, 226);\">Game Options</span></strong></p>\r\n\r\n<ul>\r\n\t<li>Players can now enter numerical values for any option that also has slider (e.g. FoV, volume, sensitivity, etc.)</li>\r\n\t<li>Players can now hide in-game chat by pressing CTRL-SHIFT-C or by typing \"/hidechat\" into the chat window</li>\r\n\t<li>Controls\r\n\t<ul style=\"list-style-type:circle;\">\r\n\t\t<li>Mouse sensitivity can now be adjusted out to two decimals</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>Gameplay\r\n\t<ul style=\"list-style-type:circle;\">\r\n\t\t<li>Mid-match tips can now be toggled on or off (this will enable/disable tips that pop up after a player dies)</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>Social\r\n\t<ul style=\"list-style-type:circle;\">\r\n\t\t<li>Friend Request toasts can now be toggled on or off</li>\r\n\t\t<li>Friend notifications can now be toggled on or off</li>\r\n\t\t<li>Whispers can now be toggled on or off</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>Video\r\n\t<ul style=\"list-style-type:circle;\">\r\n\t\t<li>Added 21:9 aspect ratio support</li>\r\n\t\t<li>Players can now enable a real-world clock by toggling the \"Display System Clock\" setting&#160;</li>\r\n\t</ul>\r\n\t</li>\r\n</ul>\r\n\r\n<p><strong><span style=\"color: rgb(0, 165, 226);\">Social Features</span></strong></p>\r\n\r\n<ul>\r\n\t<li>Certain commendations will now appear less frequently during end-of-round voting (e.g. Zenyatta’s Transcendence Healing and Zarya’s Projected Barriers Applied)</li>\r\n</ul>\r\n\r\n<h2>BUG FIXES</h2>\r\n\r\n<p><strong><span style=\"color:#00a5e2;\">General</span></strong></p>\r\n\r\n<ul>\r\n\t<li>The Hero Gallery now remembers the last hero you were looking at and will properly highlight that hero whenever returning to the gallery</li>\r\n\t<li>Fixed a bug that caused the “payload is nearing its final destination” music to continue playing even after the match was over</li>\r\n\t<li>Fixed a bug that caused the UI to disappear whenever the game was forced into windowed mode by an external application</li>\r\n\t<li>Fixed a bug that would sometimes cause visual healing effects to appear on the wrong hero whenever multiple players attempted to pick up a Health Pack</li>\r\n\t<li>Fixed a bug that would sometimes cause different heroes’ victory poses to clip into each other</li>\r\n\t<li>Fixed several lighting issues with the killcam</li>\r\n</ul>\r\n\r\n<p><strong><span style=\"color:#00a5e2;\">Maps</span></strong></p>\r\n\r\n<ul>\r\n\t<li>The payload on King’s Row will no longer retreat back inside its starting location if the attacking team fails to push it</li>\r\n\t<li>Adjusted the Hero Select screen volume for the attacking team on Watchpoint: Gibraltar</li>\r\n\t<li>Added Spectator camera collision to most maps</li>\r\n\t<li>Fixed issues with player collision across multiple maps</li>\r\n\t<li>Fixed issues with ambient lighting and shadows across multiple maps</li>\r\n</ul>\r\n\r\n<p><strong><span style=\"color:#00a5e2;\">Heroes</span></strong></p>\r\n\r\n<ul>\r\n\t<li>Fixed a bug that caused D.Va to sometimes ignore player collision when summoning her mech</li>\r\n\t<li>Reduced the chance for larger projectiles (i.e. Hanzo's arrows, Zenyatta's orbs) to hit targets around corners</li>\r\n\t<li>Fixed a bug where Mei’s Ice Wall would persist in the game world even after the player switched heroes or left the game</li>\r\n\t<li>Fixed even more bugs that allowed Reaper to Shadow Step to unintended locations</li>\r\n\t<li>Fixed a bug that sometimes caused Reinhardt’s Barrier Field to get stuck in the “on” position if the player used the “Toggle Barrier” setting</li>\r\n\t<li>Fixed a bug that sometimes caused Roadhog to accidentally Chain Hook targets standing behind him</li>\r\n\t<li>Fixed a bug that caused Winston’s Barrier Projector shield to ignore the “Sound Effects Volume” setting</li>\r\n</ul>\r\n\r\n<p><strong><span style=\"color:#00a5e2;\">Competitive Play</span></strong></p>\r\n\r\n<ul>\r\n\t<li>Fixed a bug that sometimes caused players not to be able to rejoin games</li>\r\n</ul>\r\n",
 "buildNumber": 30326,
 "publish": 1468949400000,
 "created": 1468910547829,
 "updated": 1468957837311,
 "develop": false,
 "slug": "1-1-0-2",
 "version": "1.1.0.2"
 },
 {
 "program": "OVERWATCH",
 "locale": "en_US",
 "type": "RETAIL",
 "patchVersion": "1.0.5.1b",
 "status": "LIVE",
 "detail": "<h1>Overwatch Patch Notes – July 6, 2016</h1>\r\n\r\n<p>A new patch is now live. Read below to learn about the latest changes.</p>\r\n\r\n<p>To share your feedback, please post in the <a href=\"http://us.battle.net/forums/en/overwatch/22813879/\" target=\"_blank\">General Discussion</a> forum.<br />\r\nFor a list of known issues, visit our <a href=\"http://us.battle.net/forums/en/overwatch/22813881/\" target=\"_blank\">Bug Report </a>forum.<br />\r\nFor troubleshooting assistance, visit our <a href=\"http://us.battle.net/forums/en/overwatch/22813880/\" target=\"_blank\">Technical Support</a> forum.</p>\r\n\r\n<h2>GENERAL</h2>\r\n\r\n<p></p>\r\n\r\n<p><strong>Competitive Play</strong></p>\r\n\r\n<p></p>\r\n\r\n<ul>\r\n\t<li>The duration of Sudden Death has been adjusted across all maps from 1m45s to the following values:\r\n\t<ul style=\"list-style-type:circle;\">\r\n\t\t<li>Assault:\r\n\t\t<ul>\r\n\t\t\t<li>Hanamura – 1m35s</li>\r\n\t\t\t<li>Temple of Anubis – 1m30s</li>\r\n\t\t\t<li>Volskaya Industries – 1m35s</li>\r\n\t\t</ul>\r\n\t\t</li>\r\n\t\t<li>Escort:\r\n\t\t<ul>\r\n\t\t\t<li>Dorado – 1m30s</li>\r\n\t\t\t<li>Route 66 – 1m35s</li>\r\n\t\t\t<li>Watchpoint: Gibraltar – 1m35s</li>\r\n\t\t</ul>\r\n\t\t</li>\r\n\t\t<li>Hybrid:\r\n\t\t<ul>\r\n\t\t\t<li>King’s Row – 1m30s</li>\r\n\t\t\t<li>Numbani – 1m50s</li>\r\n\t\t</ul>\r\n\t\t</li>\r\n\t\t<li>Note: Sudden Death duration is unchanged for Hollywood, which remains at 1m45s</li>\r\n\t</ul>\r\n\t</li>\r\n</ul>\r\n\r\n<p></p>\r\n\r\n<p></p>\r\n\r\n<h2>BUG FIXES</h2>\r\n\r\n<p></p>\r\n\r\n<p><strong>General</strong></p>\r\n\r\n<ul>\r\n\t<li>Fixed a bug that prevented Overtime music from playing on Escort and Assault/Escort maps, if the payload was nearing the final checkpoint</li>\r\n\t<li>Fixed a bug where display settings weren’t always saved after restarting the client</li>\r\n\t<li>Fixed an issue that sometimes caused the in-game UI to display incorrectly at 4k resolutions</li>\r\n\t<li>Fixed a bug where sometimes the wrong player level would appear in the Social menu</li>\r\n</ul>\r\n\r\n<p></p>\r\n\r\n<p><strong>Maps</strong></p>\r\n\r\n<ul>\r\n\t<li>Fixed an issue with collision not blocking line of sight on certain areas of Nepal</li>\r\n</ul>\r\n\r\n<p></p>\r\n\r\n<p><strong>Heroes</strong></p>\r\n\r\n<ul>\r\n\t<li>Fixed a bug that caused Mercy’s Caduceus Staff beam to disconnect from its target if the player a) quickly switched between healing and damage beams by holding down both mouse buttons and/or b) was facing away from the target at the time of the switch</li>\r\n\t<li>Fixed even more bugs that allowed Reaper to Shadow Step to unintended locations on certain maps</li>\r\n\t<li>Fixed a bug that caused Winston’s melee attack during Primal Rage to inconsistently hit targets in range</li>\r\n\t<li>Fixed a bug that sometimes caused Zarya’s alternate fire to scale incorrectly with her damage boost modifier</li>\r\n</ul>\r\n\r\n<p></p>\r\n\r\n<p><strong>Competitive Play</strong></p>\r\n\r\n<ul>\r\n\t<li>Fixed a bug that caused the “Top 500” icon to incorrectly display for certain players in various places throughout the game UI</li>\r\n\t<li>Fixed an issue where if you left and rejoined an in-progress Competitive Play match, the game would still track the match as a loss in your placement match history and when determining the amount of Skill Rating you receive for completing a match even if your team won\r\n\t<ul style=\"list-style-type:circle;\">\r\n\t\t<li>Note: You must be present for the conclusion of the match to be eligible for the win. If you leave a match and do not rejoin again before it’s over, it will count as a loss both in your placement match history and when calculating your Skill Rating adjustment.</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>Fixed an issue where you would still receive a Competitive Play “leave” penalty even if you rejoined a match and completed it\r\n\t<ul style=\"list-style-type:circle;\">\r\n\t\t<li>Note: If you leave a single Competitive Play match <em>more than</em> 3 times, you will receive a Competitive Play “leave” penalty even if you complete the match.&#160;</li>\r\n\t</ul>\r\n\t</li>\r\n</ul>\r\n\r\n<p></p>\r\n",
 "buildNumber": 30043,
 "publish": 1467823500000,
 "created": 1467823101773,
 "updated": 1467854887088,
 "develop": false,
 "slug": "1-0-5-1b",
 "version": "1.0.5.1b"
 },
 {
 "program": "OVERWATCH",
 "locale": "en_US",
 "type": "RETAIL",
 "patchVersion": "1.0.5.1",
 "status": "LIVE",
 "detail": "<h1>Overwatch Patch Notes – June 28, 2016</h1>\r\n\r\n<p>A new patch is now live on Windows PC. Read below to learn about the latest changes.</p>\r\n\r\n<p>To share your feedback, please post in the <a href=\"http://us.battle.net/forums/en/overwatch/22813879/\" target=\"_blank\">General Discussion</a> forum.<br />\r\nFor a list of known issues, visit our <a href=\"http://us.battle.net/forums/en/overwatch/22813881/\" target=\"_blank\">Bug Report </a>forum.<br />\r\nFor troubleshooting assistance, visit our <a href=\"http://us.battle.net/forums/en/overwatch/22813880/\" target=\"_blank\">Technical Support</a> forum.</p>\r\n\r\n<p></p>\r\n\r\n<h2>PATCH FEATURES</h2>\r\n\r\n<p><strong>New Feature: Competitive Play</strong><br />\r\nOverwatch is raising the bar for competitive players, giving them the perfect arena to sharpen their skills and hone their strategies. Introducing Competitive Play.</p>\r\n\r\n<p>Competitive Play is designed for players who truly want to put their skills to the test, and offers a more serious experience than our Quick Play or Weekly Brawl! modes. To make sure everyone playing the mode has a solid understanding of the game’s mechanics, maps, and heroes, Competitive Play will be locked until you hit level 25.</p>\r\n\r\n<p>Once you reach level 25, the mode will become available under the \"Play\" button in the main menu. Simply select \"Competitive Play\" from the submenu, and you're ready to enter a match. You can join on your own or in a group, and Overwatch’s matchmaking system will automatically find the best game possible for your (or your group's) skill level.</p>\r\n\r\n<p>Competitive Play is live right now! To learn more about this new feature, <a href=\"https://playoverwatch.com/en-us/blog/20167051\" target=\"_blank\">click here</a>.</p>\r\n\r\n<h2>GENERAL UPDATES</h2>\r\n\r\n<p><strong>Gamepad Controls</strong></p>\r\n\r\n<ul>\r\n\t<li>Players can now swap the left and right sticks on a control pad</li>\r\n\t<li>\"Legacy\" controls option has been added:\r\n\t<ul>\r\n\t\t<li>Left stick up/down moves forward/backward</li>\r\n\t\t<li>Left stick left/right turns left/right</li>\r\n\t\t<li>Right stick up/down aims up/down (these can be inverted)</li>\r\n\t\t<li>Right stick left/right strafes left/right</li>\r\n\t\t<li>Sticks can also be switched</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>Improved dead-zone controls, giving players increased accuracy during off-center and diagonal stick movement</li>\r\n</ul>\r\n\r\n<p><strong>Miscellaneous</strong></p>\r\n\r\n<ul>\r\n\t<li>When activating Widowmaker's Ultimate ability, Infra-Sight, her voice line will now be audible map-wide</li>\r\n\t<li>\"Weapons\" section added to the Hero Gallery</li>\r\n\t<li>Added McCree as an AI hero in Practice vs. AI, Play vs. AI, and Custom Game modes</li>\r\n\t<li>Added a variety of a social options to the hero selection and end of match screens</li>\r\n\t<li>Removed \"Avoid This Player\" option from the game UI</li>\r\n</ul>\r\n\r\n<h2>BUG FIXES</h2>\r\n\r\n<p><strong>General</strong></p>\r\n\r\n<ul>\r\n\t<li>Fixed a bug that would cause players’ weapons to auto-snap straight up or down when the crosshair was aimed between 85 and 90 degrees</li>\r\n\t<li>Fixed a bug that caused players who backfilled and then completed a game to sometimes receive a loss on their Career Profile and not receive their XP bonus for backfilling</li>\r\n\t<li>Fixed a bug that would move players toward the source of a knockback rather than away from it</li>\r\n\t<li>Fixed a bug that allowed players to spam objective-based voice lines</li>\r\n\t<li>Fixed a bug that caused Hearthstone-themed sprays to ignore localization</li>\r\n\t<li>Fixed several framerate issues that could occur when cycling through the hero selection menu</li>\r\n\t<li>Fixed a variety of issues with and made several improvements to ambient lighting</li>\r\n\t<li>Made some improvements to how AI heroes respond to one another&#160;</li>\r\n\t<li>Made a variety of performance and optimization improvements across the game</li>\r\n\t<li>Unicode keys for non-English keyboards are now displayed properly in the keybinding interface</li>\r\n</ul>\r\n\r\n<p><strong>Maps</strong></p>\r\n\r\n<ul>\r\n\t<li>Players can no longer be resurrected in out-of-play areas on Ilios</li>\r\n</ul>\r\n\r\n<p><strong>Heroes</strong></p>\r\n\r\n<ul>\r\n\t<li>Fixed a bug with the \"Junkrat RIP-Tire Kills—Average\" lifetime statistic</li>\r\n\t<li>Fixed a bug that would sometimes cause projectiles to hit Reinhardt instead of his Barrier Field\r\n\t<ul>\r\n\t\t<li>Note: We fixed this issue in an earlier patch for \"High Bandwidth\" Custom Games; this fix now applies it to all games</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>Fixed a bug that allowed Torbjörn to pick up Scrap while dead</li>\r\n</ul>\r\n",
 "buildNumber": 29882,
 "publish": 1467154800000,
 "created": 1466736571172,
 "updated": 1467155332164,
 "develop": false,
 "slug": "1-0-5-1",
 "version": "1.0.5.1"
 },
 {
 "program": "OVERWATCH",
 "locale": "en_US",
 "type": "RETAIL",
 "patchVersion": "1.0.4.2b",
 "status": "LIVE",
 "detail": "<h1>Overwatch Patch Notes – June 23, 2016</h1>\r\n\r\n<p>A new patch is now live on Windows PC. Read below to learn about the latest changes.</p>\r\n\r\n<p>To share your feedback, please post in the <a href=\"http://us.battle.net/forums/en/overwatch/22813879/\" target=\"_blank\">General Discussion</a> forum.<br />\r\nFor a list of known issues, visit our <a href=\"http://us.battle.net/forums/en/overwatch/22813881/\" target=\"_blank\">Bug Report </a>forum.<br />\r\nFor troubleshooting assistance, visit our <a href=\"http://us.battle.net/forums/en/overwatch/22813880/\" target=\"_blank\">Technical Support</a> forum.</p>\r\n\r\n<p></p>\r\n\r\n<h2>BUG FIXES</h2>\r\n\r\n<ul>\r\n\t<li>Implemented a potential fix to help address framerate drops following our June 14 patch\r\n\t<ul>\r\n\t\t<li>Note: This fix may not resolve the issue for all players. If you continue to experience FPS drops after patching, please post in our <a href=\"http://us.battle.net/forums/en/overwatch/22813880/\" target=\"_blank\">Technical Support</a> forum.</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>Fixed an issue that caused non-standard buttons on some mice to no longer respond, as well as some mice to stop registering altogether</li>\r\n</ul>\r\n",
 "buildNumber": 29800,
 "publish": 1466713800000,
 "created": 1466628502062,
 "updated": 1466735983890,
 "develop": false,
 "slug": "1-0-4-2b",
 "version": "1.0.4.2b"
 }
 ],
 "pagination": {
 "totalEntries": 8,
 "totalPages": 2,
 "pageSize": 5,
 "page": 1
 }
 }
 */

