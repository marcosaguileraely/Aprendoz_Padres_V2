Date.prototype.getWeek = function() {
	
var onejan = new Date(this.getFullYear(),0,1);
return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
}

dojo.declare("Main", wm.Page, {
  start: function() { 
    var curdate = new Date().getTime();
    this.parents_global_currentSy.input.setValue("f1", curdate);
    this.parents_global_currentSy.update();
    
   /**Funcion de Dojo**/
    dojo.subscribe("session-expiration", this, "mySessionExpiredMethod");
  },
  
  "preferredDevice": "desktop",
  
  mySessionExpiredMethod: function(){
   alert("Aviso importante: Sesión expirada \n\n"+ "Su sesión ha excedido el tiempo de inactividad permitido. Por favor ingrese nuevamente.");
    window.location.reload();  }, 
 
  inscalumasigDataGrid1Selected: function(inSender, inIndex) {
    try {          
           this.apr_esperados.update();           
           this.apr_logrados.update();  
           this.aprendizajeslv.update(); 
            $('#main_rendimiento_aprendizajes').html('<img src="resources/images/loader.gif" style="position:absolute;left:410px;top:134px;" alt="loding..." />'); 
                  this.aux201.setValue("dataValue", this.inscalumasigDataGridX.selectedItem.getData().id.idAsignatura); 
                  this.aux203.setValue("dataValue", this.inscalumasigDataGridX.selectedItem.getData().id.asignatura); 
                  
    } catch(e) {
      console.error('ERROR IN inscalumasigDataGrid1Selected: ' + e); 
    } 
  },
  button1Click: function(inSender, inEvent) {
    try {
       url= "resources/pdfcontrato/contratoRochester2011.pdf";
           window.open(url,"_BLANK");
      
    } catch(e) {
      console.error('ERROR IN button1Click: ' + e); 
    } 
  },
  button2Click: function(inSender, inEvent) {
    try {
     url= "resources/pdfcontrato/Matriculas_Instrucciones_2011-2012.pdf";
       window.open(url,"_BLANK");
       
    } catch(e) {
      console.error('ERROR IN button2Click: ' + e); 
    } 
  },
  anuncioDataGrid1AfterRender: function(inSender) {
    try {
      this.anuncioDataGrid1.select(0);
      
    } catch(e) {
      console.error('ERROR IN anuncioDataGrid1AfterRender: ' + e); 
    } 
  },
  button3Click: function(inSender, inEvent) {
    try {
      this.button1Click(inSender, inEvent);
      
    } catch(e) {
      console.error('ERROR IN button3Click: ' + e); 
    } 
  },
  button4Click: function(inSender, inEvent) {
    try {
      this.button2Click(inSender, inEvent);
      
    } catch(e) {
      console.error('ERROR IN button4Click: ' + e); 
    } 
  },
  
  personaDataGrid2Selected: function(inSender, inIndex) {
    try {
     this.pic.setSource("http://aprendoz.rochester.edu.co/stds/"+this.personaDataGrid2.selectedItem.getData().codigo+".Jpeg")
     this.aux1.setValue("dataValue",this.personaDataGrid2.selectedItem.getData().codigo);
     this.aux2.setValue("dataValue",this.personaDataGrid2.selectedItem.getData().apellido1+" "+this.personaDataGrid2.selectedItem.getData().apellido2);
     this.aux3.setValue("dataValue",this.personaDataGrid2.selectedItem.getData().nombre1+" "+this.personaDataGrid2.selectedItem.getData().nombre2);
     this.aux5.setValue("dataValue",this.personaDataGrid2.selectedItem.getData().telefono);
     this.aux6.setValue("dataValue",this.personaDataGrid2.selectedItem.getData().tipoSangre);
     this.aux7.setValue("dataValue",this.personaDataGrid2.selectedItem.getData().email);
           
     // var tipo== this.personaDataGrid2.selectedItem.getData().tipoPersona.idTipoPersona;
           if(this.personaDataGrid2.selectedItem.getData().tipoPersona.idTipoPersona == 1){
             this.cargoEditor1.disable();
             this.profesionEditor1.disable();
             this.empresaEditor1.disable();
             this.direccionOficinaEditor1.disable();
             this.telefonoOficinaEditor1.disable();
             this.celularEditor1.disable();
              
              /*habilitar*/
              this.viveConEditor1.enable();
              this.idg.enable();
              this.idi.enable();
              this.gradoIngresoEditor1.enable();
              this.cursoIngresoEditor1.enable();
              this.colegioAnteriorEditor1.enable();  
                              
           }
            else {
             this.cargoEditor1.enable();
             this.profesionEditor1.enable();
             this.empresaEditor1.enable();
             this.direccionOficinaEditor1.enable();
             this.telefonoOficinaEditor1.enable();
             this.celularEditor1.enable();
              
             /*campos a deshabilitar*/
              this.idg.disable();
              this.idi.disable();
              this.fechaRetiroEditor1.disable();
              this.colegioAnteriorEditor1.disable();
              this.rutaMEditor1.disable();
              this.rutaTEditor1.disable();
              this.tomaAlmuerzoEditor1.disable();
              this.tomaMediasNuevesEditor1.disable();
              this.tomaSeguroAccidentesEditor1.disable();
              this.noPlaquetaEditor1.disable();
              this.gradoIngresoEditor1.disable();
              this.cursoIngresoEditor1.disable();
              this.viveConEditor1.disable();
              this.fechaIngresoEditor1.disable();
              this.hijoDeExalumnoEditor1.disable();
              this.nombrePadreExalumnoEditor1.disable();
              this.promocionEditor1.disable();
          }
      
    } catch(e) {
      console.error('ERROR IN personaDataGrid2Selected: ' + e); 
    } 
  },
  
  boton_generar_informeClick: function(inSender, inEvent) {
      this.a_getInforUser.update(); 
      var idp = this.personaDataGridX.selectedItem.getData().id.idPersona;  
      var ida = this.inscalumasigDataGridX.selectedItem.getData().idasignatura;
      var idsy = this.inscalumasigDataGridX.selectedItem.getData().idsy;
      var getter = main.a_getInforUser.getItem(0); 
      var id= getter.data.idpersona;
      var clave= getter.data.clave1;
      var codigoRep= "PAD001";
      var formatType= "PDF";
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {       
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/"+codigoRep,
               format: formatType,
               params: { idpersona: idp, asignatura: ida }
         }
       });
       inEvent.preventDefault();
  },
  
  button6Click: function(inSender, inEvent) {
    try {
      this.panel10.hide();
      this.panel9.hide();
      this.DETALLES.hide();
      this.panel_graficos.show();
      this.apr_esperados.update();
      this.apr_logrados.update();
 
    } catch(e) {
      console.error('ERROR IN button6Click: ' + e); 
    } 
  },
  
  button7Click: function(inSender, inEvent) {
    try {
      this.panel_graficos.hide();
      this.panel10.show();
      this.panel9.show();
      this.DETALLES.show();
              
    } catch(e) {
      console.error('ERROR IN button7Click: ' + e); 
    } 
  },
 
  rendimiento_sy_selectChange: function(inSender, inDisplayValue, inDataValue) {
    try {
     var idp=  this.personaDataGridX.selectedItem.getData().id.idPersona;
     var idsy_= this.rendimiento_sy_select.getDataValue();
     this.studentsAndSubjects.input.setValue("idpersona", idp);
     this.studentsAndSubjects.input.setValue("idsy", idsy_);
     this.studentsAndSubjects.update();
      
    } catch(e) {
      console.error('ERROR IN rendimiento_sy_selectChange: ' + e); 
    } 
  },
  
  button8Click: function(inSender, inEvent) {
    try {
      this.inscalumasigDataGrid1.clearSelection();
      this.apr_esperados.update();
      this.apr_logrados.update();
      
    } catch(e) {
      console.error('ERROR IN button8Click: ' + e); 
    } 
  },
 
  apr_esperadosSuccess: function(inSender, inDeprecated) {
    try {
      $('#main_rendimiento_aprendizajes').drawAprGraph();
        
    } catch(e) {
      console.error('ERROR IN apr_esperadosSuccess: ' + e); 
    } 
  },
  
  //cuando termine de cargar la variable de apr_logrados satisfactoriamente, se cargara el grafico 
   apr_logradosSuccess: function(inSender, inDeprecated) {
    try { 
     this.apr_esperados.update();
    
    } catch(e) {
      console.error('ERROR IN apr_logradosSuccess: ' + e); 
    } 
  },
 
  
  personaDataGridXSelected: function(inSender, inIndex) {
    try {
     var idp=  this.personaDataGridX.selectedItem.getData().id.idPersona;
     var idsy_= 4;
     this.rendimiento_sy_select.setDataValue(4);
     this.defaultYear.setDataValue(4);
     this.studentsAndSubjects.input.setValue("idpersona", idp);
     this.studentsAndSubjects.input.setValue("idsy", idsy_);
     this.studentsAndSubjects.update();
      
    } catch(e) {
      console.error('ERROR IN personaDataGridXSelected: ' + e); 
    } 
  },
  
  inscalumasigDataGridXSelected: function(inSender, inIndex) {
    try {
     var ida = this.inscalumasigDataGridX.selectedItem.getData().idasignatura;
     var idaString= this.inscalumasigDataGridX.selectedItem.getData().asignatura;
     this.completeString.setCaption("Se generará el informe (PDF) para la asignatura: "+idaString);
     this.boton_generar_informe.enable();
     this.Vista_Aprendizajes.filter.setValue("id.idAsignatura", ida);
     this.Vista_Aprendizajes.update();
              
    } catch(e) {
      console.error('ERROR IN inscalumasigDataGridXSelected: ' + e); 
    }},
  
  tabla_familia_principalSelected: function(inSender, inIndex) {
    try {
    //  this.personaLiveVariable3.update();
    //  this.nacionalidad.update();
    //  this.l_familia_tipo_persona.update();
    
    } catch(e) {
      console.error('ERROR IN dataGrid5Selected: ' + e); 
    }},
  
  personaDataGrid2AfterRender: function(inSender) {
    try {
      this.personaDataGrid2.select(0);
      
    } catch(e) {
      console.error('ERROR IN personaDataGrid2AfterRender: ' + e); 
    }},


  
  VariableInscAlumApSuccess: function(inSender, inDeprecated) {
    try {
      this.actividadesLiveVariable.update();
      this.recursosLiveVariable.update();
    } catch(e) {
      console.error('ERROR IN VariableInscAlumApSuccess: ' + e); 
    } 
  },
 
  personaDataGridXSelectionChanged: function(inSender) {
    try {
     this.boton_generar_informe.disable();
     this.Vista_Aprendizajes.clearData();
     this.Vista_Ultima_Calif.clearData();
     this.VariableInscAlumAp.clearData();
     /*this.apr_esperados.clearData();
     this.apr_logrados.clearData();*/
    } catch(e) {
      console.error('ERROR IN personaDataGridXSelectionChanged: ' + e); 
    }},
  
 /*********************************
  *                              *
  * Implemenatacion de loaders   *
  * y listas de nacionalidades   *
  *                              *
  *********************************/
  
   nacionalidadBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Loading", true, 400,120);
      
    } catch(e) {
      console.error('ERROR IN nacionalidadBeforeUpdate: ' + e); 
    }},
  
  nacionalidadSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.dismiss("Loading");
       this.estados.update();
      
    } catch(e) {
      console.error('ERROR IN nacionalidadSuccess: ' + e); 
    }},
  
  estadosBeforeUpdate: function(inSender, ioInput) {
    try {
       app.pageDialog.showPage("Loading", true, 400,120);
      
    } catch(e) {
      console.error('ERROR IN estadosBeforeUpdate: ' + e); 
    }},
  
  estadosSuccess: function(inSender, inDeprecated) {
    try {
     app.pageDialog.dismiss("Loading");
     this.listaGrado.update();
      
    } catch(e) {
      console.error('ERROR IN estadosSuccess: ' + e); 
    }},
  
  listaGradoBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Loading", true, 400,120);
      
    } catch(e) {
      console.error('ERROR IN listaGradoBeforeUpdate: ' + e); 
    }},
  
  listaGradoSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.dismiss("Loading");
      this.list_nacionalidades.update();
      
    } catch(e) {
      console.error('ERROR IN listaGradoSuccess: ' + e); 
    }},
   
   list_nacionalidadesBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Loading", true, 400,120);
      
    } catch(e) {
      console.error('ERROR IN list_nacionalidadesBeforeUpdate: ' + e); 
    }},
    
  layer14Show: function(inSender) {
    try {
      this.listaGrado.update();
          
    } catch(e) {
      console.error('ERROR IN layer14Show: ' + e); 
    }},
   
 /************************************
  *                                  *
  * FIN Implemenatacion de loaders   *
  * y listas de nacionalidades       *
  *                                  *
  ************************************/

  paisLookup1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      var idp= this.paisLookup1.getDataValue().idPais;
      this.idpCodigo.setDataValue(idp);

    } catch(e) {
      console.error('ERROR IN paisLookup1Change: ' + e); 
    } 
  },
  
  idpCodigoChange: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.estados.update();
      this.estados.filter.clearData();
      
    } catch(e) {
      console.error('ERROR IN idpCodigoChange: ' + e); 
    } 
  },
 
  gradoIngresoEditor1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      var gradoChar= this.gradoIngresoEditor1.getDisplayValue();
      this.idg.setDataValue(gradoChar);
      this.listaCurso.update();
      
    } catch(e) {
      console.error('ERROR IN gradoIngresoEditor1Change: ' + e); 
    } 
  },
  cursoIngresoEditor1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      var cursoChar= this.cursoIngresoEditor1.getDisplayValue();
      this.idi.setDataValue(cursoChar);
          
    } catch(e) {
      console.error('ERROR IN cursoIngresoEditor1Change: ' + e); 
    } 
  },
  
  personaLiveForm1BeginUpdate: function(inSender) {
    try { 
      this.idg.hide();
      this.idi.hide();
      this.gradoIngresoEditor1.show();
      this.cursoIngresoEditor1.show();
      
    } catch(e) {
      console.error('ERROR IN personaLiveForm1BeginUpdate: ' + e); 
    } 
  },
  personaLiveForm1UpdateData: function(inSender) {
    try {
      this.gradoIngresoEditor1.hide();
      this.cursoIngresoEditor1.hide();
      this.idg.show();
      this.idi.show();
    } catch(e) {
      console.error('ERROR IN personaLiveForm1UpdateData: ' + e); 
    } 
  },
  personaLiveForm1CancelEdit: function(inSender) {
    try {
      this.gradoIngresoEditor1.hide();
      this.cursoIngresoEditor1.hide();
      this.idg.show();
      this.idi.show();
      
    } catch(e) {
      console.error('ERROR IN personaLiveForm1CancelEdit: ' + e); 
    } 
  },
  personaLiveForm1DeleteData: function(inSender) {
    try {
      this.gradoIngresoEditor1.hide();
      this.cursoIngresoEditor1.hide();
      this.idg.show();
      this.idi.show();
      
    } catch(e) {
      console.error('ERROR IN personaLiveForm1DeleteData: ' + e); 
    } 
  },
  documentos_datag_estudiantesSelected: function(inSender, inIndex) {
    try {
    
     if(this.documentos_datag_estudiantes.selectedItem.getData().id.autorizadoAcademico== true &&       this.documentos_datag_estudiantes.selectedItem.getData().id.autorizadoFinanciera== true ) {
      this.documentos_butt_modelo_contrato.enable();
      this.documentos_butt_matricula.enable();
      this.documentos_butt_mensualidades.enable();
      this.documentos_mensaje_informativo_error.hide();
      this.documentos_mensaje_informativo_aprovado.show();
      
      }
      
      if(this.documentos_datag_estudiantes.selectedItem.getData().id.autorizadoAcademico== false && this.documentos_datag_estudiantes.selectedItem.getData().id.autorizadoFinanciera== true ){
      this.documentos_butt_modelo_contrato.disable();
      this.documentos_butt_matricula.disable();
      this.documentos_butt_mensualidades.disable();
      this.documentos_mensaje_informativo_aprovado.hide();
      this.documentos_mensaje_informativo_error.show();
      this.documentos_mensaje_informativo_error.setCaption("Por favor comuníquese con el Director de Nivel respectivo.");
       
      }
      
      if(this.documentos_datag_estudiantes.selectedItem.getData().id.autorizadoAcademico== true && this.documentos_datag_estudiantes.selectedItem.getData().id.autorizadoFinanciera== false ){
      this.documentos_butt_modelo_contrato.disable();
      this.documentos_butt_matricula.disable();
      this.documentos_butt_mensualidades.disable();
      this.documentos_mensaje_informativo_aprovado.hide();
      this.documentos_mensaje_informativo_error.show();
      this.documentos_mensaje_informativo_error.setCaption("Por favor comuníquese con Facturación y Cartera al teléfono 749 6000 Ext.: 4103");
     
      }
      
      if(this.documentos_datag_estudiantes.selectedItem.getData().id.autorizadoAcademico== false && this.documentos_datag_estudiantes.selectedItem.getData().id.autorizadoFinanciera== false ){
     // alert("ambos"); 
      this.documentos_butt_modelo_contrato.disable();
      this.documentos_butt_matricula.disable();
      this.documentos_butt_mensualidades.disable();
      this.documentos_mensaje_informativo_aprovado.hide();
      this.documentos_mensaje_informativo_error.show();
      this.documentos_mensaje_informativo_error.setCaption("El estudiante no cumple con los requisitos para empezar el proceso de matrícula.</br> Por favor comuníquese con el Director de Nivel respectivo y/o Facturación y Cartera al teléfono 749 6000 Ext.: 4103");
       
      }
      
    } catch(e) {
      console.error('ERROR IN documentos_datag_estudiantesSelected: ' + e); 
    } 
  },
  documentos_butt_modelo_contratoClick: function(inSender, inEvent) {
    try {
      url= "services/reciboMatricula.download?method=getReport&idp="+this.documentos_datag_estudiantes.selectedItem.getData().id.idPersona;
          window.open(url,"_BLANK"); 
      
    } catch(e) {
      console.error('ERROR IN documentos_butt_modelo_contratoClick: ' + e); 
    } 
  },
  documentos_butt_matriculaClick: function(inSender, inEvent) {
    try {
       url= "services/reciboPagoBancos.download?method=getReport&idp="+this.documentos_datag_estudiantes.selectedItem.getData().id.idPersona;
          window.open(url,"_BLANK"); 
      
    } catch(e) {
      console.error('ERROR IN documentos_butt_matriculaClick: ' + e); 
    } 
  },
  documentos_butt_mensualidadesClick: function(inSender, inEvent) {
    try {
      url= "services/reciboMensualidades.download?method=getReport&idp="+this.documentos_datag_estudiantes.selectedItem.getData().id.idPersona;
          window.open(url,"_BLANK"); 
      
    } catch(e) {
      console.error('ERROR IN documentos_butt_mensualidadesClick: ' + e); 
    } 
  },
  Informacion_documentosShow: function(inSender) {
    try {
      this.l_documentos_Vista_Personas_promocion.update();
      this.documentos_butt_modelo_contrato.disable();
      this.documentos_butt_matricula.disable();
      this.documentos_butt_mensualidades.disable();
  
    } catch(e) {
      console.error('ERROR IN Informacion_documentosShow: ' + e); 
    } 
  },
  ver_ejemploClick: function(inSender, inEvent) {
    try {
      this.imagen.show();
      
    } catch(e) {
      console.error('ERROR IN ver_ejemploClick: ' + e); 
    } 
  },
  cerrarClick: function(inSender, inEvent) {
    try {
      this.imagen.hide();

    } catch(e) {
      console.error('ERROR IN cerrarClick: ' + e); 
    } 
  },
  a_sv_sendMail_requestSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.dismiss("Message1");
      app.pageDialog.showPage("Message2", false, 260,130);
      
    } catch(e) {
      console.error('ERROR IN sendMail_requestSuccess: ' + e); 
    } 
  },
  
  a_sv_sendMailPermanentSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.dismiss("Message1");
      app.pageDialog.showPage("Message2", false, 260,130);
      
    } catch(e) {
      console.error('ERROR IN a_sv_sendMailCordinators_requestSuccess: ' + e); 
    } 
  },
  
  a_sv_sendMail_requestError: function(inSender, inError) {
    try {
      alert("Nope. Algo esta mal!");
      
    } catch(e) {
      console.error('ERROR IN sendMail_requestError: ' + e); 
    } 
  },
  
  transporte_menu_rutasClick: function(inSender) {
    try {
      this.transporte_enviar_solicitudes.hide();
      this.transporte_enviar_none.hide();
      this.transporte_enviar_programacion.hide();
      this.transporte_enviar_rutas.show();
      /*paneles*/
      this.transporte_panel_novedades.hide(); 
      this.transporte_panel_solicitudes.hide();      
      this.transporte_panel_rutas.show();
      //this.spacer1.setWidth("100%");
      
    } catch(e) {
      console.error('ERROR IN transporte_menu_rutasClick: ' + e); 
    } 
  },
  transporte_menu_programacionClick: function(inSender) {
    try {
      this.transporte_enviar_solicitudes.hide();
      this.transporte_enviar_none.hide();    
      this.transporte_enviar_rutas.hide();
      this.transporte_enviar_programacion.show();
      
      /*acciones en paneles*/     
      this.transporte_panel_rutas.hide();
      this.transporte_panel_solicitudes.hide();
      this.transporte_panel_novedades.show();
      
    } catch(e) {
      console.error('ERROR IN transporte_menu_novedadesClick: ' + e); 
    } 
  },
  novedadesLiveForm1BeginInsert: function(inSender) {
    try {
      this.personaLookup2.setValue("dataValue", this.transporte_alumnos.selectedItem.getData().id.idPersona);
      this.aprobacionDirNivelEditor1.setDataValue(0);
      this.aprobacionCoordinadorEditor1.setDataValue(0);
      this.aprobacionTransporteEditor1.setDataValue(0);
      this.fechaProgramadaEditor2.setDataValue(new Date());
      
    } catch(e) {
      console.error('ERROR IN novedadesLiveForm1BeginInsert: ' + e); 
    } 
  },
  horaProgramadaEditor1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      var getHora = this.horaProgramadaEditor1.getDataValue();
      this.horaActualSalidaEditor1.setDataValue(getHora);
      
    } catch(e) {
      console.error('ERROR IN horaProgramadaEditor1Change: ' + e); 
    } 
  },
  
  recargosClick: function(inSender, inEvent) {
    try {
      var idp = 11088;
      url= "services/reciboExtractos.download?method=getReport&idp="+idp;
          window.open(url,"_BLANK"); 
    } catch(e) {
      console.error('ERROR IN recargosClick: ' + e); 
    } 
  },
  transporte_menu_solicitudesClick: function(inSender) {
    try {
      this.transporte_enviar_rutas.hide();
      this.transporte_enviar_none.hide();
      this.transporte_enviar_programacion.hide();
      this.transporte_enviar_solicitudes.show();
      /*acciones en paneles*/
      this.transporte_panel_novedades.hide();
      this.transporte_panel_rutas.hide();
      this.transporte_panel_solicitudes.show();
      
    } catch(e) {
      console.error('ERROR IN transporte_menu_solicitudesClick: ' + e); 
    } 
  },
  pestana_rutasClick: function(inSender, inEvent) {
    try {
      this.transporte_menu_rutasClick(inSender, inEvent);
      this.transporte_panel_novedades.hide();
      this.transporte_panel_solicitudes.hide();
      this.transporte_panel_rutas.show();
      
    } catch(e) {
      console.error('ERROR IN pestana_rutasClick: ' + e); 
    } 
  },
  pestana_programacionClick: function(inSender, inEvent) {
    try {     
      this.transporte_menu_programacionClick(inSender);
      this.transporte_panel_solicitudes.hide();
      this.transporte_panel_rutas.hide();
      this.transporte_panel_novedades.show();
      
    } catch(e) {
      console.error('ERROR IN pestana_programacionClick: ' + e); 
    } 
  },
  pestana_solicitudesClick: function(inSender, inEvent) {
    try {     
      this.transporte_menu_solicitudesClick(inSender);
      this.transporte_panel_rutas.hide();
      this.transporte_panel_novedades.hide();
      this.transporte_panel_solicitudes.show();
      
    } catch(e) {
      console.error('ERROR IN pestana_solicitudesClick: ' + e); 
    } 
  },
  solicitudesShow: function(inSender) {
    try {
      this.transporte_lista_personas.update();
      this.a_lista_grupoFamiliar.update();
      
    } catch(e) {
      console.error('ERROR IN solicitudesShow: ' + e); 
    } 
  },
  rutasLiveForm1BeginInsert: function(inSender) {
    try {
      this.numeroRutaEditor1.setDataValue(0);  
      this.nombreConductorEditor1.setDataValue("no aplica...");
      this.nombreMonitoraEditor1.setDataValue("no aplica...");
     
    } catch(e) {
      console.error('ERROR IN rutasLiveForm1BeginInsert: ' + e); 
    } 
  },
  transporte_alumnosSelected: function(inSender, inIndex) {
    try {
      //acciones para HQL de padres, madres, acudientes
      this.l_sv_solicitudes_informacionPadre.input.setValue("grupo",     this.transporte_alumnos.selectedItem.getData().id.grupoFamiliarIdGrupoFamiliar);
      this.l_sv_solicitudes_informacionPadre.update();
      this.l_sv_solicitudes_informacionMadre.input.setValue("grupo", this.transporte_alumnos.selectedItem.getData().id.grupoFamiliarIdGrupoFamiliar);
      this.l_sv_solicitudes_informacionMadre.update();
      this.l_sv_solicitudes_informacionAcudiente.input.setValue("grupo", this.transporte_alumnos.selectedItem.getData().id.grupoFamiliarIdGrupoFamiliar);
      this.l_sv_solicitudes_informacionAcudiente.update();
      
      //Acciones coordinador de curso
      var idPersona= this.transporte_alumnos.selectedItem.getData().id.idPersona;
      this.a_getCordinators_byId.input.setValue("id", idPersona);
      this.a_getCordinators_byId.update();

      //acciones de la seleccion
      this.rutasLiveVariable1.update();
      this.a_lista_grupoFamiliar.update();
      this.inscalumtransporteLiveVariable1.update();
      this.transporte_lista_rutas_dias.update();
      this.novedadesLiveVariable1.update();
      this.newButton5.enable();
      this.newButton4.enable();
      
    } catch(e) {
      console.error('ERROR IN transporte_alumnosSelected: ' + e); 
    } 
  },
  inscalumtransporteLiveForm1BeginInsert: function(inSender) {
    try {
      this.personaLookup3.setDataValue(this.transporte_alumnos.selectedItem.getData().id.idPersona);
      
    } catch(e) {
      console.error('ERROR IN inscalumtransporteLiveForm1BeginInsert: ' + e); 
    } 
  },
  
  inscalumtransporteDataGrid1Selected: function(inSender, inIndex) {
    try {
      if(this.inscalumtransporteDataGrid1.selectedItem.getData().rutasByLunesRuta.numeroRuta > 0){
        this.rutasByLunesRutaLookup1.disable();       
      }else{this.rutasByLunesRutaLookup1.enable();}
        
      if(this.inscalumtransporteDataGrid1.selectedItem.getData().rutasByMartesRuta.numeroRuta > 0){
        this.rutasByMartesRutaLookup1.disable();       
      }else{this.rutasByMartesRutaLookup1.enable();}
      
      if(this.inscalumtransporteDataGrid1.selectedItem.getData().rutasByMiercolesRuta.numeroRuta > 0){
        this.rutasByMiercolesRutaLookup1.disable();       
      }else{this.rutasByMiercolesRutaLookup1.enable();}
      
      if(this.inscalumtransporteDataGrid1.selectedItem.getData().rutasByJuevesRuta.numeroRuta > 0){
        this.rutasByJuevesRutaLookup1.disable();       
      }else{this.rutasByJuevesRutaLookup1.enable();}
      
      if(this.inscalumtransporteDataGrid1.selectedItem.getData().rutasByViernesRuta.numeroRuta > 0){
        this.rutasByViernesRutaLookup1.disable();       
      }else{this.rutasByViernesRutaLookup1.enable();}
      
      if(this.inscalumtransporteDataGrid1.selectedItem.getData().rutasBySabadoRuta.numeroRuta > 0){
        this.rutasBySabadoRutaLookup1.disable();       
      }else{this.rutasBySabadoRutaLookup1.enable();}
      
      if(this.inscalumtransporteDataGrid1.selectedItem.getData().rutasByDomingoRuta.numeroRuta > 0){
        this.rutasByDomingoRutaLookup1.disable();       
      }else{this.rutasByDomingoRutaLookup1.enable();}   
      
    } catch(e) {
      console.error('ERROR IN inscalumtransporteDataGrid1Selected: ' + e); 
    } 
  },
  
  a_getUserNameChange: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.a_getInforUser.input.setValue("username", this.a_getUserName.getDataValue());
      this.a_getInforUser.update();
      this.a_getTipoPersona.input.setValue("user", this.a_getUserName.getDataValue());
      this.a_getTipoPersona.update();
      this.a_informacionUsuario.input.setValue("user", this.a_getUserName.getDataValue());
      this.a_informacionUsuario.update();
      
    } catch(e) {
      console.error('ERROR IN a_getUserNameChange: ' + e); 
    } 
  },
  a_getInforUserSuccess: function(inSender, inDeprecated) {
    try {
     var nombre= main.a_getInforUser.getItem(0);
     var n1 = nombre.data.n1;
     var nombre2 = main.a_getInforUser.getItem(0);
     var n2 = nombre2.data.n2;
     var apellido = main.a_getInforUser.getItem(0);
     var a1 = apellido.data.a1;
     var apellido2 = main.a_getInforUser.getItem(0);
     var a2 = apellido2.data.a2;
     var nombreCompleto = n1+" "+n2+" "+a1+" "+a2;
     var tipo = main.a_getInforUser.getItem(0);
     var rol = tipo.data.tipoPe;
     var codigoFamilia = main.a_getInforUser.getItem(0);
     var codigo= codigoFamilia.data.idFamilia;
     var grupoFamiliar = main.a_getInforUser.getItem(0);
     var familia = grupoFamiliar.data.grupoFamilia;
     this.inicio_nombreCompleto_label.setCaption("BIENVENIDO, "+nombreCompleto); 
     this.inicio_grupo_familiar_laber.setCaption("Grupo familiar "+familia +" • "+" "+rol);
     this.a_getGroupCode.setDataValue(codigo);
     this.isUpdatedGrupoFamiliar.input.setValue("idg",codigo);
     this.estudiante_grupoFamiliar.input.setValue("idg", codigo);
     this.isUpdatedGrupoFamiliar.update();
     this.estudiante_grupoFamiliar.update();
     
    } catch(e) {
      console.error('ERROR IN a_getInforUserSuccess: ' + e); 
    } 
  },

  novedadesLiveForm1InsertData: function(inSender) {
   try {
    var cont= this.a_getCordinators_byId.getCount();
    var tipo= this.tipo_solcitud_editor1.getDataValue();
    /**EL TIPO DE SOLICITUD**/
    var tipo_solicitud = this.tipoSolicitudLookup1.getDataValue().idTipoSolicitud;
    var tipo_solicitud_string = this.tipoSolicitudLookup1.getDisplayValue();
    
    if(tipo== "Temporal"){
      
      //HQL captures
      //Servicio ya cargado, capturo los datos del usuario logueado en el sistema
      //con esto busco que se envie el correo electronico a quien se ha logueado
      
      var nombre= main.a_getInforUser.getItem(0);
      var n1 = nombre.data.n1;
      var nombre2 = main.a_getInforUser.getItem(0);
      var n2 = nombre2.data.n2;
      var apellido = main.a_getInforUser.getItem(0);
      var a1 = apellido.data.a1;
      var apellido2 = main.a_getInforUser.getItem(0);
      var a2 = apellido2.data.a2;
      var nombreCompleto = n1+" "+n2+" "+a1+" "+a2;
      var correoElectronico = main.a_getInforUser.getItem(0);
      var mail = correoElectronico.data.correo;
      var grupoFamiliar = main.a_getInforUser.getItem(0);
      var familia = grupoFamiliar.data.grupoFamilia;
      
      /*getter emails*/
      var correoPadre = main.l_sv_solicitudes_informacionPadre.getItem(0);
      var correop = correoPadre.data.correo;
      var correoMadre = main.l_sv_solicitudes_informacionMadre.getItem(0);
      var correom = correoMadre.data.correo;
      
      /*getter datos sobre la solicitud*/
      var horaForm = this.horaProgramadaEditor1.getDataValue();
      var fechaForm = this.fechaInicioProgramadaEditor1.getDataValue();
      var fechaForm2 = this.fechaFinProgramadaEditor2.getDataValue();
      var fechaSistema = this.fechaProgramadaEditor2.getDataValue();
      var rutaForm = this.rutasLookup1.getDisplayValue();
      var codigo = this.transporte_alumnos.selectedItem.getData().id.codigo;
      var comentario = this.observacionesEditor1.getDataValue();
      var solicitudTipo = this.tipo_solcitud_editor1.getDataValue();
      var nombreAlumno = this.transporte_alumnos.selectedItem.getData().id.nombre1+"   "+this.transporte_alumnos.selectedItem.getData().id.nombre2+" "+this.transporte_alumnos.selectedItem.getData().id.apellido1+" "+this.transporte_alumnos.selectedItem.getData().id.apellido2;

      /*getter emails cordinadores*/
      var correo1= main.a_getCordinators_byId.getItem(0)
      var c= correo1.data.correo;
      var nombre1= main.a_getCordinators_byId.getItem(0);
      var nomb1 = nombre1.data.n1;
      var nombre2 = main.a_getCordinators_byId.getItem(0);
      var nomb2 = nombre2.data.n2;
      var apellido1 = main.a_getCordinators_byId.getItem(0);
      var ape1= apellido1.data.a1;
      var apellido2 = main.a_getCordinators_byId.getItem(0);
      var ape2= apellido2.data.a2;
      var nc1= nomb1+" "+nomb2+" "+ape1+" "+ape2;
      
      /*setter datos en el ServiceVariable directo a JavaService*/
      this.a_sv_sendMail_request.input.setValue("hora", horaForm);
      this.a_sv_sendMail_request.input.setValue("tipo_sol", tipo_solicitud);
      this.a_sv_sendMail_request.input.setValue("tipo_solicitud", tipo_solicitud_string);
      this.a_sv_sendMail_request.input.setValue("correomadre", correom);
      this.a_sv_sendMail_request.input.setValue("correopadre", correop);
      this.a_sv_sendMail_request.input.setValue("fecha", fechaForm);
      this.a_sv_sendMail_request.input.setValue("fecha2", fechaForm2);     
      this.a_sv_sendMail_request.input.setValue("grupo", familia);
      this.a_sv_sendMail_request.input.setValue("nombreCompletoAlumno", nombreAlumno);
      this.a_sv_sendMail_request.input.setValue("nombreAcceso", nombreCompleto);
      this.a_sv_sendMail_request.input.setValue("ruta", rutaForm);
      this.a_sv_sendMail_request.input.setValue("fechaActual", fechaSistema);
      this.a_sv_sendMail_request.input.setValue("codigoAlumno", codigo);
      this.a_sv_sendMail_request.input.setValue("observacion", comentario);
      this.a_sv_sendMail_request.input.setValue("loggedMail", mail);
      this.a_sv_sendMail_request.input.setValue("solicitud", solicitudTipo);
      this.a_sv_sendMail_request.input.setValue("nombredocente", nc1);
      this.a_sv_sendMail_request.input.setValue("maildocente", c);
      this.a_sv_sendMail_request.update();
      
    }
    
    if(tipo== "Permanente"){
      //HQL captures
      //Servicio ya cargado, capturo los datos del usuario logueado en el sistema
      //con esto busco que se envie el correo electronico a quien se ha logueado
      
      var nombre= main.a_getInforUser.getItem(0);
      var n1 = nombre.data.n1;
      var nombre2 = main.a_getInforUser.getItem(0);
      var n2 = nombre2.data.n2;
      var apellido = main.a_getInforUser.getItem(0);
      var a1 = apellido.data.a1;
      var apellido2 = main.a_getInforUser.getItem(0);
      var a2 = apellido2.data.a2;
      var nombreCompleto = n1+" "+n2+" "+a1+" "+a2;
      var correoElectronico = main.a_getInforUser.getItem(0);
      var mail = correoElectronico.data.correo;
      var grupoFamiliar = main.a_getInforUser.getItem(0);
      var familia = grupoFamiliar.data.grupoFamilia;
      
      /*getter emails*/
      var correoPadre = main.l_sv_solicitudes_informacionPadre.getItem(0);
      var correop = correoPadre.data.correo;
      var correoMadre = main.l_sv_solicitudes_informacionMadre.getItem(0);
      var correom = correoMadre.data.correo;
      
      /*getter datos sobre la solicitud*/
      var horaForm = this.horaProgramadaEditor1.getDataValue();
      var fechaForm = this.fechaInicioProgramadaEditor1.getDataValue();
      var fechaForm2 = this.fechaFinProgramadaEditor2.getDataValue();
      var fechaSistema = this.fechaProgramadaEditor2.getDataValue();
      var rutaForm = this.rutasLookup1.getDisplayValue();
      var codigo = this.transporte_alumnos.selectedItem.getData().id.codigo;
      var comentario = this.observacionesEditor1.getDataValue();
      var solicitudTipo = this.tipo_solcitud_editor1.getDataValue();
      var nombreAlumno = this.transporte_alumnos.selectedItem.getData().id.nombre1+"   "+this.transporte_alumnos.selectedItem.getData().id.nombre2+" "+this.transporte_alumnos.selectedItem.getData().id.apellido1+" "+this.transporte_alumnos.selectedItem.getData().id.apellido2;

      /*getter emails cordinadores*/
      var correo1= main.a_getCordinators_byId.getItem(0)
      var c= correo1.data.correo;
      var nombre1= main.a_getCordinators_byId.getItem(0);
      var nomb1 = nombre1.data.n1;
      var nombre2 = main.a_getCordinators_byId.getItem(0);
      var nomb2 = nombre2.data.n2;
      var apellido1 = main.a_getCordinators_byId.getItem(0);
      var ape1= apellido1.data.a1;
      var apellido2 = main.a_getCordinators_byId.getItem(0);
      var ape2= apellido2.data.a2;
      var nc1= nomb1+" "+nomb2+" "+ape1+" "+ape2;
      
      /*setter datos en el ServiceVariable directo a JavaService*/
      this.a_sv_sendMailPermanent.input.setValue("hora", horaForm);
      this.a_sv_sendMailPermanent.input.setValue("tipo_sol", tipo_solicitud);
      this.a_sv_sendMailPermanent.input.setValue("tipo_solicitud", tipo_solicitud_string);
      this.a_sv_sendMailPermanent.input.setValue("correomadre", correom);
      this.a_sv_sendMailPermanent.input.setValue("correopadre", correop);
      this.a_sv_sendMailPermanent.input.setValue("fecha", fechaForm);
      this.a_sv_sendMailPermanent.input.setValue("fecha2", fechaForm2);     
      this.a_sv_sendMailPermanent.input.setValue("grupo", familia);
      this.a_sv_sendMailPermanent.input.setValue("nombreCompletoAlumno", nombreAlumno);
      this.a_sv_sendMailPermanent.input.setValue("nombreAcceso", nombreCompleto);
      this.a_sv_sendMailPermanent.input.setValue("ruta", rutaForm);
      this.a_sv_sendMailPermanent.input.setValue("fechaActual", fechaSistema);
      this.a_sv_sendMailPermanent.input.setValue("codigoAlumno", codigo);
      this.a_sv_sendMailPermanent.input.setValue("observacion", comentario);
      this.a_sv_sendMailPermanent.input.setValue("loggedMail", mail);
      this.a_sv_sendMailPermanent.input.setValue("solicitud", solicitudTipo);
      this.a_sv_sendMailPermanent.input.setValue("nombredocente", nc1);
      this.a_sv_sendMailPermanent.input.setValue("maildocente", c);
      this.a_sv_sendMailPermanent.update();
    }
      
      
    } catch(e) {
      console.error('ERROR IN novedadesLiveForm1InsertData: ' + e); 
    } 
  },
   
  a_sv_sendMail_requestBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Message1", true, 280,120);
   
    } catch(e) {
      console.error('ERROR IN a_sv_sendMail_requestBeforeUpdate: ' + e); 
    } 
  },
  picture1Click: function(inSender) {
    try {
      if(dojo.isIE >= 6){ // only IE6 and below
        url= "http://www.iegallery.com/Addons/Details/14299";
        window.open(url,"_BLANK"); 
        
      }
      
      if(dojo.isSafari >= 4){ // only IE6 and below
        url= "http://s3.amazonaws.com/diigo/as/update/as-1.2.safariextz";
        window.open(url,"_BLANK");
         
      }
      
      if(dojo.isFF >= 10){ // only Firefox 10 and lower
        url= "http://addons.mozilla.org/firefox/downloads/latest/287841/addon-287841-latest.xpi?src=dp-btn-primary";
        window.open(url,"_BLANK");  
      }

      if(dojo.isOpera >= 8){ // only Opera
        alert("This Extension is not available for Opera Web Browser. We recomend use Google Chrome or Mozilla Firefox.");
        
      }
      
      if(dojo.isChrome >= 12){
        url= "http://chrome.google.com/webstore/detail/alelhddbbhepgpmgidjdcjakblofbmce?utm_source=gmail";
        window.open(url,"_BLANK"); 
   
      }
     
    } catch(e) {
      console.error('ERROR IN screenshotClick: ' + e); 
    } 
  },
  
  a_getCordinators_byIdSuccess: function(inSender, inDeprecated) {
    try {
      /*getter emails cordinadores*/
      var correo1= main.a_getCordinators_byId.getItem(0)
      var c= correo1.data.correo;
      var nombre1= main.a_getCordinators_byId.getItem(0);
      var nomb1 = nombre1.data.n1;
      var nombre2 = main.a_getCordinators_byId.getItem(0);
      var nomb2 = nombre2.data.n2;
      var apellido1 = main.a_getCordinators_byId.getItem(0);
      var ape1= apellido1.data.a1;
      var apellido2 = main.a_getCordinators_byId.getItem(0);
      var ape2= apellido2.data.a2;
  
    } catch(e) {
      console.error('ERROR IN a_getCordinators_byIdSuccess: ' + e); 
    } 
  },
  
  a_sv_sendMailPermanentError: function(inSender, inError) {
    try {
      alert("Nope. Algo esta mal!");
      
    } catch(e) {
      console.error('ERROR IN a_sv_sendMailCordinators_requestError: ' + e); 
    } 
  },
  a_sv_sendMailPermanentBeforeUpdate: function(inSender, ioInput) {
    try {
       app.pageDialog.showPage("Message1", true, 280,120);
      
    } catch(e) {
      console.error('ERROR IN a_sv_sendMailCordinators_requestBeforeUpdate: ' + e); 
    } 
  },

  tipoSolicitudLookup1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
     var idtipo=  this.tipoSolicitudLookup1.getDataValue().idTipoSolicitud;
     
      if(idtipo == 1 ){
        this.transporte_lista_rutas_dias.filter.clearData();
        this.transporte_lista_rutas_dias.update();
        this.transporte_lista_rutas_dias.setValue("grupoFamiliar.idGrupoFamiliar", undefined);
        this.horaProgramadaEditor1.show();  
        this.relatedEditor3.hide();
        this.panel_dias.hide();
        this.observacionesEditor1.show();
        this.horaActualSalidaEditor1.hide();
        this.horaActualSalidaEditor1.setDataValue(new Date());
        this.rutasLookup1.setDisplayValue("[...] - ...");
        
      }
      if(idtipo == 2 ){
        var valueToFilter = this.transporte_alumnos.selectedItem.getData().id.grupoFamiliarIdGrupoFamiliar;
        this.transporte_lista_rutas_dias.filter.setValue("grupoFamiliar.idGrupoFamiliar", valueToFilter);
        this.transporte_lista_rutas_dias.update(); 
        this.horaProgramadaEditor1.hide();
        this.panel_dias.show();         
        this.relatedEditor3.show();
        this.observacionesEditor1.show();
        this.horaActualSalidaEditor1.setDataValue(new Date());
        this.horaProgramadaEditor1.setDataValue(new Date());

      }
      if(idtipo == 3 ){
        this.horaProgramadaEditor1.hide();  
        this.relatedEditor3.hide();
        this.panel_dias.hide(); 
        this.horaActualSalidaEditor1.hide();  
        this.transporte_lista_rutas_dias.filter.clearData();          
        this.horaActualSalidaEditor1.setDataValue(new Date());
        this.horaProgramadaEditor1.setDataValue(new Date());
        this.observacionesEditor1.show();
        this.transporte_lista_rutas_dias.update();
        this.transporte_lista_rutas_dias.setValue("grupoFamiliar.idGrupoFamiliar", undefined);  
        this.rutasLookup1.setDisplayValue("[...] - ...");    
        
      }
      if(idtipo == 4 ){
        this.transporte_lista_rutas_dias.filter.clearData();
        this.transporte_lista_rutas_dias.update();
        this.transporte_lista_rutas_dias.setValue("grupoFamiliar.idGrupoFamiliar", undefined);
        this.horaProgramadaEditor1.hide();  
        this.relatedEditor3.hide();
        this.panel_dias.hide();
        this.observacionesEditor1.show();   
        this.horaActualSalidaEditor1.hide();
        this.horaProgramadaEditor1.setDataValue(new Date());
        this.horaActualSalidaEditor1.setDataValue(new Date());        
        this.rutasLookup1.setDisplayValue("[...] - ...");  
             
      }
      if(idtipo == 5 ){ 
        this.transporte_lista_rutas_dias.filter.clearData();
        this.transporte_lista_rutas_dias.update();
        this.transporte_lista_rutas_dias.setValue("grupoFamiliar.idGrupoFamiliar", undefined);
        this.horaProgramadaEditor1.hide();  
        this.relatedEditor3.hide();
        this.panel_dias.hide();
        this.observacionesEditor1.show();
        this.horaActualSalidaEditor1.hide();
        this.horaProgramadaEditor1.setDataValue(new Date());
        this.horaActualSalidaEditor1.setDataValue(new Date());        
        this.rutasLookup1.setDisplayValue("[...] - ...");  
              
      }
      if(idtipo == 6 ){ 
        this.transporte_lista_rutas_dias.filter.clearData();
        this.transporte_lista_rutas_dias.update();
        this.transporte_lista_rutas_dias.setValue("grupoFamiliar.idGrupoFamiliar", undefined);
        this.horaProgramadaEditor1.hide();  
        this.relatedEditor3.hide();
        this.panel_dias.hide();
        this.observacionesEditor1.show();        
        this.horaActualSalidaEditor1.hide();
        this.horaProgramadaEditor1.setDataValue(new Date());
        this.horaActualSalidaEditor1.setDataValue(new Date());
        this.rutasLookup1.setDisplayValue("[...] - ...");  
            
      }
      if(idtipo == 7 ){
        this.transporte_lista_rutas_dias.filter.clearData();
        this.transporte_lista_rutas_dias.update();
        this.transporte_lista_rutas_dias.setValue("grupoFamiliar.idGrupoFamiliar", undefined);
        this.horaProgramadaEditor1.hide();  
        this.relatedEditor3.hide();
        this.panel_dias.hide();
        this.observacionesEditor1.show();
        this.horaActualSalidaEditor1.hide();
        this.horaProgramadaEditor1.setDataValue(new Date());
        this.horaActualSalidaEditor1.setDataValue(new Date());
        this.rutasLookup1.setDisplayValue("[...] - ...");       
      }
      
    } catch(e) {
      console.error('ERROR IN tipoSolicitudLookup1Change: ' + e); 
    } 
  },
  
  fechaFinProgramadaEditor2Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      var _fecha1 = this.fechaInicioProgramadaEditor1.getDataValue();
      var _fecha2 = this.fechaFinProgramadaEditor2.getDataValue();
      var _f1_format = Date(_fecha1);
      var _f2_format = Date(_fecha2);

    } catch(e) {
      console.error('ERROR IN fechaFinProgramadaEditor2Change: ' + e); 
    } 
  },
  
  novedadesDataGrid1Selected: function(inSender, inIndex) {
    try {
      var idtipo =  this.novedadesDataGrid1.selectedItem.getData().tipoSolicitud.idTipoSolicitud;
     
      if(idtipo == 1 ){
        this.horaProgramadaEditor1.show();  
        this.relatedEditor3.hide();
        this.panel_dias.hide();
        this.observacionesEditor1.show();
        this.horaActualSalidaEditor1.hide();
        
      }
      if(idtipo == 2 ){
        this.panel_dias.show();         
        this.relatedEditor3.show();
        this.observacionesEditor1.show();
        

      }
      if(idtipo == 3 ){
        this.horaProgramadaEditor1.hide();  
        this.relatedEditor3.hide();
        this.panel_dias.hide();
        this.observacionesEditor1.show();
        this.horaActualSalidaEditor1.hide();
        
      }
      if(idtipo == 4 ){
        this.horaProgramadaEditor1.hide();  
        this.relatedEditor3.hide();
        this.panel_dias.hide();
        this.observacionesEditor1.show();
        this.horaActualSalidaEditor1.hide();
             
      }
      if(idtipo == 5 ){
        this.horaProgramadaEditor1.hide();  
        this.relatedEditor3.hide();
        this.panel_dias.hide();
        this.observacionesEditor1.show();
        this.horaActualSalidaEditor1.hide();
       
      }
      if(idtipo == 6 ){ 
        this.transporte_lista_rutas_dias.filter.clearData();
        this.transporte_lista_rutas_dias.update();
        this.transporte_lista_rutas_dias.setValue("grupoFamiliar.idGrupoFamiliar", undefined);
        this.horaProgramadaEditor1.hide();  
        this.relatedEditor3.hide();
        this.panel_dias.hide();
        this.observacionesEditor1.show();
        this.horaActualSalidaEditor1.hide();
            
      }
      if(idtipo == 7 ){
        this.horaProgramadaEditor1.hide();  
        this.relatedEditor3.hide();
        this.panel_dias.hide();
        this.observacionesEditor1.show();
        this.horaActualSalidaEditor1.hide();   
      }
      
    } catch(e) {
      console.error('ERROR IN novedadesDataGrid1Selected: ' + e); 
    } 
  },
  inicio_ir_a_facturacionClick: function(inSender, inEvent) {
    try {
      url= "http://aprendoz.rochester.edu.co:8080/Aprendoz_Facturacion";
          window.open(url,"_BLANK"); 
      
    } catch(e) {
      console.error('ERROR IN inicio_ir_a_facturacionClick: ' + e); 
    } 
  },
 
  tipo_solcitud_editor1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      
      
    } catch(e) {
      console.error('ERROR IN tipo_solcitud_editor1Change: ' + e); 
    } 
  },

    isAuthenticatedSVSuccess: function(inSender, inDeprecated) {
    try {
     if(this.isAuthenticatedSV.dataValue = true){  
         
     }
     if(this.isAuthenticatedSV.dataValue = false){  
       app.pageDialog.showPage("SesionExpirada", true, 900, 660);  
     }
 
    } catch(e) {
      console.error('ERROR IN isAuthenticatedSVSuccess: ' + e); 
    } 
  },

  alimento_buttClick: function(inSender, inEvent) {
    try {
     var idpersona= this.matricula_select_estudiante.getDataValue();
     this.estudiante_gradoGrupoFamiliar.input.setValue("idp", idpersona);
     this.estudiante_gradoGrupoFamiliar.update();  
     
     this.transporte.hide();
     this.adicionales.hide();
     this.seguro.hide();
     this.impresion.hide(); 
     this.mensaje.hide();
     this.ficha_medica.hide();
     this.alimentacion.show(); 
      
    } catch(e) {
      console.error('ERROR IN alimento_buttClick: ' + e); 
    }},
  transporte_buttClick: function(inSender, inEvent) {
    try {
     var idpersona= this.matricula_select_estudiante.getDataValue();
     this.estudiante_gradoGrupoFamiliar.input.setValue("idp", idpersona);
     this.estudiante_gradoGrupoFamiliar.update();   
     
     this.alimentacion.hide();
     this.adicionales.hide();
     this.seguro.hide();
     this.impresion.hide(); 
     this.mensaje.hide();
     this.ficha_medica.hide();
     this.transporte.show();
      
    } catch(e) {
      console.error('ERROR IN transporte_buttClick: ' + e); 
    }},
  adicional_buttClick: function(inSender, inEvent) {
    try {
     var idpersona= this.matricula_select_estudiante.getDataValue();
     this.estudiante_gradoGrupoFamiliar.input.setValue("idp", idpersona);
     this.estudiante_gradoGrupoFamiliar.update();   
     
     this.alimentacion.hide();
     this.transporte.hide(); 
     this.seguro.hide();
     this.impresion.hide(); 
     this.mensaje.hide();
     this.ficha_medica.hide();
     this.adicionales.show();
      
    } catch(e) {
      console.error('ERROR IN adicional_buttClick: ' + e); 
    }},
  seguro_buttClick: function(inSender, inEvent) {
    try {
     var idpersona= this.matricula_select_estudiante.getDataValue();
     this.estudiante_gradoGrupoFamiliar.input.setValue("idp", idpersona);
     this.estudiante_gradoGrupoFamiliar.update();    
      
     this.alimentacion.hide();
     this.transporte.hide(); 
     this.adicionales.hide();
     this.impresion.hide(); 
     this.mensaje.hide();
     this.ficha_medica.hide();
     this.seguro.show(); 
    } catch(e) {
      console.error('ERROR IN seguro_buttClick: ' + e); 
    }},    
  enfermeria_buttClick: function(inSender, inEvent) {
    try {
     var value= main.matricula_select_estudiante.getDataValue();
     main._fichaMedicasv.input.setValue("idp", value);
     main._fichaMedicasv.update();

     main._hqlAlergias.input.setValue("idp", value);
     main._hqlAlergias.update();

     this.alimentacion.hide();
     this.transporte.hide(); 
     this.adicionales.hide();
     this.seguro.hide();
     this.mensaje.hide();
     this.impresion.hide(); 
     this.ficha_medica.show();     
    } catch(e) {
      console.error('ERROR IN enfermeria_buttClick: ' + e); 
    }},  
  impresion_buttClick: function(inSender, inEvent) {
    try {
     var _grupofamiliar=  this.a_getGroupCode.getDataValue();
     this.impresion_grupoFamiliar.input.setValue("gf", _grupofamiliar); 
     this.impresion_grupoFamiliar.update(); 

     this._verificarResponsablePagoShowPanel.input.setValue("idgf", _grupofamiliar);
     this._verificarResponsablePagoShowPanel.update();

     this.alimentacion.hide();
     this.transporte.hide(); 
     this.adicionales.hide();
     this.seguro.hide();
     this.mensaje.hide();
     this.ficha_medica.hide();
     this.impresion.show(); 

    } catch(e) {
      console.error('ERROR IN impresion_buttClick: ' + e); 
    }},    
  home_buttClick: function(inSender) {
    try {
     this.alimentacion.hide();
     this.transporte.hide(); 
     this.adicionales.hide();
     this.seguro.hide();
     this.ficha_medica.hide();
     this.impresion.hide();  
     this.mensaje.show();
      
    } catch(e) {
      console.error('ERROR IN home_buttClick: ' + e); 
    }}, 

  agregar_alimClick: function(inSender, inEvent) {
    try {
     var _iac= this.alimentosDataGrid.selectedItem.getData().idiac;
     this.a_actualizaServicio.input.setValue("idiac", _iac );
     this.a_actualizaServicio.input.setValue("inscribir", "true" );
     this.a_actualizaServicio.update();
      
    } catch(e) {
      console.error('ERROR IN agregar_alimClick: ' + e); 
    }},
  a_actualizaServicioSuccess: function(inSender, inDeprecated) {
    try {
     this.a_listadoServiciosAlimentos.update();
      
    } catch(e) {
      console.error('ERROR IN a_actualizaServicioSuccess: ' + e); 
    } 
  },
  a_actualizaServicioTransSuccess: function(inSender, inDeprecated) {
    try {
     this.a_listadoServicios.update(); 
      
    } catch(e) {
      console.error('ERROR IN a_actualizaServicioTransSuccess: ' + e); 
    }}, 
  isUpdatedGrupoFamiliarSuccess: function(inSender, inDeprecated) {
    try {
     // var _count= main.isUpdatedGrupoFamiliar.getCount();
     //   if(_count == 1){
     //     var idgrupo= this.a_getGroupCode.getDataValue();
     //     this.isUpdatedGrupoFamiliarBool.input.setValue("idg", idgrupo);
     //     this.isUpdatedGrupoFamiliarBool.update();
     //   } 
     //   if(_count == 0){
     //     //app.pageDialog.showPage("ActualizaDatos", true, 900, 600);
     //   }
      
    } catch(e) {
      console.error('ERROR IN isUpdatedGrupoFamiliarSuccess: ' + e); 
    } 
  },                                                      
  isUpdatedGrupoFamiliarBoolSuccess: function(inSender, inDeprecated) {
    try {
      // var _json= main.isUpdatedGrupoFamiliarBool.getItem(0);
      // var _bool= _json.data.actualizado;
      // var _count= main.isUpdatedGrupoFamiliar.getCount();
      // if(_bool==1 && _count==1){        
      // }      
      // if(_bool==0 && _count==1){
      //   //app.pageDialog.showPage("ActualizaDatos", true, 900, 600);
      // }

    } catch(e) {
      console.error('ERROR IN isUpdatedGrupoFamiliarBoolSuccess: ' + e); 
    } 
  }, 
  a_actualizaServicioSegSuccess: function(inSender, inDeprecated) {
    try {
     this.a_listadoServiciosSeguros.update(); 
      
    } catch(e) {
      console.error('ERROR IN a_actualizaServicioSegSuccess: ' + e); 
    }},
  updateResponsableSuccess: function(inSender, inDeprecated) {
    try {
     this.impresion_grupoFamiliar.update(); 
      
    } catch(e) {
      console.error('ERROR IN updateResponsableSuccess: ' + e); 
    }},   
  contrato_trans_buttClick: function(inSender, inEvent) {
    try {
     main.a_informacionUsuario.update();
     var getter = main.a_informacionUsuario.getItem(0);
     var id= getter.data.idpersona;
     var clave= getter.data.clave;    
     var _persona=   this.matricula_select_estudiante.getDataValue();
     var formatType= "PDF";
     $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/MAT002",
               format: formatType,
               params: {idpersona: _persona}
         }
       });
       inEvent.preventDefault();    
      
    } catch(e) {
      console.error('ERROR IN contrato_trans_buttClick: ' + e); 
    }},
  a_getGroupCodeChange: function(inSender, inDisplayValue, inDataValue) {
    try {
    var _grupo= this.a_getGroupCode.getDataValue();
    this.getNuevo.input.setValue("grupo", _grupo);
    this.getNuevo.update();
 
    } catch(e) {
      console.error('ERROR IN a_getGroupCodeChange: ' + e); 
    }},
  /*a_getUserNameSvSuccess: function(inSender, inDeprecated) {
    try {
     var _username= main.a_getUserNameSv.getData().dataValue;
     main._svHideLayer.input.setValue("user", _username);  
     main.getIdP.input.setValue("user", _username);  
     main._svHideLayer.update();
     main.getIdP.update(); 
     this.a_getInforUser.input.setValue("username", this.a_getUserName.getDataValue());
     this.a_getInforUser.update();
     this.a_getTipoPersona.input.setValue("user", this.a_getUserName.getDataValue());
     this.a_getTipoPersona.update();
     this.a_informacionUsuario.input.setValue("user", this.a_getUserName.getDataValue());
     this.a_informacionUsuario.update();
      
    } catch(e) {
      console.error('ERROR IN a_getUserNameSvSuccess: ' + e); 
    }},
  getIdPSuccess: function(inSender, inDeprecated) {
    try {
     var _json=  main.getIdP.getItem(0);
     var _idp= _json.data.id;
     this.dash_asignaturas_estudiante.input.setValue("idpersona", _idp);
     this.dash_asignaturas_estudiante.input.setValue("idsy", 3);
     this.dash_asignaturas_estudiante.update();
      
    } catch(e) {
      console.error('ERROR IN getIdPSuccess: ' + e); 
    }}, */ 
  _svHideLayerSuccess: function(inSender, inDeprecated) {
    try {
     var json= main._svHideLayer.getItem(0);
     var _tipo= json.data.idtipo;
       
    } catch(e) {
      console.error('ERROR IN _svHideLayerSuccess: ' + e); 
    }},
  _fichaMedicasvSuccess: function(inSender, inDeprecated) {
    try {
     var _json = main._fichaMedicasv.getItem(0);
     var _nombre = _json.data.nombrecompleto;
     var _emergencia = _json.data.emergencia;
     var _eps = _json.data.eps;
     var _fecha = _json.data.fecha;
     var _grado = _json.data.grado;
     var _prepagada = _json.data.prepagada;
     var _rh = _json.data.rh;
     var _telefono= _json.data.telefono;

        var now= new Date();
        var yearNow= now.getFullYear();
        var monthNow= now.getMonth();
        var dayNow= now.getDay();

        var pureDate= _fecha;
        var bornDate = new Date(pureDate);   
        var yearBorn= bornDate.getFullYear();
        var monthBorn= bornDate.getMonth();
        var dayBorn= bornDate.getDay();
        var age= yearNow-yearBorn;

          if(monthBorn <= monthNow){
            if(dayBorn >= dayNow){
              this.edad.setDataValue(age+" Años");
            }else{
              this.edad.setDataValue(age+" Años");
            }
          }
          if(monthBorn > monthNow){
            this.edad.setDataValue(age+" Años");
          }
     this.nombrecompleto.setDataValue(_nombre);
     this.gradoIngreso.setDataValue(_grado);
     this.rh.setDataValue(_rh);
     this.eps.setDataValue(_eps);
     this.prepagada.setDataValue(_prepagada);
     this.telefono.setDataValue(_telefono);
     this.clinica_emergencia.setDataValue(_emergencia);
 
    } catch(e) {
      console.error('ERROR IN _fichaMedicasvSuccess: ' + e); 
    } 
  },
  pagar_pseClick: function(inSender, inEvent) {
    try {
     var _grupo= this.a_getGroupCode.getDataValue();
     var _json= main.a_getInforUser.getItem(0);
     var n1 = _json.data.n1;
     var n2 = _json.data.n2;
     var a1 = _json.data.a1;
     var a2 = _json.data.a2;
     var nombreCompleto = n1+" "+n2+" "+a1+" "+a2;
     var role = _json.data.tipoPe;
     var _documento= _json.data.documento;
     
     this._whoIsPayResponsible.input.setValue("idgf", _grupo);
     this._whoIsPayResponsible.update();

     this.concepto.setDataValue("PAGO_MATRICULA_2013-2014_FUND._COLEGIO_ROCHESTER");
     this.pagar_pse_butt.enable();

     var _id=  this.matricula_select_estudiante.getDataValue();
     this.getNombreAlumno.input.setValue("id", _id);
     this.getNombreAlumno.update();

     this._totalPagarSV.input.setValue("idp", _id);
     this._totalPagarSV.update();
      
    } catch(e) {
      console.error('ERROR IN pagar_pseClick: ' + e); 
    } 
  },
  getNombreAlumnoSuccess: function(inSender, inDeprecated) {
    try {
     var _json =  main.getNombreAlumno.getItem(0);
     var _nombre= _json.data.nombrecompleto;
     this.estudiante.setDataValue(_nombre);
      
    } catch(e) {
      console.error('ERROR IN getNombreAlumnoSuccess: ' + e); 
    } 
  },
  _totalPagarSVSuccess: function(inSender, inDeprecated) {
    try {
     var _json= main._totalPagarSV.getItem(0);
     var _valor= _json.data.totalPagar;
     this.valor.setDataValue(_valor); 
      
    } catch(e) {
      console.error('ERROR IN _totalPagarSVSuccess: ' + e); 
    } 
  },
  
  pse_logoClick: function(inSender) {
    try {  
      var psedata = {
          id : this.noDocumento.getDataValue(),
          value : this.valor.getDataValue(),
          subject : this.concepto.getDataValue(),
          idpersona : this.matricula_select_estudiante.getDataValue()
      };
      // var url;
      // if (url) {
      //   console.log("Ajax ok");
      //   url = "http://foo.bar"
      // } else {
      //   console.log("Jodase");
      // }
       $.ajax({
        url: 'http://aprendoz.rochester.edu.co/enr/send/data.json',
        data: psedata,
        dataType: 'jsonp'
      }).done(function( msg ) {
        
      }); 
    } catch(e) {
      console.error('ERROR IN pse_logoClick: ' + e); 
    } 
  },
  pagar_pse_buttClick: function(inSender, inEvent) {
    try {
      var psedata = {
          id : this.noDocumento.getDataValue(),
          value : this.valor.getDataValue(),
          subject : this.concepto.getDataValue(),
          idpersona : this.matricula_select_estudiante.getDataValue()
      };
      
      this.pagar_pse_butt.disable();
      $.ajax({
        url: 'http://aprendoz.rochester.edu.co/enr/send/data.json',
        data: psedata,
        dataType: 'jsonp',
        success : function(data) {
          window.open(data.url);    
        },
        fail : function(data) {
          this.pagar_pse_butt.enable();
          alert("Error: " + data);
        }
      });
      
    } catch(e) {
      console.error('ERROR IN button9Click: ' + e); 
    } 
  },
  _verificarResponsablePagoSuccess: function(inSender, inDeprecated) {
    try {
     var _json= main._verificarResponsablePago.getItem(0);
     var _cont= main._verificarResponsablePago.getCount();

     if(_cont == 1){
       alert("ACCIÓN NO VALIDA:\n\nSolo debe existir un responsable por Grupo Familiar.\n\nRetire el responsable existenge (- Retirar) y a continuación elija un nuevo responsable (+ Elegir)"); 
       
     } 
     if(_cont == 0){
        var _id= this.responsableDataGrid.selectedItem.getData().idunico;
        this.updateResponsable.input.setValue("idipgf", _id);
        this.updateResponsable.input.setValue("responsable", "true");
        this.updateResponsable.update();

        this.mensaje_final.setCaption("Has click sobre cada boton, descarga e imprime cada documento, estos los necesitará en el proceso de Matrícula");
        this.picture10.show();
        this.panel_documentos.show();
     }
      
    } catch(e) {
      console.error('ERROR IN _verificarResponsablePagoSuccess: ' + e); 
    } 
  },
  _verificarResponsablePagoShowPanelSuccess: function(inSender, inDeprecated) {
    try {
      var _cont= main._verificarResponsablePagoShowPanel.getCount();
      if(_cont == 1){ 
        this.mensaje_final.setCaption("Has click sobre cada boton, descarga e imprime cada documento. <u><b>Los documentos deben ser impresos en tamaño carta por ambas caras y ser presentados el dia de la oficialización de la matrícula.</u></b>");
        this.picture10.show();
        this.panel_documentos.show();
        
      }
      if(_cont == 0){
        this.mensaje_final.setCaption("");
        this.picture10.hide();
        this.panel_documentos.hide();
        this.pagar_pse.disable();
        this.pagar_banco.disable();
        this.resument_de_pago.hide();
      }
      
    } catch(e) {
      console.error('ERROR IN _verificarResponsablePagoShowPanelSuccess: ' + e); 
    }},
  responsableDataGridSelected: function(inSender, inIndex) {
    try {
     this.pagar_pse.enable();
     this.pagar_banco.enable(); 
      
    } catch(e) {
      console.error('ERROR IN responsableDataGridSelected: ' + e); 
    } 
  },
  responsableDataGridDeselected: function(inSender, inIndex) {
    try {
     this.pagar_pse.disable();
     this.pagar_banco.disable();  
      
    } catch(e) {
      console.error('ERROR IN responsableDataGridDeselected: ' + e); 
    } 
  },
  
  detalleAlimentoSuccess: function(inSender, inData) {
    try {
     alert("Detalles guardados exitosamente!"); 
      
    } catch(e) {
      console.error('ERROR IN detalleAlimentoSuccess: ' + e); 
    } 
  },
  _hqlAlergiasSuccess: function(inSender, inDeprecated) {
    try {
     var _json=  main._hqlAlergias.getItem(0);
     var _alergias= _json.data.alergias;
     var _recomendaciones= _json.data.recomendaciones;
     var _idficha= _json.data.idficha;

     this.alergias.setDataValue(_alergias);
     this.recomendaciones.setDataValue(_recomendaciones);
     this.idFicha.setDataValue(_idficha);
      
    } catch(e) {
      console.error('ERROR IN _hqlAlergiasSuccess: ' + e); 
    } 
  },
  guardar_fichaClick: function(inSender, inEvent) {
    try {
    var idpersona= this.matricula_select_estudiante.getDataValue();
    this._verificaExistenciaFichaMedica.input.setValue("idp", idpersona);
    this._verificaExistenciaFichaMedica.update();
      
    } catch(e) {
      console.error('ERROR IN guardar_fichaClick: ' + e); 
    } 
  },

  _verificaExistenciaFichaMedicaSuccess: function(inSender, inDeprecated) {
    try {
     var idpersona= this.matricula_select_estudiante.getDataValue();
     var _json= main._verificaExistenciaFichaMedica.getItem(0);
     var _cont= main._verificaExistenciaFichaMedica.getCount();

     var _idficha= this.idFicha.getDataValue();
     var _medico = this.medico_tratante.getDataValue();
     var _alergias= this.alergias.getDataValue();
     var _enfermedades= this.enfermedades.getDataValue();
     var _antecedentes= this.antecedentes.getDataValue();
     var _medicamentos= this.medicamentos.getDataValue();
     var _medicamentosAlerta= this.medicamentos_no_permitidos.getDataValue();
     var _recomendaciones= this.recomendaciones.getDataValue();

      if(_cont == 1){
        this._fichaMedicaVar.setValue("idfichaMedica", _idficha);
        this._fichaMedicaVar.setValue("persona.idPersona", idpersona);
        this._fichaMedicaVar.setValue("medicoTratante", _medico);
        this._fichaMedicaVar.setValue("alergias", _alergias);
        this._fichaMedicaVar.setValue("enfermedadesRecientes", _enfermedades);
        this._fichaMedicaVar.setValue("antecedentesQuirurgicos", _antecedentes);
        this._fichaMedicaVar.setValue("medicamentosActualidad", _medicamentos);
        this._fichaMedicaVar.setValue("medicamentosAlerta", _medicamentosAlerta);
        this._fichaMedicaVar.setValue("recomendacionesEspeciales", _recomendaciones);

        this.formularioFichaMedica.setDataSet(this._fichaMedicaVar);          
        this.formularioFichaMedica.updateData(); 
      }
      if(_cont == 0){
        this._fichaMedicaVar.setValue("persona.idPersona", idpersona);
        this._fichaMedicaVar.setValue("medicoTratante", _medico);
        this._fichaMedicaVar.setValue("alergias", _alergias);
        this._fichaMedicaVar.setValue("enfermedadesRecientes", _enfermedades);
        this._fichaMedicaVar.setValue("antecedentesQuirurgicos", _antecedentes);
        this._fichaMedicaVar.setValue("medicamentosActualidad", _medicamentos);
        this._fichaMedicaVar.setValue("medicamentosAlerta", _medicamentosAlerta);
        this._fichaMedicaVar.setValue("recomendacionesEspeciales", _recomendaciones);

        this.formularioFichaMedica.setDataSet(this._fichaMedicaVar);          
        this.formularioFichaMedica.insertData();  
      }  
      } catch(e) {
      console.error('ERROR IN _verificaExistenciaFichaMedicaSuccess: ' + e); 
    }},
    
  formularioFichaMedicaSuccess: function(inSender, inData) {
    try { 
     var value= main.matricula_select_estudiante.getDataValue();
 
     main._hqlAlergias.input.setValue("idp", value);
     main._hqlAlergias.update();

     alert("Detalles medicos agregados satisfactoriamente!.");
      
    } catch(e) {
      console.error('ERROR IN formularioFichaMedicaSuccess: ' + e); 
    }},
    
  iraTransporteClick: function(inSender, inEvent) {
    try {
     this.transporte_buttClick(inSender, inEvent);
      
    } catch(e) {
      console.error('ERROR IN iraTransporteClick: ' + e); 
    }},
  iraSeguroClick: function(inSender, inEvent) {
    try {
     this.seguro_buttClick(inSender, inEvent);
      
    } catch(e) {
      console.error('ERROR IN iraSeguroClick: ' + e); 
    }},
  iraFichaClick: function(inSender, inEvent) {
    try {
     this.enfermeria_buttClick(inSender, inEvent);
      
    } catch(e) {
      console.error('ERROR IN button10Click: ' + e); 
    }},
  iraFinalizarClick: function(inSender, inEvent) {
    try {
      this.impresion_buttClick(inSender, inEvent);
      
    } catch(e) {
      console.error('ERROR IN iraFinalizarClick: ' + e); 
    }},
 
  /*
   * Coding new version of Aprendoz Padres
   *
   */
   //calling home info
    parents_global_usernameSuccess: function(inSender, inDeprecated) {
        var userGlobalName= main.parents_global_username.getData().dataValue;
        main.parents_global_user_info.input.setValue("username", userGlobalName);
        main.parents_global_user_info.update();
	},
    //calling user info. eg. names, lastnames, family group and codes
	parents_global_user_infoSuccess: function(inSender, inDeprecated) {
		var json= main.parents_global_user_info.getItem(0);
        var completeName= json.data.n1+" "+json.data.n2+" "+json.data.a1+" "+json.data.a2;
        var familiarGroup= json.data.grupoFamilia;
        this.parents_hi_name.setCaption("BIENVENIDO, "+completeName);
        this.parents_hi_family.setCaption("GRUPO FAMILIAR, "+familiarGroup);
	},
   //navigate to home
	parents_homeClick: function(inSender) {
		this.panel_performance.hide();
        this.panel_inicio.show();
	},
    //navigate to performace
	parents_estudents_performanceClick: function(inSender) {
		this.panel_inicio.hide();
        this.panel_performance.show();
	},
    //load family group info into performance_family_grid 
	parents_estudents_performanceClick1: function(inSender) {
        var json= main.parents_global_user_info.getItem(0);
        var idgrupofamiliar= json.data.idFamilia;
		this.parents_local_performance_familyGroup.input.setValue("idgrupo", idgrupofamiliar);
        this.parents_local_performance_familyGroup.update();
	},  
    //getData from selection in dojoGrid
    performance_family_gridSelect: function(inSender) {
    	var idp = this.performance_family_grid.selectedItem.data.pid;
        var json= main.parents_global_currentSy.getItem(0);
        var idsy= json.data.idsy;
        this.parents_local_student_chart.input.setValue("idpersona", idp);
        this.parents_local_student_chart.input.setValue("idsy", idsy);
        this.parents_local_student_chart.update();
	},
    
  /*******************************************
   *      Google Api Chart Tools             * 
   *******************************************/
    parents_local_student_chartSuccess: function(inSender, inDeprecated) {
        var idtipo = this.performance_family_grid.selectedItem.data.idtipo;     
        if(idtipo==1){
            this.renderChart_dash1();
        }else{
            alert("usted no es estudiante!");
            this.renderChart_dash1();
            }     
	},
   
    renderChart_dash1: function() {
        var asignaturas= ["Año"];
        var puntajes= ['2013-2014'];
        var _count= main.parents_local_student_chart.getCount();
        for (var i = 0; i < _count; i++) {
             var _item= main.parents_local_student_chart.getItem(i).data;
             var _asignatura= _item.asignatura;
             var _puntaje= _item.puntaje;
             var _array= [_asignatura];
             var _array2= [_puntaje];
             asignaturas.push(_asignatura);
             puntajes.push(_puntaje); 
        } 
        var data = google.visualization.arrayToDataTable([
          asignaturas,
          puntajes
        ]);

        var options = {
          title : 'Gráfica de Puntajes por Asignatura',
          legend: { position: "top"
              },
          vAxis: {title: "Puntaje", 
                  gridlines: {count: 10}, minorGridlines: {count: 5}
              },
          hAxis: {
              title: "Asignaturas"
              },
          seriesType: "bars",
          series: {
                5: {type: "line"
                   }
                },
          legend: {
              position: "top",
              textStyle: {
                    fontSize: 12,
                    }
              }        
        };             
        var chart = this._chart = new google.visualization.ComboChart(this.dashboard_d1.domNode);
        chart.draw(data, options);
    },   
  /*******************************************
   *      End Google Api Chart Tools         * 
   *******************************************/
	performance_general_trackingClick: function(inSender) {
		var idp = this.performance_family_grid.selectedItem.data.pid;
        var json= main.parents_global_currentSy.getItem(0);
        var idsy= json.data.idsy;
        this.parents_local_student_subjects.input.setValue("idpersona", idp);
        this.parents_local_student_subjects.input.setValue("idsy", idsy);
        this.parents_local_student_subjects.update();
	},
	_end: 0
});