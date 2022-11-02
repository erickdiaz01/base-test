export class MetodosCondicionales {
  constructor() {}

  /**
   * Para divertirse escribiendo codigo cochino :3
   */

  public numeroParOImpar(valor: number): Boolean {
    return valor % 2 == 0 ? true : false;
  }

  public numerosPrimosHasta100(valor: number): String {
    const arregloNumerosPrimos = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97,
    ];

    return arregloNumerosPrimos.includes(valor)
      ? 'El numero es un numero primo y es mayor a uno y menor a cien'
      : 'El numero no es un numero primo o esta fuera del rango';
  }
}
