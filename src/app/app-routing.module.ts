import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlyForBrowserComponent } from './only-for-browser/only-for-browser.component';
import { SsrGuard } from './ssr.guard';

const routes: Routes = [
  { path: 'testssrguard', component: OnlyForBrowserComponent, canActivate: [SsrGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
