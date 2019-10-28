import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  getUsuario;
  router: Router;

  constructor(http: Router, router: Router){this.router = router;}

  ngOnInit() {
    this.getUsuario = JSON.parse(localStorage.getItem('cadastro'));
    console.log(this.getUsuario);
  }

  editar(id: string){
      this.router.navigateByUrl('/editar/'+id);
  }
}
