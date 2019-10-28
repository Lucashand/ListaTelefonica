import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ListaTelefonica';

  public setUsuario = [];
  public id = 1;

  resetar(){
    this.setUsuario = [];
    this.id = 1;
    localStorage.clear();
  }
}
