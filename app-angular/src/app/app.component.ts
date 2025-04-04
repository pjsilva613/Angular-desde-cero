import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteComponent } from "./nuevo-componente/nuevo-componente.component";
import { ReplicadorComponent } from "./replicador/replicador.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevoComponenteComponent, ReplicadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Property Binding Angular';
}
