import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscrit',
  templateUrl: './inscrit.component.html',
  styleUrls: ['./inscrit.component.css']
})
export class InscritComponent implements OnInit {
  submitted = false;
  inscritForm: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
 
  constructor(private sc: AuthService, public formBuilder: FormBuilder, private router: Router) {
    this.inscritForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      avatar: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['',[ Validators.required]],
    })
   }

  
   get f() { return this.inscritForm.controls; }
   ngOnInit(): void {
   }

   onSubmit() {
    this.submitted = true;

    if (this.inscritForm.invalid) {
      return;
    }

    this.sc.inscrit(this.inscritForm.value).subscribe(
      res => {             
        localStorage.setItem('token', res.token);     
        this.router.navigate(['/home']);
      },
      err => console.log(err)
    );

  }

}
