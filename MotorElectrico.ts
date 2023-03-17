class M_ELECTRICO extends Motor {
    voltaje: string;
    consumoKwH: number;
    isBajoConsumo: boolean;
  
    constructor(id: string, descripcion: string, fechaFabricacion: Date, fechaInstalacion: Date, potenciaHp: number, eficiencia: Eficiencia, fabricante: string, voltaje: string, consumoKwH: number, isBajoConsumo: boolean) {
      super(id, descripcion, fechaFabricacion, fechaInstalacion, potenciaHp, eficiencia, fabricante);
      this.voltaje = voltaje;
      this.consumoKwH = consumoKwH;
      this.isBajoConsumo = isBajoConsumo;
    }
  
    agregar_motorE() {
      // Código para agregar motor eléctrico
    }
  
    leer_motorE() {
      // Código para leer motor eléctrico
    }
  
    eliminar_motorE() {
      // Código para eliminar motor eléctrico
    }
  
    editar_motorE() {
      // Código para editar motor eléctrico
    }
  }
  