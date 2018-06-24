import { Component, OnInit } from '@angular/core';
import { Iproduct } from './product';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { ProductService } from './product.service';

@Component({
//  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: Iproduct;
  errorMessage: string;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService)
   { }

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
      
    }
  //   this.product = 
  //   {
  //     "productId": 1,
  //     "productName": "Leaf Rake",
  //     "productCode": "GDN-0011",
  //     "releaseDate": "March 19, 2016",
  //     "description": "Leaf rake with 48-inch wooden handle.",
  //     "price": 19.95,
  //     "starRating": 3.2,
  //     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
  // }

  }
  getProduct(id: number) {
    this._productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }
  onBack(): void{
      this._router.navigate(['/products']);
  }

}
