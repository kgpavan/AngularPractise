import { Component,OnInit, Pipe } from '@angular/core';
import { Iproduct} from './product';
import { ProductService } from './product.service';
@Component({
    selector:'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']  
})
// @Pipe({
//     name:'convertToSpaces'
// })
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth : number = 50;
    imageMargin : number=2;
    showImage : boolean=false;
    errorMessage : string ;
    filteredProducts: Iproduct[];
   // private _productService;
    products: Iproduct[] = 
    [
        
    ];  
    _listFilter: string= 'cart';
    get listFilter(){
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter=value;
        this.filteredProducts=this.filteredProducts ? this.performFilter(this.listFilter) :this.products;
    }
    performFilter(filterBy:string) : Iproduct[]{
        filterBy=filterBy.toLocaleLowerCase();
        return this.products.filter((product: Iproduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
        );
    }

    ngOnInit():void{
            console.log('On Init')
            this._productService.getProducts().subscribe(products => {this.products= products;
                this.filteredProducts = this.products;
            },
             error => this.errorMessage = <any>error);
            
            this.listFilter='cart';
    }
    constructor(private _productService : ProductService){
        
    }
    toggleImage():void{
        this.showImage=!this.showImage
      }
    transform(value:string, character :string ): string{
        return 'asa';
    }
    onRatingClicked(message:string): void{
        this.pageTitle='Product List' + message;

    }
}