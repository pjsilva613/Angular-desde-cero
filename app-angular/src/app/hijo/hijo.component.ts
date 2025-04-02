import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

  private titulo = 'Titulo Componente Hijo';

  //getter de typescript
  get mostrarTitulo(){
    return this.titulo;
  }

  //getter de javascript
  getTitulo(){
    return this.titulo;
  }

}
