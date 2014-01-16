
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.TransporteNovedades
 *  01/15/2014 19:40:54
 * 
 */
public class TransporteNovedades {

    private Integer idNovedades;
    private TransporteRutas transporteRutas;
    private Persona persona;
    private TipoSolicitud tipoSolicitud;
    private Date horaProgramada;
    private String observaciones;
    private Date horaActualSalida;
    private Boolean aprobacionDirNivel;
    private Boolean aprobacionCoordinador;
    private Boolean aprobacionTransporte;
    private Integer numeroPuerta;
    private Date fechaProgramada;
    private Date fechaSolicitudInicio;
    private Date fechaSolicitudFin;
    private String tipoSolicitud_1;
    private Boolean lunes;
    private Boolean martes;
    private Boolean miercoles;
    private Boolean jueves;
    private Boolean viernes;
    private Boolean sabado;

    public Integer getIdNovedades() {
        return idNovedades;
    }

    public void setIdNovedades(Integer idNovedades) {
        this.idNovedades = idNovedades;
    }

    public TransporteRutas getTransporteRutas() {
        return transporteRutas;
    }

    public void setTransporteRutas(TransporteRutas transporteRutas) {
        this.transporteRutas = transporteRutas;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public TipoSolicitud getTipoSolicitud() {
        return tipoSolicitud;
    }

    public void setTipoSolicitud(TipoSolicitud tipoSolicitud) {
        this.tipoSolicitud = tipoSolicitud;
    }

    public Date getHoraProgramada() {
        return horaProgramada;
    }

    public void setHoraProgramada(Date horaProgramada) {
        this.horaProgramada = horaProgramada;
    }

    public String getObservaciones() {
        return observaciones;
    }

    public void setObservaciones(String observaciones) {
        this.observaciones = observaciones;
    }

    public Date getHoraActualSalida() {
        return horaActualSalida;
    }

    public void setHoraActualSalida(Date horaActualSalida) {
        this.horaActualSalida = horaActualSalida;
    }

    public Boolean getAprobacionDirNivel() {
        return aprobacionDirNivel;
    }

    public void setAprobacionDirNivel(Boolean aprobacionDirNivel) {
        this.aprobacionDirNivel = aprobacionDirNivel;
    }

    public Boolean getAprobacionCoordinador() {
        return aprobacionCoordinador;
    }

    public void setAprobacionCoordinador(Boolean aprobacionCoordinador) {
        this.aprobacionCoordinador = aprobacionCoordinador;
    }

    public Boolean getAprobacionTransporte() {
        return aprobacionTransporte;
    }

    public void setAprobacionTransporte(Boolean aprobacionTransporte) {
        this.aprobacionTransporte = aprobacionTransporte;
    }

    public Integer getNumeroPuerta() {
        return numeroPuerta;
    }

    public void setNumeroPuerta(Integer numeroPuerta) {
        this.numeroPuerta = numeroPuerta;
    }

    public Date getFechaProgramada() {
        return fechaProgramada;
    }

    public void setFechaProgramada(Date fechaProgramada) {
        this.fechaProgramada = fechaProgramada;
    }

    public Date getFechaSolicitudInicio() {
        return fechaSolicitudInicio;
    }

    public void setFechaSolicitudInicio(Date fechaSolicitudInicio) {
        this.fechaSolicitudInicio = fechaSolicitudInicio;
    }

    public Date getFechaSolicitudFin() {
        return fechaSolicitudFin;
    }

    public void setFechaSolicitudFin(Date fechaSolicitudFin) {
        this.fechaSolicitudFin = fechaSolicitudFin;
    }

    public String getTipoSolicitud_1() {
        return tipoSolicitud_1;
    }

    public void setTipoSolicitud_1(String tipoSolicitud_1) {
        this.tipoSolicitud_1 = tipoSolicitud_1;
    }

    public Boolean getLunes() {
        return lunes;
    }

    public void setLunes(Boolean lunes) {
        this.lunes = lunes;
    }

    public Boolean getMartes() {
        return martes;
    }

    public void setMartes(Boolean martes) {
        this.martes = martes;
    }

    public Boolean getMiercoles() {
        return miercoles;
    }

    public void setMiercoles(Boolean miercoles) {
        this.miercoles = miercoles;
    }

    public Boolean getJueves() {
        return jueves;
    }

    public void setJueves(Boolean jueves) {
        this.jueves = jueves;
    }

    public Boolean getViernes() {
        return viernes;
    }

    public void setViernes(Boolean viernes) {
        this.viernes = viernes;
    }

    public Boolean getSabado() {
        return sabado;
    }

    public void setSabado(Boolean sabado) {
        this.sabado = sabado;
    }

}
