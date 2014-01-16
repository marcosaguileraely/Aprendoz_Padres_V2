TestWS.widgets = {
	ws_servicevar: ["wm.ServiceVariable", {"service":"WSHomedata","operation":"sendData"}, {}, {
		input: ["wm.ServiceInput", {"type":"sendDataInputs"}, {}]
	}],
	layoutBox1: ["wm.Layout", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
		ws_panel: ["wm.Panel", {"height":"295px","horizontalAlign":"center","verticalAlign":"middle","width":"100%"}, {}, {
			nit: ["wm.TextEditor", {"width":"400px","caption":"nit","displayValue":"900509589","height":"35px"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"\"900509589\""}, {}]
				}],
				editor: ["wm._TextEditor", {}, {}]
			}],
			id: ["wm.TextEditor", {"width":"400px","caption":"id","displayValue":"80928052","height":"35px"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"\"80928052\""}, {}]
				}],
				editor: ["wm._TextEditor", {}, {}]
			}],
			uri: ["wm.TextEditor", {"width":"400px","caption":"uri","displayValue":"http://www.rochester.edu.co/","height":"35px"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"\"http://www.rochester.edu.co/\""}, {}]
				}],
				editor: ["wm._TextEditor", {}, {}]
			}],
			value: ["wm.TextEditor", {"width":"400px","caption":"value","displayValue":"50000","height":"35px"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"\"50000\""}, {}]
				}],
				editor: ["wm._TextEditor", {}, {}]
			}],
			subject: ["wm.TextEditor", {"width":"400px","caption":"subject","displayValue":"PAGO DE PRUEBA CON CARACTER DEVOLUTIVO","height":"35px"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"targetProperty":"displayValue","expression":"\"PAGO DE PRUEBA CON CARACTER DEVOLUTIVO\""}, {}]
				}],
				editor: ["wm._TextEditor", {}, {}]
			}],
			submit: ["wm.Button", {"caption":"Send","width":"100px","height":"35px"}, {"onclick":"submitClick"}]
		}]
	}]
}