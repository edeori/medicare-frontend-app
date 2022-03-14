import { Component, OnInit, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.css']
})

export class SidebarLeftComponent implements OnInit {

  public chartUrl: SafeResourceUrl;

  constructor(  private _domSanitizer: DomSanitizer ) {
    this.chartUrl = this._domSanitizer.bypassSecurityTrustResourceUrl("https://play.grafana.org/d-solo/000000012/grafana-play-home?orgId=1&from=1646140172369&to=1646143772369&panelId=4");
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log (this.opened );
  }

}
