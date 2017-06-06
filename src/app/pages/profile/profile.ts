import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ListOfheros, Hero} from '../../mocked-data/list-of-heros';
import {MockedHeroStats} from '../../mocked-data/overall-hero-stats';
import * as _ from 'lodash';
import {MockedProfile} from '../../mocked-data/user-profile';
import * as d3 from 'd3';


export interface UserProfileGameInterface {
    quick:{
        wins: number;
        lost: number;
        played: number;
    },
    competitive:{
        wins: number;
        lost: number;
        played: number;
    }
}

export interface PlaytimeInterface {
    quick: string;
    competitive: string;
}

export interface CompetitiveInterface {
    rank: number;
    rank_img: string;
}

export interface UserProfileInterface {
    username: string;
    level: number;
    games?: UserProfileGameInterface;
    playtime: PlaytimeInterface;
    avatar: string;
    competitive: CompetitiveInterface;
}

@Component({
    templateUrl: 'profile.html',
    providers: [ListOfheros, MockedHeroStats, MockedProfile]
})
export class ProfilePage {
    private goodHeroStats = [];
    private overallHeroStats = [];
    private userProfile: UserProfileInterface;
    private d3Chart: any;
    @ViewChild('chart') chart: ElementRef;

    constructor(private navController:NavController,
                private listOfheros: ListOfheros,
                private mockedHeroStats: MockedHeroStats,
                private mockedProfile:MockedProfile,
                private element: ElementRef) {


        let mockedData = mockedProfile.getMocked_profile().data;
        this.userProfile = Object.assign({}, mockedData);

        this.overallHeroStats = mockedHeroStats.getMocked_herostats();
        // console.log(overallHeroStats);
        this.goodHeroStats = this.overallHeroStats.slice(0, 3);
        // console.log(this.goodHeroStats);

    }

    ngAfterViewInit() {
        console.log(this.chart);
        console.log(this.goodHeroStats);
        // let dataSet = this.goodHeroStats.map((goodHero) => {
        //     return goodHero.percentage;
        // });
        // console.log(dataSet);
        let dataSet =  [ 5, 10, 15];

        this.d3Chart = d3.select(this.chart.nativeElement);
        this.d3Chart.selectAll('.profile-bar')
            .data(dataSet)
            .transition()
            .style("width", function(d) {
                var barwidth = d * 20;  //Scale up by factor of 5
                return barwidth + "px";
            })
    }

    imageOnload() {
        console.log('onloaded');
    }
}
