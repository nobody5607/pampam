import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LessonService } from './../services/lesson.service';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  enableStartTest: boolean = true;
  enableEndTest: boolean = true;
  studentP:boolean = false;

  constructor(
    private router: Router,
    private lessonService: LessonService,
    public alertController: AlertController,
    private storage: Storage,
  ) { }

  ngOnInit() {
     this.getData(); 
     this.getStudentP();
  }
  ionViewWillEnter() {
    console.warn('ionViewWillEnter');
    this.getData();
  }

  getData() {
    console.info('get data test...');
    this.storage.get('start_score').then(start_score => {
      console.info('StartScore', start_score);
      if(start_score != null && start_score >= 0){
        this.enableStartTest = false;
      }
    });

    this.storage.get('end_score').then(end_score => {
      if(end_score != null && end_score >= 0){
        this.enableEndTest = false;
      }
    });
    
  }

  Practices(){
    this.router.navigate(['/test-end']);
  }

  getStudentP(){
    this.lessonService.getStudentP().subscribe(res=>{
      console.log('Student P');
      console.log(res);
      if(res['success'] == true){
         this.studentP = true;
      }
    });
  }
  AnPractices(){ 
    if(this.studentP === false){
      return;
    }
    this.router.navigate(['/practices']);
  }
  score(){
    this.router.navigate(['/test-score']);
  }
  async testAnswer(){
    //test-answer 
    let startScore = await this.storage.get('start_score');
    let endScore = await this.storage.get('end_score');

    console.log('start score', startScore);
    console.log('end score', endScore);
    if(startScore === null || endScore === null){
      return;
    } 

    this.router.navigate(['/test-answer']);
  }
  testStart(type) {
    if(type === 1){
       if(this.enableStartTest === false) return false;
    }
    if(type === 2){
      if(this.enableEndTest === false) return false;
   }
    this.router.navigate(['/test-start',{type:type}]);
  }
}
