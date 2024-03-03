import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-update-plat',
  templateUrl: './update-plat.component.html',
  styleUrls: ['./update-plat.component.css']
})
export class UpdatePlatComponent {

  constructor(private service:PlatService,private router:Router,private activatedRoute:ActivatedRoute) {

  }
  plats:any
  id:any


  routeSub!: Subscription;
  ngOnInit(): void {

    this.plats={
      nomPlat: null,
      descPlat: null,
      typePlat: null,
      datePlat: new Date(),
      prixPlat: null

    }
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id']; });
     
     this.service.getPlat(this.id).subscribe(p =>{
      console.log(p);
      this.plats = p;
    
    });
  
  }


  modifierPlats(){
    this.service.modifierPlats(this.plats,).subscribe(
      res => {
        this.plats = {
          nomPlat: '',
          descPlat: '',
          typePlat: '',
          dateFood: new Date(),
          prixPlat: ''
        
        };
        console.log(res)
        this.router.navigate(['/admin/listePlats']);

      },
      err => {
        console.log(err); 
      }
    );





  }
}
