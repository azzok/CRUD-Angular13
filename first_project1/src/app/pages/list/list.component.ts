import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  products:any;
  isLoading:boolean =  false;


  constructor(
    public productService: ProductsService
  ){

  }



  ngOnInit() {
    
    this.getList();
  
  }

  getList(){
    this.productService.list().then((res:any)=>{
      if(res.status == 'success'){
        this.products = res.data;
        console.log(this.products);
      } else{
        this.products = [];
      }
    }).catch((e:any) => this.isLoading = false)
  }


}
