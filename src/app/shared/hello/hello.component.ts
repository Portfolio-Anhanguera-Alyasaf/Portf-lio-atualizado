import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {
  nomes: string[] = ['Anderson', 'Renata', 'Roberta', 'Eduardo', 'Thiago', 'Rubens'];

  alertaNome(nome: string): void {
    alert(`O nome que você clicou: ${nome}`);
  }
}
