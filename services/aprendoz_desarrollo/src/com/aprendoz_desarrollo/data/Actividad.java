
package com.aprendoz_desarrollo.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Actividad
 *  01/15/2014 19:40:54
 * 
 */
public class Actividad {

    private Integer idActividad;
    private Subtopico subtopico;
    private TipoValoracion tipoValoracion;
    private TipoDesempeno tipoDesempeno;
    private TipoActividad tipoActividad;
    private String actividad;
    private Date fecha;
    private Boolean requeridoAlternativo;
    private Integer idSyIdIdSy;
    private Set<com.aprendoz_desarrollo.data.InscAlumActividad> inscAlumActividads = new HashSet<com.aprendoz_desarrollo.data.InscAlumActividad>();

    public Integer getIdActividad() {
        return idActividad;
    }

    public void setIdActividad(Integer idActividad) {
        this.idActividad = idActividad;
    }

    public Subtopico getSubtopico() {
        return subtopico;
    }

    public void setSubtopico(Subtopico subtopico) {
        this.subtopico = subtopico;
    }

    public TipoValoracion getTipoValoracion() {
        return tipoValoracion;
    }

    public void setTipoValoracion(TipoValoracion tipoValoracion) {
        this.tipoValoracion = tipoValoracion;
    }

    public TipoDesempeno getTipoDesempeno() {
        return tipoDesempeno;
    }

    public void setTipoDesempeno(TipoDesempeno tipoDesempeno) {
        this.tipoDesempeno = tipoDesempeno;
    }

    public TipoActividad getTipoActividad() {
        return tipoActividad;
    }

    public void setTipoActividad(TipoActividad tipoActividad) {
        this.tipoActividad = tipoActividad;
    }

    public String getActividad() {
        return actividad;
    }

    public void setActividad(String actividad) {
        this.actividad = actividad;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Boolean getRequeridoAlternativo() {
        return requeridoAlternativo;
    }

    public void setRequeridoAlternativo(Boolean requeridoAlternativo) {
        this.requeridoAlternativo = requeridoAlternativo;
    }

    public Integer getIdSyIdIdSy() {
        return idSyIdIdSy;
    }

    public void setIdSyIdIdSy(Integer idSyIdIdSy) {
        this.idSyIdIdSy = idSyIdIdSy;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumActividad> getInscAlumActividads() {
        return inscAlumActividads;
    }

    public void setInscAlumActividads(Set<com.aprendoz_desarrollo.data.InscAlumActividad> inscAlumActividads) {
        this.inscAlumActividads = inscAlumActividads;
    }

}
