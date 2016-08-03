import {bootstrap}    from '@angular/platform-browser-dynamic';
import {Lesson05} from './lesson05.component';
import {appRouterProviders}  from './app.routes';
import { TestService }    from './test.service';

bootstrap(Lesson05, [appRouterProviders, TestService]);
