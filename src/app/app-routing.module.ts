import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './shared/component/home-dashboard/home-dashboard.component';
import { UserDashboardComponent } from './shared/component/user-dashboard/user-dashboard.component';
import { UserFormComponent } from './shared/component/user-dashboard/user-form/user-form.component';
import { UserDetailsComponent } from './shared/component/user-dashboard/user-details/user-details.component';
import { FairDashboardComponent } from './shared/component/fair-dashboard/fair-dashboard.component';
import { ProductFormComponent } from './shared/component/product-dashboard/product-form/product-form.component';
import { ProductDashboardComponent } from './shared/component/product-dashboard/product-dashboard.component';
import { ProductComponent } from './shared/component/product/product.component';


const routes: Routes = [

  {
    path:"home",
    component:HomeDashboardComponent
  },
  {
        path:'user',
        component:UserDashboardComponent,
        children:[{
             
        path:'adduser',
        component:UserFormComponent
    },
     {
        path:':userId',
        component:UserDetailsComponent
    },
     {
        path:':userId/edit',    ///edit mode mai hoga
        component:UserFormComponent
    },
  ]
},
{
  path: 'product',
  component:ProductDashboardComponent,
  children: [
    {
      path: 'addproduct',
      component: ProductFormComponent
    },
    {
      path: ':productId',
      component: ProductComponent
    },
    {
      path: ':productId/edit',
      component: ProductFormComponent
    }
  ]
},

 
  {
    path:'fair',
    component:FairDashboardComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
