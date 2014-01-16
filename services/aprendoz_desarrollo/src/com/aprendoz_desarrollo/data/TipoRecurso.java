
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.TipoRecurso
 *  01/15/2014 19:40:54
 * 
 */
public class TipoRecurso {

    private Integer idTipoRecurso;
    private String tipoRecurso;
    private Set<com.aprendoz_desarrollo.data.Recurso> recursos = new HashSet<com.aprendoz_desarrollo.data.Recurso>();

    public Integer getIdTipoRecurso() {
        return idTipoRecurso;
    }

    public void setIdTipoRecurso(Integer idTipoRecurso) {
        this.idTipoRecurso = idTipoRecurso;
    }

    public String getTipoRecurso() {
        return tipoRecurso;
    }

    public void setTipoRecurso(String tipoRecurso) {
        this.tipoRecurso = tipoRecurso;
    }

    public Set<com.aprendoz_desarrollo.data.Recurso> getRecursos() {
        return recursos;
    }

    public void setRecursos(Set<com.aprendoz_desarrollo.data.Recurso> recursos) {
        this.recursos = recursos;
    }

}
