import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { AuthenticationService } from './services/authentication/authentication.service';
import { UserGuardService } from './services/user-guard/user-guard.service';
import { UserService } from './services/user/user.service';
const routes: Routes = [
  {
    path: "landingpage",
    canActivate: [AuthenticationService], 
    loadChildren: () =>
    import("./pages/landingpage/landingpage.module").then((m) => m.LandingpageModule),
  },
  {
    path: "login",
    canActivate: [AuthenticationService], 
    loadChildren: () =>
    import("./pages/landingpage/landingpage.module").then((m) => m.LandingpageModule),
  },
  {
    path: '',
    //component: MenuComponent, //⬅️ untuk menubar, backspace lepas copy 
    canActivate: [AuthGuardService],
    children: [
      {
        path: "home",
        canActivate: [UserGuardService],
        loadChildren: () =>
          import("./pages/home/home.module").then((m) => m.HomeModule),
      },
      {
        path: "dashboard",
        canActivate: [UserGuardService],
        loadChildren: () =>
          import("./pages/dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
	    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  { path: 'haha', redirectTo: 'landingpage' },
  { path: '**', redirectTo: 'landingpage' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
