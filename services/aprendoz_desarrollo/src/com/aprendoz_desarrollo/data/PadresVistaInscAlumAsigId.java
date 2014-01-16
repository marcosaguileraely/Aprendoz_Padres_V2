
package com.aprendoz_desarrollo.data;

import java.io.Serializable;
import java.math.BigDecimal;


/**
 *  aprendoz_desarrollo.PadresVistaInscAlumAsigId
 *  01/15/2014 19:40:54
 * 
 */
public class PadresVistaInscAlumAsigId
    implements Serializable
{

    private Integer idAsignatura;
    private String asignatura;
    private Integer personaIdPersona;
    private BigDecimal calificacion;
    private String califChar;
    private BigDecimal porcentaje;
    private Integer idSy;
    private String schoolYear;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof PadresVistaInscAlumAsigId)) {
            return false;
        }
        PadresVistaInscAlumAsigId other = ((PadresVistaInscAlumAsigId) o);
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
        if (this.personaIdPersona == null) {
            if (other.personaIdPersona!= null) {
                return false;
            }
        } else {
            if (!this.personaIdPersona.equals(other.personaIdPersona)) {
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
        if (this.califChar == null) {
            if (other.califChar!= null) {
                return false;
            }
        } else {
            if (!this.califChar.equals(other.califChar)) {
                return false;
            }
        }
        if (this.porcentaje == null) {
            if (other.porcentaje!= null) {
                return false;
            }
        } else {
            if (!this.porcentaje.equals(other.porcentaje)) {
                return false;
            }
        }
        if (this.idSy == null) {
            if (other.idSy!= null) {
                return false;
            }
        } else {
            if (!this.idSy.equals(other.idSy)) {
                return false;
            }
        }
        if (this.schoolYear == null) {
            if (other.schoolYear!= null) {
                return false;
            }
        } else {
            if (!this.schoolYear.equals(other.schoolYear)) {
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
        if (this.personaIdPersona!= null) {
            rtn = (rtn + this.personaIdPersona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.calificacion!= null) {
            rtn = (rtn + this.calificacion.hashCode());
        }
        rtn = (rtn* 37);
        if (this.califChar!= null) {
            rtn = (rtn + this.califChar.hashCode());
        }
        rtn = (rtn* 37);
        if (this.porcentaje!= null) {
            rtn = (rtn + this.porcentaje.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idSy!= null) {
            rtn = (rtn + this.idSy.hashCode());
        }
        rtn = (rtn* 37);
        if (this.schoolYear!= null) {
            rtn = (rtn + this.schoolYear.hashCode());
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

    public Integer getPersonaIdPersona() {
        return personaIdPersona;
    }

    public void setPersonaIdPersona(Integer personaIdPersona) {
        this.personaIdPersona = personaIdPersona;
    }

    public BigDecimal getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(BigDecimal calificacion) {
        this.calificacion = calificacion;
    }

    public String getCalifChar() {
        return califChar;
    }

    public void setCalifChar(String califChar) {
        this.califChar = califChar;
    }

    public BigDecimal getPorcentaje() {
        return porcentaje;
    }

    public void setPorcentaje(BigDecimal porcentaje) {
        this.porcentaje = porcentaje;
    }

    public Integer getIdSy() {
        return idSy;
    }

    public void setIdSy(Integer idSy) {
        this.idSy = idSy;
    }

    public String getSchoolYear() {
        return schoolYear;
    }

    public void setSchoolYear(String schoolYear) {
        this.schoolYear = schoolYear;
    }

}
