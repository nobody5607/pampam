import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { Config } from './../services/config';
import { Storage } from '@ionic/storage';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  providers: [Config]
})
export class ProfilePage implements OnInit {

  safeUrl: SafeResourceUrl;
  private urlValue: string;

  constructor(
    private con: Config, private storage: Storage,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.loadProfile();
  }
  loadProfile() {
    this.storage.get('USER_INFO').then(result => {
      const user = JSON.parse(result);
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.con.BASE_URL}/student/update?id=${user.id}&mobile=1`);

    });
  }

}
