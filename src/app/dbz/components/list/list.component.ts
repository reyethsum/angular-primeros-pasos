import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/charater.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]


  @Output()
  /* public onDelete = new EventEmitter<number>(); */
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
   // TODO: mitir el Id del Personaje
   if( !id ) return;
   this.onDelete.emit(id);
  }

}
