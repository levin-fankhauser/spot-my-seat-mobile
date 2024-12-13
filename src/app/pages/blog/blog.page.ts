import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BlogpostsService } from 'src/app/services/blogposts.service';
import { HeaderComponent } from '../../components/header/header.component';
import { Post } from 'src/app/models/post';
import { PostComponent } from '../../components/post/post.component';
import { addIcons } from 'ionicons';
import { send } from 'ionicons/icons';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderComponent,
    PostComponent,
  ],
})
export class BlogPage implements OnInit {
  content = '';
  posts: Post[] = [];

  constructor(private blogService: BlogpostsService) {
    addIcons({ send });
  }

  ngOnInit() {
    this.loadPosts();
  }

  async loadPosts() {
    this.posts = await this.blogService.getAllBlogposts();
  }

  async createPost() {
    if (this.content !== '') {
      await this.blogService.addBlogpost(this.content);
      this.content = '';
      this.loadPosts();
    }
  }
}
