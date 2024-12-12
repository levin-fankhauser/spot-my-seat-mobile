import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
import { GeolocatorService } from 'src/app/services/geolocation.service';

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
export class SeatPickerComponent implements OnInit {
  @Output()
  seat = new EventEmitter<Seat>();

  @Input()
  initialSeat: Seat | undefined | null;

  trainValue: 's3' = 's3';
  totalWagonsValue = '8';
  yourWagonValue = '';
  floorValue: '0' | '1' = '1';
  fromValue = '';
  toValue = '';
  dateTimeValue = new Date().toISOString();
  imageValue = '';
  seatValue = '';

  photo: File | undefined;

  constructor(
    private seatService: SeatsService,
    private geolocationService: GeolocatorService
  ) {
    addIcons({ camera });
  }

  ngOnInit(): void {
    this.getCurrentLocation();
    if (this.initialSeat) {
      this.trainValue = this.initialSeat.train;
      this.totalWagonsValue = this.initialSeat.totalWagons;
      this.yourWagonValue = this.initialSeat.yourWagon;
      this.floorValue =
        (this.initialSeat.floor as unknown as number) == 0 ? '0' : '1';
      this.fromValue = this.initialSeat.from;
      this.toValue = this.initialSeat.to;
      this.dateTimeValue = this.initialSeat.dateTime;
      this.imageValue = this.initialSeat.image;
      this.seatValue = (this.initialSeat.seat as unknown as number).toString();
    }
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

  async getCurrentLocation() {
    const position = await this.geolocationService.getCurrentPositionName();
    position.subscribe((position: any) => {
      this.fromValue = position.address.village;
    });
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
        this.onInputChange();
      } catch (error) {
        console.error('Error uploading photo:', error);
      }
    }
  }
}
