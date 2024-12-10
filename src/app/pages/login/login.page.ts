import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { HeaderComponent } from '../../components/header/header.component';
import { Router } from '@angular/router';
import { supabase } from 'src/app/services/supabase.service';

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

  constructor(private router: Router, private authService: AuthService) {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        console.log('User logged in:', session.user);
        this.router.navigateByUrl('/home');
      } else {
        console.log('User logged out');
      }
    });
  }

  async login() {
    const { error } = await this.authService.signIn(this.email, this.password);
    if (error) {
      console.error('Login failed:', error.message);
    } else {
      console.log('Login successful');
    }
  }

  routeTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
