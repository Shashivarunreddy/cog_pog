
import { Routes } from "@angular/router";
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryListComponent } from "./category-list/category-list.component";

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'categories', component: CategoryListComponent },
      { path: 'admin', redirectTo: 'dasboard', pathMatch: 'full' },
    ],
  },
];
