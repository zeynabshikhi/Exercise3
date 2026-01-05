import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MembersService } from './members-service';
import { Thing } from '../../+shared/+base/base-thing';
import { BaseCrudPage } from '../../+shared/+base/base-crud-page';
import { BaseService } from '../../+shared/+base/base-service';
import { BasecrudComponent, Column } from "../../+shared/+base/base-crud-component/basecrud-component";
@Component({
  selector: 'app-members-page',
  imports: [FormsModule, BasecrudComponent],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage extends BaseCrudPage<MembersItem> implements OnInit {
  ngOnInit(): void {
    this.item = {
      fullName: '',
      address: ',',
      phone: '',
      nationalCode: '',
    }
    
    this.dataRefresh();
  }
  override dataService = inject(MembersService);
  override addPrepair(): void {
     this.item = {
      fullName: '',
      address: ',',
      phone: '',
      nationalCode: '',
    }
   
  }
memberColumns:Column[]=[
  {field:'id',title:'شناسه'},
   {field:'fullName',title:'نام و نام خانوادگی'},
    {field:'phone',title:'شماره تماس'},
    {field:'nationalCode',title:'کدملی'},
      {field:'address',title:'آدرس'},
]

}
export interface MembersItem extends Thing {
  fullName: string;
  phone: string;
  nationalCode: string;
  address?: string;

}
