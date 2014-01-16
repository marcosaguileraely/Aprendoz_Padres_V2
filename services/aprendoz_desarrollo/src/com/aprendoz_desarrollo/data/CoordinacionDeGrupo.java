
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.CoordinacionDeGrupo
 *  01/15/2014 19:40:54
 * 
 */
public class CoordinacionDeGrupo {

    private Integer idCoordinacionDeGrupo;
    private Curso curso;
    private Sy sy;
    private Persona persona;

    public Integer getIdCoordinacionDeGrupo() {
        return idCoordinacionDeGrupo;
    }

    public void setIdCoordinacionDeGrupo(Integer idCoordinacionDeGrupo) {
        this.idCoordinacionDeGrupo = idCoordinacionDeGrupo;
    }

    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
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

}
