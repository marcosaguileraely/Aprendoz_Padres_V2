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
performance_student_subjectsSelect: function(inSender) {
var idsubject = this.performance_student_subjects.selectedItem.data.idasignatura;
this.parents_local_students_learnings.input.setValue("ida", idsubject);
this.parents_local_students_learnings.update();
},
_end: 0
});

Main.widgets = {
logout: ["wm.ServiceVariable", {"operation":"logout","service":"securityService"}, {"onResult":"salir"}, {
input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
}],
salir: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Login\"","targetProperty":"pageName"}, {}]
}]
}]
}],
dash_asignaturas_estudiante: ["wm.ServiceVariable", {"operation":"hql_dash_asignaturas","service":"aprendoz_desarrollo"}, {"onSuccess":"dash_asignaturas_estudianteSuccess"}, {
input: ["wm.ServiceInput", {"type":"hql_dash_asignaturasInputs"}, {}]
}],
parents_global_username: ["wm.ServiceVariable", {"autoUpdate":true,"inFlightBehavior":"executeLast","operation":"getUserName","service":"securityService","startUpdate":true}, {"onSuccess":"parents_global_usernameSuccess"}, {
input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
}],
parents_global_user_info: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"personaGetInfo","service":"aprendoz_desarrollo"}, {"onSuccess":"parents_global_user_infoSuccess"}, {
input: ["wm.ServiceInput", {"type":"personaGetInfoInputs"}, {}]
}],
parents_local_performance_familyGroup: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getGrupoFamiliarbyUser","service":"aprendoz_desarrollo","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getGrupoFamiliarbyUserInputs"}, {}]
}],
parents_local_student_chart: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"hql_dash_asignaturas","service":"aprendoz_desarrollo"}, {"onSuccess":"parents_local_student_chartSuccess"}, {
input: ["wm.ServiceInput", {"type":"hql_dash_asignaturasInputs"}, {}]
}],
parents_global_currentSy: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getSyByCurDate","service":"aprendoz_desarrollo"}, {}, {
input: ["wm.ServiceInput", {"type":"getSyByCurDateInputs"}, {}]
}],
parents_local_student_subjects: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"hql_dash_asignaturas","service":"aprendoz_desarrollo"}, {}, {
input: ["wm.ServiceInput", {"type":"hql_dash_asignaturasInputs"}, {}]
}],
parents_local_students_learnings: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"parentsSubjectStructure","service":"aprendoz_desarrollo"}, {}, {
input: ["wm.ServiceInput", {"type":"parentsSubjectStructureInputs"}, {}]
}],
syDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"197px","height":"197px","title":"sy","width":"500px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
syLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"114px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"syLivePanel1.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"syDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idSyEditor1: ["wm.Number", {"border":"0","caption":"IdSy","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"idSy","height":"26px","required":true,"width":"100%"}, {}],
schoolYearEditor1: ["wm.Text", {"border":"0","caption":"SchoolYear","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"schoolYear","height":"26px","maxChars":45,"width":"100%"}, {}],
fechaDesdeEditor1: ["wm.DateTime", {"border":"0","caption":"FechaDesde","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"fechaDesde","height":"26px","width":"100%"}, {}],
fechaHastaEditor1: ["wm.DateTime", {"border":"0","caption":"FechaHasta","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"fechaHasta","height":"26px","width":"100%"}, {}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","desktopHeight":"33px","height":"33px"}, {}, {
sySaveButton: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"syLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"syLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
syCancelButton: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"syDialog.hide","onclick1":"syLiveForm1.cancelEdit"}]
}]
}],
layoutBox1: ["wm.Layout", {"height":"908px","horizontalAlign":"center","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"740px"}, {}, {
FancyCentered: ["wm.Template", {"height":"100%","horizontalAlign":"left","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"80%"}, {}, {
FancyCentered1: ["wm.Template", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
templateMain: ["wm.Template", {"_classes":{"domNode":["template-main"]},"autoScroll":true,"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
content: ["wm.Panel", {"freeze":true,"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panelHeader: ["wm.Panel", {"_classes":{"domNode":["template-header-panel","wm_BackgroundColor_White"]},"height":"80px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}],
panel1: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"showing":false,"verticalAlign":"top","width":"100%"}, {}, {
templateTopLeft: ["wm.Panel", {"_classes":{"domNode":["template-top-left"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"24px"}, {}],
templateTop: ["wm.Panel", {"_classes":{"domNode":["template-top-center"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}],
templateTopRight: ["wm.Panel", {"_classes":{"domNode":["template-top-right"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"24px"}, {}]
}],
panel2: ["wm.Panel", {"freeze":true,"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
templateLeft: ["wm.Panel", {"_classes":{"domNode":["template-left"]},"freeze":true,"height":"100%","horizontalAlign":"left","showing":false,"verticalAlign":"top","width":"24px"}, {}],
templateContent: ["wm.Panel", {"_classes":{"domNode":["template-content"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
aprendoz_header: ["wm.Panel", {"height":"130px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
parents_top_image_parents: ["wm.Picture", {"height":"100%","source":"resources/images/icons%20v2/Aprendoz_padres.jpg","width":"157px"}, {}],
parents_spacer1: ["wm.Spacer", {"height":"48px","width":"38px"}, {}],
parents_logo_aprendoz: ["wm.Picture", {"height":"76px","source":"resources/images/icons%20v2/Aprendoz_03.jpg","styles":{},"width":"349px"}, {}],
button7: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_FontSizePx_12px"]},"border":"3","borderColor":"#4D90FE","caption":"Seguimiento","height":"100%","iconMargin":"0 0px 0 0","iconUrl":"resources/images/buttons/helm.png","margin":"4","showing":false,"width":"140px"}, {"onclick":"button7Click"}],
boton_generar_informe: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_FontSizePx_12px"]},"border":"3","borderColor":"#4D90FE","caption":"Generar","disabled":true,"height":"100%","margin":"4","showing":false,"width":"120px"}, {"onclick":"boton_generar_informeClick"}]
}],
parents_line_long: ["wm.Panel", {"height":"6px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#3752a3"},"verticalAlign":"top","width":"100%"}, {}],
parents_menu_panel: ["wm.Panel", {"height":"40px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,0,0,20","styles":{"backgroundColor":"#a3a3a3"},"verticalAlign":"top","width":"100%"}, {}, {
parents_home: ["wm.Button", {"border":"0","caption":"Inicio","height":"100%","margin":"0,6,0,0","padding":"4,12,4,12","styles":{"borderRadius":"0px","backgroundColor":"#8e93a4"}}, {"onclick":"parents_homeClick"}],
parents_estudents_performance: ["wm.Button", {"border":"0","caption":"Progreso de estudiantes","height":"100%","margin":"0,6,0,0","padding":"4,12,4,12","styles":{"borderRadius":"0px"},"width":"120px"}, {"onclick":"parents_estudents_performanceClick","onclick1":"parents_estudents_performanceClick1"}],
parents_update_data: ["wm.Button", {"border":"0","caption":"Actualizar datos","height":"100%","margin":"0,6,0,0","padding":"4,12,4,12","styles":{"borderRadius":"0px"},"width":"110px"}, {}],
parents_account_state: ["wm.Button", {"border":"0","caption":"Estado de cuenta","height":"100%","margin":"0,6,0,0","padding":"4,12,4,12","styles":{"borderRadius":"0px"},"width":"110px"}, {}],
parents_comunity_comunication: ["wm.Button", {"border":"0","caption":"Extracurricular","height":"100%","margin":"0,4,0,0","padding":"4,12,4,12","styles":{"borderRadius":"0px"},"width":"110px"}, {}]
}],
Actualizacion: ["wm.TabLayers", {"showing":false,"styles":{}}, {}, {
inicio: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"INICIO","horizontalAlign":"left","padding":"20,60,0,60","styles":{},"verticalAlign":"top"}, {}, {
a_getUserName: ["wm.TextEditor", {"caption":"nombre de usuario","disabled":true,"padding":"2","readonly":true,"showing":false,"styles":{},"width":"423px"}, {"onchange":"a_getUserNameChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"a_getUserNameSv.dataValue","targetProperty":"dataValue"}, {}]
}],
editor: ["wm._TextEditor", {}, {}]
}],
a_getGroupCode: ["wm.NumberEditor", {"caption":"codigo familia","disabled":true,"padding":"2","showing":false,"width":"423px"}, {"onchange":"a_getGroupCodeChange"}, {
editor: ["wm._NumberEditor", {}, {}]
}],
inicio_ir_a_facturacion_panel: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
inicio_ir_a_facturacion: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"align":"center","caption":"CONSULTE AQUí, SU ESTADO DE CUENTA","height":"100%","padding":"4","styles":{},"width":"100%"}, {"onclick":"inicio_ir_a_facturacionClick"}, {
format: ["wm.DataFormatter", {}, {}]
}]
}],
inicio_nombreCompleto_label: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px"]},"align":"center","height":"30px","padding":"4","width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
inicio_grupo_familiar_laber: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"align":"center","height":"30px","padding":"4","width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
password_changer: ["wm.Panel", {"height":"382px","horizontalAlign":"right","layoutKind":"left-to-right","lock":true,"showing":false,"verticalAlign":"top","width":"100%"}, {}, {
password_changer_main_layer: ["wm.Layers", {"width":"260px"}, {}, {
details_container: ["wm.Layer", {"borderColor":"","caption":"layer21","horizontalAlign":"left","verticalAlign":"top"}, {}, {
label7: ["wm.Label", {"height":"48px","padding":"4","width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
button5: ["wm.Button", {"caption":"Abrir ventana","margin":"4","showing":false,"width":"96px"}, {"onclick":"iraCountDown"}]
}]
}]
}],
panel20: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"borderColor":"#ffffff","height":"36px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
dash_estudiante: ["wm.SelectEditor", {"caption":"Seleccione un estudiante","captionSize":"70%","height":"30px","padding":"2","roles":["2","4","3","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25"],"styles":{},"width":"370px"}, {"onchange":"dash_estudianteChange"}, {
editor: ["wm._SelectEditor", {"dataField":"idpersona","displayField":"completo"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"estudiante_grupoFamiliar","targetProperty":"dataSet"}, {}]
}]
}]
}],
spacer7: ["wm.Spacer", {"height":"100%","width":"10px"}, {}],
grafico: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"borderColor":"#bbb","caption":"Recargar","height":"100%","iconHeight":"18px","iconMargin":"0px 0 0","iconUrl":"resources/images/buttons/re.png","iconWidth":"22px","margin":"2","width":"96px"}, {"onclick":"graficoClick"}]
}]
}]
}],
parents_spacer2: ["wm.Spacer", {"height":"20px","width":"100%"}, {}],
panel_inicio: ["wm.Panel", {"height":"100%","horizontalAlign":"center","lock":true,"padding":"20","showing":false,"styles":{},"verticalAlign":"top","width":"100%"}, {}, {
parents_greetings_panel: ["wm.Panel", {"height":"99px","horizontalAlign":"left","lock":true,"styles":{},"verticalAlign":"top","width":"600px"}, {}, {
parents_hi_name: ["wm.Label", {"align":"center","caption":"BIENVENIDO, ","height":"35px","padding":"4","styles":{"color":"#2d2626","fontSize":"16px"},"width":"100%"}, {}],
parents_hi_family: ["wm.Label", {"align":"center","caption":"GRUPO FAMILIAR, ENTERPRISE","height":"35px","padding":"4","styles":{"color":"#2d2929","fontSize":"16px","fontWeight":"bold"},"width":"100%"}, {}]
}],
parents_news_panel: ["wm.Panel", {"height":"166px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"padding":"0,0,0,0","styles":{"backgroundColor":"#ddf2d1"},"verticalAlign":"top","width":"600px"}, {}, {
parents_news_title: ["wm.Picture", {"aspect":"h","height":"100%","source":"resources/images/icons%20v2/auncions_img.png","width":"76px"}, {}],
parents_feeds_panel: ["wm.Label", {"caption":"<h3>Larga vida y prosperidad</h3>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas \"Letraset\".","height":"100%","padding":"4","singleLine":false,"styles":{"color":"#1b1818"},"width":"100%"}, {}]
}],
parents_spacer3: ["wm.Spacer", {"height":"44px","width":"96px"}, {}],
parents_thus_times_access: ["wm.Picture", {"height":"63px","source":"resources/images/icons%20v2/Aprendoz_tt_padres.jpg","width":"600px"}, {}],
parents_spacer4: ["wm.Spacer", {"height":"24px","width":"96px"}, {}],
parents_call_us: ["wm.Picture", {"height":"61px","source":"resources/images/icons%20v2/Aprendoz_19.jpg","width":"184px"}, {}]
}],
panel_performance: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
performance_left_details: ["wm.Panel", {"height":"100%","horizontalAlign":"left","lock":true,"styles":{},"verticalAlign":"top","width":"240px"}, {}, {
performance_top_header: ["wm.Picture", {"height":"69px","source":"resources/images/icons%20v2/message.png","styles":{},"width":"100%"}, {}],
performance_left_buttons_panel: ["wm.Panel", {"height":"29px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
performance_general_button: ["wm.Button", {"border":"0","caption":" ","height":"100%","margin":"0","styles":{"backgroundImage":"/webapproot/resources/images/icons v2/Aprendoz_prog_04.jpg"},"width":"100%"}, {}],
performance_general_tracking: ["wm.Button", {"border":"0","caption":" ","height":"100%","margin":"0","styles":{},"width":"100%"}, {"onclick":"performance_general_trackingClick"}]
}],
performance_spacer1: ["wm.Spacer", {"height":"24px","styles":{},"width":"100%"}, {}],
performance_family_grid: ["wm.DojoGrid", {"_classes":{"domNode":["Striped"]},"border":"1","borderColor":"#bbb","columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\" : \" + ${wm.runtimeId}.formatCell(\"code\", ${code}, ${this}, ${wm.rowId}) +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Integrantes: \" + ${wm.runtimeId}.formatCell(\"nombres\", ${nombres}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"code","title":" ","width":"60px","align":"left","formatFunc":"","editorProps":null,"expression":"\"Pict here!\"","mobileColumn":false},
{"show":true,"field":"nombres","title":"Integrantes","width":"100%","align":"left","formatFunc":"","expression":"${nombres}+\"<br>\"+${apellidos}","mobileColumn":false},
{"show":false,"field":"apellidos","title":"Apellidos","width":"100%","align":"left","formatFunc":"","expression":"","mobileColumn":false},
{"show":false,"field":"tipo","title":"Tipo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"familia","title":"Familia","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"idtipo","title":"Idtipo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"pid","title":"Pid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"user","title":"User","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"idgrupo","title":"Idgrupo","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"dsType":"com.aprendoz_desarrollo.data.output.GetGrupoFamiliarbyUserRtnType","height":"100%","localizationStructure":{},"margin":"0","minDesktopHeight":60,"singleClickEdit":true,"styles":{"fontSize":"12px"}}, {"onSelect":"performance_family_gridSelect"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"parents_local_performance_familyGroup","targetProperty":"dataSet"}, {}]
}]
}],
performance_spacer2: ["wm.Spacer", {"height":"20px","width":"100%"}, {}],
performance_call_us: ["wm.Picture", {"height":"61px","source":"resources/images/icons%20v2/Aprendoz_19.jpg","width":"100%"}, {}]
}],
performance_content: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
dashboard_d1: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"showing":false,"styles":{},"verticalAlign":"top","width":"100%"}, {}],
performance_student_track: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"0,0,0,20","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
performance_student_sy: ["wm.Label", {"align":"center","caption":"AÑO ESCOLAR","height":"27px","padding":"4","styles":{"color":"#3652a4","fontSize":"16px","fontWeight":"bold"},"width":"100%"}, {}],
performance_student_header: ["wm.Panel", {"height":"27px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
performance_student_asignaturas: ["wm.Label", {"align":"left","caption":"ASIGNATURAS","height":"100%","padding":"4","styles":{"color":"#3652a4","fontSize":"14px","fontWeight":"bold"},"width":"100%"}, {}],
performance_student_download1: ["wm.Button", {"caption":"Generar reporte","height":"100%","margin":"0","styles":{},"width":"134px"}, {}]
}],
performance_student_subjects: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"idasignatura","title":"Código","width":"80px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"asignatura","title":"Asignatura","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"calificacion","title":"Calificación","width":"30%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"puntaje","title":"Puntaje","width":"30%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"porcentaje","title":"Porcentaje","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"esperados","title":"Esperados","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"idalumno","title":"Idalumno","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"sy","title":"Sy","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"logrados","title":"Logrados","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Código: \" + ${idasignatura} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Asignatura: \" + ${asignatura}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Calificación: \" + ${calificacion}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Puntaje: \" + ${puntaje}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.aprendoz_desarrollo.data.output.Hql_dash_asignaturasRtnType","margin":"0","minDesktopHeight":60,"singleClickEdit":true,"styles":{"fontSize":"12px"}}, {"onSelect":"performance_student_subjectsSelect"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"parents_local_student_subjects","targetProperty":"dataSet"}, {}]
}]
}],
performance_student_details: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","padding":"15,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
performance_student_details_left: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"0,15,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
performance_student_learnings: ["wm.Label", {"align":"left","caption":"APRENDIZAJES DE LA ASIGNATURA","height":"27px","padding":"0,0,0,0","styles":{"color":"#3652a4","fontSize":"14px","fontWeight":"bold"},"width":"100%"}, {}],
performance_student_details_learnings: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"idunidad","title":"Idunidad","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"idaprendizaje","title":" ","width":"65px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"aprendizaje","title":"Aprendizajes","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"fecha","title":"Fecha esperada","width":"80px","align":"center","formatFunc":"wm_date_formatter","editorProps":null,"mobileColumn":false},
{"show":false,"field":"idsubtopico","title":"Idsubtopico","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"unidad","title":"Unidad","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"idasignatura","title":"Idasignatura","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subtopico","title":"Subtopico","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\" : \" + ${idaprendizaje} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Aprendizajes: \" + ${aprendizaje}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Fecha esperada: \" + ${wm.runtimeId}.formatCell(\"fecha\", ${fecha}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.aprendoz_desarrollo.data.output.ParentsSubjectStructureRtnType","height":"100%","margin":"4","minDesktopHeight":60,"singleClickEdit":true,"styles":{"fontSize":"11px"}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"parents_local_students_learnings","targetProperty":"dataSet"}, {}]
}]
}]
}],
performance_student_details_right: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{"backgroundColor":"#3652a4"},"verticalAlign":"top","width":"100%"}, {}]
}]
}]
}]
}]
}],
templateRight: ["wm.Panel", {"_classes":{"domNode":["template-right"]},"height":"100%","horizontalAlign":"left","showing":false,"verticalAlign":"top","width":"24px"}, {}]
}],
panel3: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"showing":false,"verticalAlign":"top","width":"100%"}, {}, {
templateBottomLeft: ["wm.Panel", {"_classes":{"domNode":["template-bottom-left"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"24px"}, {}],
templateBottom: ["wm.Panel", {"_classes":{"domNode":["template-bottom-center"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}],
templateBottomRight: ["wm.Panel", {"_classes":{"domNode":["template-bottom-right"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"24px"}, {}]
}],
panelFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px","wm_FontColor_Graphite","wm_BackgroundColor_White","wm_Border_BottomStyleCurved12px"]},"align":"right","caption":"Aprendoz  Colegio Rochester<br>Todos los derechos reservados 2012 -2013","height":"48px","padding":"10,20","singleLine":false,"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}]
}]
}]
}]
};

Main.prototype._cssText = '/*********************************************\
*Esquema de colores Aprendoz\
*Colores basados en el escudo e imagen institucional\
*  Azul oscuro: #281d73\
*  Azul claro:  #5c548c\
*  Rojo Oscuro: #a62121\
*  Rojo Claro:  #bf5e5e\
*  Blanco:      #f2f2f2\
*\
*  ***Esquema alterno***\
*  Rojo Vino:       #690011\
*  Rojo:            #bf0426\
*  Rojo claro:      #bf0426\
*  Amarillo claro:  #f2d99c\
*  Amarrillo:       #e5b96f\
*********************************************/\
#main_parents_home {\
background-color: #3652a4 !important;\
border: none;\
color: #fff;\
background: none;\
}\
#main_parents_estudents_performance{\
background-color: #fff !important;\
border: none;\
color: #000000;\
background: none;\
}\
#main_parents_update_data{\
background-color: #fff !important;\
border: none;\
color: #000000;\
background: none;\
}\
#main_parents_account_state{\
background-color: #fff !important;\
border: none;\
color: #000000;\
background: none;\
}\
#main_parents_comunity_comunication{\
background-color: #fff !important;\
border: none;\
color: #000000;\
background: none;\
}\
#main_parents_news_title{\
/*-webkit-transform: rotate(270deg);\
-moz-transform: rotate(270deg);\
-ms-transform: rotate(270deg);\
-o-transform: rotate(270deg);\
transform: rotate(270deg);*/\
color: white;\
font-size: 17px;\
}\
#main_performance_general_button{\
background-image: url("resources/images/icons v2/Aprendoz_prog_04.jpg") !important;\
background-repeat: no-repeat;\
}\
#main_performance_general_tracking{\
background-image: url("resources/images/icons v2/Aprendoz_prog_05.jpg") !important;\
background-repeat: no-repeat;\
}\
#main_performance_student_sy{\
font-family: Helvetica, Arial, sans-serif;\
}\
#main_performance_student_asignaturas{\
font-family: Helvetica, Arial, sans-serif;\
}\
#main_performance_student_download1{\
background-color: #3652a4 !important;\
border: none !important;\
color: #ffffff;\
background: none;\
}\
#main_performance_student_learnings{\
font-family: Helvetica, Arial, sans-serif;\
}\
.Main .Main-aviso2{\
background: #FFCC00;\
background-image: -moz-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -webkit-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -moz-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -o-linear-gradient(center top , #FFCC00, #FFCC00);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
.Main .Main-button7{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-parents_comunity_comunication{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-button8{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-inscalumasigDataGrid1{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-aprendizajes{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-UltimaCalifdataGrid1{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-HistorialdataGrid5{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-dataGrid3{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-personaDataGrid2{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-boton_generar_informe{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-aviso_info_familiar{\
font-weight: normal;\
color: #000000;\
/* text-shadow: 0 1px rgba(0, 0, 0, 0.1); */\
/* text-transform: uppercase; */\
/* cursor: pointer; */\
border-radius: 2px 2px 2px 2px;\
vertical\
}\
.Main .Main-picture3{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-personaDataGridX{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-inscalumasigDataGridX{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-aprendizajes{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}.Main .Main-tabla_familia_principal{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-max {\
cursor: pointer\
}\
.Main .Main-min {\
cursor: pointer\
}\
.Main .Main-Logrados {\
visibility: hidden\
}\
.Main .Main-Esperados {\
visibility: hidden\
}\
.Main .Main-documentos_mensaje_informativo_error {\
background: none repeat scroll 0 0 #FCD116;\
background-image: -moz-linear-gradient(center top , #FCD116, #FCD116);\
background-image: -webkit-linear-gradient(center top , #FCD116, #FCD116);\
background-image: -moz-linear-gradient(center top , #FCD116, #FCD116);\
background-image: -o-linear-gradient(center top , #FCD116, #FCD116);\
color: #000000;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-documentos_mensaje_informativo_aprovado {\
background: none repeat scroll 0 0 #9CCB19;\
background-image: -moz-linear-gradient(center top , #9CCB19, #9CCB19);\
background-image: -webkit-linear-gradient(center top , #9CCB19, #9CCB19);\
background-image: -moz-linear-gradient(center top , #9CCB19, #9CCB19);\
background-image: -o-linear-gradient(center top , #9CCB19, #9CCB19);\
color: #000000;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-documentos_mensaje_informativo_error_financiera {\
background: none repeat scroll 0 0 #FCD116;\
background-image: -moz-linear-gradient(center top , #FCD116, #FCD116);\
background-image: -webkit-linear-gradient(center top , #FCD116, #FCD116);\
background-image: -moz-linear-gradient(center top , #FCD116, #FCD116);\
background-image: -o-linear-gradient(center top , #FCD116, #FCD116);\
color: #000000;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-documentos_butt_modelo_contrato {\
background: #4D90FE;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#4D90FE),to(#2169df));\
background-image: -webkit-linear-gradient(top,#4D90FE,#2169df);\
background-image: -moz-linear-gradient(top,#4D90FE,#2169df);\
background-image: -ms-linear-gradient(top,#4D90FE,#2169df);\
background-image: -o-linear-gradient(top,#4D90FE,#2169df);\
background-image: linear-gradient(top,#4D90FE,#2169df);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
}\
.Main .Main-documentos_butt_matricula {\
background: #4D90FE;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#4D90FE),to(#2169df));\
background-image: -webkit-linear-gradient(top,#4D90FE,#2169df);\
background-image: -moz-linear-gradient(top,#4D90FE,#2169df);\
background-image: -ms-linear-gradient(top,#4D90FE,#2169df);\
background-image: -o-linear-gradient(top,#4D90FE,#2169df);\
background-image: linear-gradient(top,#4D90FE,#2169df);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
}\
.Main .Main-documentos_butt_mensualidades {\
background: #4D90FE;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#4D90FE),to(#2169df));\
background-image: -webkit-linear-gradient(top,#4D90FE,#2169df);\
background-image: -moz-linear-gradient(top,#4D90FE,#2169df);\
background-image: -ms-linear-gradient(top,#4D90FE,#2169df);\
background-image: -o-linear-gradient(top,#4D90FE,#2169df);\
background-image: linear-gradient(top,#4D90FE,#2169df);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
border-top-left-radius: 10px;\
border-bottom-right-radius: 10px;\
}\
.Main .Main-documentos_datag_estudiantes {\
cursor: pointer;\
}\
.Main .Main-personaDetailsPanel1 {\
background: #4D90FE;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#4D90FE),to(#2169df));\
background-image: -webkit-linear-gradient(top,#4D90FE,#2169df);\
background-image: -moz-linear-gradient(top,#4D90FE,#2169df);\
background-image: -ms-linear-gradient(top,#4D90FE,#2169df);\
background-image: -o-linear-gradient(top,#4D90FE,#2169df);\
background-image: linear-gradient(top,#4D90FE,#2169df);\
color: #000000;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
}\
.Main .Main-aviso_info_familiar {\
background: #4D90FE;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#4D90FE),to(#2169df));\
background-image: -webkit-linear-gradient(top,#4D90FE,#2169df);\
background-image: -moz-linear-gradient(top,#4D90FE,#2169df);\
background-image: -ms-linear-gradient(top,#4D90FE,#2169df);\
background-image: -o-linear-gradient(top,#4D90FE,#2169df);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
rgba(0,0,0,0.2);\
}\
.Main .Main-personaGridPanel {\
background: #4D90FE;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#4D90FE),to(#2169df));\
background-image: -webkit-linear-gradient(top,#4D90FE,#2169df);\
background-image: -moz-linear-gradient(top,#4D90FE,#2169df);\
background-image: -ms-linear-gradient(top,#4D90FE,#2169df);\
background-image: -o-linear-gradient(top,#4D90FE,#2169df);\
background-image: linear-gradient(top,#4D90FE,#2169df);\
color: #000000;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
}\
.Main .Main-inscalumasigGridPanel {\
background: #4D90FE;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#4D90FE),to(#2169df));\
background-image: -webkit-linear-gradient(top,#4D90FE,#2169df);\
background-image: -moz-linear-gradient(top,#4D90FE,#2169df);\
background-image: -ms-linear-gradient(top,#4D90FE,#2169df);\
background-image: -o-linear-gradient(top,#4D90FE,#2169df);\
background-image: linear-gradient(top,#4D90FE,#2169df);\
color: #000000;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
}\
.Main .Main-aviso_rendimiento {\
background: #4D90FE;\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
rgba(0,0,0,0.2);\
}\
.Main .Main-personaDataGridX {\
color: #000000;\
}\
.Main .Main-inscalumasigDataGridX {\
color: #000000;\
}\
.Main .Main-ver_ejemplo {\
background: #4D90FE;\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
border-top-left-radius: 10px;\
border-top-right-radius: 10px;\
}\
.Main .Main-cerrar {\
background: #B0B0B0;\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
border-top-left-radius: 10px;\
border-top-right-radius: 10px;\
}\
.Main .Main-panel_imag {\
background: #B0B0B0;\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
border-top-left-radius: 10px;\
border-bottom-right-radius: 10px;\
}\
.Main .Main-imagen {\
border-top-left-radius: 5px;\
border-top-right-radius: 5px;\
border-bottom-left-radius: 5px;\
border-bottom-right-radius: 5px;\
}\
.Main .Main-transporte_alumnos {\
cursor: pointer;\
}\
.Main .Main-transporte_datagrid_rutas {\
cursor: pointer;\
}\
.Main .Main-transporte_menu_rutas {\
border-bottom-left-radius: 4px;\
border-top-left-radius: 4px;\
cursor: pointer;\
}\
.Main .Main-transporte_menu_programacion {\
border-bottom-left-radius: 4px;\
border-top-left-radius: 4px;\
cursor: pointer;\
}\
.Main .Main-picture6 {\
border-bottom-left-radius: 4px;\
border-top-left-radius: 4px;\
}\
.Main .Main-pestana_rutas {\
background: #FFB90F;\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
rgba(0,0,0,0.2);\
border-top-left-radius: 10px;\
border-top-right-radius: 10px;\
}\
.Main .Main-pestana_programacion {\
background: #0276FD;\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
rgba(0,0,0,0.2);\
border-top-left-radius: 10px;\
border-top-right-radius: 10px;\
}\
.Main .Main-transporte_panel_novedades {\
background: #0276FD;\
}\
.Main .Main-transporte_panel_rutas {\
background: #FFB90F;\
}\
.Main .Main-pestana_solicitudes {\
background: #CD3333;\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
rgba(0,0,0,0.2);\
border-top-left-radius: 10px;\
border-top-right-radius: 10px;\
}\
.Main .Main-transporte_panel_solicitudes {\
background: #CD3333;\
}\
.Main .Main-transporte_menu_solicitudes {\
border-bottom-left-radius: 4px;\
border-top-left-radius: 4px;\
cursor: pointer;\
}\
.Main .Main-novedadesDataGrid1 {\
cursor: pointer;\
}\
.Main .Main-inscalumtransporteDataGrid1 {\
cursor: pointer;\
}\
.Main .Main-rutasDataGrid1 {\
cursor: pointer;\
}\
.Main .Main-inicio {\
background-color: #f2f2f2;\
}\
.Main .Main-inicio_head_logo_panel {\
background: white;\
border-top-left-radius: 50px;\
border-bottom-right-radius: 50px;\
}\
.Main .Main-inicio_nombreCompleto_label {\
color: #B22418;\
text-shadow: 0 1px rgba(0, 0, 0, 0.3);\
}\
.Main .Main-inicio_rol_label {\
color: #281d73;\
text-shadow: 0 1px rgba(0, 0, 0, 0.3);\
}\
.Main .Main-inicio_grupo_familiar_laber {\
color: #281d73;\
text-shadow: 0 1px rgba(0, 0, 0, 0.3);\
}\
.Main .Main-parents_news_title {\
cursor: pointer;\
}\
.Main .Main-inicio_ir_a_facturacion {\
background: #4D90FE;\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
rgba(0,0,0,0.2);\
text-decoration: blink;\
-webkit-animation-name: blink;\
-webkit-animation-iteration-count: infinite;\
-webkit-animation-timing-function: cubic-bezier(1.0,0,0,1.0);\
-webkit-animation-duration: 1s;\
border-radius: 3px;\
}\
.Main .Main-matricula {\
background-color: #f2f2f2;\
}\
.Main .Main-transporte_boton {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-alimento_boton {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
}\
.Main .Main-big_panel {\
padding: 15px;\
background: #f1f1f1;\
border-radius: 3px;\
}\
.Main .Main-transporte_butt {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-alimento_butt {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-alimentosDataGrid {\
cursor: pointer;\
}\
.Main .Main-agregar_alim {\
color: #e8f0de;\
border: solid 1px #538312;\
background: #64991e;\
background: -webkit-gradient(linear, left top, left bottom, from(#7db72f), to(#4e7d0e));\
background: -moz-linear-gradient(top, #7db72f, #4e7d0e);\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7db72f", endColorstr="#4e7d0e");\
display: inline-block;\
zoom: 1;\
vertical-align: baseline;\
margin: 0 2px;\
outline: none;\
cursor: pointer;\
text-align: center;\
text-decoration: none;\
font: 11px/100% Arial, Helvetica, sans-serif;\
padding: .5em 2em .55em;\
text-shadow: 0 1px 1px rgba(0,0,0,.3);\
-webkit-border-radius: .5em;\
-moz-border-radius: .5em;\
border-radius: .5em;\
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
box-shadow: 0 1px 2px rgba(0,0,0,.2);\
}\
.Main .Main-quitar_alim {\
color: #faddde;\
border: solid 1px #980c10;\
background: #d81b21;\
background: -webkit-gradient(linear, left top, left bottom, from(#ed1c24), to(#aa1317));\
background: -moz-linear-gradient(top, #ed1c24, #aa1317);\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ed1c24", endColorstr="#aa1317");\
display: inline-block;\
zoom: 1;\
vertical-align: baseline;\
margin: 0 2px;\
outline: none;\
cursor: pointer;\
text-align: center;\
text-decoration: none;\
font: 11px/100% Arial, Helvetica, sans-serif;\
padding: .5em 2em .55em;\
text-shadow: 0 1px 1px rgba(0,0,0,.3);\
-webkit-border-radius: .5em;\
-moz-border-radius: .5em;\
border-radius: .5em;\
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
box-shadow: 0 1px 2px rgba(0,0,0,.2);\
}\
.Main .Main-agregar_trans {\
color: #e8f0de;\
border: solid 1px #538312;\
background: #64991e;\
background: -webkit-gradient(linear, left top, left bottom, from(#7db72f), to(#4e7d0e));\
background: -moz-linear-gradient(top, #7db72f, #4e7d0e);\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7db72f", endColorstr="#4e7d0e");\
display: inline-block;\
zoom: 1;\
vertical-align: baseline;\
margin: 0 2px;\
outline: none;\
cursor: pointer;\
text-align: center;\
text-decoration: none;\
font: 11px/100% Arial, Helvetica, sans-serif;\
padding: .5em 2em .55em;\
text-shadow: 0 1px 1px rgba(0,0,0,.3);\
-webkit-border-radius: .5em;\
-moz-border-radius: .5em;\
border-radius: .5em;\
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
box-shadow: 0 1px 2px rgba(0,0,0,.2);\
}\
.Main .Main-quitar_trans {\
color: #faddde;\
border: solid 1px #980c10;\
background: #d81b21;\
background: -webkit-gradient(linear, left top, left bottom, from(#ed1c24), to(#aa1317));\
background: -moz-linear-gradient(top, #ed1c24, #aa1317);\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ed1c24", endColorstr="#aa1317");\
display: inline-block;\
zoom: 1;\
vertical-align: baseline;\
margin: 0 2px;\
outline: none;\
cursor: pointer;\
text-align: center;\
text-decoration: none;\
font: 11px/100% Arial, Helvetica, sans-serif;\
padding: .5em 2em .55em;\
text-shadow: 0 1px 1px rgba(0,0,0,.3);\
-webkit-border-radius: .5em;\
-moz-border-radius: .5em;\
border-radius: .5em;\
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
box-shadow: 0 1px 2px rgba(0,0,0,.2);\
}\
.Main .Main-adicional_butt {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-seguro_butt {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-agregar_seg {\
color: #e8f0de;\
border: solid 1px #538312;\
background: #64991e;\
background: -webkit-gradient(linear, left top, left bottom, from(#7db72f), to(#4e7d0e));\
background: -moz-linear-gradient(top, #7db72f, #4e7d0e);\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7db72f", endColorstr="#4e7d0e");\
display: inline-block;\
zoom: 1;\
vertical-align: baseline;\
margin: 0 2px;\
outline: none;\
cursor: pointer;\
text-align: center;\
text-decoration: none;\
font: 11px/100% Arial, Helvetica, sans-serif;\
padding: .5em 2em .55em;\
text-shadow: 0 1px 1px rgba(0,0,0,.3);\
-webkit-border-radius: .5em;\
-moz-border-radius: .5em;\
border-radius: .5em;\
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
box-shadow: 0 1px 2px rgba(0,0,0,.2);\
}\
.Main .Main-quitar_seg {\
color: #faddde;\
border: solid 1px #980c10;\
background: #d81b21;\
background: -webkit-gradient(linear, left top, left bottom, from(#ed1c24), to(#aa1317));\
background: -moz-linear-gradient(top, #ed1c24, #aa1317);\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ed1c24", endColorstr="#aa1317");\
display: inline-block;\
zoom: 1;\
vertical-align: baseline;\
margin: 0 2px;\
outline: none;\
cursor: pointer;\
text-align: center;\
text-decoration: none;\
font: 11px/100% Arial, Helvetica, sans-serif;\
padding: .5em 2em .55em;\
text-shadow: 0 1px 1px rgba(0,0,0,.3);\
-webkit-border-radius: .5em;\
-moz-border-radius: .5em;\
border-radius: .5em;\
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
box-shadow: 0 1px 2px rgba(0,0,0,.2);\
}\
.Main .Main-impresion_butt {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(0, 0, 0, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
border: 1px solid #3079ED !important;\
background: #4B8DF8;\
background: -webkit-linear-gradient(top, #4C8FFD, #4787ED);\
background: -moz-linear-gradient(top, #4C8FFD, #4787ED);\
background: -ms-linear-gradient(top, #4C8FFD, #4787ED);\
background: -o-linear-gradient(top, #4C8FFD, #4787ED);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: rgb(255, 255, 255);\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
cursor: pointer;\
}\
.Main .Main-impresion_butt .wmbutton .wmbutton-img{\
background: url(resources/images/buttons/google+-ui-sprite-gray.png) no-repeat;\
background-color: transparent;\
background-position: -216px -126px;\
}.Main .Main-impresion_main_panel {\
background: #666666 url(resources/images/gradients/brillant.png) repeat;\
margin: 0px;\
padding: 0px;\
}\
.Main .Main-parents_top_image_parents {\
background: url(resources/images/buttons/google+-ui-sprite-colour.png);\
background-position: -0px -90px;\
}\
.Main .Main-responsableDataGrid {\
cursor: pointer;\
}\
.Main .Main-agregar_imp {\
color: #e8f0de;\
border: solid 1px #538312;\
background: #64991e;\
background: -webkit-gradient(linear, left top, left bottom, from(#7db72f), to(#4e7d0e));\
background: -moz-linear-gradient(top, #7db72f, #4e7d0e);\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7db72f", endColorstr="#4e7d0e");\
display: inline-block;\
zoom: 1;\
vertical-align: baseline;\
margin: 0 2px;\
outline: none;\
cursor: pointer;\
text-align: center;\
text-decoration: none;\
font: 11px/100% Arial, Helvetica, sans-serif;\
padding: .5em 2em .55em;\
text-shadow: 0 1px 1px rgba(0,0,0,.3);\
-webkit-border-radius: .5em;\
-moz-border-radius: .5em;\
border-radius: .5em;\
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
box-shadow: 0 1px 2px rgba(0,0,0,.2);\
}\
.Main .Main-quitar_impr {\
color: #faddde;\
border: solid 1px #980c10;\
background: #d81b21;\
background: -webkit-gradient(linear, left top, left bottom, from(#ed1c24), to(#aa1317));\
background: -moz-linear-gradient(top, #ed1c24, #aa1317);\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ed1c24", endColorstr="#aa1317");\
display: inline-block;\
zoom: 1;\
vertical-align: baseline;\
margin: 0 2px;\
outline: none;\
cursor: pointer;\
text-align: center;\
text-decoration: none;\
font: 11px/100% Arial, Helvetica, sans-serif;\
padding: .5em 2em .55em;\
text-shadow: 0 1px 1px rgba(0,0,0,.3);\
-webkit-border-radius: .5em;\
-moz-border-radius: .5em;\
border-radius: .5em;\
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
box-shadow: 0 1px 2px rgba(0,0,0,.2);\
}\
.Main .Main-picture10 {\
background: url(resources/images/buttons/google+-ui-sprite-colour.png);\
background-position: -36px -36px;\
}\
.Main .Main-pagare_butt {\
background: #FFB515;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#FFB515),to(#e29b03));\
background-image: -webkit-linear-gradient(top,#FFB515, #e29b03);\
background-image: -moz-linear-gradient(top,#FFB515, #e29b03);\
background-image: -ms-linear-gradient(top,#FFB515, #e29b03);\
background-image: -o-linear-gradient(top,#FFB515, #e29b03);\
background-image: linear-gradient(top,#FFB515, #e29b03);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
border: solid 1px #EE9A00 !important;\
border-radius: .3em;\
}\
.Main .Main-contrato_butt {\
background: #FFB515;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#FFB515),to(#e29b03));\
background-image: -webkit-linear-gradient(top,#FFB515, #e29b03);\
background-image: -moz-linear-gradient(top,#FFB515, #e29b03);\
background-image: -ms-linear-gradient(top,#FFB515, #e29b03);\
background-image: -o-linear-gradient(top,#FFB515, #e29b03);\
background-image: linear-gradient(top,#FFB515, #e29b03);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
border: solid 1px #EE9A00 !important;\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
border-radius: .3em;\
}\
.Main .Main-mensualidades_butt {\
background: #FFB515;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#FFB515),to(#e29b03));\
background-image: -webkit-linear-gradient(top,#FFB515, #e29b03);\
background-image: -moz-linear-gradient(top,#FFB515, #e29b03);\
background-image: -ms-linear-gradient(top,#FFB515, #e29b03);\
background-image: -o-linear-gradient(top,#FFB515, #e29b03);\
background-image: linear-gradient(top,#FFB515, #e29b03);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
border: solid 1px #EE9A00 !important;\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
border-radius: .3em;\
}\
.Main .Main-bancos_butt {\
background: #FFB515;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#FFB515),to(#e29b03));\
background-image: -webkit-linear-gradient(top,#FFB515, #e29b03);\
background-image: -moz-linear-gradient(top,#FFB515, #e29b03);\
background-image: -ms-linear-gradient(top,#FFB515, #e29b03);\
background-image: -o-linear-gradient(top,#FFB515, #e29b03);\
background-image: linear-gradient(top,#FFB515, #e29b03);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
border: solid 1px #EE9A00 !important;\
border-radius: .3em;\
}\
.Main .Main-contrato_trans_butt {\
background: #FFB515;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#FFB515),to(#e29b03));\
background-image: -webkit-linear-gradient(top,#FFB515, #e29b03);\
background-image: -moz-linear-gradient(top,#FFB515, #e29b03);\
background-image: -ms-linear-gradient(top,#FFB515, #e29b03);\
background-image: -o-linear-gradient(top,#FFB515, #e29b03);\
background-image: linear-gradient(top,#FFB515, #e29b03);\
color: #000000;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
border: solid 1px #EE9A00 !important;\
border-radius: .3em;\
}\
.Main .Main-contrato_alim_butt {\
background: #FFB515;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#FFB515),to(#e29b03));\
background-image: -webkit-linear-gradient(top,#FFB515, #e29b03);\
background-image: -moz-linear-gradient(top,#FFB515, #e29b03);\
background-image: -ms-linear-gradient(top,#FFB515, #e29b03);\
background-image: -o-linear-gradient(top,#FFB515, #e29b03);\
background-image: linear-gradient(top,#FFB515, #e29b03);\
color: #000000;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
border: solid 1px #EE9A00 !important;\
border-radius: .3em;\
}\
.Main .Main-contrato_seg_butt {\
background: #FFB515;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#FFB515),to(#e29b03));\
background-image: -webkit-linear-gradient(top,#FFB515, #e29b03);\
background-image: -moz-linear-gradient(top,#FFB515, #e29b03);\
background-image: -ms-linear-gradient(top,#FFB515, #e29b03);\
background-image: -o-linear-gradient(top,#FFB515, #e29b03);\
background-image: linear-gradient(top,#FFB515, #e29b03);\
color: #000000;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
border: solid 1px #EE9A00 !important;\
border-radius: .3em;\
}\
.Main .Main-enfermeria_butt {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-label19 {\
background-color: #B22418;\
color: white;\
}\
.Main .Main-label20 {\
background-color: #B22418;\
color: white;\
}\
.Main .Main-pagar_pse {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(0, 0, 0, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
border: 1px solid #3079ED !important;\
background: #4B8DF8;\
background: -webkit-linear-gradient(top, #4C8FFD, #4787ED);\
background: -moz-linear-gradient(top, #4C8FFD, #4787ED);\
background: -ms-linear-gradient(top, #4C8FFD, #4787ED);\
background: -o-linear-gradient(top, #4C8FFD, #4787ED);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: rgb(255, 255, 255);\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
cursor: pointer;\
}\
.Main .Main-transporteDataGrid {\
cursor: pointer;\
}\
.Main .Main-pagar_pse_butt {\
background-image: url(//www.cafeexpress.co/img/cms/PSE-logo.PNG);\
background-size: 100%;\
background-repeat: no-repeat;\
cursor: pointer;\
}\
.Main .Main-pagar_banco {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(0, 0, 0, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
border: 1px solid #3079ED !important;\
background: #4B8DF8;\
background: -webkit-linear-gradient(top, #4C8FFD, #4787ED);\
background: -moz-linear-gradient(top, #4C8FFD, #4787ED);\
background: -ms-linear-gradient(top, #4C8FFD, #4787ED);\
background: -o-linear-gradient(top, #4C8FFD, #4787ED);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: rgb(255, 255, 255);\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
cursor: pointer;\
}\
.Main .Main-guardar_restricciones_alimenticias {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-guardar_ficha {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-actualizar_ficha {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-home_butt {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-picture13 {\
background: url(resources/images/buttons/google+-ui-sprite-colour.png);\
background-position: -18px -36px;\
}\
.Main .Main-iraTransporte {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 2px;\
-moz-border-radius: 2px;\
border-radius: 2px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 16px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-iraFicha {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 2px;\
-moz-border-radius: 2px;\
border-radius: 2px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 16px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-iraSeguro {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 2px;\
-moz-border-radius: 2px;\
border-radius: 2px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 16px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-iraFinalizar {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 2px;\
-moz-border-radius: 2px;\
border-radius: 2px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 16px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-grafico {\
border-radius: 3px ;\
border: 1px solid #C6C6C6 !important;\
background: #F3F3F3;\
background: -webkit-linear-gradient(top, #F8F8F8, #F1F1F1);\
background: -moz-linear-gradient(top, #F8F8F8, #F1F1F1);\
background: -ms-linear-gradient(top, #F8F8F8, #F1F1F1);\
background: -o-linear-gradient(top, #F8F8F8, #F1F1F1);\
color: #333;\
}\
.Main .Main-panel20 {\
border-radius: 3px 3px;\
}\
.Main .Main-dashboard_d1 {\
border-radius: 0px 0px 3px 3px;\
}\
.Main .Main-main_dash {\
border-radius: 0px 0px 3px 3px;\
}\
.Main .Main-dash_message {\
border-radius: 3px ;\
border: 1px solid #C6C6C6 !important;\
background: #F3F3F3;\
background: -webkit-linear-gradient(top, #F8F8F8, #F1F1F1);\
background: -moz-linear-gradient(top, #F8F8F8, #F1F1F1);\
background: -ms-linear-gradient(top, #F8F8F8, #F1F1F1);\
background: -o-linear-gradient(top, #F8F8F8, #F1F1F1);\
color: #333;\
}\
.Main .Main-boton_generar_informe {\
background: #4D90FE;\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
rgba(0,0,0,0.2);\
}\
.Main .Main-button7 {\
background: #4D90FE;\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
rgba(0,0,0,0.2);\
}\
';
Main.prototype._htmlText = '';