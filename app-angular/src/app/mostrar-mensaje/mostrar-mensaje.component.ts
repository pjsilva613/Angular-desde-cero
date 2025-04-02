import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje',
  imports: [],
  templateUrl: './mostrar-mensaje.component.html',
  styleUrl: './mostrar-mensaje.component.css'
})
export class MostrarMensajeComponent {
  mensaje: string = '';
  resetMensaje() {
    this.mensaje = '';
  }
  mostrarMensaje() {
    this.mensaje = 'Hola, haz hecho click en boton';
  }
}
