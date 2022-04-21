import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-footer-default',
  templateUrl: './footer-default.component.html',
  styleUrls: ['./footer-default.component.scss'],
  host: {
    class: 'app-footer-default',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterDefaultComponent {
  @Input()
  text!: string;
}
