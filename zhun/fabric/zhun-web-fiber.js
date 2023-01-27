let _instance = null;
export default class {



    static get instance() {
        return _instance ? _instance : _instance = new Controller();
      }
      
      /**
     * Initialize a new event bus instance.
     */
    
     constructor(bustype)
     {   
         
         this.bus = document.createElement(bustype);
     }

    
     setid(id){
        this._id=id;
     }
     /**
      * Add an event listener.
      */
     subscribe(event, callback)
     {
console.log(`subscribing from instance [${this._id}] forEvent: ${event} with call back`);
console.log(callback);

         this.bus.addEventListener(event, callback);
     }
 
     /**
      * Remove an event listener.
      */
     remove(event, callback)
     {
         this.bus.removeEventListener(event, callback);
     }
 
     /**
      * Dispatch an event.
      */
     push(event, detail = {})
     {   
console.log(`Dispacting from instance [ ${this._id} ]forEvent:[${event}] with details`);
console.log(detail);
         this.bus.dispatchEvent(new CustomEvent(event, {
             bubbles:true,
             cancelable:false,
             composed:true, detail }));
     }
}