import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';
import { Thing } from '../../+shared/+base/base-thing';
import { BaseCrudPage } from '../../+shared/+base/base-crud-page';
import { BasecrudComponent, Column } from "../../+shared/+base/base-crud-component/basecrud-component";

@Component({
  selector: 'app-books-page',
  imports: [FormsModule, BasecrudComponent],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage  extends  BaseCrudPage<BookItem> implements OnInit {
 ngOnInit(): void {
  this.item={
      title:'',
      publisher:'',
      writer:'',
      price:0
     }

    this.dataRefresh();
  }
   override  dataService = inject(BooksService);
   override addPrepair(): void {
    this.item={
      title:'',
      publisher:'',
      writer:'',
      price:0
     }
   }
   booksColumn :Column[]=[
{field:'id',title:'شناسه'},
{field:'title',title:'عنوان'},
{field:'writer',title:'نویسنده'},
{field:'publisher',title:'ناشر'},
{field:'price',title:'قیمت'},
   ]
  }
export interface BookItem  extends Thing{
  title: string;
  writer: string;
  publisher: string;
  price?: number;

}
