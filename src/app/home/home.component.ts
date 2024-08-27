import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Navigation {
  id?:number;
  name: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule
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


  ngOnInit() {
    console.log(this.navigation, "this is mty naivia")
  }

  public setNavigation(name: string): void {
    this.selectedNavigation = name;
  }

}
