import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonTitle,
  IonButton,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../../components/header/header.component';
import { Router } from '@angular/router';
import { supabase } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonButton,
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

  async getSession() {
    const session = await supabase.auth.getUser();
    console.log(session);
  }
}
