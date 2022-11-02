import { nombreUsuario, primeros } from './Inicio';

describe('Probando inicio', () => {
  it("Debe retornar un string 'Hola que hace'", () => {
    const result = primeros();
    expect(result).toEqual('Hola que hace');
  });

  it('Debe validar si el nombre ingresado tiene una longitud  mayor o igual a 3 caracteres', () => {
    const result = nombreUsuario('Erick');
    expect(result).toBe('El nombre tiene 3 o mas caracteres');
  });

  it('Debe validar que el nombre es muy corto', () => {
    const result = nombreUsuario('No');
    expect(result).toBe('El nombre es muy corto');
  });
});
