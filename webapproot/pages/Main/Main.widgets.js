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
}