import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICommunication } from 'src/app/models/communication';

@Injectable({
  providedIn: 'root'
})
export class CommunicationServiceService {

  // Observable source
  private updateProductSource = new Subject<ICommunication>();

  // Observable Stream
  updateProduct$ = this.updateProductSource.asObservable();

  // Service message command
  broadcastMessage(message: ICommunication) {
    this.updateProductSource.next(message);
  }

  constructor() { }
}
