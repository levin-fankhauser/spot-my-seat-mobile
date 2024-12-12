import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Seat } from 'src/app/models/seat';
import { SeatsService } from 'src/app/services/seats.service';
import { HeaderComponent } from '../../components/header/header.component';
import { SeatPickerComponent } from '../../components/seat-picker/seat-picker.component';
import { toastController } from '@ionic/core';

@Component({
  selector: 'app-edit-seat',
  templateUrl: './edit-seat.page.html',
  styleUrls: ['./edit-seat.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderComponent,
    SeatPickerComponent,
  ],
})
export class EditSeatPage implements OnInit {
  seatId: string | null = null;
  seat: Seat | undefined;

  isAlertOpen = false;
  alertButtons = ['OK'];

  constructor(
    private seatsService: SeatsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    this.seatId = this.route.snapshot.paramMap.get('id');

    if (this.seatId) {
      this.seat = await this.seatsService.getSeatById(this.seatId);
      if (!this.seat) {
        this.router.navigateByUrl('/home');
        this.isAlertOpen = true;
      }
    }
  }

  async editSeat() {
    try {
      if (
        this.seatId &&
        this.seat?.train &&
        this.seat?.totalWagons &&
        this.seat?.yourWagon &&
        this.seat?.floor &&
        this.seat?.from &&
        this.seat?.to &&
        this.seat?.dateTime &&
        this.seat?.seat &&
        this.seat?.image
      ) {
        await this.seatsService.updateSeat(this.seatId, {
          train: this.seat.train,
          date_time: this.seat.dateTime,
          floor: this.seat.floor as unknown as number,
          from: this.seat.from,
          seat: this.seat.seat as unknown as number,
          to: this.seat.to,
          total_wagons: this.seat.totalWagons as unknown as number,
          your_wagon: this.seat.yourWagon as unknown as number,
          image: this.seat.image,
        });
        const toast = await toastController.create({
          message: 'Seat edited successfully!',
          duration: 1500,
        });
        await toast.present();
        this.router.navigateByUrl('/manage');
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
