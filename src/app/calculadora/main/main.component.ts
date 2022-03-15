import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  resultado:string="";

  resultadoCalculo(result:string){
    this.resultado = result;
    console.log("Padre:",this.resultado);
  }




  ngOnInit(): void {
  }

}
