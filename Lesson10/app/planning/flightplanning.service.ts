import {Injectable} from 'angular2/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class FlightPlanningService {

    constructor() {
        console.log('creating flight planning service');
    }
}
