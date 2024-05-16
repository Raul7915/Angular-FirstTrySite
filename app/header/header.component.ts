import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  // Verifică dacă ruta actuală este activă
  isActive(route: string): boolean {
    return this.router.url === route;
  }

}
