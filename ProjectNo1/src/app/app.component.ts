import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {FormControl, Validators, ReactiveFormsModule} from '@angular/forms';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import classes which are required for reactive forms
import {FormBuilder} from '@angular/forms'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatInputModule, MatFormFieldModule, FormsModule,ReactiveFormsModule,ButtonsModule,AlertModule,BsDropdownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[FormBuilder, Validators , FormControl]
})
export class AppComponent {
  title = 'ProjectNo1';
  constructor(public fbobj : FormBuilder)
{
}

MarvellousForm = this.fbobj.group(
  {
    // Add Multiple validations
    username :['', [Validators.required, Validators.minLength(5)] ],
    email : ['',[Validators.required]],
    address :['', [Validators.required] ],
    phone :['', [Validators.required] ],
    
  }
);

// Method to set FormControl fields through program
SetData()
{
  this.MarvellousForm.setValue(
    {
      username : 'Piyush',
      email : 'abcd@gmail.com',
      address:  'abcd',
      phone: "`1234567890",
      
    }
  )
}
}

