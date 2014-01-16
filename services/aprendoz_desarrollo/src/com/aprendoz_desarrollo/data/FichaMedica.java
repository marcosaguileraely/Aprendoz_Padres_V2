
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.FichaMedica
 *  01/15/2014 19:40:54
 * 
 */
public class FichaMedica {

    private Integer idfichaMedica;
    private Persona persona;
    private Date fechaCreacion;
    private String medicoTratante;
    private String alergias;
    private String enfermedadesRecientes;
    private String antecedentesQuirurgicos;
    private String medicamentosActualidad;
    private String medicamentosAlerta;
    private String recomendacionesEspeciales;

    public Integer getIdfichaMedica() {
        return idfichaMedica;
    }

    public void setIdfichaMedica(Integer idfichaMedica) {
        this.idfichaMedica = idfichaMedica;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public String getMedicoTratante() {
        return medicoTratante;
    }

    public void setMedicoTratante(String medicoTratante) {
        this.medicoTratante = medicoTratante;
    }

    public String getAlergias() {
        return alergias;
    }

    public void setAlergias(String alergias) {
        this.alergias = alergias;
    }

    public String getEnfermedadesRecientes() {
        return enfermedadesRecientes;
    }

    public void setEnfermedadesRecientes(String enfermedadesRecientes) {
        this.enfermedadesRecientes = enfermedadesRecientes;
    }

    public String getAntecedentesQuirurgicos() {
        return antecedentesQuirurgicos;
    }

    public void setAntecedentesQuirurgicos(String antecedentesQuirurgicos) {
        this.antecedentesQuirurgicos = antecedentesQuirurgicos;
    }

    public String getMedicamentosActualidad() {
        return medicamentosActualidad;
    }

    public void setMedicamentosActualidad(String medicamentosActualidad) {
        this.medicamentosActualidad = medicamentosActualidad;
    }

    public String getMedicamentosAlerta() {
        return medicamentosAlerta;
    }

    public void setMedicamentosAlerta(String medicamentosAlerta) {
        this.medicamentosAlerta = medicamentosAlerta;
    }

    public String getRecomendacionesEspeciales() {
        return recomendacionesEspeciales;
    }

    public void setRecomendacionesEspeciales(String recomendacionesEspeciales) {
        this.recomendacionesEspeciales = recomendacionesEspeciales;
    }

}
