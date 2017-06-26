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
