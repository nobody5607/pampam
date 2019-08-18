import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-score',
  templateUrl: './test-score.page.html',
  styleUrls: ['./test-score.page.scss'],
})
export class TestScorePage implements OnInit {
  start_score:number = 0;
  end_score:number = 0;
  constructor() { }

  ngOnInit() {
      let user = localStorage.getItem('user');
      user = JSON.parse(user);
      console.log(user);
      if (parseInt(user['start_score']) > 0) {
        this.start_score = user['start_score']; 
      }

      if (parseInt(user['end_score']) > 0) {
        this.end_score = user['end_score']; 
      }
  }

}
