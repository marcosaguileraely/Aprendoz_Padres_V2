
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Curso
 *  01/15/2014 19:40:54
 * 
 */
public class Curso {

    private Integer idCurso;
    private Grado grado;
    private String curso;
    private Set<com.aprendoz_desarrollo.data.InscCursoAsig> inscCursoAsigs = new HashSet<com.aprendoz_desarrollo.data.InscCursoAsig>();
    private Set<com.aprendoz_desarrollo.data.Horario> horarios = new HashSet<com.aprendoz_desarrollo.data.Horario>();
    private Set<com.aprendoz_desarrollo.data.CoordinacionDeGrupo> coordinacionDeGrupos = new HashSet<com.aprendoz_desarrollo.data.CoordinacionDeGrupo>();
    private Set<com.aprendoz_desarrollo.data.Coordinadores> coordinadoreses = new HashSet<com.aprendoz_desarrollo.data.Coordinadores>();
    private Set<com.aprendoz_desarrollo.data.InscAlumCurso> inscAlumCursos = new HashSet<com.aprendoz_desarrollo.data.InscAlumCurso>();
    private Set<com.aprendoz_desarrollo.data.Sesion> sesions = new HashSet<com.aprendoz_desarrollo.data.Sesion>();
    private Set<com.aprendoz_desarrollo.data.Matricula> matriculas = new HashSet<com.aprendoz_desarrollo.data.Matricula>();
    private Set<com.aprendoz_desarrollo.data.Coordinacion> coordinacions = new HashSet<com.aprendoz_desarrollo.data.Coordinacion>();
    private Set<com.aprendoz_desarrollo.data.InscCoordinadoresCurso> inscCoordinadoresCursos = new HashSet<com.aprendoz_desarrollo.data.InscCoordinadoresCurso>();

    public Integer getIdCurso() {
        return idCurso;
    }

    public void setIdCurso(Integer idCurso) {
        this.idCurso = idCurso;
    }

    public Grado getGrado() {
        return grado;
    }

    public void setGrado(Grado grado) {
        this.grado = grado;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public Set<com.aprendoz_desarrollo.data.InscCursoAsig> getInscCursoAsigs() {
        return inscCursoAsigs;
    }

    public void setInscCursoAsigs(Set<com.aprendoz_desarrollo.data.InscCursoAsig> inscCursoAsigs) {
        this.inscCursoAsigs = inscCursoAsigs;
    }

    public Set<com.aprendoz_desarrollo.data.Horario> getHorarios() {
        return horarios;
    }

    public void setHorarios(Set<com.aprendoz_desarrollo.data.Horario> horarios) {
        this.horarios = horarios;
    }

    public Set<com.aprendoz_desarrollo.data.CoordinacionDeGrupo> getCoordinacionDeGrupos() {
        return coordinacionDeGrupos;
    }

    public void setCoordinacionDeGrupos(Set<com.aprendoz_desarrollo.data.CoordinacionDeGrupo> coordinacionDeGrupos) {
        this.coordinacionDeGrupos = coordinacionDeGrupos;
    }

    public Set<com.aprendoz_desarrollo.data.Coordinadores> getCoordinadoreses() {
        return coordinadoreses;
    }

    public void setCoordinadoreses(Set<com.aprendoz_desarrollo.data.Coordinadores> coordinadoreses) {
        this.coordinadoreses = coordinadoreses;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumCurso> getInscAlumCursos() {
        return inscAlumCursos;
    }

    public void setInscAlumCursos(Set<com.aprendoz_desarrollo.data.InscAlumCurso> inscAlumCursos) {
        this.inscAlumCursos = inscAlumCursos;
    }

    public Set<com.aprendoz_desarrollo.data.Sesion> getSesions() {
        return sesions;
    }

    public void setSesions(Set<com.aprendoz_desarrollo.data.Sesion> sesions) {
        this.sesions = sesions;
    }

    public Set<com.aprendoz_desarrollo.data.Matricula> getMatriculas() {
        return matriculas;
    }

    public void setMatriculas(Set<com.aprendoz_desarrollo.data.Matricula> matriculas) {
        this.matriculas = matriculas;
    }

    public Set<com.aprendoz_desarrollo.data.Coordinacion> getCoordinacions() {
        return coordinacions;
    }

    public void setCoordinacions(Set<com.aprendoz_desarrollo.data.Coordinacion> coordinacions) {
        this.coordinacions = coordinacions;
    }

    public Set<com.aprendoz_desarrollo.data.InscCoordinadoresCurso> getInscCoordinadoresCursos() {
        return inscCoordinadoresCursos;
    }

    public void setInscCoordinadoresCursos(Set<com.aprendoz_desarrollo.data.InscCoordinadoresCurso> inscCoordinadoresCursos) {
        this.inscCoordinadoresCursos = inscCoordinadoresCursos;
    }

}
