import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id: number;
  employee: Employee;
  form: FormGroup;
  
  constructor(
    public employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.find(this.id).subscribe((data: Employee)=>{
      this.employee = data;
    });
    
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', Validators.required),
      address: new FormControl(''),
      mobile: new FormControl('')
    });
  }
   
  get f(){
    return this.form.controls;
  }
     
  submit(){
    this.employeeService.update(this.id, this.form.value).subscribe(res => {
         this.router.navigateByUrl('/list');
    })
  }

}
