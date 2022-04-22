import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './app-title.component.html',
  styleUrls: ['./app-title.component.scss'],
  host: {
    class: 'app-title',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppTitleComponent {
  @Input()
  title!: string;
}
