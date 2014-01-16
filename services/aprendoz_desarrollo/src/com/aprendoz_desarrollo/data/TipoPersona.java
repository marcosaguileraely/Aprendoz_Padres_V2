
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.TipoPersona
 *  01/15/2014 19:40:54
 * 
 */
public class TipoPersona {

    private Integer idTipoPersona;
    private String tipoPersona;
    private Set<com.aprendoz_desarrollo.data.AccAuthorization> accAuthorizations = new HashSet<com.aprendoz_desarrollo.data.AccAuthorization>();
    private Set<com.aprendoz_desarrollo.data.InscPersonaGrupoFamiliar> inscPersonaGrupoFamiliars = new HashSet<com.aprendoz_desarrollo.data.InscPersonaGrupoFamiliar>();
    private Set<com.aprendoz_desarrollo.data.Persona> personas = new HashSet<com.aprendoz_desarrollo.data.Persona>();
    private Set<com.aprendoz_desarrollo.data.ReportesTipoPersona> reportesTipoPersonas = new HashSet<com.aprendoz_desarrollo.data.ReportesTipoPersona>();

    public Integer getIdTipoPersona() {
        return idTipoPersona;
    }

    public void setIdTipoPersona(Integer idTipoPersona) {
        this.idTipoPersona = idTipoPersona;
    }

    public String getTipoPersona() {
        return tipoPersona;
    }

    public void setTipoPersona(String tipoPersona) {
        this.tipoPersona = tipoPersona;
    }

    public Set<com.aprendoz_desarrollo.data.AccAuthorization> getAccAuthorizations() {
        return accAuthorizations;
    }

    public void setAccAuthorizations(Set<com.aprendoz_desarrollo.data.AccAuthorization> accAuthorizations) {
        this.accAuthorizations = accAuthorizations;
    }

    public Set<com.aprendoz_desarrollo.data.InscPersonaGrupoFamiliar> getInscPersonaGrupoFamiliars() {
        return inscPersonaGrupoFamiliars;
    }

    public void setInscPersonaGrupoFamiliars(Set<com.aprendoz_desarrollo.data.InscPersonaGrupoFamiliar> inscPersonaGrupoFamiliars) {
        this.inscPersonaGrupoFamiliars = inscPersonaGrupoFamiliars;
    }

    public Set<com.aprendoz_desarrollo.data.Persona> getPersonas() {
        return personas;
    }

    public void setPersonas(Set<com.aprendoz_desarrollo.data.Persona> personas) {
        this.personas = personas;
    }

    public Set<com.aprendoz_desarrollo.data.ReportesTipoPersona> getReportesTipoPersonas() {
        return reportesTipoPersonas;
    }

    public void setReportesTipoPersonas(Set<com.aprendoz_desarrollo.data.ReportesTipoPersona> reportesTipoPersonas) {
        this.reportesTipoPersonas = reportesTipoPersonas;
    }

}
