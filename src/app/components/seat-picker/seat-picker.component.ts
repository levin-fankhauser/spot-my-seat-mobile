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
import { Seat } from 'src/app/models/seat';
import { S3Component } from '../trains/s3/s3.component';
import { SeatsService } from 'src/app/services/seats.service';
import { CommonModule } from '@angular/common';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

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
    CommonModule,
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

  photo: File | undefined;

  constructor(private seatService: SeatsService) {
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

  pickImage() {
    const fileInput = document.querySelector(
      'input[type="file"]'
    ) as HTMLElement;
    fileInput.click();
  }

  async takePhoto() {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const fileName = Date.now() + '.jpeg';

    const file = await this.urlToFile(photo.webPath!, fileName, 'image/jpeg');

    if (file) {
      this.uploadImage(file);
    }
  }

  private async urlToFile(
    url: string,
    fileName: string,
    mimeType: string
  ): Promise<File> {
    const response = await fetch(url);
    const blob = await response.blob();
    return new File([blob], fileName, { type: mimeType });
  }

  async uploadImage(file: File) {
    if (file) {
      try {
        this.imageValue = await this.seatService.uploadPhoto(file);
        console.log('Uploaded URL:', this.imageValue);
      } catch (error) {
        console.error('Error uploading photo:', error);
      }
    }
  }
}
