import {Component} from '@angular/core';

export class Address {
    constructor(
        public  address1: string,
        public address2: string,        
        public suburb: string,
        public state: string,
        public country: string
        ) {
    }
}