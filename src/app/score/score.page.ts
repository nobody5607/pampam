import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LessonService } from './../services/lesson.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {
  data = [];
  constructor(
      private router: Router,
      private activeRouter: ActivatedRoute,
      private lessonService: LessonService,
      public alertController: AlertController
  ) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(params=>{
      const data = localStorage.getItem('score');
      if ( data === undefined || data === null) {
        this.router.navigate(['/home']); 
      }
      this.data = JSON.parse(data);

      const keys = Object.keys(this.data);
      const len = keys.length; 
      this.data['count'] = len;
      console.log(this.data);
   });
  }

}
