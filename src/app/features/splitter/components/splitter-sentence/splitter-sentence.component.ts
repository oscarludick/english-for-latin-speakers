import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Directive,
  ViewContainerRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';

import { timer } from 'rxjs';

@Directive({ selector: 'p[appHighlight]' })
export class HighlightDirective {
  @HostListener('mouseenter', ['$event.target'])
  onEnter(target: HTMLElement) {
    target.style.background = '#ffc107';
    target.style.color = 'black';
  }

  @HostListener('mouseleave', ['$event.target'])
  onLeave(target: HTMLElement) {
    target.style.background = 'inherit';
    target.style.color = 'white';
  }
}

@Component({
  selector: 'app-word',
  template: `
    <p title="Click to open details" appHighlight>
      {{ word }}
    </p>

    <p-overlayPanel #op>
      <ng-template pTemplate> Content </ng-template>
    </p-overlayPanel>
  `,
  styles: [
    'p {margin: 0; padding: 0; white-space: pre;}',
    ':host {cursor: pointer}',
  ],
})
export class WordComponent {
  @ViewChild('op', { read: OverlayPanel })
  panel!: OverlayPanel;

  @Input()
  word!: string;

  @HostListener('click', ['$event'])
  onEvent(event: any) {
    event.target.style.cursor = 'progress';
    timer(800).subscribe(() => {
      event.target.style.cursor = 'pointer';
      this.panel.toggle(event);
    });
  }
}

@Directive({ selector: '[tokenize]' })
export class TokenizeDirective {
  @Input() set tokenize(sentence: string) {
    this.viewContainer.clear();

    if (sentence) {
      sentence.split(' ').forEach((word) => {
        const componentRef = this.viewContainer.createComponent(WordComponent);
        componentRef.instance.word = word;
      });
    }
  }

  constructor(private viewContainer: ViewContainerRef) {}
}

@Component({
  selector: 'app-splitter-sentence',
  templateUrl: './splitter-sentence.component.html',
  styleUrls: ['./splitter-sentence.component.scss'],
  host: {
    class: 'app-splitter-sentence',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplitterSentenceComponent {
  @Input()
  label!: string;

  @Input()
  sentence!: string;
}
