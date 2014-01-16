
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.IngresoRutas
 *  06/26/2013 12:20:51
 * 
 */
public class IngresoRutas {

    private Integer idIngresoRutas;
    private String estudiante;
    private Date fecha;
    private Date horama;
    private String accionma;
    private String rutama;
    private Date horaTa;
    private String accionta;
    private String rutata;
    private String identificacion;

    public IngresoRutas() {
    }

    public IngresoRutas(Integer idIngresoRutas, String estudiante, Date fecha, Date horama, String accionma, String rutama, Date horaTa, String accionta, String rutata, String identificacion) {
        this.idIngresoRutas = idIngresoRutas;
        this.estudiante = estudiante;
        this.fecha = fecha;
        this.horama = horama;
        this.accionma = accionma;
        this.rutama = rutama;
        this.horaTa = horaTa;
        this.accionta = accionta;
        this.rutata = rutata;
        this.identificacion = identificacion;
    }

    public Integer getIdIngresoRutas() {
        return idIngresoRutas;
    }

    public void setIdIngresoRutas(Integer idIngresoRutas) {
        this.idIngresoRutas = idIngresoRutas;
    }

    public String getEstudiante() {
        return estudiante;
    }

    public void setEstudiante(String estudiante) {
        this.estudiante = estudiante;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Date getHorama() {
        return horama;
    }

    public void setHorama(Date horama) {
        this.horama = horama;
    }

    public String getAccionma() {
        return accionma;
    }

    public void setAccionma(String accionma) {
        this.accionma = accionma;
    }

    public String getRutama() {
        return rutama;
    }

    public void setRutama(String rutama) {
        this.rutama = rutama;
    }

    public Date getHoraTa() {
        return horaTa;
    }

    public void setHoraTa(Date horaTa) {
        this.horaTa = horaTa;
    }

    public String getAccionta() {
        return accionta;
    }

    public void setAccionta(String accionta) {
        this.accionta = accionta;
    }

    public String getRutata() {
        return rutata;
    }

    public void setRutata(String rutata) {
        this.rutata = rutata;
    }

    public String getIdentificacion() {
        return identificacion;
    }

    public void setIdentificacion(String identificacion) {
        this.identificacion = identificacion;
    }

}
