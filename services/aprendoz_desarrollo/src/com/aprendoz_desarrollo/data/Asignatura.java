
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Asignatura
 *  01/15/2014 19:40:54
 * 
 */
public class Asignatura {

    private Integer idAsignatura;
    private Grado grado;
    private TipoInscAsig tipoInscAsig;
    private Sy sy;
    private String asignatura;
    private String subject;
    private Boolean electiva;
    private Integer idArea1;
    private Integer idArea2;
    private Integer idArea3;
    private Integer idSubarea1;
    private Integer idSubarea2;
    private Integer idSubarea3;
    private Integer salonIdSalon;
    private Float intensidadHoraria;
    private Float peso;
    private String descripAsigEspaniol;
    private String descripAsigIngles;
    private Float ihA1;
    private Float ihA2;
    private Float ihA3;
    private Float meses;
    private Integer esperadostotal;
    private Set<com.aprendoz_desarrollo.data.InscCursoAsig> inscCursoAsigs = new HashSet<com.aprendoz_desarrollo.data.InscCursoAsig>();
    private Set<com.aprendoz_desarrollo.data.Horario> horarios = new HashSet<com.aprendoz_desarrollo.data.Horario>();
    private Set<com.aprendoz_desarrollo.data.InscAlumAsigCopy> inscAlumAsigCopies = new HashSet<com.aprendoz_desarrollo.data.InscAlumAsigCopy>();
    private Set<com.aprendoz_desarrollo.data.InscAlumAsig> inscAlumAsigs = new HashSet<com.aprendoz_desarrollo.data.InscAlumAsig>();
    private Set<com.aprendoz_desarrollo.data.Sesion> sesions = new HashSet<com.aprendoz_desarrollo.data.Sesion>();
    private Set<com.aprendoz_desarrollo.data.Unidad> unidads = new HashSet<com.aprendoz_desarrollo.data.Unidad>();
    private Set<com.aprendoz_desarrollo.data.InscAlumAsigCopy2> inscAlumAsigCopy2s = new HashSet<com.aprendoz_desarrollo.data.InscAlumAsigCopy2>();

    public Integer getIdAsignatura() {
        return idAsignatura;
    }

    public void setIdAsignatura(Integer idAsignatura) {
        this.idAsignatura = idAsignatura;
    }

    public Grado getGrado() {
        return grado;
    }

    public void setGrado(Grado grado) {
        this.grado = grado;
    }

    public TipoInscAsig getTipoInscAsig() {
        return tipoInscAsig;
    }

    public void setTipoInscAsig(TipoInscAsig tipoInscAsig) {
        this.tipoInscAsig = tipoInscAsig;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public String getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(String asignatura) {
        this.asignatura = asignatura;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public Boolean getElectiva() {
        return electiva;
    }

    public void setElectiva(Boolean electiva) {
        this.electiva = electiva;
    }

    public Integer getIdArea1() {
        return idArea1;
    }

    public void setIdArea1(Integer idArea1) {
        this.idArea1 = idArea1;
    }

    public Integer getIdArea2() {
        return idArea2;
    }

    public void setIdArea2(Integer idArea2) {
        this.idArea2 = idArea2;
    }

    public Integer getIdArea3() {
        return idArea3;
    }

    public void setIdArea3(Integer idArea3) {
        this.idArea3 = idArea3;
    }

    public Integer getIdSubarea1() {
        return idSubarea1;
    }

    public void setIdSubarea1(Integer idSubarea1) {
        this.idSubarea1 = idSubarea1;
    }

    public Integer getIdSubarea2() {
        return idSubarea2;
    }

    public void setIdSubarea2(Integer idSubarea2) {
        this.idSubarea2 = idSubarea2;
    }

    public Integer getIdSubarea3() {
        return idSubarea3;
    }

    public void setIdSubarea3(Integer idSubarea3) {
        this.idSubarea3 = idSubarea3;
    }

    public Integer getSalonIdSalon() {
        return salonIdSalon;
    }

    public void setSalonIdSalon(Integer salonIdSalon) {
        this.salonIdSalon = salonIdSalon;
    }

    public Float getIntensidadHoraria() {
        return intensidadHoraria;
    }

    public void setIntensidadHoraria(Float intensidadHoraria) {
        this.intensidadHoraria = intensidadHoraria;
    }

    public Float getPeso() {
        return peso;
    }

    public void setPeso(Float peso) {
        this.peso = peso;
    }

    public String getDescripAsigEspaniol() {
        return descripAsigEspaniol;
    }

    public void setDescripAsigEspaniol(String descripAsigEspaniol) {
        this.descripAsigEspaniol = descripAsigEspaniol;
    }

    public String getDescripAsigIngles() {
        return descripAsigIngles;
    }

    public void setDescripAsigIngles(String descripAsigIngles) {
        this.descripAsigIngles = descripAsigIngles;
    }

    public Float getIhA1() {
        return ihA1;
    }

    public void setIhA1(Float ihA1) {
        this.ihA1 = ihA1;
    }

    public Float getIhA2() {
        return ihA2;
    }

    public void setIhA2(Float ihA2) {
        this.ihA2 = ihA2;
    }

    public Float getIhA3() {
        return ihA3;
    }

    public void setIhA3(Float ihA3) {
        this.ihA3 = ihA3;
    }

    public Float getMeses() {
        return meses;
    }

    public void setMeses(Float meses) {
        this.meses = meses;
    }

    public Integer getEsperadostotal() {
        return esperadostotal;
    }

    public void setEsperadostotal(Integer esperadostotal) {
        this.esperadostotal = esperadostotal;
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

    public Set<com.aprendoz_desarrollo.data.InscAlumAsigCopy> getInscAlumAsigCopies() {
        return inscAlumAsigCopies;
    }

    public void setInscAlumAsigCopies(Set<com.aprendoz_desarrollo.data.InscAlumAsigCopy> inscAlumAsigCopies) {
        this.inscAlumAsigCopies = inscAlumAsigCopies;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumAsig> getInscAlumAsigs() {
        return inscAlumAsigs;
    }

    public void setInscAlumAsigs(Set<com.aprendoz_desarrollo.data.InscAlumAsig> inscAlumAsigs) {
        this.inscAlumAsigs = inscAlumAsigs;
    }

    public Set<com.aprendoz_desarrollo.data.Sesion> getSesions() {
        return sesions;
    }

    public void setSesions(Set<com.aprendoz_desarrollo.data.Sesion> sesions) {
        this.sesions = sesions;
    }

    public Set<com.aprendoz_desarrollo.data.Unidad> getUnidads() {
        return unidads;
    }

    public void setUnidads(Set<com.aprendoz_desarrollo.data.Unidad> unidads) {
        this.unidads = unidads;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumAsigCopy2> getInscAlumAsigCopy2s() {
        return inscAlumAsigCopy2s;
    }

    public void setInscAlumAsigCopy2s(Set<com.aprendoz_desarrollo.data.InscAlumAsigCopy2> inscAlumAsigCopy2s) {
        this.inscAlumAsigCopy2s = inscAlumAsigCopy2s;
    }

}
