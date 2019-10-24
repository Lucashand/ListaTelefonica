import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  nome: string;
  telefone: string;
  email: string;
  conversaoUsuario;

  constructor(private usuario: AppComponent) { } 

  ngOnInit() {
  }

  cadastrar(){

    this.usuario.setUsuario.push(
      {nome: this.nome, telefone: this.telefone, email: this.email}
    );

    console.log(this.usuario.setUsuario);
    this.conversaoUsuario = JSON.stringify(this.usuario.setUsuario);
    localStorage.setItem('cadastro', this.conversaoUsuario);
    alert('Cadastro efetuado com sucesso!');
  }
}
