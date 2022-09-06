import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.hasUser()) {
      return true;
    }

    alert('you dont have permissions.');
    // Redirect to login
    return false;
  }
  
  // Simulamos autenticación
  hasUser(): boolean {
    return true;
  }
}
