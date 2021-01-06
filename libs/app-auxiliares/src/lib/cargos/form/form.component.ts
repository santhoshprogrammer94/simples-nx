import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Injector,
  OnInit,
} from '@angular/core';
import { Validators } from '@angular/forms';
import { DialogRef } from '@ngneat/dialog';
import {
  FormControl,
  FormGroup,
  NgValidatorsErrors,
} from '@ngneat/reactive-forms';

import { FormDlgApiComponent } from '@simples/app-shared';
import { Cargo } from '@simples/shared/interfaces';

@Component({
  selector: 'simples-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent extends FormDlgApiComponent implements OnInit {
  constructor(
    private injector: Injector,
    @Inject('env') public env,
    public ref: DialogRef
  ) {
    super(injector, env, ref);

    this.operation = ref.data.operation;

    this.formCRUD = new FormGroup<Cargo, NgValidatorsErrors>(
      {
        id: new FormControl(null),
        description: new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(200),
          ],
        }),
        createdAt: new FormControl(null),
        updatedAt: new FormControl(null),
        deletedAt: new FormControl(null),
        isActive: new FormControl(null),
        isDeleted: new FormControl(null),
      },
      { updateOn: 'change' }
    );

    (this.formCRUD.controls.id as FormControl<number>).errors$.subscribe((e) =>
      console.log('erro', e)
    );
  }

  ngOnInit() {
    super.ngOnInit();
  }

  fakeArray(length: number): Array<any> {
    if (length >= 0) {
      return new Array(length);
    }
  }
}
