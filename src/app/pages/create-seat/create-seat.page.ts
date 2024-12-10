import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonTitle, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../components/header/header.component';
import { SeatPickerComponent } from '../../components/seat-picker/seat-picker.component';
import { Seat } from 'src/app/models/seat';

@Component({
  selector: 'app-create-seat',
  templateUrl: './create-seat.page.html',
  styleUrls: ['./create-seat.page.scss'],
  standalone: true,
  imports: [
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
  constructor() {}

  createSeat() {
    console.log('Seat created with values:', this.seat);
  }

  setSeat(seat: Seat) {
    this.seat = seat;
  }
}
