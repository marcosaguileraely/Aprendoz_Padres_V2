dojo.declare("TestWS", wm.Page, {
  start: function() {
    
  },
  submitClick: function(inSender, inEvent) {
    try {
     
     var id = this.id.getDataValue();
     var nit = this.nit.getDataValue();
     var uri = this.uri.getDataValue();
     var value = this.value.getDataValue();
     var subject = this.subject.getDataValue();
      
     this.ws_servicevar.input.setValue("id", id);
     this.ws_servicevar.input.setValue("nit", nit);
     this.ws_servicevar.input.setValue("uri", uri);
     this.ws_servicevar.input.setValue("value", value);
     this.ws_servicevar.input.setValue("subject", subject);
     
     debugger;
     this.ws_servicevar.update();
      
      
    } catch(e) {
      console.error('ERROR IN submitClick: ' + e); 
    } 
  },
  _end: 0
});