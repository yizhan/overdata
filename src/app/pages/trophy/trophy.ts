import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MockedProfile} from '../../mocked-data/user-profile';

import {MockedAchievement} from '../../mocked-data/achievement';

export interface UserProfileGameInterface {
    quick:{
        wins:number;
        lost:number;
        played:number;
    },
    competitive:{
        wins:number;
        lost:number;
        played:number;
    }
}

export interface UserProfileInterface {
    username: string;
    level: number;
    games?: UserProfileGameInterface;
    playtime: any;
    avatar: string;
    competitive: any;
}


@Component({
    templateUrl: 'build/pages/trophy/trophy.html',
    providers: [MockedProfile, MockedAchievement]
})
export class AchievemetPage {

    private userProfile: UserProfileInterface;
    private achievements: any;
    private achievementTotal: string;

    constructor(private navController: NavController,
                private mockedProfile: MockedProfile,
                private achievement: MockedAchievement) {


        let mockedAchievement = this.achievement.getMockedAchievement();
        console.log(mockedAchievement);
        this.achievementTotal = mockedAchievement.finishedAchievements;
        // this.achievements = mockedAchievement.achievements;

        this.achievements = mockedAchievement.achievements.filter((achievement) => {
            if (achievement.finished) {
                return true;
            } else {
                return false;
            }
        })
    }


}
