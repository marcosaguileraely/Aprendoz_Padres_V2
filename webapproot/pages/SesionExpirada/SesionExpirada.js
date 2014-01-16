dojo.declare("SesionExpirada", wm.Page, {
  start: function() {
    var mycount = 10;
    var mycounter = setInterval(mycd, 1000);
    var label1 = this.label1;
    function mycd() {
        mycount--;
        label1.setCaption("Lo sentimos, su sesión ha expirado por inactividad.<br />"+"Usted será redireccionado automaticamente<br />a la ventana de seguridad en <h3>"+mycount+"</h3> segundos...<br /><br />"+"O haga click en el boton para salir");
        if (mycount<=1){
          clearInterval(mycounter);
          window.location.reload();
          return;
        } 
    } 
  },  
  button1Click: function(inSender, inEvent) {
    window.location.reload();
  },   
  _end: 0
});