
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.Matricula
 *  01/15/2014 19:40:54
 * 
 */
public class Matricula {

    private Integer idMatricula;
    private Curso curso;
    private Sy sy;
    private Persona persona;
    private Double valorAnual;
    private Integer valorMensual;
    private Date fechaMatricula;
    private String comentario;

    public Integer getIdMatricula() {
        return idMatricula;
    }

    public void setIdMatricula(Integer idMatricula) {
        this.idMatricula = idMatricula;
    }

    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
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

    public Double getValorAnual() {
        return valorAnual;
    }

    public void setValorAnual(Double valorAnual) {
        this.valorAnual = valorAnual;
    }

    public Integer getValorMensual() {
        return valorMensual;
    }

    public void setValorMensual(Integer valorMensual) {
        this.valorMensual = valorMensual;
    }

    public Date getFechaMatricula() {
        return fechaMatricula;
    }

    public void setFechaMatricula(Date fechaMatricula) {
        this.fechaMatricula = fechaMatricula;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

}
