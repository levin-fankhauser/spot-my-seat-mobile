import { Component } from '@angular/core';
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
  ],
})
export class SeatPickerComponent {
  trainValue = 's3';
  totalWagonsValue = '8';
  yourWagonValue = '';
  floorValue = '1';
  fromValue = 'Basel';
  toValue = 'Bern';

  constructor() {
    addIcons({ camera });
  }
}
