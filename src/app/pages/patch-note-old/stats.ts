import {Component, ViewChild, ElementRef, Renderer} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http, Response} from '@angular/http';
import {MockedPatchNote} from '../../mocked-data/patch_notes';

@Component({
    templateUrl: 'build/pages/patch-note/patch-note.html',
    providers: [
        MockedPatchNote]
})
export class StatsPage {
    // @ViewChild() foo;
    @ViewChild('foo') foo: ElementRef;

    constructor(private navController:NavController,
                private nativeElement: ElementRef,
                private renderer: Renderer,
                private $http: Http,
                private mockedPatchNote: MockedPatchNote) {
    }

    private getTestData = () => {

        let patchNote = this.mockedPatchNote.getPatchNote();
        this.setPatchElement(patchNote);

        // this.$http.get('https://api.lootbox.eu/patch_notes')
        //     .map(res => res.json())
        //     .subscribe((res: any) => {
        //         console.log(res);
        //         this.setPatchElement(res.patchNotes)
        //     })
    };

    private setPatchElement = (patchNote: any) => {
        let htmlstring = patchNote;
        this.foo.nativeElement.innerHTML = htmlstring;
    };

    ngAfterViewInit() {

        this.getTestData();
    }
}
