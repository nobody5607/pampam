import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LessonService } from './../../services/lesson.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    private lessonService: LessonService,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
  }
  Login(form) {
    const username = form.value.username;
    const password = form.value.password;

    this.lessonService.Login(username, password)
      .subscribe(result => {
        if (result.success === true) {
          localStorage.setItem('user', JSON.stringify(result.data));
          this.router.navigate(['/home']); 
        } else {
          this.presentAlert('Warning', 'กรุณาตรวจสอบชื่อผู้ใช้และรหัสผ่าน');
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
