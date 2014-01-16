
package com.aprendoz_desarrollo.data;

import java.io.Serializable;


/**
 *  aprendoz_desarrollo.LogDocentesId
 *  09/21/2012 11:34:14
 * 
 */
public class LogDocentesId
    implements Serializable
{

    private Integer idLogDocentes;
    private Integer personaIdPersona;

    public LogDocentesId() {
    }

    public LogDocentesId(Integer idLogDocentes, Integer personaIdPersona) {
        this.idLogDocentes = idLogDocentes;
        this.personaIdPersona = personaIdPersona;
    }

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof LogDocentesId)) {
            return false;
        }
        LogDocentesId other = ((LogDocentesId) o);
        if (this.idLogDocentes == null) {
            if (other.idLogDocentes!= null) {
                return false;
            }
        } else {
            if (!this.idLogDocentes.equals(other.idLogDocentes)) {
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
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.idLogDocentes!= null) {
            rtn = (rtn + this.idLogDocentes.hashCode());
        }
        rtn = (rtn* 37);
        if (this.personaIdPersona!= null) {
            rtn = (rtn + this.personaIdPersona.hashCode());
        }
        return rtn;
    }

    public Integer getIdLogDocentes() {
        return idLogDocentes;
    }

    public void setIdLogDocentes(Integer idLogDocentes) {
        this.idLogDocentes = idLogDocentes;
    }

    public Integer getPersonaIdPersona() {
        return personaIdPersona;
    }

    public void setPersonaIdPersona(Integer personaIdPersona) {
        this.personaIdPersona = personaIdPersona;
    }

}
