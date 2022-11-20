import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  form!: FormGroup;
  submit:boolean = false;

  constructor(
    private fb: FormBuilder,
    private productService : ProductsService,
    ) { 
      
    }


  ngOnInit() {
    this.form = this.fb.group({
      first_name:['',Validators.required],
      last_name:[''],
      email:[''],
    })
  }


  add(){
    this.submit = true;
    console.log("Add");
    console.log(this.form.value);

      this.productService.add(this.form.value).then((res:any)=>{
 
      console.log('insert')
    }).catch((e)=>{
      console.log('error')
    })


  }
  
}
