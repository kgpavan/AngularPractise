import {Injectable} from '@angular/core';
import {Iproduct} from './product';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
//import { Iroduct } from './product';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductService{
    private _productUrl = './api/products/products.json';

    constructor(private _http : HttpClient){}

    getProducts(): Observable<Iproduct[]>{
        return this._http.get<Iproduct[]>(this._productUrl)
        .do(data => console.log('All: '+ JSON.stringify(data)))
        .catch(this.handleError);
    }
    getProduct(id: number): Observable<Iproduct> {
        return this.getProducts()
            .map((products: Iproduct[]) => products.find(p => p.productId === id));
    }
    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);

    }
}