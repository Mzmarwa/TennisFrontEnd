import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Coash } from 'src/app/models/coash';
import { CoashService } from 'src/app/services/coash.service';

@Component({
  selector: 'app-addcoash',
  templateUrl: './addcoash.component.html',
  styleUrls: ['./addcoash.component.css']
})
export class AddcoashComponent implements OnInit {
  coashForm: FormGroup;
  cardtitle='Add a new Coash';
  id: string | null;
  selectedFile = null;

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _coashService : CoashService,
    private aRouter: ActivatedRoute,
    private http: HttpClient) { 
    this.coashForm=this.fb.group({
      name:['',Validators.required],
      avatar:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }
  onFileSelected(event: any){
    this.selectedFile = event.target.files[0]
  }

  ngOnInit(): void {
    this.isEdit();
  }
  addCoash(){
   
    const COASH: Coash = {
     name: this.coashForm.get("name")?.value,
     avatar: this.coashForm.get("avatar")?.value,
     lastname: this.coashForm.get("lastname")?.value,
     email: this.coashForm.get("email")?.value,
     password: this.coashForm.get("password")?.value,

    }
    if(this.id !== null){
      // edit coash
      this._coashService.updateCoash(this.id, COASH).subscribe(data =>{
        this.router.navigate(["/coashs"]);
        this.toastr.info('The coash was successfully updated!', 'Updated coash !!');

      }, error =>{
        console.log(error);
        this.coashForm.reset();
      }) 
    }else {
      //add coash
      console.log(COASH);
      this._coashService.addCoash(COASH).subscribe(data =>{
        this.router.navigate(["/coashs"]);
        this.toastr.success('The coash was successfully registered!', 'Registered coash !!');
       
      }, error =>{
        console.log(error);
        this.coashForm.reset();
      }) 
    }

 

  }
  isEdit(){
    if(this.id !== null){
      this.cardtitle = 'Update a coash';
      this._coashService.obtenerCoash(this.id).subscribe(data =>{
        this.coashForm.setValue({
          name: data.name ,      
          lastname: data.lastname ,
          email: data.email ,
          password: data.password ,
          avatar: data.avatar ,
          
        })
      })
    }
  }

  }