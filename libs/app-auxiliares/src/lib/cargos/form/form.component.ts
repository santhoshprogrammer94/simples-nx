import {
  AfterViewInit,
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

export const errorMessages = {
  DESCRICAO: 'Campo obrigatório e precisa ter entre 3 a 255 caracteres'
};

@Component({
  selector: 'simples-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent extends FormDlgApiComponent implements OnInit, AfterViewInit {
  active = '99';
  errors = errorMessages;

  constructor(
    private injector: Injector,
    @Inject('env') public env,
    public ref: DialogRef
  ) {
    super(injector, env, ref);

    this.operation = ref.data.operation;

    this.formCRUD = new FormGroup<Cargo, NgValidatorsErrors>(
      {
        // id: new FormControl(null),
        description: new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(200),
          ],
        }),
        // createdAt: new FormControl(null),
        // updatedAt: new FormControl(null),
        // deletedAt: new FormControl(null),
        isActive: new FormControl(null),
        // isDeleted: new FormControl(null),
      },
      { updateOn: 'change' }
    );

    // (this.formCRUD.controls.id as FormControl<number>).errors$.subscribe((e) =>
    //   console.log('erro', e)
    // );
  }

  ngOnInit() {
    super.ngOnInit();
  }


  ngAfterViewInit() {
    this.updateAtivo()
    super.ngAfterViewInit();
  }

  onChange(enable: boolean) {
    if (enable) {
      this.formCRUD.controls['isActive'].setValue(true);
    } else {
      this.formCRUD.controls['isActive'].setValue(false);
    }
    this.updateAtivo();
  }

  private updateAtivo() {
    // console.log(this.formCRUD.controls['isActive'].value, this.formCRUD.controls['isActive'].value === 1);
    this.active = this.active = this.formCRUD.controls['isActive'].value.toString() === 'true' ? 'Ativo' : 'Desativado';
  }

  fakeArray(length: number): Array<any> {
    if (length >= 0) {
      return new Array(length);
    }
  }
}
