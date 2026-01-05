import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'my-crud',
  imports: [FormsModule],
  templateUrl: './basecrud-component.html',
  styleUrl: './basecrud-component.scss',
})
export class BasecrudComponent {
@ Input() mystate:string='list';
@Output() onCancel=new EventEmitter;
@Output() onAdd=new EventEmitter;
@Input() columns:Column[]=[];
@Input() mydata:any[]=[];
@Output() onEdit=new EventEmitter<any>;
@Output()  onRemove=new EventEmitter<any>;
@Output() onSava=new EventEmitter;
}
export interface Column{
  title:string;
  field:string;
}