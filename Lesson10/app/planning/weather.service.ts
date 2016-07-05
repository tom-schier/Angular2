import {Injectable, OnInit, Output, EventEmitter} from 'angular2/core';
import {Subject} from 'rxjs/Subject';

export class WindDetails {
    windspeed: number;
    direction: number;
    altitude: number;
    isReadOnly: boolean;
}

export class CloudDetails {
    cloudType: number;
    coverage: number;
    altitude: number;
    isReadOnly: boolean;
}

@Injectable()
export class WeatherService implements OnInit {

    public winds: WindDetails[];
    public clouds: CloudDetails[];

    constructor() {
        console.log('Creating weather service');
        this.winds = new Array();
        this.clouds = new Array();
    }
    // Observable string sources
    private obWindDetails = new Subject<WindDetails[]>();
    private obCloudDetails = new Subject<CloudDetails[]>();

    // Observable string streams
    windDetailsChange$ = this.obWindDetails.asObservable();
    cloudDetailsChange$ = this.obCloudDetails.asObservable();

    // Service message commands
    AddWind(aWind: WindDetails) {
        var newWind = new WindDetails();
        newWind = aWind;
        this.winds.push(aWind);
        this.obWindDetails.next(this.winds);
    }

    RemoveWind(aWind: WindDetails) {
        var idx = this.winds.indexOf(aWind);
        this.winds.splice(idx);
        this.obWindDetails.next(this.winds);
    }

    // Service message commands
    AddCloud(aCloud: CloudDetails) {
        var newCloud = new CloudDetails();
        newCloud = aCloud;
        this.clouds.push(aCloud);
        this.obCloudDetails.next(this.clouds);
    }

    RemoveCloud(aCloud: CloudDetails) {
        var idx = this.clouds.indexOf(aCloud);
        this.clouds.splice(idx);
        this.obCloudDetails.next(this.clouds);
    }

    logError(err) {
        console.error('There was an error: ' + err);
    }

    ngOnInit() {
        console.log('ngOnInit windDetails');
    }
}


