import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';



declare var $ : any;

import { WindowModalService } from './window-modal.service';

import { MyServiceForModal, MyWindowModal } from './my-ibase-to-window-modal';


@Component({
  //moduleId: module.id.toString(),  
  selector: 'app-window-modal',
  templateUrl: './window-modal.component.html',
  styleUrls: ['./window-modal.component.css']
})
export class WindowModalComponent implements OnInit, OnDestroy, MyWindowModal {
    @Input() id: string;
    private serviceForModal: MyServiceForModal;
    title: string = 'Modal';
  // private element: jQuery;

  constructor(windowModalService: WindowModalService,private route: ActivatedRoute, private router: Router,) { 
    this.serviceForModal = windowModalService;
  }

    ngOnInit() {

    // ensure id attribute exists
    if (!this.id) {
        console.error('modal must have an id');
        return;
    }


    this.serviceForModal.add(this);
  }

  open(title: string): void {
        //this.element.show();
        //$('#myModal').modal('show')
        this.title = title;
        $('.modal').modal({
          backdrop: 'static',
           keyboard: false
        });
        
    }

    // close modal
    close(): void {
        //this.element.hide();
        $('.modal').modal('hide');
        this.title = 'Modal';
    }

    onCloseFromHtml(): void {
        //this.element.hide();
        //this.router.navigate(['../']); 
        this.serviceForModal.closeFromModal(this.id);
    }

    ngOnDestroy(): void {
        this.serviceForModal.remove(this.id);
       
    }
    
    
}
