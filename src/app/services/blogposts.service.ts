import { Injectable } from '@angular/core';
import { supabase } from './supabase.service';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class BlogpostsService {
  constructor() {}

  async getAllBlogposts() {
    let { data: blogposts, error } = await supabase
      .from('blogposts')
      .select('*');

    if (error) throw error;

    if (!blogposts) return [];

    const posts: Post[] = blogposts?.map(
      (item) =>
        ({
          content: item.content,
          id: item.id,
          username: item.username,
          createdAt: item.created_at,
        } as Post)
    );

    return posts;
  }

  async addBlogpost(content: string) {
    const user_id = (await supabase.auth.getUser()).data.user?.id;
    const username = (await supabase.auth.getUser()).data.user?.email;

    const { data, error } = await supabase
      .from('blogposts')
      .insert([{ content, username, user_id }])
      .select();

    if (error) throw error;
    return data;
  }
}
