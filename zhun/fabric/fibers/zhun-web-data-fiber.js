import ZhunWebFiber from '../zhun-web-fiber'
 class ZhunWebDataFiber extends ZhunWebFiber{
  
    /**
     * Initialize a new event bus instance.
     */
     constructor()
     {
         super('datafiberelement');
      
         let date=Date.now()
         console.log("creating databus at"+date);
            this.setid(`datafiberelement-${date}`);   }
  
}
var zhun_web_data_fiber= new ZhunWebDataFiber();
export default zhun_web_data_fiber;
