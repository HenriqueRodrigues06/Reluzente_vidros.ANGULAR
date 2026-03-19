import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecalho } from './components/cabecalho/cabecalho';
import { Home } from './pages/home/home';
import { Rodape } from './components/rodape/rodape';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Cabecalho,
    Rodape,
    RouterOutlet
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('reluzente_vidros');
}
