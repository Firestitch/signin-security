import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { FsComponentComponent } from './components/fs-component/fs-component.component';
// import { FsComponentService } from './services';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    // FsComponentComponent,
  ],
  entryComponents: [
  ],
  declarations: [
    // FsComponentComponent,
  ],
  providers: [
    // FsComponentService,
  ],
})
export class FsSigninSecurityModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsSigninSecurityModule,
      // providers: [FsComponentService]
    };
  }
}
