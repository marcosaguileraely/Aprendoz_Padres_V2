
package com.aprendoz_desarrollo.data;

import java.io.Serializable;


/**
 *  aprendoz_desarrollo.CoordinacionId
 *  01/15/2014 19:40:54
 * 
 */
public class CoordinacionId
    implements Serializable
{

    private Integer idCordinacion;
    private Integer personaIdPersona;
    private Integer cursoIdCurso;
    private Integer syIdSy;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof CoordinacionId)) {
            return false;
        }
        CoordinacionId other = ((CoordinacionId) o);
        if (this.idCordinacion == null) {
            if (other.idCordinacion!= null) {
                return false;
            }
        } else {
            if (!this.idCordinacion.equals(other.idCordinacion)) {
                return false;
            }
        }
        if (this.personaIdPersona == null) {
            if (other.personaIdPersona!= null) {
                return false;
            }
        } else {
            if (!this.personaIdPersona.equals(other.personaIdPersona)) {
                return false;
            }
        }
        if (this.cursoIdCurso == null) {
            if (other.cursoIdCurso!= null) {
                return false;
            }
        } else {
            if (!this.cursoIdCurso.equals(other.cursoIdCurso)) {
                return false;
            }
        }
        if (this.syIdSy == null) {
            if (other.syIdSy!= null) {
                return false;
            }
        } else {
            if (!this.syIdSy.equals(other.syIdSy)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.idCordinacion!= null) {
            rtn = (rtn + this.idCordinacion.hashCode());
        }
        rtn = (rtn* 37);
        if (this.personaIdPersona!= null) {
            rtn = (rtn + this.personaIdPersona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.cursoIdCurso!= null) {
            rtn = (rtn + this.cursoIdCurso.hashCode());
        }
        rtn = (rtn* 37);
        if (this.syIdSy!= null) {
            rtn = (rtn + this.syIdSy.hashCode());
        }
        return rtn;
    }

    public Integer getIdCordinacion() {
        return idCordinacion;
    }

    public void setIdCordinacion(Integer idCordinacion) {
        this.idCordinacion = idCordinacion;
    }

    public Integer getPersonaIdPersona() {
        return personaIdPersona;
    }

    public void setPersonaIdPersona(Integer personaIdPersona) {
        this.personaIdPersona = personaIdPersona;
    }

    public Integer getCursoIdCurso() {
        return cursoIdCurso;
    }

    public void setCursoIdCurso(Integer cursoIdCurso) {
        this.cursoIdCurso = cursoIdCurso;
    }

    public Integer getSyIdSy() {
        return syIdSy;
    }

    public void setSyIdSy(Integer syIdSy) {
        this.syIdSy = syIdSy;
    }

}
