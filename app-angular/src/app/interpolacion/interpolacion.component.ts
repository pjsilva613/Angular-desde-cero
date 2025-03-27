import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css'
})
export class InterpolacionComponent {
titulo = 'Universidad Angular';

usuario = {
  nombre: 'Pedro Javier Silva Hernandez',
  edad: 35
};

saludar(){
  return `Hola, ${this.usuario.nombre}`
};
}
