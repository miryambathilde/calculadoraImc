import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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
}
