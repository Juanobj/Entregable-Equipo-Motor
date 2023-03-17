class Bomba extends Equipo {
    caudalEntrada: number;
    caudalSalida: number;
    fabricante: string;
  
    constructor(id: string, descripcion: string, fechaFabricacion: Date, fechaInstalacion: Date, caudalEntrada: number, caudalSalida: number, fabricante: string) {
      super(id, descripcion, fechaFabricacion, fechaInstalacion);
      this.caudalEntrada = caudalEntrada;
      this.caudalSalida = caudalSalida;
      this.fabricante = fabricante;
    }
  
    agregar_bomba() {
      // Código para agregar bomba
    }
  
    leer_bomba() {
      // Código para leer bomba
    }
  
    eliminar_bomba() {
      // Código para eliminar bomba
    }
  
    editar_bomba() {
      // Código para editar bomba
    }
  }
  