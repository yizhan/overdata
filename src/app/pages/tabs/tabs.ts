import {Component} from '@angular/core'
import {ProfilePage} from '../profile/profile';
import {StatsPage} from '../stats/stats';
import {AchievemetPage} from '../trophy/trophy';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    private tab1Root: any;
    private tab2Root: any;
    private tab3Root: any;

    constructor() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        // this.tab1Root = ProfilePage;
        this.tab2Root = StatsPage;
        this.tab3Root = AchievemetPage;
        this.tab1Root = ProfilePage;
    }
}
