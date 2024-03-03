import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-ajouter-restaurant',
  templateUrl: './ajouter-restaurant.component.html',
  styleUrls: ['./ajouter-restaurant.component.css']
})
export class AjouterRestaurantComponent {

  constructor(private service:RestaurantService,private router:Router,) {

  }
  med = {
    nomResto: '',
    address:'',
    image: '',
    tel: 0

  };

  ajouterRestaurant(){
    this.service.ajouterRestaurant(this.med,).subscribe(
      res => {
        this.med = {
          nomResto: '',
          image:'',
          address: "",
          tel: 0,
        
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
