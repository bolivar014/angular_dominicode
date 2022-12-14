import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  // Envio de queryParams
  goToReactive(): void {
    this.router.navigate(['contact-reactive'], {queryParams: {name: 'Bolivar014'}});
  }

  // 
  goToTemplate(): void {
    this.router.navigate(['contact-template', '580']);
  }
}
