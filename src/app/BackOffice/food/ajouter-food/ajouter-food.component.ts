import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-ajouter-food',
  templateUrl: './ajouter-food.component.html',
  styleUrls: ['./ajouter-food.component.css']
})
export class AjouterFoodComponent {
  constructor(private service:FoodService,private router:Router,) {

  }
  med = {
    nomFood: '',
    quantite: 0,
    dateFood: new Date(),
    calorie: 0.0,
  };

  ajouter(){
    this.service.ajouterFood(this.med,).subscribe(
      res => {
        this.med = {
          nomFood: '',
          quantite: 0,
          dateFood: new Date(),
          calorie: 0.0,
        
        };
        console.log(res)
        this.router.navigate(['/admin/listeFoods']);

      },
      err => {
        console.log(err); 
      }
    );
  }


}
