import { Component, signal, effect, computed } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './components/child/child.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    FormsModule,
    CommonModule,
    ChildComponent,
    RouterLink
  ],
  template: `
    <p>Inserisci un allievo: </p>
    <input type="text" placeholder="Inserire qui">
    <hr>
    <p>LISTA ALLIEVI</p>

    @if(allievi().length){
      @for(a of allievi(); track i; let i=$index; let last=$last){
        Num {{i}} , Allievo :   {{a}}
        <button>Rimuovi</button>
        <br>
        @if(last) {
          <hr>
          Il numero degli allievi è {{allievi().length}}
        }
      }
      @empty {
      Attualmente non ci sono allievi.
      }
    }

<!--
  <div>
    scrivi un colore:
    <input type="text" pInputText [(ngModel)]="colore" />
    <button (click)="cambiaColore()" label="Cambia" class="ml-1"></button>
  </div>
    <div>
      @switch (coloreSelezionato()){
        @case('rosso'){
          <h1 [style.color]="coloreSelezionato()">COLOR {{coloreSelezionato() | uppercase}}</h1>
        }
        @case('green'){
          <h1 [style.color]="coloreSelezionato()">COLOR {{coloreSelezionato() | uppercase}}</h1>
        }
        @case('orange'){
          <h1 [style.color]="coloreSelezionato()">COLOR {{coloreSelezionato() | uppercase}}</h1>
        }
        @case('blue'){
          <h1 [style.color]="coloreSelezionato()">COLOR {{coloreSelezionato() | uppercase}}</h1>
        }
        @default{
          <h1 [style.color]="coloreSelezionato()">BLACK</h1>
        }
      }
    </div>
  -->

    <app-child [(valore)]="myBoolean" [allievi]="allievi()" (inviaSnack)="valoriDalFiglio($event)"></app-child> <!-- [valoreDalPadre]="myBoolean" (valoreNuovo)="valoriDalFiglio($event)" -->
      @let frase = snacks().length > 3 ? '<h1>tanti snacks</h1>' : '<h1>pochi snacks</h1>';
    @if(snacks()?.length) {
      <ul>
        @for (snack of snacks(); track $index){
          <li>{{snack}}</li>
        }
      </ul>
      {{frase}}
    }

    <div>
      <button label="Pagina 1" routerLink="pagina1"> </button>
      <button label="Pagina 2" routerLink="pagina2"> </button>
      <button label="Pagina 3" routerLink="pagina3"> </button>
    </div>

    <router-outlet />
  `,
  styles: [],
})

export class AppComponent {

  myBoolean = false;

  snacks = signal([]);

  allievi = signal(['Mario','Marco','Luisa','Silvia'])
  colore = signal('');
  coloreSelezionato = signal('');

  constructor(){}

  cambiaColore(){
    this.coloreSelezionato.set(this.colore());
  }

 /*  valoriDelFiglio(event: any){
    this.myBoolean = event;
   }
 */

  valoriDalFiglio(event:any){
    this.snacks.set(event)
  }


  removeStudent(){
    effect(() => {
      this.allievi.update(allievi => allievi.slice())
    }
    )
  }

  reset(){}

}
