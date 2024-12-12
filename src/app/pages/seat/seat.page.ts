import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../components/header/header.component';
import { SeatsService } from 'src/app/services/seats.service';
import { Seat } from 'src/app/models/seat';
import { S3DisplayComponent } from '../../components/trains/s3-display/s3-display.component';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.page.html',
  styleUrls: ['./seat.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderComponent,
    S3DisplayComponent,
  ],
})
export class SeatPage implements OnInit {
  seat: Seat | undefined;
  seatId: string | null = null;
  seatNumber: number | undefined;
  dateTime: string | undefined;

  isAlertOpen = false;
  alertButtons = ['OK'];

  constructor(
    private route: ActivatedRoute,
    private seatsService: SeatsService,
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

      this.seatNumber = this.seat.seat as unknown as number;
      this.dateTime = new Date(this.seat.dateTime).toLocaleString();
    }
  }
}
