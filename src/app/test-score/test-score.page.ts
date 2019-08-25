import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-test-score',
  templateUrl: './test-score.page.html',
  styleUrls: ['./test-score.page.scss'],
})
export class TestScorePage implements OnInit {
  start_score:number = 0;
  end_score:number = 0;
  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.get('start_score').then(startScore => {
      console.info('start_score', startScore)
      if(startScore >= 0){
        this.start_score = startScore;
      }
    });
    this.storage.get('end_score').then(end_score => {
      if(end_score >= 0){
        this.end_score = end_score;
      }
    });
  }

}
