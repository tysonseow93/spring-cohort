import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    function startTime() {
      let today = new Date();
      let y = today.getFullYear();
      let M = today.getMonth();
      let d = today.getDate();
      let h = today.getHours();
      let m = today.getMinutes();
      let s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('txt').innerHTML =
        (M+1) + "/" + d + "/" + y + " " + h + ":" + m + ":" + s;
      let t = setTimeout(startTime, 500);
    }

    function checkTime(i) {
      if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
      return i;
    }
    startTime();

  }


}

