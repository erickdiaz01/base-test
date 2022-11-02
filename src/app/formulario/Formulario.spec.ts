import { FormBuilder } from '@angular/forms';
import { unFormulario } from './Formulario';

describe('Probando el formulario y validadores', () => {
    const componente = new unFormulario(new FormBuilder);

    it('Debe validar si hay un input cuyo nombre sea password', () => {
        expect(componente.form.contains('password')).toBeTruthy();
    })

    it('El input email no debe esta vacio', () => {
        const control = componente.form.get('email')
        control?.setValue('')
        expect(control?.valid).toBeFalsy();
    })

    it('El input del email debe ser un correo valido', () => {
        const control = componente.form.get('email')
        control?.setValue('erickdiaz@gmail.com')
        expect(control?.valid).toBeTruthy();
    })
    it('El campo password no debe esta vacio', () =>{
        const control1 = componente.form.get("password")
        control1?.setValue('')
        expect(control1?.valid).toBeFalse();
    })
})
