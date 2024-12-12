import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-s3-display',
  templateUrl: './s3-display.component.html',
  styleUrls: ['./s3-display.component.scss'],
  standalone: true,
})
export class S3DisplayComponent implements OnInit {
  @Input() seat!: number;
  @Input() id!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const doc = document.getElementById(this.seat.toString());
    if (doc) {
      doc.style.backgroundColor = 'lightblue';

      this.router.navigate([S3DisplayComponent]);
    }
  }
}
