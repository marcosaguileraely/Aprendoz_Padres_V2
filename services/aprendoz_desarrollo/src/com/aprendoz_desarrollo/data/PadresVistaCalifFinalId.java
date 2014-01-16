
package com.aprendoz_desarrollo.data;

import java.io.Serializable;
import java.util.Date;


/**
 *  aprendoz_desarrollo.PadresVistaCalifFinalId
 *  01/15/2014 19:40:54
 * 
 */
public class PadresVistaCalifFinalId
    implements Serializable
{

    private Integer personaIdPersona;
    private Integer aprendizajeIdAprendizaje;
    private Float calificacionNum;
    private String calificacion;
    private Integer idCalificacionFinal;
    private Date fechaLogro;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof PadresVistaCalifFinalId)) {
            return false;
        }
        PadresVistaCalifFinalId other = ((PadresVistaCalifFinalId) o);
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
        if (this.calificacionNum == null) {
            if (other.calificacionNum!= null) {
                return false;
            }
        } else {
            if (!this.calificacionNum.equals(other.calificacionNum)) {
                return false;
            }
        }
        if (this.calificacion == null) {
            if (other.calificacion!= null) {
                return false;
            }
        } else {
            if (!this.calificacion.equals(other.calificacion)) {
                return false;
            }
        }
        if (this.idCalificacionFinal == null) {
            if (other.idCalificacionFinal!= null) {
                return false;
            }
        } else {
            if (!this.idCalificacionFinal.equals(other.idCalificacionFinal)) {
                return false;
            }
        }
        if (this.fechaLogro == null) {
            if (other.fechaLogro!= null) {
                return false;
            }
        } else {
            if (!this.fechaLogro.equals(other.fechaLogro)) {
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
        if (this.calificacionNum!= null) {
            rtn = (rtn + this.calificacionNum.hashCode());
        }
        rtn = (rtn* 37);
        if (this.calificacion!= null) {
            rtn = (rtn + this.calificacion.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idCalificacionFinal!= null) {
            rtn = (rtn + this.idCalificacionFinal.hashCode());
        }
        rtn = (rtn* 37);
        if (this.fechaLogro!= null) {
            rtn = (rtn + this.fechaLogro.hashCode());
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

    public Float getCalificacionNum() {
        return calificacionNum;
    }

    public void setCalificacionNum(Float calificacionNum) {
        this.calificacionNum = calificacionNum;
    }

    public String getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(String calificacion) {
        this.calificacion = calificacion;
    }

    public Integer getIdCalificacionFinal() {
        return idCalificacionFinal;
    }

    public void setIdCalificacionFinal(Integer idCalificacionFinal) {
        this.idCalificacionFinal = idCalificacionFinal;
    }

    public Date getFechaLogro() {
        return fechaLogro;
    }

    public void setFechaLogro(Date fechaLogro) {
        this.fechaLogro = fechaLogro;
    }

}
