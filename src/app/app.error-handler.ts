import {ErrorHandler, Injectable, Injector, NgZone} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

import {NotificationService} from './shared/messages/notification.service';
import {LoginService} from './security/login/login.service';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {

  constructor(
    private notificationService: NotificationService,
    private injector: Injector,
    private zone: NgZone) {
    super()
  }

  handleError(errorResponse: HttpErrorResponse | any) {
    if (errorResponse instanceof HttpErrorResponse) {
      const messsge = errorResponse.error.message;

      this.zone.run(() => {
        switch (errorResponse.status) {
          case 401:
            this.injector.get(LoginService).handleLogin();
            break;
          case 403:
            this.notificationService.notify(messsge || 'Não autorizado.');
            break;
          case 404:
            this.notificationService.notify(messsge || 'Não encontrado. Mais detalhes no console');
            break;
          default:
            this.notificationService.notify(messsge || 'Mais detalhes no console');
            break
        }
      });
    }
   super.handleError(errorResponse)
  }
}
