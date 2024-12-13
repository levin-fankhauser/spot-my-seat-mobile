import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { HeaderComponent } from '../../components/header/header.component';
import { Router } from '@angular/router';
import { supabase } from 'src/app/services/supabase.service';
import { toastController } from '@ionic/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, IonicModule],
})
export class LoginPage {
  email = '';
  password = '';

  isAlertOpen = false;
  alertButtons = ['OK'];
  alertHeader = 'Login failed';
  alertMessage = '';

  constructor(private router: Router, private authService: AuthService) {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        this.showToast();
        this.router.navigateByUrl('/home');
      }
    });
  }

  async login() {
    const { error } = await this.authService.signIn(this.email, this.password);
    if (error) {
      this.isAlertOpen = true;
      this.alertMessage =
        error.message.charAt(0).toUpperCase() + error.message.slice(1);
    } else {
      console.log('Login successful');
    }
  }

  routeTo(path: string) {
    this.router.navigateByUrl(path);
  }

  async showToast() {
    const toast = await toastController.create({
      message: 'Hi! Logged in successfully!',
      duration: 2000,
    });
    await toast.present();
  }

  closeAlert() {
    this.isAlertOpen = false;
  }
}
