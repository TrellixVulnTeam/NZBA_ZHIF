import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganisationService } from 'src/app/services/organisation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-org',
  templateUrl: './edit-org.component.html',
  styleUrls: ['./edit-org.component.css']
})
export class EditOrgComponent implements OnInit {
 

  constructor(private activatedRoute:ActivatedRoute, private _router:Router, private _organisation: OrganisationService, private _snack:MatSnackBar) { }

  orgId=0;
  OrganisationDTO:any;
 // OrganisationDTO =   {name: 'Test ORG', shortCode: 'TEST', gstNumber: '123456', addressStreet1: 'Upper HUtt', addressStreet2: 'Welington', addressCityTown: 'Welington',
   //  country: 'New Zealand', postCode: '5018', phonePrefix: '022',  phone: '5088053'};

  ngOnInit(): void {
    
    this.orgId=this.activatedRoute.snapshot.params.id;

    this._organisation.getOrganisationById(this.orgId).subscribe(
      (data)=>{
        this.OrganisationDTO=data;
        console.log(this.OrganisationDTO);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  editOrganisation(){
    console.log(this.OrganisationDTO);

    this._organisation.updateOrganisation(this.orgId, this.OrganisationDTO).subscribe(
      (data)=>{
        Swal.fire('Success!', 'Organisation Updated', 'success');
      },
      (error)=>{
        Swal.fire('Error', 'error in updating', 'error');
      }

    );
    
    this._router.navigate(['/organisation']);
  }

 
}
