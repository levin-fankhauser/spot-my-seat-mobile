import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonContent } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/services/auth.service';
import { HeaderComponent } from '../../components/header/header.component';

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

  constructor(private authService: AuthService, private router: Router) {}

  async register() {
    try {
      const { email, password } = this;
      const { data, error } = await this.authService.signUp(email, password);

      if (error) {
        console.error('Registrierung fehlgeschlagen:', error.message);
        alert('Registrierung fehlgeschlagen: ' + error.message);
      } else {
        console.log('Registrierung erfolgreich:', data);
        this.router.navigate(['/login']);
      }
    } catch (err) {
      console.error('Fehler beim Registrieren:', err);
      alert('Ein Fehler ist aufgetreten.');
    }
  }

  routeTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
