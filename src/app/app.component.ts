import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'หน้าหลัก',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'ข้อมูลนักเรียน',
      url: '/profile',
      icon: 'contact'
    },
    {
      title: 'บทเรียน',
      url: '/lesson',
      icon: 'book'
    }
    , {
      title: 'แบบทดสอบก่อน-หลังเรียน และแบบฝึกหัด',
      url: '/test',
      icon: 'paper'
    }, 
    {
      title: 'ติดต่อ',
      url: '/contact',
      icon: 'call'
    },
     {
      title: 'ออกจากระบบ',
      url: '/logout',
      icon: 'log-out'
    } 

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,

    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //check login
      // this.authenticationService.authState.subscribe(state => {
      //   if (state) {
      //     console.warn('login success');
      //     this.router.navigate(['home']);
      //   } else {
      //     this.router.navigate(['login']);
      //   }
      // }); 
    });
  }
}
