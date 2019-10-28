import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  getUsuario;
  novoUsuario;
  router: Router;
  conversaoUsuario;

  constructor(private usuario: AppComponent, private route:ActivatedRoute, http: Router, router: Router){this.router = router;}

  ngOnInit() {
    this.getUsuario = JSON.parse(localStorage.getItem('cadastro'));
    console.log(this.getUsuario);
  }

  editar(id: string){
      this.router.navigateByUrl('/editar/'+id);
  }

  excluir(id){
    for(var indice = 0 ; indice < this.getUsuario.length ; indice++){
      if(this.getUsuario[indice].id == id){
        this.getUsuario.splice(indice, 1);
        console.log(this.getUsuario);
        localStorage.removeItem('cadastro');
        this.conversaoUsuario = JSON.stringify(this.getUsuario);
        localStorage.setItem('cadastro', this.conversaoUsuario);
        this.usuario.setUsuario = this.getUsuario;
        alert('Excluído com sucesso!');
      }
    }
  }
}
