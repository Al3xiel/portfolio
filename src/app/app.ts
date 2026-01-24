import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PrimeNG} from 'primeng/config';
import {Topbar} from './shared/components/topbar/topbar';
import {BioCard} from './shared/components/bio-card/bio-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Topbar, BioCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
  constructor(private primeng: PrimeNG) {}

  ngOnInit() {
    this.primeng.ripple.set(true);
  }

}
