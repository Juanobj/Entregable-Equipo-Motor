enum Eficiencia {
    Baja = "baja",
    Media = "media",
    Alta = "alta"
  }
  
  class Motor extends Equipo {
    potenciaHp: number;
    eficiencia: Eficiencia;
    fabricante: string;
  
    constructor(id: string, descripcion: string, fechaFabricacion: Date, fechaInstalacion: Date, potenciaHp: number, eficiencia: Eficiencia, fabricante: string) {
      super(id, descripcion, fechaFabricacion, fechaInstalacion);
      this.potenciaHp = potenciaHp;
      this.eficiencia = eficiencia;
      this.fabricante = fabricante;
    }
  
    agregar_motor() {
      // Código para agregar motor
    }
  
    leer_motor() {
      // Código para leer motor
    }
  
    eliminar_motor() {
      // Código para eliminar motor
    }
  
    editar_motor() {
      // Código para editar motor
    }
  }
  