import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganisationService } from 'src/app/services/organisation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-org',
  templateUrl: './register-org.component.html',
  styleUrls: ['./register-org.component.css']
})
export class RegisterOrgComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private _router:Router, private _organisation: OrganisationService) { }

  OrganisationDTO =   {orgName: '', shortCode: '', gstNumber: '', addressStreet1: '', addressCityTown: '',
  postCode: '',  phonePrefix: '',  phone: ''};

  ngOnInit(): void {
  }




  
  addOrganisation(){
    console.log(this.OrganisationDTO);

    this._organisation.addOrganisation(this.OrganisationDTO).subscribe(

      (data:any)=>{
        Swal.fire('Success!', 'Organisation Added', 'success');
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !', 'Server Error !', 'error');
      }

    );
   
    this._router.navigate(['/organisation']);
  }

}
