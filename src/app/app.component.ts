import { Component } from '@angular/core';
import { ApiService, Posts } from './api.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks'; // <- добавлено

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  posts: Posts;
  title = 'Interceptors App';

  constructor(private apiSerivce: ApiService) { }

  getData(): void {
    this.apiSerivce.getData().subscribe(data => this.posts = data);
  }

  ngOnInit(): void {
    this.getData();
  }
}
