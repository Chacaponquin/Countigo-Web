import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { blogArticles } from 'src/app/data/const/blogs-article';

@Component({
  selector: 'home-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.css'],
})
export class BlogSectionComponent implements OnInit {
  constructor() {}

  blogArticles = blogArticles;
  cont = new BehaviorSubject<number>(0);
  selectPost: string = '';

  ngOnInit(): void {
    setInterval(() => {
      this.cont.next(
        this.cont.value + 1 === blogArticles.length ? 0 : this.cont.value + 1
      );
    }, 5000);

    this.cont.subscribe((value) => (this.selectPost = blogArticles[value].id));
  }
}
