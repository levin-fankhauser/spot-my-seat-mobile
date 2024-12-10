import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonDatetime,
  IonDatetimeButton,
  IonIcon,
  IonInput,
  IonModal,
  IonSelect,
  IonSelectOption,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { camera } from 'ionicons/icons';
import { S3Component } from '../trains/s3/s3.component';
import { Seat } from 'src/app/models/seat';

@Component({
  selector: 'app-seat-picker',
  templateUrl: './seat-picker.component.html',
  styleUrls: ['./seat-picker.component.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonButton,
    IonModal,
    IonDatetimeButton,
    IonDatetime,
    IonInput,
    IonSelect,
    IonSelectOption,
    S3Component,
    FormsModule,
  ],
})
export class SeatPickerComponent {
  @Output()
  seat = new EventEmitter<Seat>();

  trainValue: 's3' = 's3';
  totalWagonsValue = '8';
  yourWagonValue = '';
  floorValue: '0' | '1' = '1';
  fromValue = 'Basel';
  toValue = 'Bern';
  dateTimeValue = new Date().toISOString();
  imageValue = '';
  seatValue = '';

  constructor() {
    addIcons({ camera });
  }

  setSeatValue(seatValue: string) {
    this.seatValue = seatValue;
    this.onInputChange();
  }

  onInputChange() {
    const seat: Seat = {
      train: this.trainValue,
      totalWagons: this.totalWagonsValue,
      yourWagon: this.yourWagonValue,
      floor: this.floorValue,
      from: this.fromValue,
      to: this.toValue,
      dateTime: this.dateTimeValue,
      image: this.imageValue,
      seat: this.seatValue,
    };

    this.seat.emit(seat);
  }
}
