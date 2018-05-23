import { Component, OnInit } from '@angular/core';
import {GiphyService} from "../../services/giphy.service";

@Component({
  selector: 'giphy-list',
  templateUrl: './giphy-list.component.html',
  styleUrls: ['./giphy-list.component.css']
})
export class GiphyListComponent implements OnInit {
  giphyData = [];
  constructor(
    private giphyService: GiphyService
  ) { }

  ngOnInit() {
    this.giphyService.getGiphys().subscribe(result => {
      console.log(result.data);
      this.giphyData = result.data;
    });
  }

}
