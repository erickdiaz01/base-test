import { MetodosCondicionales } from './Metodos-etc';

describe('Probando metodos condicionales', () => {
  const condicionales = new MetodosCondicionales();

  it('Debe ser un numero par', () => {
    expect(condicionales.numeroParOImpar(4)).toBeTruthy();
  });
  it('Debe ser un numero impar', () => {
    expect(condicionales.numeroParOImpar(1)).not.toBeTruthy();
  });

  it('Valida si el numero ingresado es un numero primo invalido', () => {
    expect(condicionales.numerosPrimosHasta100(15)).toBe(
      'El numero no es un numero primo o esta fuera del rango'
    );
  });

  it('Valida si el numero ingresado es un numero primo valido', () => {
    expect(condicionales.numerosPrimosHasta100(97)).toBe(
      'El numero es un numero primo y es mayor a uno y menor a cien'
    );
  });
});
