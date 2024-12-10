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
  ],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Home', url: '/', icon: 'home' },
    { title: 'Set your Seat', url: '/create-seat', icon: 'train' },
    { title: 'Blog', url: '/', icon: 'chatbubbles' },
    { title: 'Search Seat by ID', url: '/', icon: 'search' },
    { title: 'Manage my Seats', url: '/', icon: 'cog' },
  ];
  paletteToggle = false;

  constructor() {
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

  ngOnInit() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    this.initializeDarkPalette(prefersDark.matches);

    prefersDark.addEventListener('change', (mediaQuery) =>
      this.initializeDarkPalette(mediaQuery.matches)
    );
  }

  initializeDarkPalette(isDark: boolean) {
    this.paletteToggle = isDark;
    this.toggleDarkPalette(isDark);
  }

  toggleChange(ev: CustomEvent) {
    this.toggleDarkPalette(ev.detail.checked);
  }

  toggleDarkPalette(shouldAdd: boolean) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }
}
