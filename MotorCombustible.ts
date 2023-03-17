enum TipoCombustible {
  Gasolina = "gasolina",
  Diesel = "diesel",
  Gas = "gas"
}

class MotorCombustible extends Motor {
  cilindros: number;
  tipoCombustible: TipoCombustible;

  constructor(id: string, descripcion: string, fechaFabricacion: Date, fechaInstalacion: Date, potenciaHp: number, eficiencia: Eficiencia, fabricante: string, cilindros: number, tipoCombustible: TipoCombustible) {
    super(id, descripcion, fechaFabricacion, fechaInstalacion, potenciaHp, eficiencia, fabricante);
    this.cilindros = cilindros;
    this.tipoCombustible = tipoCombustible;
  }

  agregar_motorC() {
    // Código para agregar motor combustible
  }

  leer_motorC() {
    // Código para leer motor combustible
  }

  eliminar_motorC() {
    // Código para eliminar motor combustible
  }

  editar_motorC() {
    // Código para editar motor combustible
  }
}
