
package com.aprendoz_desarrollo.data;

import java.io.Serializable;


/**
 *  aprendoz_desarrollo.PadresVistaInscAlumApreId
 *  04/12/2012 16:51:12
 * 
 */
public class PadresVistaInscAlumApreId
    implements Serializable
{

    private Integer personaIdPersona;
    private Integer aprendizajeIdAprendizaje;
    private Integer idInscAlumAprendizaje;

    public PadresVistaInscAlumApreId() {
    }

    public PadresVistaInscAlumApreId(Integer personaIdPersona, Integer aprendizajeIdAprendizaje, Integer idInscAlumAprendizaje) {
        this.personaIdPersona = personaIdPersona;
        this.aprendizajeIdAprendizaje = aprendizajeIdAprendizaje;
        this.idInscAlumAprendizaje = idInscAlumAprendizaje;
    }

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof PadresVistaInscAlumApreId)) {
            return false;
        }
        PadresVistaInscAlumApreId other = ((PadresVistaInscAlumApreId) o);
        if (this.personaIdPersona == null) {
            if (other.personaIdPersona!= null) {
                return false;
            }
        } else {
            if (!this.personaIdPersona.equals(other.personaIdPersona)) {
                return false;
            }
        }
        if (this.aprendizajeIdAprendizaje == null) {
            if (other.aprendizajeIdAprendizaje!= null) {
                return false;
            }
        } else {
            if (!this.aprendizajeIdAprendizaje.equals(other.aprendizajeIdAprendizaje)) {
                return false;
            }
        }
        if (this.idInscAlumAprendizaje == null) {
            if (other.idInscAlumAprendizaje!= null) {
                return false;
            }
        } else {
            if (!this.idInscAlumAprendizaje.equals(other.idInscAlumAprendizaje)) {
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
        if (this.aprendizajeIdAprendizaje!= null) {
            rtn = (rtn + this.aprendizajeIdAprendizaje.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idInscAlumAprendizaje!= null) {
            rtn = (rtn + this.idInscAlumAprendizaje.hashCode());
        }
        return rtn;
    }

    public Integer getPersonaIdPersona() {
        return personaIdPersona;
    }

    public void setPersonaIdPersona(Integer personaIdPersona) {
        this.personaIdPersona = personaIdPersona;
    }

    public Integer getAprendizajeIdAprendizaje() {
        return aprendizajeIdAprendizaje;
    }

    public void setAprendizajeIdAprendizaje(Integer aprendizajeIdAprendizaje) {
        this.aprendizajeIdAprendizaje = aprendizajeIdAprendizaje;
    }

    public Integer getIdInscAlumAprendizaje() {
        return idInscAlumAprendizaje;
    }

    public void setIdInscAlumAprendizaje(Integer idInscAlumAprendizaje) {
        this.idInscAlumAprendizaje = idInscAlumAprendizaje;
    }

}
