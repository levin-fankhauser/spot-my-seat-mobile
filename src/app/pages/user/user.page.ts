import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../components/header/header.component';
import { supabase } from 'src/app/services/supabase.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent],
})
export class UserPage implements OnInit {
  user = '';
  constructor(private authService: AuthService) {}

  async ngOnInit() {
    this.user = (await supabase.auth.getUser()).data.user?.email ?? 'User';
  }

  async singOut() {
    await this.authService.signOut();
  }
}
