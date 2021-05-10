import { Component, OnInit } from '@angular/core';
/* IMPORTACION DEL ROUTER */
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //variables edad y peso dinamico
  edad = 25;
  peso = 60;
  altura = 160;
  sexo ='Masculino';

  /* para poder hacer el router DESDE ARCHIVO TS */
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /* metodo cambiarAltura */
  cambiarAltura(event: any){
    this.altura = event.target.value;
  }

  masculino(){
    this.sexo = 'Masculino';
  }

  femenino(){
    this.sexo = 'Femenino';
  }

  calcularIMC(){
    //CALCULOS para calcular el IMC y luego renderizamos al componente resultado
    /* formula IMC = peso/altura en m por eso dividimos entre 100 al tener cm, */
    /* funcion matematica Math.pow para elevar, y el 2 es de elevado al cuadrado */
    const IMC = this.peso / Math.pow(this.altura/100, 2);
    /* TOFIXED ES PARA REDONDER CON 1 DECIMAL EN ESTE CASO */
    /* routing O routeo a COMPONENTE RESULTADO */
    this.router.navigate(['/resultado', (IMC.toFixed(1))]);
  }
}
