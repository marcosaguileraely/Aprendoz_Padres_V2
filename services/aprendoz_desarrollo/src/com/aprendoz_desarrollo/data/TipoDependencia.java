
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.TipoDependencia
 *  01/15/2014 19:40:54
 * 
 */
public class TipoDependencia {

    private Integer idtipodependencia;
    private String dependencia;
    private Set<com.aprendoz_desarrollo.data.ReportesDependencias> reportesDependenciases = new HashSet<com.aprendoz_desarrollo.data.ReportesDependencias>();

    public Integer getIdtipodependencia() {
        return idtipodependencia;
    }

    public void setIdtipodependencia(Integer idtipodependencia) {
        this.idtipodependencia = idtipodependencia;
    }

    public String getDependencia() {
        return dependencia;
    }

    public void setDependencia(String dependencia) {
        this.dependencia = dependencia;
    }

    public Set<com.aprendoz_desarrollo.data.ReportesDependencias> getReportesDependenciases() {
        return reportesDependenciases;
    }

    public void setReportesDependenciases(Set<com.aprendoz_desarrollo.data.ReportesDependencias> reportesDependenciases) {
        this.reportesDependenciases = reportesDependenciases;
    }

}
