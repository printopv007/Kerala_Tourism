import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DisService } from 'src/app/dis.service';
@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent {
constructor(private dis :DisService,private router : Router){}
database=this.dis.getData();
gotoHere(id:string){
  localStorage.setItem('id',id)
  this.router.navigate(['/single'])
}
}
