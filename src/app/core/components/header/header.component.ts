import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'fc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('mobileToggle') private mobileToggleElement: ElementRef;

  closeMobileNavigation(): void {
    const mobileToggle = (this.mobileToggleElement.nativeElement as HTMLInputElement);
    mobileToggle.checked = false;
  }
}
