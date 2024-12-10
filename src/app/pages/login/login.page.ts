import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonInput } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../components/header/header.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonInput,
    IonButton,
    IonContent,
    CommonModule,
    FormsModule,
    HeaderComponent,
  ],
})
export class LoginPage {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  async login() {
    console.log(this.email);
    console.log(this.password);

    const { error } = await this.authService.signIn(this.email, this.password);
    if (error) {
      console.error('Login failed:', error.message);
    } else {
      console.log('Login successful');
    }
  }

  setEmail(event: CustomEvent) {
    this.email = event.detail.value;
  }

  setPassword(event: CustomEvent) {
    this.password = event.detail.value;
  }
}
