import { InputsOutputsComponent } from './InputsOutputs';

describe('Probando inputs y outputs', () => {
  let componente: InputsOutputsComponent;

  beforeEach(() => {
    componente = new InputsOutputsComponent();
  });

  it('El input debe tener un valor por defecto Hola', () => {
    expect(componente.entrada).toBe('Hola');
    componente.borrarEntrada();
    expect(componente.entrada).toBe('');
  });
  it('El input debe tener un valor vacio despues de borrarlo', () => {
    componente.borrarEntrada();
    expect(componente.entrada).toBe('');
  });

  it('El output debe emitir un valor de cadena Emitiendo', () => {
    const arg: string = 'Emitiendo';
    componente.salida.subscribe((valor) => {
      expect(valor).toBe(arg);
    });
    componente.emitirAlgo(arg);
  });
});
