import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.css']
})
export class CalcularComponent implements OnInit {

  num1:number=0;
  num2:number=0;
  resultado:string="";

  @Output() resultadoEvent:EventEmitter<string>= new EventEmitter();


  sumar():void{
    console.log("aqui");
    this.resultado = "El resultado es: "+String(this.num1+this.num2);
    this.resultadoEvent.emit(this.resultado);
  }
  restar():void{
    console.log("aqui");
    this.resultado = "El resultado es: "+String(this.num1-this.num2);
    this.resultadoEvent.emit(this.resultado);
  }
  multiplicar():void{
    console.log("aqui");
    this.resultado = "El resultado es: "+String(this.num1*this.num2);
    this.resultadoEvent.emit(this.resultado);
  }
  dividir():void{
    console.log("aqui");
    this.resultado = "El resultado es: "+String(this.num1/this.num2);
    this.resultadoEvent.emit(this.resultado);
  }
  limpiar():void{
    console.log("aqui");
    this.resultado = "";
    this.num1=0;
    this.num2=0;
    this.resultadoEvent.emit(this.resultado);
  }

  ngOnInit(): void {
  }

}
