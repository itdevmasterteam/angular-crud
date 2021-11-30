import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from 'src/app/emp-service.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private router:Router,private empService:EmpServiceService,private toastr: ToastrService,private route:ActivatedRoute) { }
  data = {
    firstName: '',
    middleName: '',
    lsstName: '',
    age:null
  }
  id:any
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('id', this.id);
    if (this.id) {
      this.empService.gettSingleEmployees(this.id).subscribe((res) => {
        if (res.success === 1) {
            this.toastr.success(res.message, 'Success', {
            timeOut: 5000,
            });
          this.data=res.item
        }
      })
    }

  }
  onSubmit(value:any) {
    console.log({ value })
    if (this.id) {

      this.empService.updateEmployee(this.id,this.data).subscribe((res) => {
      if (res.success === 1) {
        this.toastr.success(res.message, 'Success', {
      timeOut: 5000,
        });
        this.router.navigate(['/'])
      } else {
          this.toastr.error(res.message, 'error', {
      timeOut: 5000,
      });
      }
    }, (err) => {
         this.toastr.error(err, 'Http issue', {
      timeOut: 5000,
      });
    })
      
    } else {

      this.empService.createEmployee(this.data).subscribe((res) => {
        if (res.success === 1) {
          this.toastr.success(res.message, 'Success', {
        timeOut: 5000,
          });
          this.router.navigate(['/'])
        } else {
            this.toastr.error(res.message, 'error', {
        timeOut: 5000,
        });
        }
      }, (err) => {
           this.toastr.error(err, 'Http issue', {
        timeOut: 5000,
        });
      })
    }
  }

}
