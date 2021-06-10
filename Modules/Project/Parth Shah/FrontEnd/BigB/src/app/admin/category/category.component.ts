import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  CatList :Category[] = []; 
  catId? : any;
  categoryId:string;
  boolVal: boolean = false;
  Cat : FormGroup;

  constructor(private authService: AuthServiceService ) {
    this.Cat = new FormGroup(
      {
        catId: new FormControl('',[Validators.required]),
        catName: new FormControl('',[Validators.required])
      }
    );
   }

  ngOnInit(): void {
    this.authService.getCategory().subscribe( (data : Category[])=>{
      this.CatList =data
    });
  }

  SubmitData(){
    this.authService.postCategory(
      {
      categoryId : this.Cat.get('catId').value,
      categoryName : this.Cat.get('catName').value,
      }
    ).subscribe();
    alert('Category Created');
    location.reload();
  }

  edit(category)
  {
    this.Cat.get('catId').setValue(category.categoryId);
    this.Cat.get('catName').setValue(category.categoryName);
  }

  update(){
    
    
    this.catId = this.Cat.get('catId').value;
   
    this.authService.putCategory(this.catId,
      {
        // categoryId : this.Cat.get('catId').value,
        categoryName : this.Cat.get('catName').value
        }
  
    ).subscribe(res=>console.log(res));
    alert('Category Updated');

    location.reload();
}


delete(catId){
  
  this.authService.deleteCategory(catId).subscribe(()=>console.log('user deleted'));
  alert('Category deleted');
 location.reload();
}
}
