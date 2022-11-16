import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  employeeForm: FormGroup;
   
  constructor(
    public employeeService: EmployeeService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', Validators.required),
      address: new FormControl(''),
      mobile: new FormControl('')
    });
  }
   
  get f(){
    return this.employeeForm.controls;
  }
    
  submit(){
    this.employeeService.create(this.employeeForm.value).subscribe(res => {
         this.router.navigateByUrl('/list');
    })
  }

}
