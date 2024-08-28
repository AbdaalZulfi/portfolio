import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Navigation } from '../home/home.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input({ required: true }) navigation: Navigation[] = [];
  @Output() selectedItem = new EventEmitter<Navigation>();

  public selectedNavigation: string = '';

  
  public setNavigation(selectedNavigationItem: Navigation): void {
    this.selectedNavigation = selectedNavigationItem.name;
    this.selectedItem.emit(selectedNavigationItem);
    console.log("i clicked the button", this.selectedNavigation)
  }
  
  public checkIfCurrent(name: string): boolean {
    return name === this.selectedNavigation;
  }
}
