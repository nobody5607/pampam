import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LessonService } from './../services/lesson.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.page.html',
  styleUrls: ['./lesson.page.scss'],
})
export class LessonPage implements OnInit {
  lessons: any;
  constructor(
    private router: Router,
    private lessonService: LessonService,
    public alertController: AlertController
    ) { }

  ngOnInit() {
    this.getLessons('');
  }
  getItems(ev) {
    const val = ev.target.value;
    if (val && val.trim() != '') {
      // Check the length
      if(val.length < 3) { 
        return;
      }
      setTimeout(() => {
        this.getLessons(val);
      }, 1000);

    }
  } 
  getLessons(term = '') {
    this.lessonService.getLessons(term).subscribe(result => {
      console.warn(result);
      if(result === null){
        this.lessons = [];
         
      }else{
          if (result.success === true) {
            this.lessons = result.data;
          } else {
            this.presentAlert('Warning', result.data);
          }
      }
      
    });
  }
  lessonDetail(data: any) { 
    this.router.navigate(['/lesson-start', {id: data.id}]); 
  }
  async presentAlert(header: string, message: string) {  
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
