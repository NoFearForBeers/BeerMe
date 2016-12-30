import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'st-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css']
})
export class NavComponent implements OnInit {
  username: string;

  constructor(private _authService: AuthService) {
    this.username = '';
  }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }
}
