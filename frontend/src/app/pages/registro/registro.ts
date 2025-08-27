import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})
export class Registro {
  usuario = {
    nombre: '',
    email: '',
    password: ''
  };

  registrar() {
    console.log('Registro enviado:', this.usuario);
    alert('¡Bienvenido al mundo cyberpunk, ' + this.usuario.nombre + '!');
  }
}
