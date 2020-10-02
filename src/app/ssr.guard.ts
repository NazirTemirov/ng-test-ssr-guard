import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate } from '@angular/router';
import { isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SsrGuard implements CanActivate {
  constructor(@Inject(PLATFORM_ID) private _platform: object) { }

  canActivate() {
    return !isPlatformServer(this._platform);
  }
}
