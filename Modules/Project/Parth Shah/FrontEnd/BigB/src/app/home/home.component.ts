import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Brand } from '../admin/brand/brand';
import { Category } from '../admin/category/category';
import { Product } from '../admin/product/product';
import { AuthServiceService } from '../auth-service.service';
import { ProductImages } from '../prodImage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  create: FormGroup;
  CatList :Category[] = []; 
  brandList : Brand[] = [];
  prodList : Product[] = [];
  brand : {} ; 
  product: {};
  public productId;
  constructor(private authService: AuthServiceService , private route : ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
    this.authService.getCategory().subscribe( (data : Category[])=>{
      this.CatList =data      
    });

    this.authService.getProduct().subscribe( (data : Product[])=>{
      this.prodList =data      
    });

   
    this.create = new FormGroup(
      {
        category :  new FormControl(''),
        brands : new FormControl(''),
        product: new FormControl('')
      }
    );



    // let id1 = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params : ParamMap) => {
      let id1 = parseInt(params.get('id'));
    this.productId = id1;
      
    });
  }


  // getBrands(catId)
  // {
  //   this.authService.getBrandByCatId(catId).subscribe(
  //     (res:any)=> 
  //     {console.log(res);
  //       this.brand = res} 
  //   );

  // }

  onChangeCategory(catId : string)
  {
    this.authService.getBrandByCatId(catId).subscribe(data => this.brand= data);
  }


  onChangeBrand(brandId : string)
  {
    console.log(brandId);
    this.authService.getProductByBrandId(brandId).subscribe(data => this.product= data);
  }

  onchnageGo(productId : any)
  {
    console.log(productId);
    
    this.router.navigate(['productDetail',productId])
  }

  getProductImages(id)
  {
    return ProductImages.get(id);
  }
}
