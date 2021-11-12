import 'zone.js/dist/zone';
import '@angular/compiler';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';

const environment = {
    production: true 
};

if(environment.production){
    enableProdMode();
};

platformBrowser().bootstrapModule(AppModule);