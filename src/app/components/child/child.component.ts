import { Component, Input, Output, EventEmitter, model, input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  template: `
    <p>
      Valore del padre: {{valore() ? 'vero' : 'falso'}} <!-- se lui vale vero, scrivimi vero, altrimenti sctivimi falso -->
  <!--  <button (click)="valoreNuovo.emit(!valoreDalPadre)">Cambia il valore</button> -->
    <button (click)="valore.set(!valore())" label="Cambia valore">Cambia valore</button>
    </p>

    <ul>
      @for(allievo of allievi(); track $index){
        <li>{{allievo}}</li>
      }
    </ul>
  `,
  styles: ``
})
export class ChildComponent {
  @Input() valoreDalPadre: boolean = false;
  @Output() valoreNuovo = new EventEmitter<boolean>();

  allievi = input<any[]>();

  valore = model<boolean>(false) //il model è un signal in lettura e scrittura

}
