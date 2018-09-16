import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api/services/api.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss']
})
export class SignoutComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.auth.logout();
    this.router.navigate(['/home']);
  }
}
