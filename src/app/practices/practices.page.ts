import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LessonService } from './../services/lesson.service';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../services/environment.prod';

@Component({
  selector: 'app-practices',
  templateUrl: './practices.page.html',
  styleUrls: ['./practices.page.scss'],
})
export class PracticesPage implements OnInit {
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
    this.getUser();
  }
  getUser(){
    this.storage.get('USER_INFO').then(result => {
      const user = JSON.parse(result);
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${environment.BASE_URL}/answer-practices/mobile`);
    });
  }
}
