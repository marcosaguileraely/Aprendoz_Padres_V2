
package com.aprendoz_desarrollo.data;

import java.io.Serializable;
import java.math.BigDecimal;


/**
 *  aprendoz_desarrollo.TmpBoletin20122013Id
 *  01/15/2014 19:40:54
 * 
 */
public class TmpBoletin20122013Id
    implements Serializable
{

    private Integer idPersona;
    private String schoolYear;
    private String asignatura;
    private Double porcentaje;
    private BigDecimal calificacion;
    private String califchar;
    private Integer esperados;
    private Integer logrados;
    private String apellido1;
    private String apellido2;
    private String nombre1;
    private String nombre2;
    private String curso;
    private String orden;
    private String mescorte;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof TmpBoletin20122013Id)) {
            return false;
        }
        TmpBoletin20122013Id other = ((TmpBoletin20122013Id) o);
        if (this.idPersona == null) {
            if (other.idPersona!= null) {
                return false;
            }
        } else {
            if (!this.idPersona.equals(other.idPersona)) {
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
        if (this.asignatura == null) {
            if (other.asignatura!= null) {
                return false;
            }
        } else {
            if (!this.asignatura.equals(other.asignatura)) {
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
        if (this.calificacion == null) {
            if (other.calificacion!= null) {
                return false;
            }
        } else {
            if (!this.calificacion.equals(other.calificacion)) {
                return false;
            }
        }
        if (this.califchar == null) {
            if (other.califchar!= null) {
                return false;
            }
        } else {
            if (!this.califchar.equals(other.califchar)) {
                return false;
            }
        }
        if (this.esperados == null) {
            if (other.esperados!= null) {
                return false;
            }
        } else {
            if (!this.esperados.equals(other.esperados)) {
                return false;
            }
        }
        if (this.logrados == null) {
            if (other.logrados!= null) {
                return false;
            }
        } else {
            if (!this.logrados.equals(other.logrados)) {
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
        if (this.curso == null) {
            if (other.curso!= null) {
                return false;
            }
        } else {
            if (!this.curso.equals(other.curso)) {
                return false;
            }
        }
        if (this.orden == null) {
            if (other.orden!= null) {
                return false;
            }
        } else {
            if (!this.orden.equals(other.orden)) {
                return false;
            }
        }
        if (this.mescorte == null) {
            if (other.mescorte!= null) {
                return false;
            }
        } else {
            if (!this.mescorte.equals(other.mescorte)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.idPersona!= null) {
            rtn = (rtn + this.idPersona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.schoolYear!= null) {
            rtn = (rtn + this.schoolYear.hashCode());
        }
        rtn = (rtn* 37);
        if (this.asignatura!= null) {
            rtn = (rtn + this.asignatura.hashCode());
        }
        rtn = (rtn* 37);
        if (this.porcentaje!= null) {
            rtn = (rtn + this.porcentaje.hashCode());
        }
        rtn = (rtn* 37);
        if (this.calificacion!= null) {
            rtn = (rtn + this.calificacion.hashCode());
        }
        rtn = (rtn* 37);
        if (this.califchar!= null) {
            rtn = (rtn + this.califchar.hashCode());
        }
        rtn = (rtn* 37);
        if (this.esperados!= null) {
            rtn = (rtn + this.esperados.hashCode());
        }
        rtn = (rtn* 37);
        if (this.logrados!= null) {
            rtn = (rtn + this.logrados.hashCode());
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
        rtn = (rtn* 37);
        if (this.curso!= null) {
            rtn = (rtn + this.curso.hashCode());
        }
        rtn = (rtn* 37);
        if (this.orden!= null) {
            rtn = (rtn + this.orden.hashCode());
        }
        rtn = (rtn* 37);
        if (this.mescorte!= null) {
            rtn = (rtn + this.mescorte.hashCode());
        }
        return rtn;
    }

    public Integer getIdPersona() {
        return idPersona;
    }

    public void setIdPersona(Integer idPersona) {
        this.idPersona = idPersona;
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

    public Double getPorcentaje() {
        return porcentaje;
    }

    public void setPorcentaje(Double porcentaje) {
        this.porcentaje = porcentaje;
    }

    public BigDecimal getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(BigDecimal calificacion) {
        this.calificacion = calificacion;
    }

    public String getCalifchar() {
        return califchar;
    }

    public void setCalifchar(String califchar) {
        this.califchar = califchar;
    }

    public Integer getEsperados() {
        return esperados;
    }

    public void setEsperados(Integer esperados) {
        this.esperados = esperados;
    }

    public Integer getLogrados() {
        return logrados;
    }

    public void setLogrados(Integer logrados) {
        this.logrados = logrados;
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

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public String getOrden() {
        return orden;
    }

    public void setOrden(String orden) {
        this.orden = orden;
    }

    public String getMescorte() {
        return mescorte;
    }

    public void setMescorte(String mescorte) {
        this.mescorte = mescorte;
    }

}
