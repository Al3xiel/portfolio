import {Component, computed, inject} from '@angular/core';
import {LayoutService} from '../../service/layout.service';
import {NgClass} from '@angular/common';
import {Button} from 'primeng/button';
import {StyleClass} from 'primeng/styleclass';
import {ThemeSelector} from '../theme-selector/theme-selector';
import {LanguageSwitcher} from '../language-switcher/language-switcher';

@Component({
  selector: 'app-topbar',
  imports: [
    NgClass,
    Button,
    StyleClass,
    ThemeSelector,
    LanguageSwitcher
  ],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar {
  layoutService: LayoutService = inject(LayoutService);
  isDarkMode = computed(() => this.layoutService.appState().darkMode);

  toggleDarkMode() {
    this.layoutService.appState.update((state) => ({
      ...state,
      darkMode: !state.darkMode,
    }));
  }
}
