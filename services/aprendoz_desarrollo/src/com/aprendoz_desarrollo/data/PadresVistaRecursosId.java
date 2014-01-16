
package com.aprendoz_desarrollo.data;

import java.io.Serializable;


/**
 *  aprendoz_desarrollo.PadresVistaRecursosId
 *  01/15/2014 19:40:54
 * 
 */
public class PadresVistaRecursosId
    implements Serializable
{

    private Integer idAsignatura;
    private Integer idRecurso;
    private String recurso;
    private String ubicacion;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof PadresVistaRecursosId)) {
            return false;
        }
        PadresVistaRecursosId other = ((PadresVistaRecursosId) o);
        if (this.idAsignatura == null) {
            if (other.idAsignatura!= null) {
                return false;
            }
        } else {
            if (!this.idAsignatura.equals(other.idAsignatura)) {
                return false;
            }
        }
        if (this.idRecurso == null) {
            if (other.idRecurso!= null) {
                return false;
            }
        } else {
            if (!this.idRecurso.equals(other.idRecurso)) {
                return false;
            }
        }
        if (this.recurso == null) {
            if (other.recurso!= null) {
                return false;
            }
        } else {
            if (!this.recurso.equals(other.recurso)) {
                return false;
            }
        }
        if (this.ubicacion == null) {
            if (other.ubicacion!= null) {
                return false;
            }
        } else {
            if (!this.ubicacion.equals(other.ubicacion)) {
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
        if (this.idRecurso!= null) {
            rtn = (rtn + this.idRecurso.hashCode());
        }
        rtn = (rtn* 37);
        if (this.recurso!= null) {
            rtn = (rtn + this.recurso.hashCode());
        }
        rtn = (rtn* 37);
        if (this.ubicacion!= null) {
            rtn = (rtn + this.ubicacion.hashCode());
        }
        return rtn;
    }

    public Integer getIdAsignatura() {
        return idAsignatura;
    }

    public void setIdAsignatura(Integer idAsignatura) {
        this.idAsignatura = idAsignatura;
    }

    public Integer getIdRecurso() {
        return idRecurso;
    }

    public void setIdRecurso(Integer idRecurso) {
        this.idRecurso = idRecurso;
    }

    public String getRecurso() {
        return recurso;
    }

    public void setRecurso(String recurso) {
        this.recurso = recurso;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

}
