import { Component } from '@angular/core';
import { DisService } from 'src/app/dis.service';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
single:any
constructor(private dis:DisService){}
ngOnInit():void{
  let id=localStorage.getItem('id')
  let singleDataArray= this.dis.getData()
  console.log(singleDataArray);
  
  this.single=singleDataArray.filter(e=>e.title===id)
  console.log(this.single)
}
}
