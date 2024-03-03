import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { HomeFrontComponent } from './FrontOffice/home-front/home-front.component';
import { LoginComponent } from './FrontOffice/login/login.component';
import { AjouterEtablissementComponent } from './BackOffice/ajouter-etablissement/ajouter-etablissement.component';
import { ListeetablissementComponent } from './BackOffice/listeetablissement/listeetablissement.component';
import { AllTempleteFrontComponent } from './FrontOffice/all-templete-front/all-templete-front.component';
import { ModifieretablissementComponent } from './BackOffice/modifieretablissement/modifieretablissement.component';
import { AfficheEtablissmentFrontComponent } from './FrontOffice/affiche-etablissment-front/affiche-etablissment-front.component';
import { AfficheMedicamentComponent } from './BackOffice/medicament/affiche-medicament/affiche-medicament.component';
import { AjouterMedicamentComponent } from './BackOffice/medicament/ajouter-medicament/ajouter-medicament.component';
import { ModifierMedicamentComponent } from './BackOffice/medicament/modifier-medicament/modifier-medicament.component';
import { AfficheRestaurantComponent } from './BackOffice/restaurant/affiche-restaurant/affiche-restaurant.component';
import { AjouterRestaurantComponent } from './BackOffice/restaurant/ajouter-restaurant/ajouter-restaurant.component';
import { ModifierRestaurantComponent } from './BackOffice/restaurant/modifier-restaurant/modifier-restaurant.component';
import { AffichePlatComponent } from './BackOffice/Plat/affiche-plat/affiche-plat.component';
import { AjouterPlatComponent } from './BackOffice/Plat/ajouter-plat/ajouter-plat.component';
import { UpdatePlatComponent } from './BackOffice/Plat/update-plat/update-plat.component';
import { AjouterFoodComponent } from './BackOffice/food/ajouter-food/ajouter-food.component';
import { ListeFoodComponent } from './BackOffice/food/liste-food/liste-food.component';
import { ModifierFoodComponent } from './BackOffice/food/modifier-food/modifier-food.component';

const routes: Routes = [
 { path:"",
  component:AllTempleteFrontComponent,
  children:[
    {
      path:"",
      component:HomeFrontComponent
    },
    {
      path:"login",
      component:LoginComponent
    },
    {
      path:"etablissment",
      component:AfficheEtablissmentFrontComponent
    },
  
  ]
 },

{
  path:"admin",
  component:AllTemplateBackComponent,
  children:[
    {
      path:"listeEtablissement",
      component:ListeetablissementComponent
    },
    {
      path:"ajouterEtablissement",
      component:AjouterEtablissementComponent
    },
    {
      path:"modifierEtablissement/:id",
      component:ModifieretablissementComponent
    },
    {
      path:"listeMedicaments",
      component:AfficheMedicamentComponent
    }, 
    {
      path:"ajouterMedicament",
      component:AjouterMedicamentComponent
    },
    {
      path:"modifierMedicament/:id",
      component:ModifierMedicamentComponent
    },
    
    { path:"listerestaurants",
    component:AfficheRestaurantComponent},
    {
      path:"ajouterRestaurant",
      component:AjouterRestaurantComponent
    },
    {
      path:"modifierRestaurant/:id",
      component:ModifierRestaurantComponent
    },
    {
      path:"listePlats",
      component:AffichePlatComponent
    },
    {
      path:"ajouterPlats",
      component:AjouterPlatComponent
    },
    {
      path:"modifierPlat/:id",
      component:UpdatePlatComponent
    },
    {
      path:"ajouterFood",
      component:AjouterFoodComponent
    },
    {
      path:"listeFoods",
      component:ListeFoodComponent
    },
    {
      path:"modifierFood/:id",
      component:ModifierFoodComponent
    },
  ]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
