import { Component, OnInit } from '@angular/core';
import { Brand } from './brand';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  BrandList :Brand[] = []; 
  brandId : string;
  boolVal: boolean = false;
  brandForm : FormGroup;
  bId? : any;

  constructor(private authService: AuthServiceService ) { this.brandForm = new FormGroup(
    {
      bId: new FormControl('',[Validators.required]),
      bName: new FormControl('',[Validators.required]),
      catId: new FormControl('',[Validators.required])
    }
  );
 }

 ngOnInit(): void {
  this.authService.getBrand().subscribe( (data : Brand[])=>{
    this.BrandList =data
  });
}

SubmitData(){
  this.authService.postBrand(
    {
    brandId : this.brandForm.get('bId').value,
    brandName : this.brandForm.get('bName').value,
    categoryId: this.brandForm.get('catId').value
    }
  ).subscribe();
  alert('Brand Created');
  location.reload();
}

edit(brand)
{
  this.brandForm.get('bId').setValue(brand.brandId);
  this.brandForm.get('bName').setValue(brand.brandName);
  this.brandForm.get('catId').setValue(brand.categoryId);
}

update(){
  this.bId = this.brandForm.get('bId').value; 
  this.authService.putBrand(this.bId,
    {
      // categoryId : this.Cat.get('catId').value,
      brandName : this.brandForm.get('bName').value,
      categoryId : this.brandForm.get('catId').value
      }

  ).subscribe(res=>console.log(res));
  alert('Brand Updated');
  location.reload();
}

delete(bId){
  
  this.authService.deleteBrand(bId).subscribe(()=>console.log('user deleted'));
  alert('Brand deleted');
 location.reload();
}

}
