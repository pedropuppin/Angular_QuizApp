import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../types/user.model';
import { UserAuthService } from '../../services/facade/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private userAuth: UserAuthService,
    private router: Router
  ) { }

  user?: User;

  ngOnInit(): void {
    this.user = this.userAuth.getUser();
  }

  exit() {
    sessionStorage.clear();
    this.router.navigateByUrl('login');
  }
}
