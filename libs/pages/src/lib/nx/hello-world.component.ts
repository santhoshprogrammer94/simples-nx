import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DialogService, DialogRef } from '@ngneat/dialog';

@Component({
  template: `
    <div class="ngneat-dialog-backdrop ngneat-dialog-backdrop-visible">
      <h1 class="ngneat-drag-marker">Hello World</h1>
      <button (click)="ref.close()">Close</button>
    </div>
    a
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloWorldComponent {
  constructor(public ref: DialogRef) {}
}