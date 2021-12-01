import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent implements OnInit {
  menuOpen: boolean = false;
  currentUrl: any;
  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    const main = document.querySelector('.main-container');
    this.router.events.forEach((event) => {
     
      if (event instanceof NavigationEnd) {
        main?.scrollTo(0, 0);
        this.menuOpen = false;
        this.currentUrl = this.router.url;
      }
    });

    this.currentUrl = this.router.url;
    
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeSession() {
    localStorage.clear();
    window.location.href = "/auth/login";
  }

}
