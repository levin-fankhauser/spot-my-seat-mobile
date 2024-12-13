import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { SeatItemComponent } from '../../components/seat-item/seat-item.component';
import { SeatsService } from 'src/app/services/seats.service';
import { Seat } from 'src/app/models/seat';
import { ActivatedRoute } from '@angular/router';
import { toastController } from '@ionic/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.page.html',
  styleUrls: ['./manage.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderComponent,
    SeatItemComponent,
  ],
})
export class ManagePage {
  seats: Seat[] = [];

  constructor(
    private seatsService: SeatsService,
    private route: ActivatedRoute
  ) {
    route.params.subscribe(() => {
      this.loadSeats();
    });
  }

  async loadSeats() {
    const seats = await this.seatsService.getAllSeatsForUser();
    this.seats = seats.sort((a, b) => Number(a.id) - Number(b.id));
  }

  async onItemDeleted() {
    this.loadSeats();
    const toast = await toastController.create({
      message: 'Seat deleted successfully!',
      duration: 1500,
    });
    await toast.present();
  }
}
