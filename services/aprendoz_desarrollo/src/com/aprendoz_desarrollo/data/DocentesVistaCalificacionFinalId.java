
package com.aprendoz_desarrollo.data;

import java.io.Serializable;
import java.util.Date;


/**
 *  aprendoz_desarrollo.DocentesVistaCalificacionFinalId
 *  01/15/2014 19:40:54
 * 
 */
public class DocentesVistaCalificacionFinalId
    implements Serializable
{

    private Date fechaLogro;
    private String calificacion;
    private Float calificacionNum;
    private Integer aprendizajeIdAprendizaje;
    private Integer personaIdPersona;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof DocentesVistaCalificacionFinalId)) {
            return false;
        }
        DocentesVistaCalificacionFinalId other = ((DocentesVistaCalificacionFinalId) o);
        if (this.fechaLogro == null) {
            if (other.fechaLogro!= null) {
                return false;
            }
        } else {
            if (!this.fechaLogro.equals(other.fechaLogro)) {
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
        if (this.calificacionNum == null) {
            if (other.calificacionNum!= null) {
                return false;
            }
        } else {
            if (!this.calificacionNum.equals(other.calificacionNum)) {
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
        if (this.fechaLogro!= null) {
            rtn = (rtn + this.fechaLogro.hashCode());
        }
        rtn = (rtn* 37);
        if (this.calificacion!= null) {
            rtn = (rtn + this.calificacion.hashCode());
        }
        rtn = (rtn* 37);
        if (this.calificacionNum!= null) {
            rtn = (rtn + this.calificacionNum.hashCode());
        }
        rtn = (rtn* 37);
        if (this.aprendizajeIdAprendizaje!= null) {
            rtn = (rtn + this.aprendizajeIdAprendizaje.hashCode());
        }
        rtn = (rtn* 37);
        if (this.personaIdPersona!= null) {
            rtn = (rtn + this.personaIdPersona.hashCode());
        }
        return rtn;
    }

    public Date getFechaLogro() {
        return fechaLogro;
    }

    public void setFechaLogro(Date fechaLogro) {
        this.fechaLogro = fechaLogro;
    }

    public String getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(String calificacion) {
        this.calificacion = calificacion;
    }

    public Float getCalificacionNum() {
        return calificacionNum;
    }

    public void setCalificacionNum(Float calificacionNum) {
        this.calificacionNum = calificacionNum;
    }

    public Integer getAprendizajeIdAprendizaje() {
        return aprendizajeIdAprendizaje;
    }

    public void setAprendizajeIdAprendizaje(Integer aprendizajeIdAprendizaje) {
        this.aprendizajeIdAprendizaje = aprendizajeIdAprendizaje;
    }

    public Integer getPersonaIdPersona() {
        return personaIdPersona;
    }

    public void setPersonaIdPersona(Integer personaIdPersona) {
        this.personaIdPersona = personaIdPersona;
    }

}
