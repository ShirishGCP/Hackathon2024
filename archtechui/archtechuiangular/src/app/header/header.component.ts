import { Component} from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  loggedIn: boolean = false;
  currentUser: string | undefined;
  private loggedInSubscription: Subscription | undefined;
  private currentUserSubscription: Subscription | undefined;
  constructor(private loginService: LoginServiceService) {}

  ngOnInit() {
    this.loggedInSubscription = this.loginService.isLoggedIn().subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });

    this.currentUserSubscription = this.loginService.getCurrentUser().subscribe(currentUser => {
      this.currentUser = currentUser;
    });
  }

  ngOnDestroy() {
    if (this.loggedInSubscription) {
      this.loggedInSubscription.unsubscribe();
    }
    if (this.currentUserSubscription) {
      this.currentUserSubscription.unsubscribe();
    }
  }

  logout() {
    this.loginService.logout();
  }
}