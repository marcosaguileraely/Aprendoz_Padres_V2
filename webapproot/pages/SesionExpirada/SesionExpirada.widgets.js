SesionExpirada.widgets = {
	layoutBox1: ["wm.Layout", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"middle"}, {}, {
		panel2: ["wm.Panel", {"height":"63px","horizontalAlign":"left","verticalAlign":"middle","width":"100%","layoutKind":"left-to-right"}, {}, {
			label2: ["wm.Label", {"caption":"Aviso importante!","height":"41px","width":"100%","border":"0","align":"center"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}],
		label1: ["wm.Label", {"height":"162px","width":"100%","border":"0","align":"center","singleLine":false}, {}, {
			format: ["wm.DataFormatter", {}, {}]
		}],
		panel1: ["wm.Panel", {"height":"48px","horizontalAlign":"center","verticalAlign":"top","width":"100%","layoutKind":"left-to-right"}, {}, {
			button1: ["wm.Button", {"height":"100%","width":"200px","caption":"Ingresar nuevamente","borderColor":"#006dcc"}, {"onclick":"button1Click"}]
		}]
	}]
}