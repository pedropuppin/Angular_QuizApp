import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserAuthService } from 'src/app/shared/services/facade/user-auth.service';
import { User } from 'src/app/shared/types/user.model';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  constructor(
    private userAuth: UserAuthService,
  ) { }

  user?: User;

  ngOnInit(): void {
    this.user = this.userAuth.getUser();
  }
}
