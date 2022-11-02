export function primeros(): string {
  return 'Hola que hace';
}

export function nombreUsuario(nombre: String): string {
  return nombre.length >= 3
    ? 'El nombre tiene 3 o mas caracteres'
    : 'El nombre es muy corto';
}
