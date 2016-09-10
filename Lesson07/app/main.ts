//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { Lesson07Module }              from './app.module';

//platformBrowserDynamic().bootstrapModule(Lesson07Module);

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Lesson07Module } from './app.module';
// Compiles the module (asynchronously) with the runtime compiler
// which generates a compiled module factory in memory.
// Then bootstraps with that factory, targeting the browser.
platformBrowserDynamic().bootstrapModule(Lesson07Module);

