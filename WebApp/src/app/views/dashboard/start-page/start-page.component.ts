import { MembersLayoutComponent } from './../../../layouts/members-layout/members-layout.component';
import { Component, OnInit, AfterViewInit } from '@angular/core';

import swal from 'sweetalert2';
import { Study } from '../../../api/models';
import { ApiService } from '../../../api/services/api.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit, AfterViewInit {

  public recentStudies: Study[];
  public isLoading = false;

  constructor(private api: ApiService, private router: Router, private translate: TranslateService) { }

  ngOnInit() {
    this.isLoading = true;
  }

  ngAfterViewInit() {
    this.api.recentStudies().subscribe(
      (studies: Study[]) => {
        this.recentStudies = studies;
        this.isLoading = false;
      },
      (err) => {
        // console.log(err);
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  startTutorial() {
    swal('Warning', this.translate.instant('Not yet implement'), 'warning');
  }

  open(study: Study) {
    this.isLoading = true;
    localStorage.setItem('study', JSON.stringify(study));
    this.api.openStudy(study.ID_STUDY)
      .subscribe(
      data => {
        localStorage.setItem('productWarning', 'Y');
        localStorage.setItem('productDeleteWarning', 'Y');
        this.router.navigate(['/input']);
        this.isLoading = false;
      },
      err => {
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      }
    );
  }
}
