
package com.aprendoz_desarrollo.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Subtopico
 *  01/15/2014 19:40:54
 * 
 */
public class Subtopico {

    private Integer idSubtopico;
    private Unidad unidad;
    private String subtopico;
    private Date fechaInicio;
    private Date fechaFin;
    private String subtopic;
    private Integer numeroSubtopico;
    private Integer idSyIdIdSy;
    private Set<com.aprendoz_desarrollo.data.Recurso> recursos = new HashSet<com.aprendoz_desarrollo.data.Recurso>();
    private Set<com.aprendoz_desarrollo.data.Aprendizaje> aprendizajes = new HashSet<com.aprendoz_desarrollo.data.Aprendizaje>();
    private Set<com.aprendoz_desarrollo.data.OtrasMetas> otrasMetases = new HashSet<com.aprendoz_desarrollo.data.OtrasMetas>();
    private Set<com.aprendoz_desarrollo.data.Actividad> actividads = new HashSet<com.aprendoz_desarrollo.data.Actividad>();

    public Integer getIdSubtopico() {
        return idSubtopico;
    }

    public void setIdSubtopico(Integer idSubtopico) {
        this.idSubtopico = idSubtopico;
    }

    public Unidad getUnidad() {
        return unidad;
    }

    public void setUnidad(Unidad unidad) {
        this.unidad = unidad;
    }

    public String getSubtopico() {
        return subtopico;
    }

    public void setSubtopico(String subtopico) {
        this.subtopico = subtopico;
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

    public String getSubtopic() {
        return subtopic;
    }

    public void setSubtopic(String subtopic) {
        this.subtopic = subtopic;
    }

    public Integer getNumeroSubtopico() {
        return numeroSubtopico;
    }

    public void setNumeroSubtopico(Integer numeroSubtopico) {
        this.numeroSubtopico = numeroSubtopico;
    }

    public Integer getIdSyIdIdSy() {
        return idSyIdIdSy;
    }

    public void setIdSyIdIdSy(Integer idSyIdIdSy) {
        this.idSyIdIdSy = idSyIdIdSy;
    }

    public Set<com.aprendoz_desarrollo.data.Recurso> getRecursos() {
        return recursos;
    }

    public void setRecursos(Set<com.aprendoz_desarrollo.data.Recurso> recursos) {
        this.recursos = recursos;
    }

    public Set<com.aprendoz_desarrollo.data.Aprendizaje> getAprendizajes() {
        return aprendizajes;
    }

    public void setAprendizajes(Set<com.aprendoz_desarrollo.data.Aprendizaje> aprendizajes) {
        this.aprendizajes = aprendizajes;
    }

    public Set<com.aprendoz_desarrollo.data.OtrasMetas> getOtrasMetases() {
        return otrasMetases;
    }

    public void setOtrasMetases(Set<com.aprendoz_desarrollo.data.OtrasMetas> otrasMetases) {
        this.otrasMetases = otrasMetases;
    }

    public Set<com.aprendoz_desarrollo.data.Actividad> getActividads() {
        return actividads;
    }

    public void setActividads(Set<com.aprendoz_desarrollo.data.Actividad> actividads) {
        this.actividads = actividads;
    }

}
