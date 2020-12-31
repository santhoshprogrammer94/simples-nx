import { CommonModule } from '@angular/common';
import { Inject, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
  imports: [CommonModule],
})
export class AppCoreModule {
  public static forRoot(env: any): ModuleWithProviders<AppCoreModule> {
    return {
      ngModule: AppCoreModule,
      providers: [
        {
          provide: 'env',
          useValue: env,
        },
      ],
    };
  }

  constructor(
    // private apiUrlService: ApiUrlService,
    @Inject('env') private env,
    @Optional()
    @SkipSelf()
    parentModule?: AppCoreModule
  ) {
    // this.menuItems$.subscribe(dataMenu => console.log('!!!', dataMenu));

    // console.log(0, 'Setando API');
    // this.apiUrlService.getMyConfig();

    console.log('Dev', !env.production ? 1 : 0, !env.production);
    console.log(3, 'apiSIG =>', env.apiSIG);

    if (parentModule) {
      throw new Error(
        'AppCoreModule só pode ser importada uma vez, no AppModule :-('
      );
    }
  }
}
