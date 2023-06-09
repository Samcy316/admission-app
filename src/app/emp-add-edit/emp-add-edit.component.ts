import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit{
  empForm:FormGroup;
  education:string[] = [
    'matric',
    'Intermidiate',
    'Diploma',
    'Under-Graduate',
    'Post-Graduate',


  ];

  constructor(private _fb: FormBuilder, private _empService: EmployeeService, private _dialogRef: DialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    ){
    this.empForm = this._fb.group({
      FirstName: '',
      LastName: '',
      Email: '',
      DoB: '',
      Gender: '',
      Education: '',
      Company: '',
      Experience: '',
      Package: ''
    });
  }
  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }
  onFormSubmit(){
    if(this.empForm.valid){
      if(this.data){
        this._empService.updateEmployee(this.data.id,this.empForm.value).subscribe({
          next: (val: any)=>{
            alert('Employee detail updated');
            this._dialogRef.close();
          },
          error: (err: any)=>{
            console.error(err)
          }
        })
      } else{
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any)=>{
            alert('Employee added succesfully');
            this._dialogRef.close();
          },
          error: (err: any)=>{
            console.error(err)
          }
        })
      }
     
    }
  }
}
