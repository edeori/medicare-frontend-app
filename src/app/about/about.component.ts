import { Component, OnInit } from '@angular/core';
import { AboutService } from '../_services/about-service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  headerText = 'The Header';
  aboutText = 'This is the about text.';

  constructor(private aboutService: AboutService) {
    //this.headerText = this.aboutService.getHeaderText();
    //this.aboutText = this.aboutService.getAboutText();
    
    this.aboutService.getAbout().subscribe((res) => {
      this.headerText = res.header;
      this.aboutText = res.about;
    });
  }

  ngOnInit(): void {
  }

}
