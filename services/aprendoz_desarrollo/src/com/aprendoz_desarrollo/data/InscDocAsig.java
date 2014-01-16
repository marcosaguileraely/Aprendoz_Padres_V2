
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.InscDocAsig
 *  12/16/2011 09:24:09
 * 
 */
public class InscDocAsig {

    private Integer idInscDocAsig;
    private Asignatura asignatura;
    private Sy sy;
    private Persona persona;
    private Date fechaCreacion;

    public InscDocAsig() {
    }

    public InscDocAsig(Integer idInscDocAsig, Date fechaCreacion) {
        this.idInscDocAsig = idInscDocAsig;
        this.fechaCreacion = fechaCreacion;
    }

    public InscDocAsig(Integer idInscDocAsig, Asignatura asignatura, Sy sy, Persona persona, Date fechaCreacion) {
        this.idInscDocAsig = idInscDocAsig;
        this.asignatura = asignatura;
        this.sy = sy;
        this.persona = persona;
        this.fechaCreacion = fechaCreacion;
    }

    public Integer getIdInscDocAsig() {
        return idInscDocAsig;
    }

    public void setIdInscDocAsig(Integer idInscDocAsig) {
        this.idInscDocAsig = idInscDocAsig;
    }

    public Asignatura getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(Asignatura asignatura) {
        this.asignatura = asignatura;
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

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

}
