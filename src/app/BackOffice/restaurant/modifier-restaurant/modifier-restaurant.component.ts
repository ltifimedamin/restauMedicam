import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-modifier-restaurant',
  templateUrl: './modifier-restaurant.component.html',
  styleUrls: ['./modifier-restaurant.component.css']
})
export class ModifierRestaurantComponent {
 
  constructor(private service:RestaurantService,private router:Router,private activatedRoute:ActivatedRoute) {

  }
  res:any
  id:any


  routeSub!: Subscription;
  ngOnInit(): void {

    this.res={
          nomResto: null,
          image:null,
          address: null,
          tel: null
    }
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id']; });

     this.service.getRestaurant(this.id).subscribe(p =>{
      console.log(p);
      this.res = p;
    
    });
  
  }


  modifierRestaurant(){
    this.service.modifierRestaurant(this.res,).subscribe(
      res => {
        this.res = {
          nomResto: '',
          image:'',
          address: '',
          tel: 0
        
        };
        console.log(res)
        this.router.navigate(['/admin/listerestaurants']);

      },
      err => {
        console.log(err); 
      }
      
    );
  }
}
