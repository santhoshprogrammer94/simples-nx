import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DialogService, DialogRef } from '@ngneat/dialog';

@Component({
  template: `
    <div>
      <h1 class="">Hello World</h1>
      <button (click)="ref.close()">Close</button>
    </div>
    a
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloWorldComponent {
  constructor(public ref: DialogRef) {}
}