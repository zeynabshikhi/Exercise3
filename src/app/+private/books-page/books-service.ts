import { Injectable } from '@angular/core';
import { BookItem as BookItem, BooksPage } from './books-page';
import { BaseService } from '../../+shared/+base/base-service';


@Injectable({
  providedIn: 'root',
})
export class BooksService extends BaseService<BookItem>{
override data: BookItem[] = [
    { id: 1, title: 'C++', writer: 'آن', publisher: 'آنها', price: 30000 },
    { id: 2, title: ' برنامه نویسی', writer: 'آن', publisher: 'آنها', price: 50000 },
    { id: 3, title: 'پایگاه داده', writer: 'ما', publisher: 'آنها', price: 60000 },
    { id: 4, title: 'طراحی وب', writer: 'باشه', publisher: 'آنها ', price: 70000 },
    { id: 5, title: 'مدار منطقی', writer: 'صحیح', publisher: 'آنها ', price: 80000 },
  ];
  override update (destination: BookItem,Source:BookItem):void{
 destination.title=Source.title;
   destination.writer=Source.writer;
   destination.publisher=Source.publisher;
    destination.price=Source.price;
  }
}
