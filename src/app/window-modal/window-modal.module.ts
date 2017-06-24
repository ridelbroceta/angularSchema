import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule  } from '@angular/router';



import { WindowModalComponent } from './window-modal.component';
import { WindowModalService } from './window-modal.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    WindowModalComponent,
  ],
  providers: [
    WindowModalService,
  ],
  exports: [
    WindowModalComponent,
    //WindowModalService,
  ]
})
export class WindowModalModule { }
