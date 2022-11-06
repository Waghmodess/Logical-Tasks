import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RestService } from 'src/app/service/rest.service';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  showTitle: any;

  constructor(private ser: RestService, public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(CommentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

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