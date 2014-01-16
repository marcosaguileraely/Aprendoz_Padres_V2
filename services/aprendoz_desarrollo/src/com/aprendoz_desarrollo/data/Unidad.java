
package com.aprendoz_desarrollo.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Unidad
 *  01/15/2014 19:40:54
 * 
 */
public class Unidad {

    private Integer idUnidad;
    private Asignatura asignatura;
    private String unidad;
    private String unit;
    private Date fechaInicio;
    private Date fechaFin;
    private Integer numeroUnidad;
    private Integer idSyIdIdSy;
    private Set<com.aprendoz_desarrollo.data.Subtopico> subtopicos = new HashSet<com.aprendoz_desarrollo.data.Subtopico>();

    public Integer getIdUnidad() {
        return idUnidad;
    }

    public void setIdUnidad(Integer idUnidad) {
        this.idUnidad = idUnidad;
    }

    public Asignatura getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(Asignatura asignatura) {
        this.asignatura = asignatura;
    }

    public String getUnidad() {
        return unidad;
    }

    public void setUnidad(String unidad) {
        this.unidad = unidad;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public Date getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(Date fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public Date getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(Date fechaFin) {
        this.fechaFin = fechaFin;
    }

    public Integer getNumeroUnidad() {
        return numeroUnidad;
    }

    public void setNumeroUnidad(Integer numeroUnidad) {
        this.numeroUnidad = numeroUnidad;
    }

    public Integer getIdSyIdIdSy() {
        return idSyIdIdSy;
    }

    public void setIdSyIdIdSy(Integer idSyIdIdSy) {
        this.idSyIdIdSy = idSyIdIdSy;
    }

    public Set<com.aprendoz_desarrollo.data.Subtopico> getSubtopicos() {
        return subtopicos;
    }

    public void setSubtopicos(Set<com.aprendoz_desarrollo.data.Subtopico> subtopicos) {
        this.subtopicos = subtopicos;
    }

}
