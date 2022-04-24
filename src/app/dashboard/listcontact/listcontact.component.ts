import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-listcontact',
  templateUrl: './listcontact.component.html',
  styleUrls: ['./listcontact.component.css']
})
export class ListcontactComponent implements OnInit {

  listContact: Contact[] = [];

  constructor(private _contactService: ContactService ,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerContact();
  }
  obtenerContact(){
    this._contactService.getContact().subscribe(data =>{
      console.log(data);
      this.listContact = data;
    }, error =>{
      console.log(error);
    })
  }
  eliminateContact(id:any){
    this._contactService.eliminateContact(id).subscribe(data =>{
    this.toastr.error('the contact was successfully removed','Contact removed' );
    this.obtenerContact();
    }, error =>{
      console.log(error);
    })
  }
}
