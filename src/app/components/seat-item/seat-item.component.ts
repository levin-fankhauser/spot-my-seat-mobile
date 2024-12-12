import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { createOutline, trashOutline } from 'ionicons/icons';
import { Seat } from 'src/app/models/seat';
import { ManagePage } from 'src/app/pages/manage/manage.page';
import { SeatsService } from 'src/app/services/seats.service';

@Component({
  selector: 'app-seat-item',
  templateUrl: './seat-item.component.html',
  styleUrls: ['./seat-item.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class SeatItemComponent implements OnInit {
  @Input() seat!: Seat;

  @Output() itemDeleted = new EventEmitter<string>();

  from = '';
  to = '';
  dateTime = '';

  constructor(private router: Router, private seatsService: SeatsService) {
    addIcons({ trashOutline, createOutline });
  }

  ngOnInit() {
    this.from = this.seat.from;
    this.to = this.seat.to;
    this.dateTime = new Date(this.seat.dateTime).toLocaleString().slice(0, -3);
  }

  routeToItem() {
    this.router.navigateByUrl('/seat/' + this.seat.id);
  }

  deleteItem() {
    if (this.seat.id) {
      this.seatsService.deleteSeat(this.seat.id);
      this.itemDeleted.emit(this.seat.id);
    }
  }
}
