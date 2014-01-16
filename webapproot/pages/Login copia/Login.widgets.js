Login.widgets = {
	layoutBox: ["wm.Layout", {"height":"100%"}, {}, {
		spacer1: ["wm.Spacer", {"height":"34px","width":"96px"}, {}],
		panel1: ["wm.Panel", {"height":"189px","horizontalAlign":"center","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
			picture1: ["wm.Picture", {"height":"183px","border":"0","width":"498px","source":"resources/images/LOGO%20APRENDOZ.jpg","aspect":"v"}, {}]
		}],
		loginMainPanel: ["wm.Panel", {"height":"280px","padding":"10","layoutKind":"left-to-right"}, {}, {
			spacer5: ["wm.Spacer", {"width":"100%"}, {}],
			loginInputPanel: ["wm.Panel", {"_classes":{"domNode":["wm_Border_StyleFirefoxCurved4px","wm_Border_StyleSolid","wm_Border_Size1px","wm_Border_ColorLightGray","wm_FontSizePx_14px","wm_Border_TopStyleCurved8px","wm_Border_BottomStyleCurved8px","wm_SilverBlueTheme_LightBlueInsetPanel"]},"width":"366px","border":"3","padding":"10","borderColor":"#CD0000"}, {}, {
				usernameInput: ["wm.Editor", {"caption":"Usuario:","height":"28px","captionSize":"110px"}, {}, {
					editor: ["wm._TextEditor", {}, {}]
				}],
				passwordInput: ["wm.Editor", {"caption":"Contraseña:","height":"28px","captionSize":"110px"}, {}, {
					editor: ["wm._TextEditor", {"password":true}, {}]
				}],
				loginButtonPanel: ["wm.Panel", {"height":"39px","horizontalAlign":"right","padding":"4","layoutKind":"left-to-right"}, {}, {
					loginButton: ["wm.Button", {"_classes":{"domNode":["wm_FontFamily_Arial","wm_FontSizePx_14px","wm_TextDecoration_Bold","wm_Border_TopStyleCurved8px","wm_Border_BottomStyleCurved8px"]},"height":"100%","width":"80px","caption":"Acceder","border":"0","margin":"0"}, {"onclick":"loginButtonClick"}]
				}],
				spacer3: ["wm.Spacer", {"height":"15px"}, {}],
				loginErrorMsg: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"caption":" ","height":"100%","width":"0%","border":"0","align":"center"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				splitter1: ["wm.Splitter", {"height":"4px","width":"100%","border":"0"}, {}],
				panel4: ["wm.Panel", {"height":"38px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					label6: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"¿No puedes acceder a tu cuenta?","height":"35px","width":"100%","border":"0","align":"center","link":"http://aprendoz.rochester.edu.co/forgot-password"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}]
			}],
			spacer4: ["wm.Spacer", {"width":"100%"}, {}]
		}],
		insertLogin: ["wm.LiveForm", {"verticalAlign":"top","horizontalAlign":"left"}, {}],
		spacer2: ["wm.Spacer", {"height":"100%","width":"96px"}, {}],
		footer: ["wm.Layers", {"_classes":{"domNode":["wm_SilverBlueTheme_ToolBar","wm_FontSizePx_12px"]},"height":"45px"}, {}, {
			layer1: ["wm.Layer", {"caption":"layer1","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"center","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					label1: ["wm.Label", {"caption":"<center>Colegio Rochester  ● Apredoz© - 2012-2013","height":"100%","width":"50%","border":"0"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}],
				panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"center","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					label2: ["wm.Label", {"caption":"Escribenos a:","height":"100%","width":"81px","border":"0"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					label3: ["wm.Label", {"caption":"soporte@rochester.edu.co","height":"100%","width":"165px","border":"0","link":"mailto:soporte@rochester.edu.co"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					label4: ["wm.Label", {"caption":"|","height":"100%","width":"11px","border":"0","align":"center"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					label5: ["wm.Label", {"caption":"Sitio Web Oficial","height":"100%","width":"110px","border":"0","link":"http://www.rochester.edu.co"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}]
			}]
		}]
	}]
}