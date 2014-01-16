
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.Promocion
 *  01/15/2014 19:40:54
 * 
 */
public class Promocion {

    private Integer idPromocion;
    private Sy sy;
    private Persona persona;
    private Boolean aprobado;
    private Boolean autorizadoAcademico;
    private String commentcomite;
    private Boolean autorizadoFinanciera;
    private String commentfinanc;
    private Boolean promovido;
    private String commentaprobado;
    private String commentpromovido;
    private Float calificacion;
    private String calificacionChar;
    private Boolean autorizadoPromAnticipada;

    public Integer getIdPromocion() {
        return idPromocion;
    }

    public void setIdPromocion(Integer idPromocion) {
        this.idPromocion = idPromocion;
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

    public Boolean getAprobado() {
        return aprobado;
    }

    public void setAprobado(Boolean aprobado) {
        this.aprobado = aprobado;
    }

    public Boolean getAutorizadoAcademico() {
        return autorizadoAcademico;
    }

    public void setAutorizadoAcademico(Boolean autorizadoAcademico) {
        this.autorizadoAcademico = autorizadoAcademico;
    }

    public String getCommentcomite() {
        return commentcomite;
    }

    public void setCommentcomite(String commentcomite) {
        this.commentcomite = commentcomite;
    }

    public Boolean getAutorizadoFinanciera() {
        return autorizadoFinanciera;
    }

    public void setAutorizadoFinanciera(Boolean autorizadoFinanciera) {
        this.autorizadoFinanciera = autorizadoFinanciera;
    }

    public String getCommentfinanc() {
        return commentfinanc;
    }

    public void setCommentfinanc(String commentfinanc) {
        this.commentfinanc = commentfinanc;
    }

    public Boolean getPromovido() {
        return promovido;
    }

    public void setPromovido(Boolean promovido) {
        this.promovido = promovido;
    }

    public String getCommentaprobado() {
        return commentaprobado;
    }

    public void setCommentaprobado(String commentaprobado) {
        this.commentaprobado = commentaprobado;
    }

    public String getCommentpromovido() {
        return commentpromovido;
    }

    public void setCommentpromovido(String commentpromovido) {
        this.commentpromovido = commentpromovido;
    }

    public Float getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(Float calificacion) {
        this.calificacion = calificacion;
    }

    public String getCalificacionChar() {
        return calificacionChar;
    }

    public void setCalificacionChar(String calificacionChar) {
        this.calificacionChar = calificacionChar;
    }

    public Boolean getAutorizadoPromAnticipada() {
        return autorizadoPromAnticipada;
    }

    public void setAutorizadoPromAnticipada(Boolean autorizadoPromAnticipada) {
        this.autorizadoPromAnticipada = autorizadoPromAnticipada;
    }

}
