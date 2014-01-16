
package com.aprendoz_desarrollo.data;

import java.io.Serializable;
import java.util.Date;


/**
 *  aprendoz_desarrollo.VistaasistenciaId
 *  01/15/2014 19:40:54
 * 
 */
public class VistaasistenciaId
    implements Serializable
{

    private String schoolYear;
    private String asignatura;
    private Integer numeroSesion;
    private Date fecha;
    private Date horaInicio;
    private Date horaFin;
    private String apellido1;
    private String apellido2;
    private String nombre1;
    private String nombre2;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof VistaasistenciaId)) {
            return false;
        }
        VistaasistenciaId other = ((VistaasistenciaId) o);
        if (this.schoolYear == null) {
            if (other.schoolYear!= null) {
                return false;
            }
        } else {
            if (!this.schoolYear.equals(other.schoolYear)) {
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
        if (this.numeroSesion == null) {
            if (other.numeroSesion!= null) {
                return false;
            }
        } else {
            if (!this.numeroSesion.equals(other.numeroSesion)) {
                return false;
            }
        }
        if (this.fecha == null) {
            if (other.fecha!= null) {
                return false;
            }
        } else {
            if (!this.fecha.equals(other.fecha)) {
                return false;
            }
        }
        if (this.horaInicio == null) {
            if (other.horaInicio!= null) {
                return false;
            }
        } else {
            if (!this.horaInicio.equals(other.horaInicio)) {
                return false;
            }
        }
        if (this.horaFin == null) {
            if (other.horaFin!= null) {
                return false;
            }
        } else {
            if (!this.horaFin.equals(other.horaFin)) {
                return false;
            }
        }
        if (this.apellido1 == null) {
            if (other.apellido1 != null) {
                return false;
            }
        } else {
            if (!this.apellido1 .equals(other.apellido1)) {
                return false;
            }
        }
        if (this.apellido2 == null) {
            if (other.apellido2 != null) {
                return false;
            }
        } else {
            if (!this.apellido2 .equals(other.apellido2)) {
                return false;
            }
        }
        if (this.nombre1 == null) {
            if (other.nombre1 != null) {
                return false;
            }
        } else {
            if (!this.nombre1 .equals(other.nombre1)) {
                return false;
            }
        }
        if (this.nombre2 == null) {
            if (other.nombre2 != null) {
                return false;
            }
        } else {
            if (!this.nombre2 .equals(other.nombre2)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.schoolYear!= null) {
            rtn = (rtn + this.schoolYear.hashCode());
        }
        rtn = (rtn* 37);
        if (this.asignatura!= null) {
            rtn = (rtn + this.asignatura.hashCode());
        }
        rtn = (rtn* 37);
        if (this.numeroSesion!= null) {
            rtn = (rtn + this.numeroSesion.hashCode());
        }
        rtn = (rtn* 37);
        if (this.fecha!= null) {
            rtn = (rtn + this.fecha.hashCode());
        }
        rtn = (rtn* 37);
        if (this.horaInicio!= null) {
            rtn = (rtn + this.horaInicio.hashCode());
        }
        rtn = (rtn* 37);
        if (this.horaFin!= null) {
            rtn = (rtn + this.horaFin.hashCode());
        }
        rtn = (rtn* 37);
        if (this.apellido1 != null) {
            rtn = (rtn + this.apellido1 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.apellido2 != null) {
            rtn = (rtn + this.apellido2 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.nombre1 != null) {
            rtn = (rtn + this.nombre1 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.nombre2 != null) {
            rtn = (rtn + this.nombre2 .hashCode());
        }
        return rtn;
    }

    public String getSchoolYear() {
        return schoolYear;
    }

    public void setSchoolYear(String schoolYear) {
        this.schoolYear = schoolYear;
    }

    public String getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(String asignatura) {
        this.asignatura = asignatura;
    }

    public Integer getNumeroSesion() {
        return numeroSesion;
    }

    public void setNumeroSesion(Integer numeroSesion) {
        this.numeroSesion = numeroSesion;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Date getHoraInicio() {
        return horaInicio;
    }

    public void setHoraInicio(Date horaInicio) {
        this.horaInicio = horaInicio;
    }

    public Date getHoraFin() {
        return horaFin;
    }

    public void setHoraFin(Date horaFin) {
        this.horaFin = horaFin;
    }

    public String getApellido1() {
        return apellido1;
    }

    public void setApellido1(String apellido1) {
        this.apellido1 = apellido1;
    }

    public String getApellido2() {
        return apellido2;
    }

    public void setApellido2(String apellido2) {
        this.apellido2 = apellido2;
    }

    public String getNombre1() {
        return nombre1;
    }

    public void setNombre1(String nombre1) {
        this.nombre1 = nombre1;
    }

    public String getNombre2() {
        return nombre2;
    }

    public void setNombre2(String nombre2) {
        this.nombre2 = nombre2;
    }

}
