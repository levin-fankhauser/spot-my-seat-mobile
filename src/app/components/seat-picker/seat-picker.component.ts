import { Component } from '@angular/core';
import {
  IonInput,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  IonDatetimeButton,
  IonModal,
  IonButton,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { camera } from 'ionicons/icons';

@Component({
  selector: 'app-seat-picker',
  templateUrl: './seat-picker.component.html',
  styleUrls: ['./seat-picker.component.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonIcon,
    IonButton,
    IonModal,
    IonDatetimeButton,
    IonDatetime,
    IonInput,
    IonSelect,
    IonSelectOption,
  ],
})
export class SeatPickerComponent {
  trainValue = 'ir27';
  totalWagonsValue = '8';
  yourWagonValue = '';
  floorValue = '1';
  fromValue = 'Basel';
  toValue = 'Bern';

  constructor() {
    addIcons({ camera });
  }
}
