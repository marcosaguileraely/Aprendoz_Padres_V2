dojo.declare("ActualizaDatos", wm.Page, {
  start: function() {
    
  },
  a_getUsernameActualizaDatosSuccess: function(inSender, inDeprecated) {
    try {
     var userName= this.userNameBox.getDataValue();
     this.a_getGrupoFamiliar.input.setValue("username", userName);
     this.a_getGrupoFamiliar.update();

     this.a_getRoleByUsernameSV.input.setValue("user", userName);
     this.a_getRoleByUsernameSV.update();
      
    } catch(e) {
      console.error('ERROR IN a_getUsernameActualizaDatosSuccess: ' + e); 
    } 
  },
  a_getGrupoFamiliarSuccess: function(inSender, inDeprecated) {
    try {
     var json= this.a_getGrupoFamiliar.getItem(0);
     var _familia= json.data.idgf;
     var _persona= json.data.idp;
     this.a_getUserGroup.input.setValue("idgrupo", _familia);
     this.a_getUserGroup.update();
     
    } catch(e) {
      console.error('ERROR IN a_getGrupoFamiliarSuccess: ' + e); 
    } 
  },
  personaSelectChange: function(inSender, inDisplayValue, inDataValue) {
    try {
     var _persona= this.personaSelect.getDataValue();
     if(_persona == undefined){

     }
     if(_persona > 0){
      this.editPanel1.cancelEdit();

      var _persona= this.personaSelect.getDataValue();
      this.personaLiveVariable1.filter.setValue("idPersona", _persona);
      this.personaLiveVariable1.update();

      this.ls_nacionalidades.update();

     } 
    } catch(e) {
      console.error('ERROR IN personaSelectChange: ' + e); 
    }},
  personaLiveVariable1Success: function(inSender, inDeprecated) {
    try {
     this.personaDataGrid1.select(0);

    } catch(e) {
      console.error('ERROR IN personaLiveVariable1Success: ' + e); 
    }},
  personaDataGrid1SelectionChanged: function(inSender) {
    try {
    //this.editPanel1.beginDataUpdate(); 
      
    } catch(e) {
      console.error('ERROR IN personaDataGrid1SelectionChanged: ' + e); 
    }},
  personaDataGrid1AfterRender: function(inSender) {
    try {
     //this.editPanel1.beginDataUpdate(); 
      
    } catch(e) {
      console.error('ERROR IN personaDataGrid1AfterRender: ' + e); 
    }},
  personaDataGrid1Selected: function(inSender, inIndex) {
    try {
     this.editPanel1.beginDataUpdate(); 
      
    } catch(e) {
      console.error('ERROR IN personaDataGrid1Selected: ' + e); 
    }},
  boton_actualizarClick: function(inSender, inEvent) {
    try {
     this.editPanel1.saveData();
      
    } catch(e) {
      console.error('ERROR IN boton_actualizarClick: ' + e); 
    }},
  personaLiveForm1UpdateData: function(inSender) {
    try {
     var _persona= this.personaSelect.getDataValue();
     this.getUserByIdPersona.input.setValue("id", _persona);
     this.getUserByIdPersona.update();
   
    } catch(e) {
      console.error('ERROR IN personaLiveForm1UpdateData: ' + e); 
    }},
  getUserByIdPersonaSuccess: function(inSender, inDeprecated) {
    try {
     var _persona= this.personaSelect.getDataValue();
     var _getterUsuario= this.getUserByIdPersona.getItem(0);
     var _usuario= _getterUsuario.data.user;
     this.returnValueIfExists.input.setValue("user", _usuario);
     this.returnValueIfExists.update();
        
    } catch(e) {
      console.error('ERROR IN getUserByIdPersonaSuccess: ' + e); 
    }},
  returnValueIfExistsSuccess: function(inSender, inDeprecated) {
    try {
     var _persona= this.personaSelect.getDataValue();
     var _bool= 1;
     var _fecha= new Date().getTime();
     var _json= this.returnValueIfExists.getItem(0);
     var rt= _json.data.retorno;

     if(rt == 0){
     //alert("inserta");
       this.v_insertActualizaPersona.setValue("persona.idPersona", _persona);
       this.v_insertActualizaPersona.setValue("actualizado", _bool);
       this.v_insertActualizaPersona.setValue("fecha", _fecha);
       
       this.insertVerificacionPersonaLiveForm.setDataSet(this.v_insertActualizaPersona);          
       this.insertVerificacionPersonaLiveForm.insertData();        
     }  
     if(rt == 1){
     //alert("Actualiza");
       this.a_updatePersona.input.setValue("idp", _persona);
       this.a_updatePersona.input.setValue("pbool", _bool);
       this.a_updatePersona.update();
     }   
      
    } catch(e) {
      console.error('ERROR IN returnValueIfExistsSuccess: ' + e); 
    }},
  insertVerificacionPersonaLiveFormSuccess: function(inSender, inData) {
    try {
      //verificacion del registro en ActualizacionGrupoFamiliar
      var _persona= this.personaSelect.getDataValue();
      this.getFamiliarGrupebyIdPersona.input.setValue("idp", _persona);
      console.log("captura persona _insert: "+_persona);
      this.getFamiliarGrupebyIdPersona.update();
      alert("Mensaje del sistema:\n\nLa actualización se ha guardado exitosamente. Por favor cambie el integrante del grupo familiar y realice el proceso nuevamente.");

    } catch(e) {
      console.error('ERROR IN insertVerificacionPersonaLiveFormSuccess: ' + e); 
    }},
  getFamiliarGrupebyIdPersonaSuccess: function(inSender, inDeprecated) {
    try {
     var _json = this.getFamiliarGrupebyIdPersona.getItem(0);
     var _grupoFamiliar= _json.data.idgrupo;
     console.log("id grupo familiar: "+_grupoFamiliar);
     this.returnValueIfGrupoFmailiarExists.input.setValue("idg", _grupoFamiliar);
     this.returnValueIfGrupoFmailiarExists.update();
    } catch(e) {
      console.error('ERROR IN getFamiliarGrupebyIdPersonaSuccess: ' + e); 
    } 
  },
  returnValueIfGrupoFmailiarExistsSuccess: function(inSender, inDeprecated) {
    try {
     var _json= this.returnValueIfGrupoFmailiarExists.getItem(0);
     var _valor= _json.data.actualizado;
       if(_valor == 0){
       //  alert("Creemos que aun quedan personas por actualizar!");
         this.middlePanel.hide();
         this.space1.hide();
         this.headPanel.show();
         this.contentPanel.show();
         this.footerPanel.show(); 
       }
       
       if(_valor == 1){
        // alert("Aparecera una panel con la opcion de CONTINUAR! Bienvenido");
         this.headPanel.hide();
         this.contentPanel.hide();
         this.footerPanel.hide();
         this.space1.show();
         this.middlePanel.show();
       }
      
    } catch(e) {
      console.error('ERROR IN returnValueIfGrupoFmailiarExistsSuccess: ' + e); 
    } 
  },
  a_updatePersonaSuccess: function(inSender, inDeprecated) {
    try {
     this.insertVerificacionPersonaLiveFormSuccess(); 
      
    } catch(e) {
      console.error('ERROR IN a_updatePersonaSuccess: ' + e); 
    } 
  },
  boton_continuarClick: function(inSender, inEvent) {
    try {
     app.pageDialog.dismiss("ActualizaDatos"); 
      
    } catch(e) {
      console.error('ERROR IN boton_continuarClick: ' + e); 
    } 
  },
  a_getRoleByUsernameSVSuccess: function(inSender, inDeprecated) {
    try {
     var _json= this.a_getRoleByUsernameSV.getItem(0);
     var _idtipo= _json.data.idtipo;
     
     if(_idtipo == 1){
        this.headPanel.hide();
        this.boton_actualizar.hide();
        this.middlePanel.hide();
        this.contentPanel.hide();
        this.personaLivePanel1.hide();
        this.nonAcepted_panel.show();

     }if(_idtipo > 1){ 
        this.middlePanel.hide();
        this.nonAcepted_panel.hide(); 
        this.headPanel.show();
        this.personaLivePanel1.show();      
        this.boton_actualizar.show(); 
        this.contentPanel.show();
      }
      
    } catch(e) {
      console.error('ERROR IN a_getRoleByUsernameSVSuccess: ' + e); 
    } 
  },
  boton_continuar1Click: function(inSender, inEvent) {
    try {
      this.salirAprendoz.update();
      app.pageDialog.dismiss("ActualizaDatos");
 
    } catch(e) {
      console.error('ERROR IN boton_continuar1Click: ' + e); 
    } 
  },
  personaLiveForm1BeginUpdate: function(inSender) {
    try {
      var _tipo = this.personaDataGrid1.selectedItem.getData().tipoPersona.idTipoPersona;
      if(_tipo==1){
        //readonly
        this.apellido1Editor1.setReadonly(true);
        this.apellido2Editor1.setReadonly(true);
        this.nombre1Editor1.setReadonly(true);
        this.nombre2Editor1.setReadonly(true);
        //ocultar datos laborales
        this.panel4.hide();
        this.celularEditor1.hide();
        this.cargoEditor1.hide();
        this.empresaEditor1.hide();
        this.profesionEditor1.hide();
        this.municipioEditor1.hide();
        this.departamentoEditor1.hide();
        this.direccionOficinaEditor1.hide();
        this.telefonoOficinaEditor1.hide();
        this.hijoDeExalumnoEditor1.hide();
        this.parentescoEditor1.hide();

        this.panel5.show();
        this.saludPrepagadaEditor1.show();
        this.numeroContratoSaludEditor1.show();
        this.clinicaEmergenciaEditor1.show();
        this.tipoSangreEditor1.show();
        this.gradoIngresoEditor1.show();
        this.colegioAnteriorEditor1.show();
        this.epsEditor1.show();
        this.viveConEditor1.show();
        this.fechaIngresoEditor1.show();

        //seteando datos laborales ocultos
        this.celularEditor1.setDataValue(" ");
        this.cargoEditor1.setDataValue(" ");
        this.empresaEditor1.setDataValue(" ");
        this.profesionEditor1.setDataValue(" ");
        this.municipioEditor1.setDataValue(" ");
        this.departamentoEditor1.setDataValue(" ");
        this.direccionOficinaEditor1.setDataValue(" ");
        this.telefonoOficinaEditor1.setDataValue(" ");

      }if(_tipo > 1) {
        this.panel4.show();
        this.celularEditor1.show();
        this.cargoEditor1.show();
        this.empresaEditor1.show();
        this.profesionEditor1.show();
        this.municipioEditor1.show();
        this.departamentoEditor1.show();
        this.direccionOficinaEditor1.show();
        this.telefonoOficinaEditor1.show();
        this.hijoDeExalumnoEditor1.show();
        this.parentescoEditor1.show();

        //ocultando inforacion hospitalaria y 
        this.panel5.hide();
        this.saludPrepagadaEditor1.hide();
        this.numeroContratoSaludEditor1.hide();
        this.clinicaEmergenciaEditor1.hide();
        this.tipoSangreEditor1.hide();
        this.gradoIngresoEditor1.hide();
        this.colegioAnteriorEditor1.hide();
        this.epsEditor1.hide();
        this.viveConEditor1.hide();
        this.fechaIngresoEditor1.hide();
        

        this.saludPrepagadaEditor1.setDataValue(" ");
        this.numeroContratoSaludEditor1.setDataValue(" ");
        this.clinicaEmergenciaEditor1.setDataValue(" ");
        this.tipoSangreEditor1.setDisplayValue("NO APLICA");
        this.gradoIngresoEditor1.setDataValue(" ");
        this.colegioAnteriorEditor1.setDataValue(" ");
        this.viveConEditor1.setDisplayValue("NO APLICA");
        this.fechaIngresoEditor1.setDataValue(new Date());
      }
      
    } catch(e) {
      console.error('ERROR IN personaLiveForm1BeginUpdate: ' + e); 
    } 
  },
  paisLookup1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
     var pais= this.paisLookup1.getDataValue().idPais;
     this.ls_departamentos.filter.setValue("pais.idPais", pais);
     this.ls_departamentos.update();
      
    } catch(e) {
      console.error('ERROR IN paisLookup1Change: ' + e); 
    } 
  },
  _end: 0
});