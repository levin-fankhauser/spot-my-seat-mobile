import { Injectable } from '@angular/core';
import { supabase } from './supabase.service';

@Injectable({
  providedIn: 'root',
})
export class SeatsService {
  private table = 'seats';

  constructor() {}

  async getAllSeats() {
    const { data, error } = await supabase.from(this.table).select('*');
    if (error) throw error;
    return data;
  }

  async addSeat(seat: {
    train: string;
    total_wagons: number;
    your_wagon: number;
    floor: number;
    from: string;
    to: string;
    date_time: string;
    seat: number;
    image?: string;
    user_id: string;
  }) {
    console.log('Seat created with values:', seat);

    const { data, error } = await supabase
      .from(this.table)
      .insert([seat])
      .select();

    if (error) throw error;
    return data;
  }
}
