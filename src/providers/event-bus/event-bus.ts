import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {filter, map} from "rxjs/operators";

export class EventBusProvider {
  private bus = new Subject<{event: string, data:any}>();


  public announce(event: string, data?: any) {
    this.bus.next({event: event, data:data});
  }

  public listen(event: string): Observable<any> {
    return this.bus.asObservable().pipe(filter(item => item.event === event)).
      pipe(map(item => item.data));
  }
}
