import { Injectable } from '@angular/core';
import { supabase } from './supabase.service';
import { Seat } from '../models/seat';

@Injectable({
  providedIn: 'root',
})
export class SeatsService {
  private table = 'seats';

  constructor() {}

  async getAllSeatsForUser() {
    const userId = (await supabase.auth.getUser()).data.user?.id;

    const { data, error } = await supabase
      .from(this.table)
      .select('*')
      .eq('user_id', userId);
    if (error) throw error;

    const seat: Seat[] = data.map((seat) => ({
      dateTime: seat.date_time,
      floor: seat.floor,
      from: seat.from,
      id: seat.id,
      image: seat.image,
      seat: seat.seat,
      to: seat.to,
      totalWagons: seat.total_wagons,
      train: seat.train,
      yourWagon: seat.your_wagon,
      userId: seat.user_id,
    }));

    return seat;
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

  async deleteSeat(seatId: string) {
    const { error } = await supabase.from(this.table).delete().eq('id', seatId);

    if (error) throw error;
  }
}