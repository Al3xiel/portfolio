import {Component, computed, inject, Input, PLATFORM_ID} from '@angular/core';
import {Router} from '@angular/router';
import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
import {PrimeNG} from 'primeng/config';
import {LayoutService} from '../../service/layout.service';
import {isPlatformBrowser, NgClass, NgStyle} from '@angular/common';
import {$t, updatePreset} from '@primeuix/themes';

const presets = {
  Aura,
  Lara,
} as const;

declare type KeyOfType<T> = keyof T extends infer U ? U : never;

export interface ColorPalette {
  name?: string;
  palette?: {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    950?: string;
  };
};

const MY_CUSTOM_PALETTES: ColorPalette[] = [
  {
    name: 'blue',
    palette: {
      50: '#e8f1ff',
      100: '#d5e4ff',
      200: '#b3ccff',
      300: '#85a8ff',
      400: '#5676ff',
      500: '#2f45ff',
      600: '#0c0eff',
      700: '#0000ff',
      800: '#0609cd',
      900: '#10169f',
      950: '#0a0b5c'
    }
  },
  {
    name: 'red',
    palette: {
      50: '#fff0f0',
      100: '#ffdddd',
      200: '#ffc0c0',
      300: '#ff9494',
      400: '#ff5757',
      500: '#ff2323',
      600: '#ff0000',
      700: '#d70000',
      800: '#b10303',
      900: '#920a0a',
      950: '#500000'
    }
  },
  {
    name: 'sage',
    palette: {
      50: '#f5f8f7',
      100: '#ddeae5',
      200: '#b3d0c6',
      300: '#90b8ac',
      400: '#69988b',
      500: '#4f7d71',
      600: '#3e635a',
      700: '#34514b',
      800: '#2d423e',
      900: '#283935',
      950: '#13201d'
    }
  }
];

@Component({
  selector: 'app-theme-selector',
  imports: [
    NgClass,
    NgStyle
  ],
  templateUrl: './theme-selector.html',
  styleUrl: './theme-selector.scss',
})
export class ThemeSelector {
  @Input() simple: boolean = false;

  router = inject(Router);
  config: PrimeNG = inject(PrimeNG);
  layoutService: LayoutService = inject(LayoutService);
  platformId = inject(PLATFORM_ID);
  primeng = inject(PrimeNG);
  presets = Object.keys(presets);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.onPresetChange(this.layoutService.appState().preset);
    }
  }

  selectedPrimaryColor = computed(() => {
    return this.layoutService.appState().primary;
  });

  selectedPreset = computed(() => this.layoutService.appState().preset);

  isDarkMode = computed(() => this.layoutService.appState().darkMode);

  selectedSurface = computed(() => this.layoutService.appState().surface);

  primaryColors = computed<ColorPalette[]>(() => {
    const presetPalette =
      presets[this.layoutService.appState().preset as KeyOfType<typeof presets>]
        .primitive;
    const baseColors = [
      'emerald',
      'amber',
      'cyan',
      'indigo',
      'fuchsia',
    ];
    const palettes: ColorPalette[] = [];

    baseColors.forEach((color) => {
      palettes.push({
        name: color,
        palette: presetPalette?.[
          color as KeyOfType<typeof presetPalette>
          ] as ColorPalette['palette'],
      });
    });
    return [...MY_CUSTOM_PALETTES, ...palettes];
  });

  getPresetExt() {
    const color: ColorPalette =
      this.primaryColors().find(
        (c) => c.name === this.selectedPrimaryColor()
      ) || {};

    if (color.name === 'noir') {
      return {
        semantic: {
          primary: {
            50: '{surface.50}',
            100: '{surface.100}',
            200: '{surface.200}',
            300: '{surface.300}',
            400: '{surface.400}',
            500: '{surface.500}',
            600: '{surface.600}',
            700: '{surface.700}',
            800: '{surface.800}',
            900: '{surface.900}',
            950: '{surface.950}',
          },
          colorScheme: {
            light: {
              primary: {
                color: '{primary.950}',
                contrastColor: '#ffffff',
                hoverColor: '{primary.800}',
                activeColor: '{primary.700}',
              },
              highlight: {
                background: '{primary.950}',
                focusBackground: '{primary.700}',
                color: '#ffffff',
                focusColor: '#ffffff',
              },
            },
            dark: {
              primary: {
                color: '{primary.50}',
                contrastColor: '{primary.950}',
                hoverColor: '{primary.200}',
                activeColor: '{primary.300}',
              },
              highlight: {
                background: '{primary.50}',
                focusBackground: '{primary.300}',
                color: '{primary.950}',
                focusColor: '{primary.950}',
              },
            },
          },
        },
      };
    } else {
      return {
        semantic: {
          primary: color.palette,
          colorScheme: {
            light: {
              primary: {
                color: '{primary.500}',
                contrastColor: '#ffffff',
                hoverColor: '{primary.600}',
                activeColor: '{primary.700}',
              },
              highlight: {
                background: '{primary.50}',
                focusBackground: '{primary.100}',
                color: '{primary.700}',
                focusColor: '{primary.800}',
              },
            },
            dark: {
              primary: {
                color: '{primary.400}',
                contrastColor: '{surface.900}',
                hoverColor: '{primary.300}',
                activeColor: '{primary.200}',
              },
              highlight: {
                background:
                  'color-mix(in srgb, {primary.400}, transparent 84%)',
                focusBackground:
                  'color-mix(in srgb, {primary.400}, transparent 76%)',
                color: 'rgba(255,255,255,.87)',
                focusColor: 'rgba(255,255,255,.87)',
              },
            },
          },
        },
      };
    }
  }

  updateColors(event: any, type: string, color: any) {
    if (type === 'primary') {
      this.layoutService.appState.update((state: any) => ({
        ...state,
        primary: color.name,
      }));
    }
    updatePreset(this.getPresetExt());
    event.stopPropagation();
  }

  onPresetChange(event: any) {
    this.layoutService.appState.update((state: any) => ({
      ...state,
      preset: event,
    }));
    const preset = presets[event as KeyOfType<typeof presets>];

    $t()
      .preset(preset)
      .preset(this.getPresetExt())
      .use({ useDefaultOptions: true });
  }

  toggleDarkMode() {
    this.executeDarkModeToggle();
  }

  executeDarkModeToggle() {
    this.layoutService.appState.update((state) => ({
      ...state,
      darkMode: !state.darkMode,
    }));
  }
}
