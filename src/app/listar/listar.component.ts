import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  getUsuario;

  constructor() { }

  ngOnInit() {
    this.getUsuario = JSON.parse(localStorage.getItem('cadastro'));
    console.log(this.getUsuario);
    console.log(this.getUsuario[0].nome);

  }
}
