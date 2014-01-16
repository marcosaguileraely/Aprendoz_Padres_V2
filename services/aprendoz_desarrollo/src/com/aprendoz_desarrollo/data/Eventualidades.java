
package com.aprendoz_desarrollo.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Eventualidades
 *  01/15/2014 19:40:54
 * 
 */
public class Eventualidades {

    private Integer idEventualidad;
    private TipoLugar tipoLugar;
    private Date fecha;
    private Date hora;
    private String estado;
    private String descripcion;
    private Date fechaIngreso;
    private String usuarioReg;
    private String pregunta1;
    private String pregunta2;
    private String pregunta3;
    private Date fechaPlanReparacion;
    private String confidencial;
    private Set<com.aprendoz_desarrollo.data.EventualidadPersonas> eventualidadPersonases = new HashSet<com.aprendoz_desarrollo.data.EventualidadPersonas>();

    public Integer getIdEventualidad() {
        return idEventualidad;
    }

    public void setIdEventualidad(Integer idEventualidad) {
        this.idEventualidad = idEventualidad;
    }

    public TipoLugar getTipoLugar() {
        return tipoLugar;
    }

    public void setTipoLugar(TipoLugar tipoLugar) {
        this.tipoLugar = tipoLugar;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Date getHora() {
        return hora;
    }

    public void setHora(Date hora) {
        this.hora = hora;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Date getFechaIngreso() {
        return fechaIngreso;
    }

    public void setFechaIngreso(Date fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    }

    public String getUsuarioReg() {
        return usuarioReg;
    }

    public void setUsuarioReg(String usuarioReg) {
        this.usuarioReg = usuarioReg;
    }

    public String getPregunta1() {
        return pregunta1;
    }

    public void setPregunta1(String pregunta1) {
        this.pregunta1 = pregunta1;
    }

    public String getPregunta2() {
        return pregunta2;
    }

    public void setPregunta2(String pregunta2) {
        this.pregunta2 = pregunta2;
    }

    public String getPregunta3() {
        return pregunta3;
    }

    public void setPregunta3(String pregunta3) {
        this.pregunta3 = pregunta3;
    }

    public Date getFechaPlanReparacion() {
        return fechaPlanReparacion;
    }

    public void setFechaPlanReparacion(Date fechaPlanReparacion) {
        this.fechaPlanReparacion = fechaPlanReparacion;
    }

    public String getConfidencial() {
        return confidencial;
    }

    public void setConfidencial(String confidencial) {
        this.confidencial = confidencial;
    }

    public Set<com.aprendoz_desarrollo.data.EventualidadPersonas> getEventualidadPersonases() {
        return eventualidadPersonases;
    }

    public void setEventualidadPersonases(Set<com.aprendoz_desarrollo.data.EventualidadPersonas> eventualidadPersonases) {
        this.eventualidadPersonases = eventualidadPersonases;
    }

}
