ActualizaDatos.widgets = {
	serviceVariable1: ["wm.ServiceVariable", {"service":"ActualizaDatos","operation":"findAll"}, {}, {
		input: ["wm.ServiceInput", {"type":"findAllInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"id","source":"Id_persona.dataValue"}, {}]
			}]
		}]
	}],
	a_getUsernameActualizaDatos: ["wm.ServiceVariable", {"service":"securityService","operation":"getUserName","startUpdate":true,"autoUpdate":true}, {"onSuccess":"a_getUsernameActualizaDatosSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
	}],
	personaLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.personaLiveView1","maxResults":1}, {"onSuccess":"personaLiveVariable1Success"}],
	a_getGrupoFamiliar: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"getIdPersonabyUser"}, {"onSuccess":"a_getGrupoFamiliarSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getIdPersonabyUserInputs"}, {}]
	}],
	a_getUserGroup: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"getGrupoFamiliarbyUser"}, {}, {
		input: ["wm.ServiceInput", {"type":"getGrupoFamiliarbyUserInputs"}, {}]
	}],
	returnValueIfExists: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"returExitsValue"}, {"onSuccess":"returnValueIfExistsSuccess"}, {
		input: ["wm.ServiceInput", {"type":"returExitsValueInputs"}, {}]
	}],
	v_insertActualizaPersona: ["wm.Variable", {"type":"com.aprendoz_desarrollo.data.ActualizacionDatosPersona"}, {}],
	getUserByIdPersona: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"getUserbyIdPersona"}, {"onSuccess":"getUserByIdPersonaSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getUserbyIdPersonaInputs"}, {}]
	}],
	v_updateActualizaPersona: ["wm.Variable", {"type":"com.aprendoz_desarrollo.data.ActualizacionDatosPersona"}, {}],
	a_updatePersona: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"updateDatosPersona"}, {"onSuccess":"a_updatePersonaSuccess"}, {
		input: ["wm.ServiceInput", {"type":"updateDatosPersonaInputs"}, {}]
	}],
	getFamiliarGrupebyIdPersona: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"getGrupoFamiliarbyIdPersona"}, {"onSuccess":"getFamiliarGrupebyIdPersonaSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getGrupoFamiliarbyIdPersonaInputs"}, {}]
	}],
	returnValueIfGrupoFmailiarExists: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"returnExistsValueGrupoFamiliar"}, {"onSuccess":"returnValueIfGrupoFmailiarExistsSuccess"}, {
		input: ["wm.ServiceInput", {"type":"returnExistsValueGrupoFamiliarInputs"}, {}]
	}],
	ls_paises: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"hql_ls_pais","startUpdate":true,"autoUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"hql_ls_paisInputs"}, {}]
	}],
	ls_hql_grados: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"hq_ls_grado","startUpdate":true,"autoUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"hq_ls_gradoInputs"}, {}]
	}],
	a_ls_paises: ["wm.LiveVariable", {"liveSource":"com.aprendoz_desarrollo.data.Pais"}, {}],
	ls_tipo_identificacion: ["wm.Variable", {"type":"EntryData","json":"[\n{name: \"Numero Unico Identificación Personal\", dataValue: \"N.U.I.P\"},\n{name: \"Tarjeta Identidad\", dataValue: \"T.I\"},\n{name: \"Cédula Ciudadanía\", dataValue: \"C.C\"},\n{name: \"Cédula Extranjería\", dataValue: \"C.E\"},\n{name: \"Pasaporte\", dataValue: \"P.S\"}\n]"}, {}],
	a_getRoleByUsernameSV: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"_typeUserByUsername"}, {"onSuccess":"a_getRoleByUsernameSVSuccess"}, {
		input: ["wm.ServiceInput", {"type":"_typeUserByUsernameInputs"}, {}]
	}],
	salirAprendoz: ["wm.ServiceVariable", {"service":"securityService","operation":"logout"}, {"onResult":"goto_salirAprendoz"}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	goto_salirAprendoz: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pageName","expression":"\"Login\""}, {}]
			}]
		}]
	}],
	ls_eps: ["wm.LiveVariable", {"liveSource":"com.aprendoz_desarrollo.data.TipoEps"}, {}],
	ls_nacionalidades: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Nacionalidades"}, {}],
	ls_departamentos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.EstadoDepartamento"}, {}],
	MainLayoutBox: ["wm.Layout", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
		Id_persona: ["wm.TextEditor", {"width":"263px","caption":"Id Persona","showing":false}, {}, {
			editor: ["wm._TextEditor", {}, {}]
		}],
		button1: ["wm.Button", {"height":"31px","width":"264px","caption":"Click me","showing":false}, {"onclick":"serviceVariable1"}],
		gui_panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","padding":"5","layoutKind":"left-to-right"}, {}, {
			left_spacer: ["wm.Spacer", {"height":"48px","width":"30px"}, {}],
			center_panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"bottom"}, {}, {
				personaLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
					userNameBox: ["wm.TextEditor", {"width":"215px","caption":"username","showing":false,"readonly":true}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataValue","source":"a_getUsernameActualizaDatos.dataValue"}, {}]
						}],
						editor: ["wm._TextEditor", {}, {}]
					}],
					headPanel: ["wm.Panel", {"height":"110px","horizontalAlign":"center","width":"100%","verticalAlign":"middle"}, {}, {
						panel11: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"28px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
							picture5: ["wm.Picture", {"source":"resources/images/buttons/computers.png","height":"25px","border":"0","width":"25px","aspect":"h"}, {}],
							label4: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"caption":"Por favor diligencie la información solicitada para continuar con la revisión de calificaciones.","height":"26px","width":"100%","border":"0"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}]
						}],
						panel9: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"30px","horizontalAlign":"center","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
							picture2: ["wm.Picture", {"source":"resources/images/buttons/number_1.png","height":"25px","border":"0","width":"25px","aspect":"h"}, {}],
							label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"caption":" Seleccione el integrante del grupo familiar","height":"26px","width":"450px","border":"0"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}]
						}],
						panel8: ["wm.Panel", {"height":"34px","horizontalAlign":"center","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
							picture1: ["wm.Picture", {"height":"19px","border":"0","width":"20px"}, {}],
							personaSelect: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"width":"450px","height":"28px"}, {"onchange":"personaSelectChange"}, {
								editor: ["wm._SelectEditor", {"displayField":"nombreCompleto","dataField":"pid","displayExpression":"${code}+\" - \"+${nombreCompleto}+\" - \"+${tipo}"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"a_getUserGroup"}, {}]
									}]
								}]
							}]
						}]
					}],
					space1: ["wm.Spacer", {"height":"150px","width":"96px","showing":false}, {}],
					middlePanel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"100%","horizontalAlign":"center","width":"100%","verticalAlign":"middle","padding":"10","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
						layers2: ["wm.Layers", {}, {}, {
							layer2: ["wm.Layer", {"caption":"layer2","horizontalAlign":"center","verticalAlign":"middle"}, {}, {
								message: ["wm.Label", {"caption":"PROCESO EXITOSO! <br/>Agradecemos haya realizado el proceso de actualización. <br/><br/>Haga click en el boton para continuar","height":"95px","width":"100%","border":"0","align":"center","singleLine":false}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								boton_continuar: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_White"]},"height":"60px","width":"223px","caption":"CONTINUAR","borderColor":"#1c74b3"}, {"onclick":"boton_continuarClick"}]
							}]
						}]
					}],
					panel7: ["wm.Panel", {"height":"36px","horizontalAlign":"center","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
						mensajeIntegrantesFaltantes: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"caption":"Integrantes por actualizar","height":"100%","width":"100%","border":"0","align":"center"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}]
					}],
					contentPanel: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
						personaDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","height":"122px","showing":false}, {"onSelected":"personaDataGrid1Selected"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"personaLiveVariable1"}, {}]
							}],
							idPersona1: ["wm.DataGridColumn", {"caption":"Persona","field":"idPersona","display":"Number","autoSize":undefined}, {}, {
								format: ["wm.NumberFormatter", {}, {}]
							}],
							nombreLdap1: ["wm.DataGridColumn", {"caption":"NombreLdap","field":"nombreLdap","columnWidth":"100%","index":1}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							sexo1: ["wm.DataGridColumn", {"caption":"Grupo","field":"grupoFamiliar.grupoFamiliar","columnWidth":"100%","index":32}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							column1: ["wm.DataGridColumn", {"caption":"tipoPersona.idTipoPersona","field":"tipoPersona.idTipoPersona","index":3}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}]
						}],
						panel10: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"30px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right","lock":true}, {}, {
							picture3: ["wm.Picture", {"source":"resources/images/buttons/number_2.png","height":"25px","border":"0","width":"25px","aspect":"h"}, {}],
							label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"caption":"Completa el siguiente formulario. Los campos con (<font color=\"red\">*</font>) son obligatorios","height":"26px","width":"100%","border":"0"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}]
						}],
						panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","autoScroll":true}, {}, {
							personaLiveForm1: ["wm.LiveForm", {"height":"1239px","verticalAlign":"top","horizontalAlign":"left","readonly":true,"validateBeforeSave":true}, {"onSuccess":"personaLiveVariable1","onUpdateData":"personaLiveForm1UpdateData","onBeginUpdate":"personaLiveForm1BeginUpdate"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"personaDataGrid1.selectedItem"}, {}],
									wire1: ["wm.Wire", {"targetProperty":"dataOutput.grupoFamiliar","expression":undefined,"source":"grupoFamiliarRelatedEditor1.dataOutput"}, {}],
									wire3: ["wm.Wire", {"targetProperty":"dataOutput.tipoPersona","expression":undefined,"source":"tipoPersonaRelatedEditor1.dataOutput"}, {}],
									wire2: ["wm.Wire", {"targetProperty":"dataOutput.pais","expression":undefined,"source":"relatedEditor1.dataOutput"}, {}]
								}],
								idPersonaEditor1: ["wm.Editor", {"caption":"Identificador","readonly":true,"formField":"idPersona","width":"100%","height":"26px","display":"Number","showing":false}, {}, {
									editor: ["wm._NumberEditor", {}, {}]
								}],
								nombreLdapEditor1: ["wm.Editor", {"caption":"NombreLdap","readonly":true,"formField":"nombreLdap","width":"100%","height":"26px","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								claveEditor1: ["wm.Editor", {"caption":"Clave","readonly":true,"formField":"clave","width":"100%","height":"26px","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								codigoEditor1: ["wm.Editor", {"caption":"Codigo","readonly":true,"formField":"codigo","width":"100%","height":"26px","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								activoRetiradoEditor1: ["wm.Editor", {"caption":"ActivoRetirado","readonly":true,"formField":"activoRetirado","width":"100%","height":"26px","display":"CheckBox","displayValue":true,"emptyValue":"false","showing":false}, {}, {
									editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
								}],
								apellido1Editor1: ["wm.Editor", {"caption":"1er Apellido","readonly":true,"formField":"apellido1","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {"required":true}, {}]
								}],
								apellido2Editor1: ["wm.Editor", {"caption":"2do Apellido","readonly":true,"formField":"apellido2","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {"required":true}, {}]
								}],
								nombre1Editor1: ["wm.Editor", {"caption":"1er Nombre","readonly":true,"formField":"nombre1","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {"required":true}, {}]
								}],
								nombre2Editor1: ["wm.Editor", {"caption":"2do Nombre","readonly":true,"formField":"nombre2","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								emailEditor1: ["wm.Editor", {"caption":"Correo electrónico","readonly":true,"formField":"email","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {"required":true}, {}]
								}],
								panel2: ["wm.Panel", {"height":"48px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
									head_identidad: ["wm.Label", {"caption":"IDENTIDAD","height":"32px","width":"100%","border":"0"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}]
								}],
								sexoEditor1: ["wm.Editor", {"caption":"Genero","readonly":true,"formField":"sexo","width":"100%","height":"26px","display":"Select"}, {}, {
									editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Femenino, Masculino"}, {}, {
										optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
									}]
								}],
								religionEditor1: ["wm.Editor", {"caption":"Religión","readonly":true,"formField":"religion","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								tipoDocumentoEditor1: ["wm.Editor", {"caption":"Tipo Documento","readonly":true,"formField":"tipoDocumento","width":"100%","height":"26px","display":"Select"}, {}, {
									editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","required":true}, {}, {
										optionsVar: ["wm.Variable", {"type":"EntryData"}, {}],
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"ls_tipo_identificacion"}, {}]
										}]
									}]
								}],
								noDocumentoEditor1: ["wm.Editor", {"caption":"No. Documento","readonly":true,"formField":"noDocumento","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {"required":true}, {}]
								}],
								fechaNacimientoEditor1: ["wm.Editor", {"caption":"Fecha nacimiento","readonly":true,"formField":"fechaNacimiento","width":"100%","height":"26px","display":"Date"}, {}, {
									editor: ["wm._DateEditor", {"required":true}, {}]
								}],
								hijoDeExalumnoEditor1: ["wm.Editor", {"caption":"Ex alumno","readonly":true,"formField":"hijoDeExalumno","width":"100%","height":"26px","display":"CheckBox","displayValue":true,"emptyValue":"false"}, {}, {
									editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
								}],
								nacionalidadEditor1: ["wm.Editor", {"caption":"Nacionalidad","readonly":true,"formField":"nacionalidad","width":"100%","height":"26px","display":"Select"}, {}, {
									editor: ["wm._SelectEditor", {"displayField":"nacionalidad","dataField":"nacionalidad","required":true}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"ls_nacionalidades"}, {}]
										}]
									}]
								}],
								relatedEditor1: ["wm.RelatedEditor", {"formField":"pais","height":"28px","fitToContentHeight":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"personaDataGrid1.selectedItem.pais"}, {}],
										wire1: ["wm.Wire", {"targetProperty":"dataOutput","expression":undefined,"source":"paisLookup1.selectedItem"}, {}]
									}],
									paisLookup1: ["wm.Editor", {"caption":"Pais de nacimiento","readonly":true,"formField":"","width":"100%","height":"26px","display":"Lookup"}, {"onchange":"paisLookup1Change"}, {
										editor: ["wm._LookupEditor", {"required":true,"displayField":"pais","autoDataSet":false,"startUpdate":false}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"a_ls_paises"}, {}]
											}]
										}]
									}]
								}],
								lugarNacimientoDepartamentoEditor1: ["wm.Editor", {"caption":"Departamento/Estado","readonly":true,"formField":"lugarNacimientoDepartamento","width":"100%","height":"26px","display":"Select"}, {}, {
									editor: ["wm._SelectEditor", {"displayField":"estado","dataField":"estado","required":true}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"ls_departamentos"}, {}]
										}]
									}]
								}],
								lugarNacimientoMunicipioEditor1: ["wm.Editor", {"caption":"Municipio/Ciudad","readonly":true,"formField":"lugarNacimientoMunicipio","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {"required":true}, {}]
								}],
								textEditor1: ["wm.TextEditor", {"width":"150%","caption":"Codigo Postal","readonly":true,"formField":"codigoPostal"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								lugarExpedicionDepartamentoEditor1: ["wm.Editor", {"caption":"Dpto expedición de documento","readonly":true,"formField":"lugarExpedicionDepartamento","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {"required":true}, {}]
								}],
								lugarExpedicionMunicipioEditor1: ["wm.Editor", {"caption":"Mcpio expedición de documento","readonly":true,"formField":"lugarExpedicionMunicipio","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {"required":true}, {}]
								}],
								panel3: ["wm.Panel", {"height":"48px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
									head_identidad1: ["wm.Label", {"caption":"CONTACTO RESIDENCIAL","height":"32px","width":"100%","border":"0"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}]
								}],
								barrioEditor1: ["wm.Editor", {"caption":"Barrio","readonly":true,"formField":"barrio","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {"required":true}, {}]
								}],
								direccionResidenciaEditor1: ["wm.Editor", {"caption":"Dirección de residencia","readonly":true,"formField":"direccionResidencia","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {"required":true}, {}]
								}],
								telefonoEditor1: ["wm.Editor", {"caption":"Telefono","readonly":true,"formField":"telefono","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {"required":true}, {}]
								}],
								telefono2Editor1: ["wm.Editor", {"caption":"Celular","readonly":true,"formField":"telefono2","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								paisDomicilioEditor1: ["wm.Editor", {"caption":"Pais de residencia","readonly":true,"formField":"paisDomicilio","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								viveConEditor1: ["wm.Editor", {"caption":"Vive con","readonly":true,"formField":"viveCon","width":"100%","height":"26px","display":"Select"}, {}, {
									editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","required":true,"options":"MADRE, PADRE, ACUDIENTE, AMBOS PADRES, NO APLICA"}, {}, {
										optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
									}]
								}],
								panel4: ["wm.Panel", {"height":"48px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
									head_identidad2: ["wm.Label", {"caption":"CONTACTO LABORAL","height":"32px","width":"100%","border":"0"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}]
								}],
								celularEditor1: ["wm.Editor", {"caption":"Celular laboral","readonly":true,"formField":"celular","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								cargoEditor1: ["wm.Editor", {"caption":"Cargo","readonly":true,"formField":"cargo","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {"required":true}, {}]
								}],
								empresaEditor1: ["wm.Editor", {"caption":"Empresa","readonly":true,"formField":"empresa","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {"required":true}, {}]
								}],
								profesionEditor1: ["wm.Editor", {"caption":"Profesión","readonly":true,"formField":"profesion","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {"required":true}, {}]
								}],
								municipioEditor1: ["wm.Editor", {"caption":"Municipio","readonly":true,"formField":"municipio","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {"required":true}, {}]
								}],
								departamentoEditor1: ["wm.Editor", {"caption":"Departamento","readonly":true,"formField":"departamento","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {"required":true}, {}]
								}],
								direccionOficinaEditor1: ["wm.Editor", {"caption":"Dirección de la oficina","readonly":true,"formField":"direccionOficina","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								telefonoOficinaEditor1: ["wm.Editor", {"caption":"Telefono de oficina","readonly":true,"formField":"telefonoOficina","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {"required":true}, {}]
								}],
								panel5: ["wm.Panel", {"height":"48px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
									head_identidad3: ["wm.Label", {"caption":"SALUD Y EMERGENCIAS","height":"32px","width":"100%","border":"0"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}]
								}],
								epsEditor1: ["wm.Editor", {"caption":"E.P.S","readonly":true,"formField":"eps","width":"100%","height":"26px","display":"Select"}, {}, {
									editor: ["wm._SelectEditor", {"displayField":"eps","dataField":"eps"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"ls_eps"}, {}]
										}]
									}]
								}],
								saludPrepagadaEditor1: ["wm.Editor", {"caption":"Salud prepagada","readonly":true,"formField":"saludPrepagada","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								numeroContratoSaludEditor1: ["wm.Editor", {"caption":"No. Contrato de salud E.P.S","readonly":true,"formField":"numeroContratoSalud","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {"required":true}, {}]
								}],
								clinicaEmergenciaEditor1: ["wm.Editor", {"caption":"Clinica de emergencia","readonly":true,"formField":"clinicaEmergencia","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								tipoSangreEditor1: ["wm.Editor", {"caption":"Tipo de sangre y RH","readonly":true,"formField":"tipoSangre","width":"100%","height":"26px","display":"Select"}, {}, {
									editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","required":true,"options":"A+, A-, AB+, AB-, B+, B-, O+, O-, NO APLICA"}, {}, {
										optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
									}]
								}],
								panel6: ["wm.Panel", {"height":"48px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
									head_identidad4: ["wm.Label", {"caption":"EDUCATIVA","height":"32px","width":"100%","border":"0"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}]
								}],
								gradoIngresoEditor1: ["wm.Editor", {"caption":"Grado ingreso","readonly":true,"formField":"gradoIngreso","width":"100%","height":"26px","display":"Select"}, {}, {
									editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"grado","startUpdate":true}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"ls_hql_grados"}, {}]
										}]
									}]
								}],
								cursoIngresoEditor1: ["wm.Editor", {"caption":"Curso de ingreso","readonly":true,"formField":"cursoIngreso","width":"100%","height":"26px","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								fechaRetiroEditor1: ["wm.Editor", {"caption":"Fecha de retiro","readonly":true,"formField":"fechaRetiro","width":"100%","height":"26px","display":"Date","showing":false}, {}, {
									editor: ["wm._DateEditor", {}, {}]
								}],
								comentarioRetiroEditor1: ["wm.Editor", {"caption":"ComentarioRetiro","readonly":true,"formField":"comentarioRetiro","width":"100%","height":"26px","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								fechaIngresoEditor1: ["wm.Editor", {"caption":"Fecha de ingreso","readonly":true,"formField":"fechaIngreso","width":"100%","height":"26px","display":"Date"}, {}, {
									editor: ["wm._DateEditor", {"required":true}, {}]
								}],
								colegioAnteriorEditor1: ["wm.Editor", {"caption":"Colegio / Jardín anterior","readonly":true,"formField":"colegioAnterior","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {"required":true}, {}]
								}],
								nivelAcademicoEditor1: ["wm.Editor", {"caption":"Nivel académico","readonly":true,"formField":"nivelAcademico","width":"100%","height":"26px","display":"Select"}, {}, {
									editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Educación básica, Bachiller, Pregrado profesional, Universitario, Pregrado Técnico, Postgrado, Especialización, Postgrado maestría, Posgrado Doctorado"}, {}, {
										optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
									}]
								}],
								nombrePadreExalumnoEditor1: ["wm.Editor", {"caption":"Nombre del ex-alumno","readonly":true,"formField":"nombrePadreExalumno","width":"100%","height":"26px","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								promocionEditor1: ["wm.Editor", {"caption":"Promoción del ex-alumno","readonly":true,"formField":"promocion","width":"100%","height":"26px","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								codigoFamiliaEditor1: ["wm.Editor", {"caption":"CodigoFamilia","readonly":true,"formField":"codigoFamilia","width":"100%","height":"26px","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								parentescoEditor1: ["wm.Editor", {"caption":"Parentesco","readonly":true,"formField":"parentesco","width":"100%","height":"26px","display":"Select"}, {}, {
									editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Padre, Madre, Hermano(a), Abuelo(a), Tio(a) "}, {}, {
										optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
									}]
								}],
								rutaMEditor1: ["wm.Editor", {"caption":"RutaM","readonly":true,"formField":"rutaM","width":"100%","height":"26px","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								rutaTEditor1: ["wm.Editor", {"caption":"RutaT","readonly":true,"formField":"rutaT","width":"100%","height":"26px","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								tomaAlmuerzoEditor1: ["wm.Editor", {"caption":"TomaAlmuerzo","readonly":true,"formField":"tomaAlmuerzo","width":"100%","height":"26px","display":"CheckBox","displayValue":true,"emptyValue":"false","showing":false}, {}, {
									editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
								}],
								tomaMediasNuevesEditor1: ["wm.Editor", {"caption":"TomaMediasNueves","readonly":true,"formField":"tomaMediasNueves","width":"100%","height":"26px","display":"CheckBox","displayValue":true,"emptyValue":"false","showing":false}, {}, {
									editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
								}],
								tomaSeguroAccidentesEditor1: ["wm.Editor", {"caption":"TomaSeguroAccidentes","readonly":true,"formField":"tomaSeguroAccidentes","width":"100%","height":"26px","display":"CheckBox","displayValue":true,"emptyValue":"false","showing":false}, {}, {
									editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
								}],
								noPlaquetaEditor1: ["wm.Editor", {"caption":"NoPlaqueta","readonly":true,"formField":"noPlaqueta","width":"100%","height":"26px","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								matriculadoEditor1: ["wm.Editor", {"caption":"Matriculado","readonly":true,"formField":"matriculado","width":"100%","height":"26px","display":"CheckBox","displayValue":true,"emptyValue":"false","showing":false}, {}, {
									editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
								}],
								inscAlumCursoIdInscAlumCursoEditor1: ["wm.Editor", {"caption":"InscAlumCursoIdInscAlumCurso","readonly":true,"formField":"inscAlumCursoIdInscAlumCurso","width":"100%","height":"26px","display":"Number","showing":false}, {}, {
									editor: ["wm._NumberEditor", {}, {}]
								}],
								editPanel1: ["wm.EditPanel", {"liveForm":"personaLiveForm1","savePanel":"savePanel1","operationPanel":"operationPanel1","showing":false}, {}, {
									savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
										saveButton1: ["wm.RoundedButton", {"caption":"Guardar Datos","width":"130px","height":"100%"}, {"onclick":"editPanel1.saveData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"disabled","expression":undefined,"source":"editPanel1.formInvalid"}, {}]
											}]
										}],
										cancelButton1: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel1.cancelEdit"}]
									}],
									operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
										newButton1: ["wm.RoundedButton", {"caption":"New","width":"100px","height":"100%","showing":false}, {"onclick":"editPanel1.beginDataInsert"}],
										updateButton1: ["wm.RoundedButton", {"caption":"Actualizar","width":"130px","height":"100%","disabled":true}, {"onclick":"editPanel1.beginDataUpdate"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"disabled","expression":undefined,"source":"editPanel1.formUneditable"}, {}]
											}]
										}],
										deleteButton1: ["wm.RoundedButton", {"caption":"Delete","width":"100px","height":"100%","disabled":true,"showing":false}, {"onclick":"editPanel1.deleteData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"disabled","expression":undefined,"source":"editPanel1.formUneditable"}, {}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				insertVerificacionPersonaLiveForm: ["wm.LiveForm", {"height":"61px","verticalAlign":"top","horizontalAlign":"left","showing":false,"lock":true}, {"onSuccess":"insertVerificacionPersonaLiveFormSuccess"}],
				nonAcepted_panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"100%","horizontalAlign":"center","width":"100%","verticalAlign":"middle","padding":"10","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
					layers3: ["wm.Layers", {}, {}, {
						layer3: ["wm.Layer", {"caption":"layer2","horizontalAlign":"center","verticalAlign":"middle"}, {}, {
							message1: ["wm.Label", {"caption":"¡LO SENTIMOS!<br/>El proceso de actualización de datos por parte de tus padres, no ha sido realizado.<br>Una vez realizado podras ingresar para ver tus calificaciones<br/><br/>Haga click en el botón para salir","height":"116px","width":"100%","border":"0","align":"center","singleLine":false}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							boton_continuar1: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_White"]},"height":"60px","width":"223px","caption":"SALIR","borderColor":"#DC8909"}, {"onclick":"boton_continuar1Click"}]
						}]
					}]
				}],
				footerPanel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"46px","horizontalAlign":"right","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right","lock":true}, {}, {
					label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"caption":"Presiona el botón Actualizar para completar el proceso","height":"26px","width":"100%","border":"0","align":"right"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					picture4: ["wm.Picture", {"source":"resources/images/buttons/number_3.png","height":"25px","border":"0","width":"25px","aspect":"h"}, {}],
					boton_actualizar: ["wm.Button", {"height":"100%","width":"128px","caption":"Actualizar","margin":"6","borderColor":"#1c74b3"}, {"onclick":"boton_actualizarClick"}]
				}]
			}],
			right_spacer: ["wm.Spacer", {"height":"48px","width":"30px"}, {}]
		}]
	}]
}