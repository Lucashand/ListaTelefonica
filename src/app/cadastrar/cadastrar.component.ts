import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  nome: string;
  telefone: string;
  email: string;
  sexo: string;
  conversaoUsuario;
  router: Router;

  constructor(private usuario: AppComponent, http: Router, router: Router) {this.router = router;}
  ngOnInit() {
  }

  cadastrar(){

    this.usuario.setUsuario.push(
      {id: this.usuario.id, nome: this.nome, telefone: this.telefone, email: this.email, sexo: this.sexo}
    );
    console.log(this.usuario.setUsuario);
    this.conversaoUsuario = JSON.stringify(this.usuario.setUsuario);
    localStorage.setItem('cadastro', this.conversaoUsuario);
    this.usuario.id++;
    alert('Cadastro efetuado com sucesso!');
    this.router.navigateByUrl('/listar');
  }
}
