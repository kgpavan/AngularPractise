import {Injectable} from '@angular/core';
import {Iproduct} from './product';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
@Injectable()
export class ProductService{
    private _productUrl = './api/products/products.json';

    constructor(private _http : HttpClient){}

    getProducts(): Observable<Iproduct[]>{
        return this._http.get<Iproduct[]>(this._productUrl)
        .do(data => console.log('All: '+ JSON.stringify(data)))
        .catch(this.handleError);
    }
    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);

    }
}