import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor(private http:HttpClient) { }

  getAllEmployees() {
    return this.http.get<any>(`http://localhost:5000/empl`)
  }

   gettSingleEmployees(id:any) {
    return this.http.get<any>(`http://localhost:5000/empl/${id}`)
  }


  createEmployee(data:any) {
    return this.http.post<any>(`http://localhost:5000/empl`,data)
  }

  updateEmployee(id:any,data:any) {
    return this.http.put<any>(`http://localhost:5000/empl/${id}`,data)
  }

  deleteEmployee(id:any) {
    return this.http.delete<any>(`http://localhost:5000/empl/${id}`)
  }
}
