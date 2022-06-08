import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  orgId: any;
  constructor(private _activateRoute: ActivatedRoute, private _item: ItemService, private _router: Router) { }


  ItemDTO =   {name: '', amount: '', description: ''};


  ngOnInit(): void {
    this.orgId=this._activateRoute.parent?.snapshot.paramMap.get('id');
  }


  addItem(){
    console.log(this.ItemDTO);

    this._item.addItem(this.ItemDTO).subscribe(

      (data:any)=>{
        Swal.fire('Success!', 'Item Added', 'success');
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !', 'Server Error !', 'error');
      }

    );
   
    this._router.navigate(['/organisation/'+this.orgId+'/item']);
  }

}
