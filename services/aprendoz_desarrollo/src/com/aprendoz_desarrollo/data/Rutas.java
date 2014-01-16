
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Rutas
 *  06/26/2013 12:20:51
 * 
 */
public class Rutas {

    private Integer idRuta;
    private GrupoFamiliar grupoFamiliar;
    private TipoTransporte tipoTransporte;
    private String numeroRuta;
    private String placaVehiculo;
    private String nombreConductor;
    private String telefonoConductor;
    private String movilConductor;
    private String nombreMonitora;
    private String telefonoMonitor;
    private String movilMonitor;
    private String idAvantel;
    private String numeroAvantel;
    private String nombreResponsable;
    private String descripcion;
    private String telefono1;
    private String telefono2;
    private Set<com.aprendoz_desarrollo.data.InscAlumTransporte> inscAlumTransportesForMartesRuta = new HashSet<com.aprendoz_desarrollo.data.InscAlumTransporte>();
    private Set<com.aprendoz_desarrollo.data.InscAlumTransporte> inscAlumTransportesForMiercolesRuta = new HashSet<com.aprendoz_desarrollo.data.InscAlumTransporte>();
    private Set<com.aprendoz_desarrollo.data.InscAlumTransporte> inscAlumTransportesForJuevesRuta = new HashSet<com.aprendoz_desarrollo.data.InscAlumTransporte>();
    private Set<com.aprendoz_desarrollo.data.InscAlumTransporte> inscAlumTransportesForViernesRuta = new HashSet<com.aprendoz_desarrollo.data.InscAlumTransporte>();
    private Set<com.aprendoz_desarrollo.data.InscAlumTransporte> inscAlumTransportesForSabadoRuta = new HashSet<com.aprendoz_desarrollo.data.InscAlumTransporte>();
    private Set<com.aprendoz_desarrollo.data.Novedades> novedadeses = new HashSet<com.aprendoz_desarrollo.data.Novedades>();
    private Set<com.aprendoz_desarrollo.data.InscAlumTransporte> inscAlumTransportesForDomingoRuta = new HashSet<com.aprendoz_desarrollo.data.InscAlumTransporte>();
    private Set<com.aprendoz_desarrollo.data.InscAlumTransporte> inscAlumTransportesForLunesRuta = new HashSet<com.aprendoz_desarrollo.data.InscAlumTransporte>();

    public Rutas() {
    }

    public Rutas(Integer idRuta, String numeroRuta, String placaVehiculo, String nombreConductor, String telefonoConductor, String movilConductor, String nombreMonitora, String telefonoMonitor, String movilMonitor, String idAvantel, String numeroAvantel, String nombreResponsable, String descripcion, String telefono1, String telefono2) {
        this.idRuta = idRuta;
        this.numeroRuta = numeroRuta;
        this.placaVehiculo = placaVehiculo;
        this.nombreConductor = nombreConductor;
        this.telefonoConductor = telefonoConductor;
        this.movilConductor = movilConductor;
        this.nombreMonitora = nombreMonitora;
        this.telefonoMonitor = telefonoMonitor;
        this.movilMonitor = movilMonitor;
        this.idAvantel = idAvantel;
        this.numeroAvantel = numeroAvantel;
        this.nombreResponsable = nombreResponsable;
        this.descripcion = descripcion;
        this.telefono1 = telefono1;
        this.telefono2 = telefono2;
    }

    public Rutas(Integer idRuta, GrupoFamiliar grupoFamiliar, TipoTransporte tipoTransporte, String numeroRuta, String placaVehiculo, String nombreConductor, String telefonoConductor, String movilConductor, String nombreMonitora, String telefonoMonitor, String movilMonitor, String idAvantel, String numeroAvantel, String nombreResponsable, String descripcion, String telefono1, String telefono2, Set<com.aprendoz_desarrollo.data.InscAlumTransporte> inscAlumTransportesForMartesRuta, Set<com.aprendoz_desarrollo.data.InscAlumTransporte> inscAlumTransportesForMiercolesRuta, Set<com.aprendoz_desarrollo.data.InscAlumTransporte> inscAlumTransportesForJuevesRuta, Set<com.aprendoz_desarrollo.data.InscAlumTransporte> inscAlumTransportesForViernesRuta, Set<com.aprendoz_desarrollo.data.InscAlumTransporte> inscAlumTransportesForSabadoRuta, Set<com.aprendoz_desarrollo.data.Novedades> novedadeses, Set<com.aprendoz_desarrollo.data.InscAlumTransporte> inscAlumTransportesForDomingoRuta, Set<com.aprendoz_desarrollo.data.InscAlumTransporte> inscAlumTransportesForLunesRuta) {
        this.idRuta = idRuta;
        this.grupoFamiliar = grupoFamiliar;
        this.tipoTransporte = tipoTransporte;
        this.numeroRuta = numeroRuta;
        this.placaVehiculo = placaVehiculo;
        this.nombreConductor = nombreConductor;
        this.telefonoConductor = telefonoConductor;
        this.movilConductor = movilConductor;
        this.nombreMonitora = nombreMonitora;
        this.telefonoMonitor = telefonoMonitor;
        this.movilMonitor = movilMonitor;
        this.idAvantel = idAvantel;
        this.numeroAvantel = numeroAvantel;
        this.nombreResponsable = nombreResponsable;
        this.descripcion = descripcion;
        this.telefono1 = telefono1;
        this.telefono2 = telefono2;
        this.inscAlumTransportesForMartesRuta = inscAlumTransportesForMartesRuta;
        this.inscAlumTransportesForMiercolesRuta = inscAlumTransportesForMiercolesRuta;
        this.inscAlumTransportesForJuevesRuta = inscAlumTransportesForJuevesRuta;
        this.inscAlumTransportesForViernesRuta = inscAlumTransportesForViernesRuta;
        this.inscAlumTransportesForSabadoRuta = inscAlumTransportesForSabadoRuta;
        this.novedadeses = novedadeses;
        this.inscAlumTransportesForDomingoRuta = inscAlumTransportesForDomingoRuta;
        this.inscAlumTransportesForLunesRuta = inscAlumTransportesForLunesRuta;
    }

    public Integer getIdRuta() {
        return idRuta;
    }

    public void setIdRuta(Integer idRuta) {
        this.idRuta = idRuta;
    }

    public GrupoFamiliar getGrupoFamiliar() {
        return grupoFamiliar;
    }

    public void setGrupoFamiliar(GrupoFamiliar grupoFamiliar) {
        this.grupoFamiliar = grupoFamiliar;
    }

    public TipoTransporte getTipoTransporte() {
        return tipoTransporte;
    }

    public void setTipoTransporte(TipoTransporte tipoTransporte) {
        this.tipoTransporte = tipoTransporte;
    }

    public String getNumeroRuta() {
        return numeroRuta;
    }

    public void setNumeroRuta(String numeroRuta) {
        this.numeroRuta = numeroRuta;
    }

    public String getPlacaVehiculo() {
        return placaVehiculo;
    }

    public void setPlacaVehiculo(String placaVehiculo) {
        this.placaVehiculo = placaVehiculo;
    }

    public String getNombreConductor() {
        return nombreConductor;
    }

    public void setNombreConductor(String nombreConductor) {
        this.nombreConductor = nombreConductor;
    }

    public String getTelefonoConductor() {
        return telefonoConductor;
    }

    public void setTelefonoConductor(String telefonoConductor) {
        this.telefonoConductor = telefonoConductor;
    }

    public String getMovilConductor() {
        return movilConductor;
    }

    public void setMovilConductor(String movilConductor) {
        this.movilConductor = movilConductor;
    }

    public String getNombreMonitora() {
        return nombreMonitora;
    }

    public void setNombreMonitora(String nombreMonitora) {
        this.nombreMonitora = nombreMonitora;
    }

    public String getTelefonoMonitor() {
        return telefonoMonitor;
    }

    public void setTelefonoMonitor(String telefonoMonitor) {
        this.telefonoMonitor = telefonoMonitor;
    }

    public String getMovilMonitor() {
        return movilMonitor;
    }

    public void setMovilMonitor(String movilMonitor) {
        this.movilMonitor = movilMonitor;
    }

    public String getIdAvantel() {
        return idAvantel;
    }

    public void setIdAvantel(String idAvantel) {
        this.idAvantel = idAvantel;
    }

    public String getNumeroAvantel() {
        return numeroAvantel;
    }

    public void setNumeroAvantel(String numeroAvantel) {
        this.numeroAvantel = numeroAvantel;
    }

    public String getNombreResponsable() {
        return nombreResponsable;
    }

    public void setNombreResponsable(String nombreResponsable) {
        this.nombreResponsable = nombreResponsable;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getTelefono1() {
        return telefono1;
    }

    public void setTelefono1(String telefono1) {
        this.telefono1 = telefono1;
    }

    public String getTelefono2() {
        return telefono2;
    }

    public void setTelefono2(String telefono2) {
        this.telefono2 = telefono2;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumTransporte> getInscAlumTransportesForMartesRuta() {
        return inscAlumTransportesForMartesRuta;
    }

    public void setInscAlumTransportesForMartesRuta(Set<com.aprendoz_desarrollo.data.InscAlumTransporte> inscAlumTransportesForMartesRuta) {
        this.inscAlumTransportesForMartesRuta = inscAlumTransportesForMartesRuta;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumTransporte> getInscAlumTransportesForMiercolesRuta() {
        return inscAlumTransportesForMiercolesRuta;
    }

    public void setInscAlumTransportesForMiercolesRuta(Set<com.aprendoz_desarrollo.data.InscAlumTransporte> inscAlumTransportesForMiercolesRuta) {
        this.inscAlumTransportesForMiercolesRuta = inscAlumTransportesForMiercolesRuta;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumTransporte> getInscAlumTransportesForJuevesRuta() {
        return inscAlumTransportesForJuevesRuta;
    }

    public void setInscAlumTransportesForJuevesRuta(Set<com.aprendoz_desarrollo.data.InscAlumTransporte> inscAlumTransportesForJuevesRuta) {
        this.inscAlumTransportesForJuevesRuta = inscAlumTransportesForJuevesRuta;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumTransporte> getInscAlumTransportesForViernesRuta() {
        return inscAlumTransportesForViernesRuta;
    }

    public void setInscAlumTransportesForViernesRuta(Set<com.aprendoz_desarrollo.data.InscAlumTransporte> inscAlumTransportesForViernesRuta) {
        this.inscAlumTransportesForViernesRuta = inscAlumTransportesForViernesRuta;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumTransporte> getInscAlumTransportesForSabadoRuta() {
        return inscAlumTransportesForSabadoRuta;
    }

    public void setInscAlumTransportesForSabadoRuta(Set<com.aprendoz_desarrollo.data.InscAlumTransporte> inscAlumTransportesForSabadoRuta) {
        this.inscAlumTransportesForSabadoRuta = inscAlumTransportesForSabadoRuta;
    }

    public Set<com.aprendoz_desarrollo.data.Novedades> getNovedadeses() {
        return novedadeses;
    }

    public void setNovedadeses(Set<com.aprendoz_desarrollo.data.Novedades> novedadeses) {
        this.novedadeses = novedadeses;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumTransporte> getInscAlumTransportesForDomingoRuta() {
        return inscAlumTransportesForDomingoRuta;
    }

    public void setInscAlumTransportesForDomingoRuta(Set<com.aprendoz_desarrollo.data.InscAlumTransporte> inscAlumTransportesForDomingoRuta) {
        this.inscAlumTransportesForDomingoRuta = inscAlumTransportesForDomingoRuta;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumTransporte> getInscAlumTransportesForLunesRuta() {
        return inscAlumTransportesForLunesRuta;
    }

    public void setInscAlumTransportesForLunesRuta(Set<com.aprendoz_desarrollo.data.InscAlumTransporte> inscAlumTransportesForLunesRuta) {
        this.inscAlumTransportesForLunesRuta = inscAlumTransportesForLunesRuta;
    }

}
