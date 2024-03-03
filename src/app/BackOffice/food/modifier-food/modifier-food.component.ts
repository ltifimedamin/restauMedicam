import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-modifier-food',
  templateUrl: './modifier-food.component.html',
  styleUrls: ['./modifier-food.component.css']
})
export class ModifierFoodComponent {
  constructor(private service:FoodService,private router:Router,private activatedRoute:ActivatedRoute) {

  }
  med:any
  id:any


  routeSub!: Subscription;
  ngOnInit(): void {

    this.med={
      nomFood: null,
      quantite: null,
      dateFood: new Date(),
      calorie: null,

    }
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id']; });
     
     this.service.getFood(this.id).subscribe(p =>{
      console.log(p);
      this.med = p;
    
    });
  
  }


  modifier(){
    this.service.modifierFood(this.med,).subscribe(
      res => {
        this.med = {
          nomFood: '',
          quantite: 0,
          dateFood: '',
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
