
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  /* declaramos valores con su tipo */
  imc: number;
  resultado: string;
  interpretacion: string;

  /* como imc es de tipo number parseamos el string route.snapshot.paramMap.get('valor') poniendo delante un + Y ASÍ
  LO CONVERTIMOS EN TIPO NUMBER */
  /* iniciamos resultado e interpretacion como string vacíos */
  constructor(route: ActivatedRoute) {
    this.resultado = '';
    this.imc = +route.snapshot.paramMap.get('valor')!;
    this.interpretacion = '';
   }

  ngOnInit(): void {
    /* indicamos el metodo get resultado para que se inicie al iniciar el componente */
    this.getResultado();
  }

  /* metodo GET RESULTADO */
  getResultado(){
    if(this.imc >= 25){
      this.resultado = "Sobrepeso";
      this.interpretacion = "Debes intentar comer más saludable y hacer algo de ejercicio para bajar de peso y tener un peso saludable.";
    } else if (this.imc>= 18.5) {
      this.resultado = "Peso normal";
      this.interpretacion = "Estás dentro de tu peso ideal. ¡Enhorabuena y sigue así!";
    } else {
      this.resultado = "Bajo peso";
      this.interpretacion = "Estás por debajo de tu peso ideal. Debes intentar comer más para alcanzarlo.";
    }
  }

}
