import ZhunWebFiber from '../zhun-web-fiber'
  class ZhunWebMetadataFiber extends ZhunWebFiber{
    /**
     * Initialize a new event bus instance.
     */
     constructor()
     { 
      
         super('metadatafiberelement');
        let date=Date.now()
        //  console.log("creating metadatabus at"+date);
           this.setid(`metadatafiberelement-${date}`);
      }  
}

var zhun_web_metadata_fiber= new ZhunWebMetadataFiber();
export default zhun_web_metadata_fiber;