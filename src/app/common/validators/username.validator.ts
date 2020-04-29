import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidator {
    static shouldNotContainSpace(control: AbstractControl): ValidationErrors | null {
        // return null;
        // console.log(control);
        const value = control.value;
        if (!value) {
            return null;
        }
        if (value.indexOf(' ') !== -1) {
            return { shouldNotContainSpace: true };
        }
        return null;
    }
}
