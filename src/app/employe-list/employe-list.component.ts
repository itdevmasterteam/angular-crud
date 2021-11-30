import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit {

  constructor(private empService:EmpServiceService,private router:Router,private toastr:ToastrService) { }
  employeeArray = [];
  ngOnInit() {
    this.empService.getAllEmployees().subscribe((res) => {
      this.employeeArray = res.item
      console.log('array',this.employeeArray)
    }, (err:any) => {
      console.log(err)
    })
  }
  createEmployee() {
    this.router.navigate(['/create'])
    
  }
  edit(id:any) {
    this.router.navigate([`/edit/${id}`]) 
  }
  delete(id: any) {
    if (confirm('Are you sure you want to delete')) {
      this.empService.deleteEmployee(id).subscribe((res) => {
        if (res.success === 1) {
            this.toastr.success(res.message, 'Success', {
        timeOut: 5000,
            });
          this.ngOnInit()
        }
      })
    }
  }

}
