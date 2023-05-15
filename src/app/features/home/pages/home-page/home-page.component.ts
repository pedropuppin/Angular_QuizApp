import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/types/user.model';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(
    private router: Router
  ) { }

  user?: User;

  ngOnInit(): void {
    const userSessionStorage = sessionStorage.getItem('user');
    if(userSessionStorage) this.user = JSON.parse(userSessionStorage);
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
