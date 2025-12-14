import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-private-tmeplate',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './private-tmeplate.html',
  styleUrl: './private-tmeplate.scss',
})
export class PrivateTmeplate {
  router=inject(Router);

  
  logoff() {
  sessionStorage.clear();
 localStorage.removeItem('auth-token');
 this.router.navigateByUrl('/login');
  }

}
