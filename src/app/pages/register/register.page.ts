import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { HeaderComponent } from '../../components/header/header.component';
import { toastController } from '@ionic/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, IonicModule],
})
export class RegisterPage {
  email: string = '';
  password: string = '';

  isAlertOpen = false;
  alertButtons = ['OK'];
  alertHeader = 'Register failed';
  alertMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  async register() {
    try {
      const { email, password } = this;
      const { data, error } = await this.authService.signUp(email, password);

      if (error) {
        this.isAlertOpen = true;
        this.alertMessage = error.message;
      } else {
        console.log('Registrierung erfolgreich:', data);
        const toast = await toastController.create({
          message: 'Account created successfully!',
          duration: 1500,
        });
        await toast.present();
        this.router.navigateByUrl('/home');
      }
    } catch (err) {
      console.error('Fehler beim Registrieren:', err);
      alert('Ein Fehler ist aufgetreten.');
    }
  }

  routeTo(path: string) {
    this.router.navigateByUrl(path);
  }

  closeAlert() {
    this.isAlertOpen = false;
  }
}
