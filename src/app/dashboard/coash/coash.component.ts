import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Coash } from 'src/app/models/coash';
import { CoashService } from 'src/app/services/coash.service';

@Component({
  selector: 'app-coash',
  templateUrl: './coash.component.html',
  styleUrls: ['./coash.component.css']
})
export class CoashComponent implements OnInit {

  listCoash: Coash[] = [];

  constructor(private _coashService: CoashService ,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerCoash();
  }

  obtenerCoash(){
    this._coashService.getCoash().subscribe(data =>{
      console.log(data);
      this.listCoash = data;
    }, error =>{
      console.log(error);
    })
  }
  eliminateCoash(id:any){
    this._coashService.eliminateCoash(id).subscribe(data =>{
    this.toastr.error('the coash was successfully removed','Coash removed' );
    this.obtenerCoash();
    }, error =>{
      console.log(error);
    })
  }

}
