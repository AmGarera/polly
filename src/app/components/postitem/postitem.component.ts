import {Component, Input, OnInit} from '@angular/core';
import {WpPost} from 'ngx-wordpress';

@Component({
  selector: 'app-postitem',
  templateUrl: './postitem.component.html',
  styleUrls: ['./postitem.component.css']
})
export class PostitemComponent implements OnInit {

  post: WpPost;

  @Input() set data(data) {
    // create WpPost from data
    this.post = new WpPost(data);
  }

  constructor() { }

  ngOnInit() {
  }

}
