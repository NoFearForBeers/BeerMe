import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth/auth.service';

@Component({
    moduleId: module.id,
    selector: 'st-nav',
    templateUrl: 'nav.component.html',
    styleUrls: ['nav.component.css']
})
export class NavComponent implements OnInit {
  public profile: any;

  constructor(private service: Auth) {
  }

  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('profile'));
  }
}
