
package com.aprendoz_desarrollo.data;

import java.io.Serializable;
import java.util.Date;


/**
 *  aprendoz_desarrollo.PadresVistaActividadesId
 *  01/15/2014 19:40:54
 * 
 */
public class PadresVistaActividadesId
    implements Serializable
{

    private Integer idAsignatura;
    private Integer idActividad;
    private String actividad;
    private Date fecha;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof PadresVistaActividadesId)) {
            return false;
        }
        PadresVistaActividadesId other = ((PadresVistaActividadesId) o);
        if (this.idAsignatura == null) {
            if (other.idAsignatura!= null) {
                return false;
            }
        } else {
            if (!this.idAsignatura.equals(other.idAsignatura)) {
                return false;
            }
        }
        if (this.idActividad == null) {
            if (other.idActividad!= null) {
                return false;
            }
        } else {
            if (!this.idActividad.equals(other.idActividad)) {
                return false;
            }
        }
        if (this.actividad == null) {
            if (other.actividad!= null) {
                return false;
            }
        } else {
            if (!this.actividad.equals(other.actividad)) {
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
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.idAsignatura!= null) {
            rtn = (rtn + this.idAsignatura.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idActividad!= null) {
            rtn = (rtn + this.idActividad.hashCode());
        }
        rtn = (rtn* 37);
        if (this.actividad!= null) {
            rtn = (rtn + this.actividad.hashCode());
        }
        rtn = (rtn* 37);
        if (this.fecha!= null) {
            rtn = (rtn + this.fecha.hashCode());
        }
        return rtn;
    }

    public Integer getIdAsignatura() {
        return idAsignatura;
    }

    public void setIdAsignatura(Integer idAsignatura) {
        this.idAsignatura = idAsignatura;
    }

    public Integer getIdActividad() {
        return idActividad;
    }

    public void setIdActividad(Integer idActividad) {
        this.idActividad = idActividad;
    }

    public String getActividad() {
        return actividad;
    }

    public void setActividad(String actividad) {
        this.actividad = actividad;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

}
