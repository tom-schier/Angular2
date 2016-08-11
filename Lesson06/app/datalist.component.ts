
import { Component, OnInit }     from '@angular/core';
import {DataItem} from './dataitem.component';
import {GmapService} from './gmap.service';

export class DataListComponent implements OnInit {
    errorMessage: string;
    dataItem: DataItem[];
    mode = 'Observable';

    constructor(private gmapSvc: GmapService) { }
    ngOnInit() { this.getHeroes(); }
    getHeroes() {
        //this.gmapSvc.getHeroes()
        //    .subscribe(
        //    heroes => this.dataItem = heroes,
        //    error => this.errorMessage = <any>error);
    }
    addHero(name: string) {
        if (!name) { return; }
        //this.gmapSvc.addHero(name)
        //    .subscribe(
        //    hero => this.dataItem.push(hero),
        //    error => this.errorMessage = <any>error);
    }
}
