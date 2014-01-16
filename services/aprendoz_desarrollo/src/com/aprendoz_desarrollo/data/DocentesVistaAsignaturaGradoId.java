
package com.aprendoz_desarrollo.data;

import java.io.Serializable;


/**
 *  aprendoz_desarrollo.DocentesVistaAsignaturaGradoId
 *  01/15/2014 19:40:54
 * 
 */
public class DocentesVistaAsignaturaGradoId
    implements Serializable
{

    private Integer idAsignatura;
    private String asignatura;
    private Integer gradoIdGrado;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof DocentesVistaAsignaturaGradoId)) {
            return false;
        }
        DocentesVistaAsignaturaGradoId other = ((DocentesVistaAsignaturaGradoId) o);
        if (this.idAsignatura == null) {
            if (other.idAsignatura!= null) {
                return false;
            }
        } else {
            if (!this.idAsignatura.equals(other.idAsignatura)) {
                return false;
            }
        }
        if (this.asignatura == null) {
            if (other.asignatura!= null) {
                return false;
            }
        } else {
            if (!this.asignatura.equals(other.asignatura)) {
                return false;
            }
        }
        if (this.gradoIdGrado == null) {
            if (other.gradoIdGrado!= null) {
                return false;
            }
        } else {
            if (!this.gradoIdGrado.equals(other.gradoIdGrado)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.idAsignatura!= null) {
            rtn = (rtn + this.idAsignatura.hashCode());
        }
        rtn = (rtn* 37);
        if (this.asignatura!= null) {
            rtn = (rtn + this.asignatura.hashCode());
        }
        rtn = (rtn* 37);
        if (this.gradoIdGrado!= null) {
            rtn = (rtn + this.gradoIdGrado.hashCode());
        }
        return rtn;
    }

    public Integer getIdAsignatura() {
        return idAsignatura;
    }

    public void setIdAsignatura(Integer idAsignatura) {
        this.idAsignatura = idAsignatura;
    }

    public String getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(String asignatura) {
        this.asignatura = asignatura;
    }

    public Integer getGradoIdGrado() {
        return gradoIdGrado;
    }

    public void setGradoIdGrado(Integer gradoIdGrado) {
        this.gradoIdGrado = gradoIdGrado;
    }

}
