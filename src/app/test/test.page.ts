import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LessonService } from './../services/lesson.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  enableStartTest: boolean = false;
  enableEndTest: boolean = false;

  constructor(
    private router: Router,
    private lessonService: LessonService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    console.log(user);
    if (parseInt(user['start_score']) > 0) {
      this.enableStartTest = false;
     
    }
  }
  testStart(type) {
    this.router.navigate(['/test-start', { type: type }]);
  }
}
