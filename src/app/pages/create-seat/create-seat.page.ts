import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonTitle,
  IonButton,
  IonAlert,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../../components/header/header.component';
import { SeatPickerComponent } from '../../components/seat-picker/seat-picker.component';
import { Seat } from 'src/app/models/seat';
import { SeatsService } from 'src/app/services/seats.service';
import { AuthService } from 'src/app/services/auth.service';
import { supabase } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-create-seat',
  templateUrl: './create-seat.page.html',
  styleUrls: ['./create-seat.page.scss'],
  standalone: true,
  imports: [
    IonAlert,
    IonButton,
    IonContent,
    IonTitle,
    CommonModule,
    FormsModule,
    HeaderComponent,
    SeatPickerComponent,
  ],
})
export class CreateSeatPage {
  seat: Seat | undefined;

  isAlertOpen = false;
  alertButtons = ['OK'];

  constructor(private seatsService: SeatsService) {}

  async createSeat() {
    const userId = (await supabase.auth.getUser()).data.user?.id;

    try {
      if (
        this.seat?.train &&
        this.seat?.totalWagons &&
        this.seat?.yourWagon &&
        this.seat?.floor &&
        this.seat?.from &&
        this.seat?.to &&
        this.seat?.dateTime &&
        this.seat?.seat &&
        userId
        // && this.seat?.image
      ) {
        await this.seatsService.addSeat({
          train: this.seat.train,
          date_time: this.seat.dateTime,
          floor: this.seat.floor as unknown as number,
          from: this.seat.from,
          seat: this.seat.seat as unknown as number,
          to: this.seat.to,
          total_wagons: this.seat.totalWagons as unknown as number,
          your_wagon: this.seat.yourWagon as unknown as number,
          image: this.seat.image,
          user_id: userId,
        });
      } else {
        this.isAlertOpen = true;
      }
    } catch (error) {
      console.error('Error fetching seats:', error);
    }
  }

  setSeat(seat: Seat) {
    this.seat = seat;
  }

  closeAlert() {
    this.isAlertOpen = false;
  }
}
