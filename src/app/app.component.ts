import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
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
    RouterLink,
    RouterLinkActive,
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
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/', icon: 'home' },
    { title: 'Set your Seat', url: '/', icon: 'train' },
    { title: 'Blog', url: '/', icon: 'chatbubbles' },
    { title: 'Search Seat by ID', url: '/', icon: 'search' },
    { title: 'Manage my Seats', url: '/', icon: 'cog' },
  ];
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
}
