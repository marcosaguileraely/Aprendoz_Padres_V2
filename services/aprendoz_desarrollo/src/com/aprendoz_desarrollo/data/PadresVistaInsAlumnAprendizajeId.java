
package com.aprendoz_desarrollo.data;

import java.io.Serializable;
import java.util.Date;


/**
 *  aprendoz_desarrollo.PadresVistaInsAlumnAprendizajeId
 *  04/12/2012 16:32:54
 * 
 */
public class PadresVistaInsAlumnAprendizajeId
    implements Serializable
{

    private Date fechaLogro;
    private String calificacion;
    private Float calificacionNum;
    private String comentario;
    private Integer personaIdPersona;
    private Integer aprendizajeIdAprendizaje;
    private Integer idPersona;
    private Integer idAprendizaje;

    public PadresVistaInsAlumnAprendizajeId() {
    }

    public PadresVistaInsAlumnAprendizajeId(Date fechaLogro, String calificacion, Float calificacionNum, String comentario, Integer personaIdPersona, Integer aprendizajeIdAprendizaje, Integer idPersona, Integer idAprendizaje) {
        this.fechaLogro = fechaLogro;
        this.calificacion = calificacion;
        this.calificacionNum = calificacionNum;
        this.comentario = comentario;
        this.personaIdPersona = personaIdPersona;
        this.aprendizajeIdAprendizaje = aprendizajeIdAprendizaje;
        this.idPersona = idPersona;
        this.idAprendizaje = idAprendizaje;
    }

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof PadresVistaInsAlumnAprendizajeId)) {
            return false;
        }
        PadresVistaInsAlumnAprendizajeId other = ((PadresVistaInsAlumnAprendizajeId) o);
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
        if (this.comentario == null) {
            if (other.comentario!= null) {
                return false;
            }
        } else {
            if (!this.comentario.equals(other.comentario)) {
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
        if (this.aprendizajeIdAprendizaje == null) {
            if (other.aprendizajeIdAprendizaje!= null) {
                return false;
            }
        } else {
            if (!this.aprendizajeIdAprendizaje.equals(other.aprendizajeIdAprendizaje)) {
                return false;
            }
        }
        if (this.idPersona == null) {
            if (other.idPersona!= null) {
                return false;
            }
        } else {
            if (!this.idPersona.equals(other.idPersona)) {
                return false;
            }
        }
        if (this.idAprendizaje == null) {
            if (other.idAprendizaje!= null) {
                return false;
            }
        } else {
            if (!this.idAprendizaje.equals(other.idAprendizaje)) {
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
        if (this.comentario!= null) {
            rtn = (rtn + this.comentario.hashCode());
        }
        rtn = (rtn* 37);
        if (this.personaIdPersona!= null) {
            rtn = (rtn + this.personaIdPersona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.aprendizajeIdAprendizaje!= null) {
            rtn = (rtn + this.aprendizajeIdAprendizaje.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idPersona!= null) {
            rtn = (rtn + this.idPersona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idAprendizaje!= null) {
            rtn = (rtn + this.idAprendizaje.hashCode());
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

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
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

    public Integer getIdPersona() {
        return idPersona;
    }

    public void setIdPersona(Integer idPersona) {
        this.idPersona = idPersona;
    }

    public Integer getIdAprendizaje() {
        return idAprendizaje;
    }

    public void setIdAprendizaje(Integer idAprendizaje) {
        this.idAprendizaje = idAprendizaje;
    }

}
