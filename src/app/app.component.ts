import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterLink,
  IonRouterOutlet,
  IonSplitPane,
  IonToggle,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  bookmark,
  bookmarkOutline,
  bookmarkSharp,
  chatbubbles,
  chatbubblesOutline,
  chatbubblesSharp,
  cog,
  cogOutline,
  cogSharp,
  home,
  homeOutline,
  homeSharp,
  search,
  searchOutline,
  searchSharp,
  train,
  trainOutline,
  trainSharp,
} from 'ionicons/icons';
import { PrefrencesService } from './services/prefrences.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonToggle,
    RouterLink,
    CommonModule,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonNote,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterLink,
    IonRouterOutlet,
    FormsModule,
  ],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Home', url: '/', icon: 'home' },
    { title: 'Set your Seat', url: '/create-seat', icon: 'train' },
    { title: 'Blog', url: '/', icon: 'chatbubbles' },
    { title: 'Search Seat by ID', url: '/', icon: 'search' },
    { title: 'Manage my Seats', url: '/manage', icon: 'cog' },
  ];
  paletteToggle = false;

  constructor(private preferencesService: PrefrencesService) {
    addIcons({
      home,
      homeOutline,
      homeSharp,
      bookmark,
      bookmarkOutline,
      bookmarkSharp,
      train,
      trainOutline,
      trainSharp,
      chatbubbles,
      chatbubblesOutline,
      chatbubblesSharp,
      search,
      searchOutline,
      searchSharp,
      cog,
      cogOutline,
      cogSharp,
    });
  }

  async ngOnInit() {
    // Lade die Präferenz für Dark Mode aus dem Service
    const isDarkMode = await this.preferencesService.isDarkMode();

    // Setze das Theme basierend auf den Präferenzen
    this.initializeDarkPalette(isDarkMode);

    // Beobachte Änderungen an den Systemeinstellungen und synchronisiere sie
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    prefersDark.addEventListener('change', (mediaQuery) =>
      this.initializeDarkPalette(mediaQuery.matches)
    );
  }

  initializeDarkPalette(isDark: boolean) {
    this.paletteToggle = isDark;
    this.toggleDarkPalette(isDark);
  }

  toggleChange() {
    this.preferencesService.setTheme(this.paletteToggle);
    this.toggleDarkPalette(this.paletteToggle);
  }

  toggleDarkPalette(shouldAdd: boolean) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }
}
