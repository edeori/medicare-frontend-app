import { Component } from '@angular/core';

@Component({
    selector: 'reach-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
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