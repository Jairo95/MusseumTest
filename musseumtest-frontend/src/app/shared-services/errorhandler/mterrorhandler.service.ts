import {ErrorHandler, Injectable} from '@angular/core';
import {MessageService} from 'primeng/components/common/messageservice';

@Injectable()
export class MterrorhandlerService extends ErrorHandler{

  constructor(
    private messageService: MessageService
  ) {
    super();
  }

  handleError(error) {
    this.messageService.add({severity:'error', summary:'Error', detail:'Ocurrio un problema'});
    super.handleError(error);
  }

}
