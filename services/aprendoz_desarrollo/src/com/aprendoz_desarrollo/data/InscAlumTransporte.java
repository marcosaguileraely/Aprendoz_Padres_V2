
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.InscAlumTransporte
 *  06/26/2013 12:20:52
 * 
 */
public class InscAlumTransporte {

    private Integer idInscAlumTransporte;
    private com.aprendoz_desarrollo.data.Rutas rutasByDomingoRuta;
    private com.aprendoz_desarrollo.data.Rutas rutasByMiercolesRuta;
    private com.aprendoz_desarrollo.data.Rutas rutasByViernesRuta;
    private Persona persona;
    private com.aprendoz_desarrollo.data.Rutas rutasByMartesRuta;
    private com.aprendoz_desarrollo.data.Rutas rutasByJuevesRuta;
    private com.aprendoz_desarrollo.data.Rutas rutasByLunesRuta;
    private com.aprendoz_desarrollo.data.Rutas rutasBySabadoRuta;
    private String amPm;

    public InscAlumTransporte() {
    }

    public InscAlumTransporte(Integer idInscAlumTransporte, String amPm) {
        this.idInscAlumTransporte = idInscAlumTransporte;
        this.amPm = amPm;
    }

    public InscAlumTransporte(Integer idInscAlumTransporte, com.aprendoz_desarrollo.data.Rutas rutasByDomingoRuta, com.aprendoz_desarrollo.data.Rutas rutasByMiercolesRuta, com.aprendoz_desarrollo.data.Rutas rutasByViernesRuta, Persona persona, com.aprendoz_desarrollo.data.Rutas rutasByMartesRuta, com.aprendoz_desarrollo.data.Rutas rutasByJuevesRuta, com.aprendoz_desarrollo.data.Rutas rutasByLunesRuta, com.aprendoz_desarrollo.data.Rutas rutasBySabadoRuta, String amPm) {
        this.idInscAlumTransporte = idInscAlumTransporte;
        this.rutasByDomingoRuta = rutasByDomingoRuta;
        this.rutasByMiercolesRuta = rutasByMiercolesRuta;
        this.rutasByViernesRuta = rutasByViernesRuta;
        this.persona = persona;
        this.rutasByMartesRuta = rutasByMartesRuta;
        this.rutasByJuevesRuta = rutasByJuevesRuta;
        this.rutasByLunesRuta = rutasByLunesRuta;
        this.rutasBySabadoRuta = rutasBySabadoRuta;
        this.amPm = amPm;
    }

    public Integer getIdInscAlumTransporte() {
        return idInscAlumTransporte;
    }

    public void setIdInscAlumTransporte(Integer idInscAlumTransporte) {
        this.idInscAlumTransporte = idInscAlumTransporte;
    }

    public com.aprendoz_desarrollo.data.Rutas getRutasByDomingoRuta() {
        return rutasByDomingoRuta;
    }

    public void setRutasByDomingoRuta(com.aprendoz_desarrollo.data.Rutas rutasByDomingoRuta) {
        this.rutasByDomingoRuta = rutasByDomingoRuta;
    }

    public com.aprendoz_desarrollo.data.Rutas getRutasByMiercolesRuta() {
        return rutasByMiercolesRuta;
    }

    public void setRutasByMiercolesRuta(com.aprendoz_desarrollo.data.Rutas rutasByMiercolesRuta) {
        this.rutasByMiercolesRuta = rutasByMiercolesRuta;
    }

    public com.aprendoz_desarrollo.data.Rutas getRutasByViernesRuta() {
        return rutasByViernesRuta;
    }

    public void setRutasByViernesRuta(com.aprendoz_desarrollo.data.Rutas rutasByViernesRuta) {
        this.rutasByViernesRuta = rutasByViernesRuta;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public com.aprendoz_desarrollo.data.Rutas getRutasByMartesRuta() {
        return rutasByMartesRuta;
    }

    public void setRutasByMartesRuta(com.aprendoz_desarrollo.data.Rutas rutasByMartesRuta) {
        this.rutasByMartesRuta = rutasByMartesRuta;
    }

    public com.aprendoz_desarrollo.data.Rutas getRutasByJuevesRuta() {
        return rutasByJuevesRuta;
    }

    public void setRutasByJuevesRuta(com.aprendoz_desarrollo.data.Rutas rutasByJuevesRuta) {
        this.rutasByJuevesRuta = rutasByJuevesRuta;
    }

    public com.aprendoz_desarrollo.data.Rutas getRutasByLunesRuta() {
        return rutasByLunesRuta;
    }

    public void setRutasByLunesRuta(com.aprendoz_desarrollo.data.Rutas rutasByLunesRuta) {
        this.rutasByLunesRuta = rutasByLunesRuta;
    }

    public com.aprendoz_desarrollo.data.Rutas getRutasBySabadoRuta() {
        return rutasBySabadoRuta;
    }

    public void setRutasBySabadoRuta(com.aprendoz_desarrollo.data.Rutas rutasBySabadoRuta) {
        this.rutasBySabadoRuta = rutasBySabadoRuta;
    }

    public String getAmPm() {
        return amPm;
    }

    public void setAmPm(String amPm) {
        this.amPm = amPm;
    }

}
