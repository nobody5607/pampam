import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  testStart() {
    this.router.navigate(['/test-start']);
  }
  testEnd() {
    this.router.navigate(['/test-end']);
  }

}
