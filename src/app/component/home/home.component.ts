import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showImg: any;

  constructor(private ser:RestService) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(){
    this.ser.getImg().subscribe({
      next: (res: any) => {
        this.showImg = res;
      },
      error: (err) => {
        alert("Error while getting the img");
      }
    })
  }

}
