import { Component } from '@angular/core';
import { IonContent, IonRadio, IonRadioGroup } from '@ionic/angular/standalone';

@Component({
  selector: 'app-s3',
  templateUrl: './s3.component.html',
  styleUrls: ['./s3.component.scss'],
  standalone: true,
  imports: [IonRadioGroup, IonRadio, IonContent],
})
export class S3Component {
  constructor() {}

  selectSeat = (seat: any) => {
    console.log(seat);
  };
}
