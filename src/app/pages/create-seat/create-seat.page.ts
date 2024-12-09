import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonTitle } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../components/header/header.component';
import { SeatPickerComponent } from '../../components/seat-picker/seat-picker.component';

@Component({
  selector: 'app-create-seat',
  templateUrl: './create-seat.page.html',
  styleUrls: ['./create-seat.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonTitle,
    CommonModule,
    FormsModule,
    HeaderComponent,
    SeatPickerComponent,
  ],
})
export class CreateSeatPage {
  constructor() {}
}
