
package com.aprendoz_desarrollo.data;

import java.io.Serializable;


/**
 *  aprendoz_desarrollo.AdministracionVistaAsignaturasId
 *  01/15/2014 19:40:54
 * 
 */
public class AdministracionVistaAsignaturasId
    implements Serializable
{

    private Integer idAsignatura;
    private String asignatura;
    private Integer syIdSy;
    private String grado;
    private Integer idGrado;
    private String subject;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof AdministracionVistaAsignaturasId)) {
            return false;
        }
        AdministracionVistaAsignaturasId other = ((AdministracionVistaAsignaturasId) o);
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
        if (this.syIdSy == null) {
            if (other.syIdSy!= null) {
                return false;
            }
        } else {
            if (!this.syIdSy.equals(other.syIdSy)) {
                return false;
            }
        }
        if (this.grado == null) {
            if (other.grado!= null) {
                return false;
            }
        } else {
            if (!this.grado.equals(other.grado)) {
                return false;
            }
        }
        if (this.idGrado == null) {
            if (other.idGrado!= null) {
                return false;
            }
        } else {
            if (!this.idGrado.equals(other.idGrado)) {
                return false;
            }
        }
        if (this.subject == null) {
            if (other.subject!= null) {
                return false;
            }
        } else {
            if (!this.subject.equals(other.subject)) {
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
        if (this.syIdSy!= null) {
            rtn = (rtn + this.syIdSy.hashCode());
        }
        rtn = (rtn* 37);
        if (this.grado!= null) {
            rtn = (rtn + this.grado.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idGrado!= null) {
            rtn = (rtn + this.idGrado.hashCode());
        }
        rtn = (rtn* 37);
        if (this.subject!= null) {
            rtn = (rtn + this.subject.hashCode());
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

    public Integer getSyIdSy() {
        return syIdSy;
    }

    public void setSyIdSy(Integer syIdSy) {
        this.syIdSy = syIdSy;
    }

    public String getGrado() {
        return grado;
    }

    public void setGrado(String grado) {
        this.grado = grado;
    }

    public Integer getIdGrado() {
        return idGrado;
    }

    public void setIdGrado(Integer idGrado) {
        this.idGrado = idGrado;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

}
