import { Component,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Dementia';

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.setTitle();
  }

  setTitle() {
    this.titleService.setTitle(`${this.title}`);
  }
}
