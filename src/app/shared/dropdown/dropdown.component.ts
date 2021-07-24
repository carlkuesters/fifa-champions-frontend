import {Component, EventEmitter, Input, Output} from '@angular/core';

import {DropdownOption} from '../../model/dropdown-option.model';

@Component({
  selector: 'fc-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  @Input() name: string;
  @Input() placeholder: string;
  @Input() options: DropdownOption[];
  @Input() value: string | number;
  @Output() optionSelected = new EventEmitter<string | number>();

  onSelect(value: string | number): void {
    this.optionSelected.emit(value);
  }
}
