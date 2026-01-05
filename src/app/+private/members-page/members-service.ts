import { Injectable,OnInit } from '@angular/core';
import { MembersItem as MemberItem, MembersPage } from './members-page';
import { BaseService } from '../../+shared/+base/base-service';
import { BooksPage } from '../books-page/books-page';

@Injectable({
  providedIn: 'root',
})
export class MembersService extends BaseService<MemberItem> {
  override data: MemberItem[] = [
{
  id: 1000, fullName: 'مریم احمدی', address: 'همدان', nationalCode: '3861559896', phone: '0930852',
},
{
  id: 1001, fullName: 'رضا احمدی', address: 'تهران', nationalCode: '3865257887',phone: '0918789',
},
  {
  id: 1002, fullName: 'مریم حمیدی', address: 'مشهد',nationalCode: '3865258998', phone: '0992586',
},


  ];
override update (destination: MemberItem,Source:MemberItem):void{
destination.address=Source.address;
destination.fullName=Source.fullName;
destination.phone=Source.phone;
}
}