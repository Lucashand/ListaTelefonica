import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id;
  nome: string;
  telefone: string;
  email: string;
  sexo: string;
  getUsuario;
  novoUsuario;
  conversaoUsuario;
  router: Router;

  constructor(private route:ActivatedRoute, http: Router, router: Router) {this.router = router;}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getUsuario = JSON.parse(localStorage.getItem('cadastro'));
    console.log('AQUI >>>>>>>>>>>>>>>');
    console.log(this.getUsuario);
    for(var item of this.getUsuario){
        console.log(item);
        if(item.id == this.id){
          this.nome = item.nome;
          this.telefone = item.telefone;
          this.email = item.email;
          this.sexo = item.sexo;
        }
    }
    this.novoUsuario = this.getUsuario;
  }

  editar(){
    for(var indice = 0 ; indice < this.novoUsuario.length ; indice++){
      if(this.novoUsuario[indice].id == this.id){
        this.novoUsuario[indice].nome = this.nome;
        this.novoUsuario[indice].telefone = this.telefone;
        this.novoUsuario[indice].email = this.email;
        this.novoUsuario[indice].sexo = this.sexo;
        console.log(this.novoUsuario);
        localStorage.removeItem('cadastro');
        this.conversaoUsuario = JSON.stringify(this.novoUsuario);
        localStorage.setItem('cadastro', this.conversaoUsuario);
        alert('Alterado com sucesso!');
        this.router.navigateByUrl('/listar');
      }
      
    }
  } 

}
