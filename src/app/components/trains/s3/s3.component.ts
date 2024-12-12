import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonRadio, IonRadioGroup, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-s3',
  templateUrl: './s3.component.html',
  styleUrls: ['./s3.component.scss'],
  standalone: true,
  imports: [IonRadioGroup, IonRadio, FormsModule],
})
export class S3Component {
  @Input() seatValue = '';
  constructor() {}

  @Output()
  selectedSeat = new EventEmitter<string>();

  emitSeat() {
    this.selectedSeat.emit(this.seatValue);
  }
}
