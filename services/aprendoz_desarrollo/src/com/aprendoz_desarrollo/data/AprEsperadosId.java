
package com.aprendoz_desarrollo.data;

import java.io.Serializable;
import java.util.Date;


/**
 *  aprendoz_desarrollo.AprEsperadosId
 *  01/15/2014 19:40:54
 * 
 */
public class AprEsperadosId
    implements Serializable
{

    private Integer personaIdPersona;
    private Integer asignaturaIdAsignatura;
    private Date fechaEsperada;
    private Long count___;
    private Integer sy;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof AprEsperadosId)) {
            return false;
        }
        AprEsperadosId other = ((AprEsperadosId) o);
        if (this.personaIdPersona == null) {
            if (other.personaIdPersona!= null) {
                return false;
            }
        } else {
            if (!this.personaIdPersona.equals(other.personaIdPersona)) {
                return false;
            }
        }
        if (this.asignaturaIdAsignatura == null) {
            if (other.asignaturaIdAsignatura!= null) {
                return false;
            }
        } else {
            if (!this.asignaturaIdAsignatura.equals(other.asignaturaIdAsignatura)) {
                return false;
            }
        }
        if (this.fechaEsperada == null) {
            if (other.fechaEsperada!= null) {
                return false;
            }
        } else {
            if (!this.fechaEsperada.equals(other.fechaEsperada)) {
                return false;
            }
        }
        if (this.count___ == null) {
            if (other.count___!= null) {
                return false;
            }
        } else {
            if (!this.count___.equals(other.count___)) {
                return false;
            }
        }
        if (this.sy == null) {
            if (other.sy!= null) {
                return false;
            }
        } else {
            if (!this.sy.equals(other.sy)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.personaIdPersona!= null) {
            rtn = (rtn + this.personaIdPersona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.asignaturaIdAsignatura!= null) {
            rtn = (rtn + this.asignaturaIdAsignatura.hashCode());
        }
        rtn = (rtn* 37);
        if (this.fechaEsperada!= null) {
            rtn = (rtn + this.fechaEsperada.hashCode());
        }
        rtn = (rtn* 37);
        if (this.count___!= null) {
            rtn = (rtn + this.count___.hashCode());
        }
        rtn = (rtn* 37);
        if (this.sy!= null) {
            rtn = (rtn + this.sy.hashCode());
        }
        return rtn;
    }

    public Integer getPersonaIdPersona() {
        return personaIdPersona;
    }

    public void setPersonaIdPersona(Integer personaIdPersona) {
        this.personaIdPersona = personaIdPersona;
    }

    public Integer getAsignaturaIdAsignatura() {
        return asignaturaIdAsignatura;
    }

    public void setAsignaturaIdAsignatura(Integer asignaturaIdAsignatura) {
        this.asignaturaIdAsignatura = asignaturaIdAsignatura;
    }

    public Date getFechaEsperada() {
        return fechaEsperada;
    }

    public void setFechaEsperada(Date fechaEsperada) {
        this.fechaEsperada = fechaEsperada;
    }

    public Long getCount___() {
        return count___;
    }

    public void setCount___(Long count___) {
        this.count___ = count___;
    }

    public Integer getSy() {
        return sy;
    }

    public void setSy(Integer sy) {
        this.sy = sy;
    }

}
