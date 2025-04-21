import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;
  parametro: string = '';
  erro: string = '';

  obterValoresSoma() {
    debugger
    this.erro = '';
    switch (this.parametro) {
      case '+': this.resultado = this.numero1 + this.numero2;
        break;
      case '-': this.resultado = this.numero1 - this.numero2;
        break;
      case '/': this.resultado = this.numero1 / this.numero2;
        break;
      case '*': this.resultado = this.numero1 * this.numero2;
        break;
      default: this.erro = 'Parametro não suportado tente usar: +, -, /, ou *';
        break;
    }
  }

}
