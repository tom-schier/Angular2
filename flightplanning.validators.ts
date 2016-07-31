import {FORM_DIRECTIVES, NgForm, NgControl, NgControlGroup, Control, FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, Inject}  from 'angular2/core';

interface ValidationResult {
    [key: string]: boolean;
}
export class PasswordValidator {
    static startsWithNumber(control: Control): ValidationResult {
        if (control.value && control.value.length > 0) {
            if (isNaN(control.value[0]))
                return { 'startsWithNumber': true };
        }

        return null;
    }

}
