import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() menuSelected = new EventEmitter<string>();
  @Output() opened = new EventEmitter<boolean>();
  openStatus = false;

  constructor() { }

  ngOnInit(): void {
  }

  onNavigate(selection: string) {
    this.menuSelected.emit(selection);
  }

  onOpenClick(open: boolean) {
    this.opened.emit(open);
    this.openStatus = !this.openStatus;
  }

}
