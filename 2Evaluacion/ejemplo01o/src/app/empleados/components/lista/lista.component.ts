import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmpleadosService } from '../../empleados.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-empleados-lista',
  standalone: false,

  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  public filterSearch: string = '';
  empleados: any;
  public cargando: boolean = false;

  constructor(private _empleadosService: EmpleadosService) { }
  ngOnInit() {
    this.cargando = true;
    this._empleadosService.obtengoEmpleadosApi().subscribe({
      next: (resultado) => {
        if (resultado.mensaje == "OK") {
          this.empleados = resultado.datos;
        } else {
          console.error('Error al recibir datos:', resultado.error);
        }
      },
      error: (error) => {
        console.error('Error al recibir datos:', error);
      },
      complete: () => {
        console.log('Operación completada.');
        this.cargando = false;
      },
    });
  }

  descargarPDF() {
    const doc = new jsPDF(); // Crear instancia de jsPDF
    // Agregar título o texto opcional
    doc.text('Tabla Exportada', 14, 10);
    // Seleccionar la tabla y convertirla a un formato adecuado
    autoTable(doc, {
      html: '#tbempleados',
      startY: 20,
      styles: { fontSize: 10, textColor: [0, 0, 0], fillColor: [240, 240, 240]
     },
      headStyles: { fillColor: [100, 100, 255] },
      margin: { top: 20 },
     });
    // Guardar el PDF con un nombre
    doc.save('tabla.pdf');
  }
}
