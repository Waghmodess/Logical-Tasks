import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  showTitle: any;

  constructor(private ser: RestService) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    this.ser.getcomment().subscribe({
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