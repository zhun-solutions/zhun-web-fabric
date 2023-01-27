import ZhunWebEventFiber from './zhun-web-event-fiber'

class ZhunWebRouteEventFiber  extends ZhunWebEventFiber{
 constructor(){
   super("route-event-fiber");
   let date=Date.now()
       this.setid(`route-event-fiberelement-${date}`);  
 }
}


var zhun_web_route_event_fiber= new ZhunWebRouteEventFiber();
export default zhun_web_route_event_fiber;