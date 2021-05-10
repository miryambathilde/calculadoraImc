import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  imc: number;

  /* como imc es de tipo number parseamos el string route.snapshot.paramMap.get('valor') poniendo delante un + Y ASÍ
  LO CONVERTIMOS EN TIPO NUMBER */
  constructor(route: ActivatedRoute) {
    this.imc = +route.snapshot.paramMap.get('valor')!;
   }

  ngOnInit(): void {
  }

}
