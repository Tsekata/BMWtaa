import { Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from './authguard.service';
import { Router } from 'express';

@Injectable({
  providedIn: 'root'
})

interface CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
}

export class AuthenticationGuard implements CanActivate {
  constructor ( 
    private AuthGuardService : AuthguardService,
    private router : Router
    )
{}
  canActivate(): boolean {
    if (!this.AuthGuardService.getUser()) {
      this.router.navigateByUrl("/login");
      
      
    }
    return this.AuthGuardService.getUser();
  }
  
}
