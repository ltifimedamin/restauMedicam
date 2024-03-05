import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { MainBackComponent } from './BackOffice/main-back/main-back.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { HeaderFrontComponent } from './FrontOffice/header-front/header-front.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeFrontComponent } from './FrontOffice/home-front/home-front.component';
import { LoginComponent } from './FrontOffice/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AjouterEtablissementComponent } from './BackOffice/ajouter-etablissement/ajouter-etablissement.component';
import { ListeetablissementComponent } from './BackOffice/listeetablissement/listeetablissement.component';
import { ModifieretablissementComponent } from './BackOffice/modifieretablissement/modifieretablissement.component';
import { AllTempleteFrontComponent } from './FrontOffice/all-templete-front/all-templete-front.component';
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
import { ListeFoodComponent } from './BackOffice/food/liste-food/liste-food.component';
import { AjouterFoodComponent } from './BackOffice/food/ajouter-food/ajouter-food.component';
import { ModifierFoodComponent } from './BackOffice/food/modifier-food/modifier-food.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RepasComponent } from './FrontOffice/repas/repas.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTemplateBackComponent,
    MainBackComponent,
    SidebarBackComponent,
    FooterFrontComponent,
    HeaderFrontComponent,
    HomeFrontComponent,
    LoginComponent,
    AjouterEtablissementComponent,
    ListeetablissementComponent,
    ModifieretablissementComponent,
    AllTempleteFrontComponent,
    AfficheEtablissmentFrontComponent,
    AfficheMedicamentComponent,
    AjouterMedicamentComponent,
    ModifierMedicamentComponent,
    AfficheRestaurantComponent,
    AjouterRestaurantComponent,
    ModifierRestaurantComponent,
    AffichePlatComponent,
    AjouterPlatComponent,
    UpdatePlatComponent,
    ListeFoodComponent,
    AjouterFoodComponent,
    ModifierFoodComponent,
    RepasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
