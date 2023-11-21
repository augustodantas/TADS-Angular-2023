import { Component } from '@angular/core';

@Component({
  selector: 'app-testa-biding',
  templateUrl: './testa-biding.component.html',
  styleUrls: ['./testa-biding.component.scss']
})
export class TestaBidingComponent {
  valor : number = 9;

  quadrado():number {
    return this.valor * this.valor;
  }

  raiz(): number {
    return Math.sqrt(this.valor);
  }

}
