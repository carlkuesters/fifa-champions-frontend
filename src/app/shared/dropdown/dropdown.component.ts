import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

import {DropdownOption} from '../../model/dropdown-option.model';

@Component({
  selector: 'fc-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  @ViewChild('select') select: ElementRef;

  @Input() name: string;
  @Input() placeholder: string;
  @Input() options: DropdownOption[];
  @Input() value: string | number;
  @Output() optionSelected = new EventEmitter<string | number>();

  onSelect(index: string): void {
    const value = ((index !== '') ? this.options[Number(index)].value : null);
    this.optionSelected.emit(value);
  }
}
