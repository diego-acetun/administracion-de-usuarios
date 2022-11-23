import { FormControl, ValidationErrors } from '@angular/forms';

export class Validaciones {
  static validarPasswordConCaracteresEspeciales(
    control: FormControl
  ): ValidationErrors | null {
    const caracteresEspeciales = ['#', '$', '&', '@'];
    for (let i = 0; i <= caracteresEspeciales.length; i++) {
      if (control.value.includes(caracteresEspeciales[i])) return null;
    }
    return { caracteresEspeciales: true };
  }

  static validarPasswordConMayuscula(
    control: FormControl
  ): ValidationErrors | null {
    const letrasMayusculas = 'ABCDEFGHYJKLMNÑOPQRSTUVWXYZ';
    for (let i = 0; i <= letrasMayusculas.length; i++) {
      if (control.value.includes(letrasMayusculas[i])) return null;
    }
    return { mayusculas: true };
  }
}
