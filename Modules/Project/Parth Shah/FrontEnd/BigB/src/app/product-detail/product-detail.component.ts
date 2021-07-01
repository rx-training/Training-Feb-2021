import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../admin/product/product';
import { ProductComponent } from '../admin/product/product.component';
import { AuthServiceService } from '../auth-service.service';
import { ProductImages } from '../prodImage';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
prod : Product ;
  productId;
  productImg;
  produName;
  prodDecription;
  constructor(private route:ActivatedRoute , private authService : AuthServiceService) { }

  ngOnInit(): void {
this.productId = parseInt(this.route.snapshot.paramMap.get('id'));
this.productImg = ProductImages.get(this.productId);
console.log(this.productImg);

this.authService.getProductById(this.productId).subscribe(a=>
  {
    this.prod = a
  }
  );
  
 
  }

}
