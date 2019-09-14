import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LessonService } from './../services/lesson.service';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../services/environment.prod';

@Component({
  selector: 'app-test-answer',
  templateUrl: './test-answer.page.html',
  styleUrls: ['./test-answer.page.scss'],
})
export class TestAnswerPage implements OnInit {
  safeUrl: SafeResourceUrl;
  private urlValue: string;
  constructor(
    private router: Router,
    private lessonService: LessonService,
    public alertController: AlertController,
    private storage: Storage,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.storage.get('USER_INFO').then(result => {
      const user = JSON.parse(result);
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${environment.BASE_URL}/test/test-answer`);
    });
  }

}
