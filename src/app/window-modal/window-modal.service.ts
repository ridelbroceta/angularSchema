import { Injectable } from '@angular/core';
import * as _ from 'underscore';


export interface MyOnCloseFromWindowModal {
    windowModalId: string;
    OnCloseFromWindowModal(): void;
}

export interface MyWindowModal {
    id: string;
    open(title: string): void;
    close(): void;
}

export interface MyServiceForModal {
    add(modal: MyWindowModal) : void;
    closeFromModal(id: string): void;
    remove(id: string): void;
}

export interface MyServiceForChild {
    open(id: string, title: string, child: MyOnCloseFromWindowModal): void;
    close(id: string): void;
    //removeChild(id: string): void;
}

@Injectable()
export class WindowModalService implements MyServiceForModal, MyServiceForChild{

    private modals: MyWindowModal[] = [];
    private childs: MyOnCloseFromWindowModal[] = [];

    closeFromModal(id: string): void {
         let child = _.find(this.childs, { windowModalId: id });
         child.OnCloseFromWindowModal();
    }

    add(modal: MyWindowModal) {
        // add modal to array of active modals
        this.modals.push(modal);
    }

    remove(id: string) {
        //remove modal from array of active modals
        let modalToRemove = _.findWhere(this.modals, { id: id });
        this.modals = _.without(this.modals, modalToRemove);
        
        this.removeChild(id);
        
    }

    open(id: string, title: string, child: MyOnCloseFromWindowModal) {
        // open modal specified by id
        this.childs.push(child);
        let modal = _.findWhere(this.modals, { id: id });
        modal.open(title);
    }

    close(id: string) {
    // close modal specified by id
        let modal = _.find(this.modals, { id: id });
        modal.close();
        this.removeChild(id);
    }

    private removeChild(id: string): void {
        let childToRemove = _.findWhere(this.childs, { windowModalId: id });
        this.childs = _.without(this.childs, childToRemove);
    }

}