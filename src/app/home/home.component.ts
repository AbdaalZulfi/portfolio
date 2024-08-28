import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

export interface Navigation {
  id?:number;
  name: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  public selectedNavigation: string = '';
  public navigation: Navigation[] = [
    {
      name: 'Home'
    },
    {
      name: 'About'
    },
    {
      name: 'Services'
    },
    {
      name: 'Resume',
    },
    {
      name: 'Portfolio'
    },
    {
      name: 'Blog'
    },
    {
      name: 'Contact'
    }

  ];

  constructor() {

  }

  ngOnInit() {
    console.log(this.navigation, "this is mty naivia")
  }


}
