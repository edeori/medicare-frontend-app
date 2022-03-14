import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'medicare-frontend-app';
  activeSelection = 'about';
  openStatus = false;

  onNavigate(selection: string) {
    this.activeSelection = selection;
  }

  onSideNavToogle(open: boolean) {
    this.openStatus = open;
  }
}