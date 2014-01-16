
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.Asistencia
 *  01/15/2014 19:40:54
 * 
 */
public class Asistencia {

    private Integer idAsistencia;
    private Sesion sesion;
    private TipoAsistencia tipoAsistencia;
    private Persona persona;
    private String tipoEventualidadIdTipoEventualidad;
    private String tipoEventualidadIdTipoEventualidad1;
    private String tipoEventualidadIdTipoEventualidad2;
    private String comentario;

    public Integer getIdAsistencia() {
        return idAsistencia;
    }

    public void setIdAsistencia(Integer idAsistencia) {
        this.idAsistencia = idAsistencia;
    }

    public Sesion getSesion() {
        return sesion;
    }

    public void setSesion(Sesion sesion) {
        this.sesion = sesion;
    }

    public TipoAsistencia getTipoAsistencia() {
        return tipoAsistencia;
    }

    public void setTipoAsistencia(TipoAsistencia tipoAsistencia) {
        this.tipoAsistencia = tipoAsistencia;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public String getTipoEventualidadIdTipoEventualidad() {
        return tipoEventualidadIdTipoEventualidad;
    }

    public void setTipoEventualidadIdTipoEventualidad(String tipoEventualidadIdTipoEventualidad) {
        this.tipoEventualidadIdTipoEventualidad = tipoEventualidadIdTipoEventualidad;
    }

    public String getTipoEventualidadIdTipoEventualidad1() {
        return tipoEventualidadIdTipoEventualidad1;
    }

    public void setTipoEventualidadIdTipoEventualidad1(String tipoEventualidadIdTipoEventualidad1) {
        this.tipoEventualidadIdTipoEventualidad1 = tipoEventualidadIdTipoEventualidad1;
    }

    public String getTipoEventualidadIdTipoEventualidad2() {
        return tipoEventualidadIdTipoEventualidad2;
    }

    public void setTipoEventualidadIdTipoEventualidad2(String tipoEventualidadIdTipoEventualidad2) {
        this.tipoEventualidadIdTipoEventualidad2 = tipoEventualidadIdTipoEventualidad2;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

}
