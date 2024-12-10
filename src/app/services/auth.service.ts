import { Injectable } from '@angular/core';
import { supabase } from './supabase.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  async signUp(email: string, password: string) {
    return await supabase.auth.signUp({ email, password });
  }

  async signIn(email: string, password: string) {
    return await supabase.auth.signInWithPassword({ email, password });
  }

  async signOut() {
    this.router.navigateByUrl('/home');
    return await supabase.auth.signOut();
  }

  async resetPassword(email: string) {
    return await supabase.auth.resetPasswordForEmail(email);
  }

  async isUserLoggedIn() {}
}
