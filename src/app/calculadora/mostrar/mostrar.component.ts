import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  @Input() result:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
