
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.InscAlumCosto
 *  01/15/2014 19:40:54
 * 
 */
public class InscAlumCosto {

    private Integer idInscAlumCosto;
    private Sy sy;
    private Persona persona;
    private Costos costos;
    private Boolean inscrito;
    private Integer descuentoPorcentaje;
    private Double descuentoValor;
    private Double valorFinalDescuento;
    private Date fechaInicio;
    private Date fechaFin;
    private String observacion;

    public Integer getIdInscAlumCosto() {
        return idInscAlumCosto;
    }

    public void setIdInscAlumCosto(Integer idInscAlumCosto) {
        this.idInscAlumCosto = idInscAlumCosto;
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

    public Costos getCostos() {
        return costos;
    }

    public void setCostos(Costos costos) {
        this.costos = costos;
    }

    public Boolean getInscrito() {
        return inscrito;
    }

    public void setInscrito(Boolean inscrito) {
        this.inscrito = inscrito;
    }

    public Integer getDescuentoPorcentaje() {
        return descuentoPorcentaje;
    }

    public void setDescuentoPorcentaje(Integer descuentoPorcentaje) {
        this.descuentoPorcentaje = descuentoPorcentaje;
    }

    public Double getDescuentoValor() {
        return descuentoValor;
    }

    public void setDescuentoValor(Double descuentoValor) {
        this.descuentoValor = descuentoValor;
    }

    public Double getValorFinalDescuento() {
        return valorFinalDescuento;
    }

    public void setValorFinalDescuento(Double valorFinalDescuento) {
        this.valorFinalDescuento = valorFinalDescuento;
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

    public String getObservacion() {
        return observacion;
    }

    public void setObservacion(String observacion) {
        this.observacion = observacion;
    }

}
