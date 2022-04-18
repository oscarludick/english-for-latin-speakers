import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './app-link.component.html',
  styleUrls: ['./app-link.component.scss'],
  host: {
    class: 'app-link',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLinkComponent {
  @Input()
  text!: string;

  @Input()
  url!: string;
}
