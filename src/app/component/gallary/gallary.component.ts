import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnInit {

  showTitle: any;

  constructor(private ser: RestService) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    this.ser.getTit().subscribe({
      next: (res: any) => {
        this.showTitle = res;
        console.log(this.showTitle);
      },
      error: (err) => {
        alert("Error while getting the img");
      }
    });
  }
}