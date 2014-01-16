Login.widgets = {
	layoutBox: ["wm.Layout", {"height":"100%","width":"649px"}, {}, {
		spacer2: ["wm.Spacer", {"height":"80px","width":"96px"}, {}],
		panel1: ["wm.Panel", {"height":"136px","horizontalAlign":"center","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
			panel_image: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"center","width":"450px","verticalAlign":"middle","padding":"0","margin":"0"}, {}, {
				picture1: ["wm.Picture", {"height":"131px","border":"0","width":"330px","source":"http://aprendoz.rochester.edu.co/bundles/rochesteraprendoz/images/logo.jpg","aspect":"h"}, {}]
			}]
		}],
		loginMainPanel: ["wm.Panel", {"height":"280px","layoutKind":"left-to-right"}, {}, {
			spacer5: ["wm.Spacer", {"width":"100%"}, {}],
			loginInputPanel: ["wm.Panel", {"_classes":{"domNode":["wm_Border_StyleFirefoxCurved4px","wm_Border_StyleSolid","wm_Border_Size1px","wm_Border_ColorLightGray","wm_FontSizePx_14px","wm_BackgroundColor_White"]},"width":"450px","padding":"5,55,10,55","borderColor":"#ffffff"}, {}, {
				label2: ["wm.Label", {"caption":"Aprendoz Padres","height":"48px","width":"96px","border":"0","align":"center"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				usernameInput: ["wm.Editor", {"caption":"Usuario","height":"40px","captionSize":"100px"}, {}, {
					editor: ["wm._TextEditor", {}, {}]
				}],
				passwordInput: ["wm.Editor", {"caption":"Contraseña","height":"40px","captionSize":"100px"}, {}, {
					editor: ["wm._TextEditor", {"password":true}, {}]
				}],
				loginButtonPanel: ["wm.Panel", {"height":"44px","horizontalAlign":"right","padding":"4","layoutKind":"left-to-right"}, {}, {
					passObject1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"¿No puedes acceder a tu cuenta?","height":"32px","width":"100%","border":"0","align":"center","link":"http://aprendoz.rochester.edu.co/forgot-password"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					loginButton: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_TextDecoration_Bold","wm_FontSizePx_12px"]},"height":"100%","width":"110px","caption":"Acceder","border":"0","margin":"0","borderColor":"#aaa","iconUrl":"resources/images/buttons/login.png","iconHeight":"20px","iconMargin":"0 -20px 0 0"}, {"onclick":"loginButtonClick"}]
				}],
				spacer3: ["wm.Spacer", {"height":"11px"}, {}],
				loginErrorMsg: ["wm.Label", {"caption":" ","height":"100%","border":"0","align":"center"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}],
			spacer4: ["wm.Spacer", {"width":"100%"}, {}]
		}],
		spacer1: ["wm.Spacer", {"height":"513px","width":"96px"}, {}],
		panel2: ["wm.Panel", {"_classes":{"domNode":["wm_Border_TopStyleCurved12px","wm_BackgroundColor_White"]},"height":"48px","horizontalAlign":"center","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
			label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"caption":"Colegio Rochester  • Aprendoz © Versión 0.0.8 ● 2013","height":"48px","width":"513px","border":"0","align":"center"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}]
	}]
}