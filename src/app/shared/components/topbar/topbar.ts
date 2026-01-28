import {Component, computed, inject, OnInit} from '@angular/core';
import {LayoutService} from '../../service/layout.service';
import {NgClass} from '@angular/common';
import {Button} from 'primeng/button';
import {StyleClass} from 'primeng/styleclass';
import {ThemeSelector} from '../theme-selector/theme-selector';
import {LanguageSwitcher} from '../language-switcher/language-switcher';
import { MenubarModule } from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-topbar',
  imports: [
    NgClass,
    Button,
    StyleClass,
    ThemeSelector,
    LanguageSwitcher,
    MenubarModule
  ],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar implements OnInit {
  router = inject(Router);
  layoutService: LayoutService = inject(LayoutService);
  isDarkMode = computed(() => this.layoutService.appState().darkMode);
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
          this.router.navigate(['/home']);
        }
      },
      {
        label: 'Projects',
        icon: 'pi pi-briefcase',
        command: () => {
          this.router.navigate(['/projects']);
        }
      }
      ];
  }
  toggleDarkMode() {
    this.layoutService.appState.update((state) => ({
      ...state,
      darkMode: !state.darkMode,
    }));
  }
}
