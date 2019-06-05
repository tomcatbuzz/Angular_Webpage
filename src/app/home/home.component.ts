import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {

    this.seo.generateTags({
      title: 'Todo Page',
      description: 'Contact me through this awesome page',
      image: '',
      slug: 'todo-page'
    });
  }

}
