import {bootstrap}    from 'angular2/platform/browser';
import {Lesson05} from './lesson05.component';
import {ROUTER_PROVIDERS}  from 'angular2/router';
import { TestService }    from './test.service';

bootstrap(Lesson05, [ROUTER_PROVIDERS, TestService]);
