
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.InscComentariosAlumnos
 *  01/15/2014 19:40:54
 * 
 */
public class InscComentariosAlumnos {

    private Integer idComentarioEstudiante;
    private Sy sy;
    private Persona persona;
    private Integer numeroBimestre;
    private String comentario;
    private Date fechaActual;

    public Integer getIdComentarioEstudiante() {
        return idComentarioEstudiante;
    }

    public void setIdComentarioEstudiante(Integer idComentarioEstudiante) {
        this.idComentarioEstudiante = idComentarioEstudiante;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Integer getNumeroBimestre() {
        return numeroBimestre;
    }

    public void setNumeroBimestre(Integer numeroBimestre) {
        this.numeroBimestre = numeroBimestre;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public Date getFechaActual() {
        return fechaActual;
    }

    public void setFechaActual(Date fechaActual) {
        this.fechaActual = fechaActual;
    }

}
