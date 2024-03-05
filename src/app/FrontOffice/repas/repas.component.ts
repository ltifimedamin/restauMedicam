import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-repas',
  templateUrl: './repas.component.html',
  styleUrls: ['./repas.component.css'],
})
export class RepasComponent implements OnInit {
  preparedMealsFormGroup: FormGroup;
  customMealsFormGroup: FormGroup;
  preparedMeals: string[];
  customFood: string[];
  entrees: FormArray;
  platPrincipales: FormArray;
  desserts: FormArray;
  boissons: FormArray;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: FoodService
  ) {}

  ngOnInit(): void {
    this.preparedMealsFormGroup = this.fb.group({
      breakfast: this.fb.group({
        entree: this.fb.array([]),
        platPrincipale: this.fb.array([]),
        dessert: this.fb.array([]),
        boisson: this.fb.array([]),
      }),
      lunch: ['', [Validators.required]],
      dinner: ['', [Validators.required]],
    });

    this.customMealsFormGroup = this.fb.group({
      breakfast: ['', [Validators.required]],
      lunch: ['', [Validators.required]],
      dinner: ['', [Validators.required]],
    });
    this.service.listeFood().subscribe((value) => (this.preparedMeals = value));
    this.service.listeFood().subscribe((value) => (this.customFood = value));
    this.entrees = this.preparedMealsFormGroup.get(
      'breakfast.entree'
    ) as FormArray;
    this.entrees.push(
      this.fb.group({
        title: this.fb.control('entree1'),
        checked: this.fb.control(false),
      })
    );
    this.entrees.push(
      this.fb.group({
        title: this.fb.control('entree2'),
        checked: this.fb.control(false),
      })
    );
    this.platPrincipales = this.preparedMealsFormGroup.get(
      'breakfast.platPrincipale'
    ) as FormArray;
    this.platPrincipales.push(
      this.fb.group({
        title: this.fb.control('platPrincipale1'),
        checked: this.fb.control(false),
      })
    );
    this.platPrincipales.push(
      this.fb.group({
        title: this.fb.control('platPrincipale2'),
        checked: this.fb.control(false),
      })
    );
    this.platPrincipales.push(
      this.fb.group({
        title: this.fb.control('platPrincipale4'),
        checked: this.fb.control(false),
      })
    );
    this.desserts = this.preparedMealsFormGroup.get(
      'breakfast.dessert'
    ) as FormArray;
    this.desserts.push(
      this.fb.group({
        title: this.fb.control('dessert1'),
        checked: this.fb.control(false),
      })
    );
    this.desserts.push(
      this.fb.group({
        title: this.fb.control('dessert2'),
        checked: this.fb.control(false),
      })
    );
    this.boissons = this.preparedMealsFormGroup.get(
      'breakfast.boisson'
    ) as FormArray;
    this.boissons.push(
      this.fb.group({
        title: this.fb.control('boisson1'),
        checked: this.fb.control(false),
      })
    );
    this.boissons.push(
      this.fb.group({
        title: this.fb.control('boisson2'),
        checked: this.fb.control(false),
      })
    );
  }
}
