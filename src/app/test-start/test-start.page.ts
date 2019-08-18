import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LessonService } from './../services/lesson.service';
import { AlertController } from '@ionic/angular';



import { FormGroup } from '@angular/forms';
import { QuestionBase } from './question-base';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-start',
  templateUrl: './test-start.page.html',
  styleUrls: ['./test-start.page.scss'],
})
export class TestStartPage implements OnInit {
  tests: any;
  type: number = 1;
  title: string = 'แบบทดสอบก่อนเรียน';
  answers = [];
  constructor(
    private router: Router,
    private lessonService: LessonService,
    public alertController: AlertController,
    private activeRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(params=>{
      console.log(params); 
      this.type = parseInt( params.type );
      if(this.type === 2){
         this.title = 'แบบทดสอบหลังเรียน';
      } 

      console.log(this.title);
   });
    this.getData();
  }
  onSelected(data) {
    if (typeof this.answers !== 'undefined' && this.answers.length > 0) {
      for (let i in this.answers) { 
        if (this.answers[i].test_id === data.test_id) {
          delete (this.answers[i]);
        }
      }
      this.answers.push(data);
    } else {
      this.answers.push(data);
    }
    this.answers = this.answers.filter(x => x !== null);
    
  }
  onSubmit(){
    const data = JSON.stringify(this.answers);
    this.lessonService.saveTest(data, this.type)
    .subscribe(result=>{
      localStorage.setItem('score', JSON.stringify(result));
      this.router.navigate(['/score',{data: JSON.stringify(result)}]);
      //this.presentAlert('Warning', result.data);
    }); 
  }

  getData() {
    this.lessonService.getTest(this.type).subscribe(result => {
      if (result.success === true) {
        this.tests = result.data;
      } else {
        this.presentAlert('Warning', result.data);
      }
    });
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
