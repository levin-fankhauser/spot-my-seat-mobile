import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class PostComponent implements OnInit {
  @Input() post!: Post;

  date: string = '';

  constructor() {}

  ngOnInit() {
    this.date = new Date(this.post.createdAt).toLocaleString();
  }
}
