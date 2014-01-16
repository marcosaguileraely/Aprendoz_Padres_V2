
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.TransporteInscAlumTransporte
 *  01/15/2014 19:40:54
 * 
 */
public class TransporteInscAlumTransporte {

    private Integer idInscAlumTransporte;
    private com.aprendoz_desarrollo.data.TransporteRutas transporteRutasByDomingoRuta;
    private com.aprendoz_desarrollo.data.TransporteRutas transporteRutasByMiercolesRuta;
    private com.aprendoz_desarrollo.data.TransporteRutas transporteRutasByViernesRuta;
    private Persona persona;
    private com.aprendoz_desarrollo.data.TransporteRutas transporteRutasByMartesRuta;
    private com.aprendoz_desarrollo.data.TransporteRutas transporteRutasByJuevesRuta;
    private com.aprendoz_desarrollo.data.TransporteRutas transporteRutasByLunesRuta;
    private com.aprendoz_desarrollo.data.TransporteRutas transporteRutasBySabadoRuta;
    private String amPm;

    public Integer getIdInscAlumTransporte() {
        return idInscAlumTransporte;
    }

    public void setIdInscAlumTransporte(Integer idInscAlumTransporte) {
        this.idInscAlumTransporte = idInscAlumTransporte;
    }

    public com.aprendoz_desarrollo.data.TransporteRutas getTransporteRutasByDomingoRuta() {
        return transporteRutasByDomingoRuta;
    }

    public void setTransporteRutasByDomingoRuta(com.aprendoz_desarrollo.data.TransporteRutas transporteRutasByDomingoRuta) {
        this.transporteRutasByDomingoRuta = transporteRutasByDomingoRuta;
    }

    public com.aprendoz_desarrollo.data.TransporteRutas getTransporteRutasByMiercolesRuta() {
        return transporteRutasByMiercolesRuta;
    }

    public void setTransporteRutasByMiercolesRuta(com.aprendoz_desarrollo.data.TransporteRutas transporteRutasByMiercolesRuta) {
        this.transporteRutasByMiercolesRuta = transporteRutasByMiercolesRuta;
    }

    public com.aprendoz_desarrollo.data.TransporteRutas getTransporteRutasByViernesRuta() {
        return transporteRutasByViernesRuta;
    }

    public void setTransporteRutasByViernesRuta(com.aprendoz_desarrollo.data.TransporteRutas transporteRutasByViernesRuta) {
        this.transporteRutasByViernesRuta = transporteRutasByViernesRuta;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public com.aprendoz_desarrollo.data.TransporteRutas getTransporteRutasByMartesRuta() {
        return transporteRutasByMartesRuta;
    }

    public void setTransporteRutasByMartesRuta(com.aprendoz_desarrollo.data.TransporteRutas transporteRutasByMartesRuta) {
        this.transporteRutasByMartesRuta = transporteRutasByMartesRuta;
    }

    public com.aprendoz_desarrollo.data.TransporteRutas getTransporteRutasByJuevesRuta() {
        return transporteRutasByJuevesRuta;
    }

    public void setTransporteRutasByJuevesRuta(com.aprendoz_desarrollo.data.TransporteRutas transporteRutasByJuevesRuta) {
        this.transporteRutasByJuevesRuta = transporteRutasByJuevesRuta;
    }

    public com.aprendoz_desarrollo.data.TransporteRutas getTransporteRutasByLunesRuta() {
        return transporteRutasByLunesRuta;
    }

    public void setTransporteRutasByLunesRuta(com.aprendoz_desarrollo.data.TransporteRutas transporteRutasByLunesRuta) {
        this.transporteRutasByLunesRuta = transporteRutasByLunesRuta;
    }

    public com.aprendoz_desarrollo.data.TransporteRutas getTransporteRutasBySabadoRuta() {
        return transporteRutasBySabadoRuta;
    }

    public void setTransporteRutasBySabadoRuta(com.aprendoz_desarrollo.data.TransporteRutas transporteRutasBySabadoRuta) {
        this.transporteRutasBySabadoRuta = transporteRutasBySabadoRuta;
    }

    public String getAmPm() {
        return amPm;
    }

    public void setAmPm(String amPm) {
        this.amPm = amPm;
    }

}
