import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonTitle,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonContent,
    IonTitle,
    CommonModule,
    FormsModule,
    HeaderComponent,
  ],
})
export class HomePage {
  constructor(private router: Router) {}

  routeTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
