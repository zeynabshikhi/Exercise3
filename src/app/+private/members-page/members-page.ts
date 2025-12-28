import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MembersService } from './members-service';
@Component({
  selector: 'app-members-page',
  imports: [FormsModule],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage {
  membersService: any;
  fullName: any;
  phone: any;
  nationalCode: any;
  address: any;
  id: number | undefined;
save() {
    if (this.state == 'add') {
      this.membersService.add(this.item);
    } else if (this.state == 'edit') {
      this.membersService.edit(this.item);
    }
    else if (this.state == 'remove') {
      this.membersService.remove(this.item);
    }
    this.dataRefresh();
    this.state = 'list';
  }
  ngOnInit(): void {
    this.dataRefresh();
  }
  data: MembersItem[]=[];
  item: MembersItem = {
    fullName: '',
    phone: '',
    nationalCode: '',
  };
  MembersService = inject(MembersService);
  state: string = 'list';
  dataRefresh() {
    this.data = this.MembersService.list();
  }
  add() {
    this.state = 'add';
    this.item = {
      fullName: '',
      phone: '',
      nationalCode: '',

    };
  }
  edit(member: MembersItem) {
    this.item = { ...member };
    this.state = 'edit';
  }
  remove( member:MembersItem){
    this.item = { ...member };
    this.state='remove';
  }
  cancel() {
    this.state = 'list';
  }

}
export interface MembersItem {
  id?: number;
  fullName: string;
  phone: string;
  nationalCode: string;
  address?: string;

}
