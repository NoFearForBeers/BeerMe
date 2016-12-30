import { Component, OnInit } from '@angular/core';
import { AuthService } from './authentication/services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public profile: any;

  constructor(private service: AuthService) {
  }

  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('profile'));
  }
}
