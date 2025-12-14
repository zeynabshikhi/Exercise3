import { Injectable } from '@angular/core';
import { BookItem } from './books-page';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private data: BookItem[] = [
    { id: 1, title: 'C++', writer: 'آن', publisher: 'آنها', price: 30000 },
    { id: 2, title: ' برنامه نویسی', writer: 'آن', publisher: 'آنها', price: 50000 },
    { id: 3, title: 'پایگاه داده', writer: 'ما', publisher: 'آنها', price: 60000 },
    { id: 4, title: 'طراحی وب', writer: 'باشه', publisher: 'آنها ', price: 70000 },
    { id: 5, title: 'مدار منطقی', writer: 'صحیح', publisher: 'آنها ', price: 80000 },
  ];
//تابعی است که لیست کتاب هارا تحویل میدهد
//فعلا با داده های ماک کار میکند اما در آینده باید از یک داده دریافت کند
  list() {
    return [...this.data];
  }
  
  //این یک تابع است که به عنوان پارامتردریافت و به لیست کتابها اضافه میکند
  //فعلا به داده ماک اضافه میکند اما باید بعدا به بک اند اضافه کند
  add(item:BookItem){
    this.data.push(item);
  }
}