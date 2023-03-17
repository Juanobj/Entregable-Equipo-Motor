enum RoscasMaterial {
    AceroInoxidable = "acero inoxidable",
    HierroGalvanizado = "hierro galvanizado",
    Bronce = "bronce"
  }
  
  class KitMangueras extends Equipo {
    elementos: number;
    medidaPulgadas: number;
    roscasMaterial: RoscasMaterial;
  
    constructor(id: string, descripcion: string, fechaFabricacion: Date, fechaInstalacion: Date, elementos: number, medidaPulgadas: number, roscasMaterial: RoscasMaterial) {
      super(id, descripcion, fechaFabricacion, fechaInstalacion);
      this.elementos = elementos;
      this.medidaPulgadas = medidaPulgadas;
      this.roscasMaterial = roscasMaterial;
    }
  
    agregar_kitM() {
      // Código para agregar kit de mangueras
    }
  
    leer_kitM() {
      // Código para leer kit de mangueras
    }
  
    eliminar_kitM() {
      // Código para eliminar kit de mangueras
    }
  
    editar_kitM() {
      // Código para editar kit de mangueras
    }
  }
  