import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-splitter-table-modal',
  templateUrl: './splitter-table-modal.component.html',
  styleUrls: ['./splitter-table-modal.component.scss'],
  host: {
    class: 'app-splitter-table-modal',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplitterTableModalComponent {
  @Input()
  title!: string;

  @Input()
  phonetics!: { audio: string; text: string }[];

  @Input()
  display!: boolean;

  @Output()
  onHide = new EventEmitter<void>();
}
