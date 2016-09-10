import { NgForm, NgControl,  FormBuilder, Validators, FormControl, FormControlDirective,FormGroup} from '@angular/forms';
import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, Inject}  from '@angular/core';
//import {FORM_DIRECTIVES, NgControlGroup, Control, FormBuilder, ControlGroup} from '@angular/forms';

interface ValidationResult {
    [key: string]: boolean;
}
export class SpeedValidator {

    static validSpeed(control: FormControl): ValidationResult {
        if (control.value && control.value.length != 4)
            return { 'validSpeed': false };

        if (control.value && control.value.length > 0) {
            if (control.value[0] != 'N')
                return { 'validSpeed': false };
        }
        if (control.value && control.value.length == 4) {
            var numComp = control.value.slice(1, 3);
            if (isNaN(numComp)) {
                return { 'validSpeed': false };
            }
        }
        return null;
    }
}
