Loading.widgets = {
	layoutBox1: ["wm.Layout", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"height":"110px","width":"382px","verticalAlign":"top","horizontalAlign":"left","layoutKind":"left-to-right"}, {}, {
			layers1: ["wm.Layers", {"height":"104px"}, {}, {
				layer1: ["wm.Layer", {"caption":"layer1","horizontalAlign":"left","verticalAlign":"top"}, {}, {
					panel2: ["wm.Panel", {"height":"75px","width":"100%","verticalAlign":"top","horizontalAlign":"left","layoutKind":"left-to-right"}, {}, {
						spacer1: ["wm.Spacer", {"height":"48px","width":"59px"}, {}],
						picture1: ["wm.Picture", {"height":"74px","width":"256px","border":"0","source":"resources/images/loader.gif","aspect":"h"}, {}]
					}],
					label1: ["wm.Label", {"height":"24px","width":"374px","border":"0","caption":"Cargando información necesaria. Espere por favor...","align":"center"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}]
			}]
		}]
	}]
}