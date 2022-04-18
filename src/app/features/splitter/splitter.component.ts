import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-splitter',
  templateUrl: './splitter.component.html',
  styleUrls: ['./splitter.component.scss'],
  host: {
    class: 'app-splitter',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplitterComponent {}
