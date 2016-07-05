
import {AircraftBrief} from '../data/aircraft.types';

export interface iAircraftService {

    getBriefAircraftList(): AircraftBrief[];
}