import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-ajouter-plat',
  templateUrl: './ajouter-plat.component.html',
  styleUrls: ['./ajouter-plat.component.css'],
})
export class AjouterPlatComponent implements OnInit{
  formGroup:FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: PlatService,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.formGroup = this.fb.group({
        breakFast:this.fb.group({
          
        }),
        lunch:[],
        dinner:[]
      })
  }

  

  plat = {
    nomPlat: '',
    descPlat: '',
    typePlat: '',
    datePlat: new Date(),
    prixPlat: 0.0,
  };

  typesPlat = [
    'FAIBLE_GLUCIDES',
    'RICHE_FIBRES',
    'FAIBLE_SODIUM',
    'RICHE_PROTEINES_MAIGRES',
    'RICHE_ANTIOXYDANTS',
    'FACILE_A_MACHER_DIGER',
    'ADAPTE_ALLERGIES',
    'REGIME_SPECIFIQUE',
  ];

  ajouterPlat() {
    this.service.ajouterPlat(this.plat).subscribe(
      (res) => {
        this.plat = {
          nomPlat: '',
          descPlat: '',
          typePlat: '',
          datePlat: new Date(),
          prixPlat: 0.0,
        };

        console.log(res);

        this.router.navigate(['/admin/listePlats']); // Corrected route
      },
      (err) => {
        console.log(err);
      }
    );
    console.log('para');
  }
}
