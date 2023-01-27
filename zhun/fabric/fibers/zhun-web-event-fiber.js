import ZhunWebFiber from '../zhun-web-fiber'

class ZhunWebEventFiber  extends ZhunWebFiber{

    /**
     * Initialize a new event bus instance.
     */
     constructor(eventtype)
     {
          super(eventtype);
        }
  
}


var zhun_web_event_fiber= new ZhunWebEventFiber();
export default zhun_web_event_fiber;