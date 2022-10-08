import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Cliente } from "./Cliente";
import {  Observable, throwError } from "rxjs";
import { catchError, map} from "rxjs/operators";
import swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})

export class FormService{

    private urlEndPoint: string ='http://localhost:8080/api/clientesM';
    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'}) 
    constructor( private http:HttpClient, private router:Router){

    }

    create( cliente: Cliente):Observable<Cliente>{
        console.log(cliente);
        return this.http.post(this.urlEndPoint, cliente,{headers:this.httpHeaders}).pipe(
            map((response:any)=>response.cliente as Cliente),
            catchError(e=>{
                swal.fire('Error',e.error.mensaje,'error');
                return throwError(e);

            })
        )
        

    }
}