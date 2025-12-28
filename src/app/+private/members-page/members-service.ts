import { Injectable,OnInit } from '@angular/core';
import { MembersItem as MemberItem, MembersPage } from './members-page';
import { BooksPage } from '../books-page/books-page';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  private data: MemberItem[] = [
     { id: 1, fullName: 'C++', phone: 'آن',nationalCode: 'آنها', address:'تهران' },
     { id: 2, fullName: ' برنامه نویسی',phone : 'آن', nationalCode: 'آنها', address: 'مشهد' },
     { id: 3, fullName: 'پایگاه داده', phone: 'ما', nationalCode: 'آنها', address: 'اصفهان' },
     { id: 4, fullName: 'طراحی وب', phone: 'باشه', nationalCode: 'آنها ', address: 'تبریز' },
     { id: 5, fullName: 'مدار منطقی', phone: 'صحیح', nationalCode: 'آنها ', address: 'همدان' },
   ];
  fullName: any;
  phone: any;
  nationalCode: any;
  address: any;
  id: any;
 //تابعی است که لیست کتاب هارا تحویل میدهد
 //فعلا با داده های ماک کار میکند اما در آینده باید از یک داده دریافت کند
   list() {
     return [...this.data];
   }
   
   //این یک تابع است که به عنوان پارامتردریافت و به لیست کتابها اضافه میکند
   //فعلا به داده ماک اضافه میکند اما باید بعدا به بک اند اضافه کند
   add(item:MembersPage){
     this.data.push(item);
   }
   edit(item:MembersPage){
     const index= this.data.findIndex(b=>b.id==item.id);
     if(index!=-1){
 this.data[index].fullName=item.fullName;
 this.data[index].phone=item.phone;
 this.data[index].nationalCode=item.nationalCode;
 this.data[index].address=item.address;
     }
   }
   remove(item:MembersPage){{
 this.data =this.data.filter(b=>b.id!==item.id);
     }
   }
 } 

