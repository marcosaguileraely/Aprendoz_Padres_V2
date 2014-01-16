
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.InscAlumArea
 *  06/26/2013 12:20:52
 * 
 */
public class InscAlumArea {

    private Integer idInscAlumArea;
    private Grado grado;
    private Area area;
    private Sy sy;
    private Persona persona;
    private String calificacionChar;
    private Float calificacionNum;
    private Float ih;

    public InscAlumArea() {
    }

    public InscAlumArea(Integer idInscAlumArea, String calificacionChar, Float calificacionNum, Float ih) {
        this.idInscAlumArea = idInscAlumArea;
        this.calificacionChar = calificacionChar;
        this.calificacionNum = calificacionNum;
        this.ih = ih;
    }

    public InscAlumArea(Integer idInscAlumArea, Grado grado, Area area, Sy sy, Persona persona, String calificacionChar, Float calificacionNum, Float ih) {
        this.idInscAlumArea = idInscAlumArea;
        this.grado = grado;
        this.area = area;
        this.sy = sy;
        this.persona = persona;
        this.calificacionChar = calificacionChar;
        this.calificacionNum = calificacionNum;
        this.ih = ih;
    }

    public Integer getIdInscAlumArea() {
        return idInscAlumArea;
    }

    public void setIdInscAlumArea(Integer idInscAlumArea) {
        this.idInscAlumArea = idInscAlumArea;
    }

    public Grado getGrado() {
        return grado;
    }

    public void setGrado(Grado grado) {
        this.grado = grado;
    }

    public Area getArea() {
        return area;
    }

    public void setArea(Area area) {
        this.area = area;
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

    public String getCalificacionChar() {
        return calificacionChar;
    }

    public void setCalificacionChar(String calificacionChar) {
        this.calificacionChar = calificacionChar;
    }

    public Float getCalificacionNum() {
        return calificacionNum;
    }

    public void setCalificacionNum(Float calificacionNum) {
        this.calificacionNum = calificacionNum;
    }

    public Float getIh() {
        return ih;
    }

    public void setIh(Float ih) {
        this.ih = ih;
    }

}
