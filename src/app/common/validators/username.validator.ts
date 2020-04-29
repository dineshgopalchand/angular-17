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

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            // return null;
            // console.log(control);

            // asyc operations
            setTimeout(() => {
                if (control.value === 'dinesh') {
                    resolve({ shouldBeUnique: true });
                } else {
                    resolve(null);
                }
                // if (control.value === 'dinesh') {
                //     resolve({ shouldBeUnique: true });
                //     return;
                // }
                // resolve(null);


            }, 2000);
            // resolve(null);
            // resolve({ shouldBeUnique: true });
            // reject('some error');
        });
    }
}
