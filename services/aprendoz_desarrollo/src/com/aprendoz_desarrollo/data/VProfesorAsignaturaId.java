
package com.aprendoz_desarrollo.data;

import java.io.Serializable;


/**
 *  aprendoz_desarrollo.VProfesorAsignaturaId
 *  01/15/2014 19:40:54
 * 
 */
public class VProfesorAsignaturaId
    implements Serializable
{

    private Integer asignaturaIdAsignatura;
    private Integer personaIdPersona;
    private String asignatura;
    private String subject;
    private String nombreLdap;
    private Integer syIdSy;
    private Integer gradoIdGrado;
    private Integer idSubarea1;
    private Integer idSubarea2;
    private Integer idSubarea3;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof VProfesorAsignaturaId)) {
            return false;
        }
        VProfesorAsignaturaId other = ((VProfesorAsignaturaId) o);
        if (this.asignaturaIdAsignatura == null) {
            if (other.asignaturaIdAsignatura!= null) {
                return false;
            }
        } else {
            if (!this.asignaturaIdAsignatura.equals(other.asignaturaIdAsignatura)) {
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
        if (this.asignatura == null) {
            if (other.asignatura!= null) {
                return false;
            }
        } else {
            if (!this.asignatura.equals(other.asignatura)) {
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
        if (this.nombreLdap == null) {
            if (other.nombreLdap!= null) {
                return false;
            }
        } else {
            if (!this.nombreLdap.equals(other.nombreLdap)) {
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
        if (this.gradoIdGrado == null) {
            if (other.gradoIdGrado!= null) {
                return false;
            }
        } else {
            if (!this.gradoIdGrado.equals(other.gradoIdGrado)) {
                return false;
            }
        }
        if (this.idSubarea1 == null) {
            if (other.idSubarea1 != null) {
                return false;
            }
        } else {
            if (!this.idSubarea1 .equals(other.idSubarea1)) {
                return false;
            }
        }
        if (this.idSubarea2 == null) {
            if (other.idSubarea2 != null) {
                return false;
            }
        } else {
            if (!this.idSubarea2 .equals(other.idSubarea2)) {
                return false;
            }
        }
        if (this.idSubarea3 == null) {
            if (other.idSubarea3 != null) {
                return false;
            }
        } else {
            if (!this.idSubarea3 .equals(other.idSubarea3)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.asignaturaIdAsignatura!= null) {
            rtn = (rtn + this.asignaturaIdAsignatura.hashCode());
        }
        rtn = (rtn* 37);
        if (this.personaIdPersona!= null) {
            rtn = (rtn + this.personaIdPersona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.asignatura!= null) {
            rtn = (rtn + this.asignatura.hashCode());
        }
        rtn = (rtn* 37);
        if (this.subject!= null) {
            rtn = (rtn + this.subject.hashCode());
        }
        rtn = (rtn* 37);
        if (this.nombreLdap!= null) {
            rtn = (rtn + this.nombreLdap.hashCode());
        }
        rtn = (rtn* 37);
        if (this.syIdSy!= null) {
            rtn = (rtn + this.syIdSy.hashCode());
        }
        rtn = (rtn* 37);
        if (this.gradoIdGrado!= null) {
            rtn = (rtn + this.gradoIdGrado.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idSubarea1 != null) {
            rtn = (rtn + this.idSubarea1 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.idSubarea2 != null) {
            rtn = (rtn + this.idSubarea2 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.idSubarea3 != null) {
            rtn = (rtn + this.idSubarea3 .hashCode());
        }
        return rtn;
    }

    public Integer getAsignaturaIdAsignatura() {
        return asignaturaIdAsignatura;
    }

    public void setAsignaturaIdAsignatura(Integer asignaturaIdAsignatura) {
        this.asignaturaIdAsignatura = asignaturaIdAsignatura;
    }

    public Integer getPersonaIdPersona() {
        return personaIdPersona;
    }

    public void setPersonaIdPersona(Integer personaIdPersona) {
        this.personaIdPersona = personaIdPersona;
    }

    public String getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(String asignatura) {
        this.asignatura = asignatura;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getNombreLdap() {
        return nombreLdap;
    }

    public void setNombreLdap(String nombreLdap) {
        this.nombreLdap = nombreLdap;
    }

    public Integer getSyIdSy() {
        return syIdSy;
    }

    public void setSyIdSy(Integer syIdSy) {
        this.syIdSy = syIdSy;
    }

    public Integer getGradoIdGrado() {
        return gradoIdGrado;
    }

    public void setGradoIdGrado(Integer gradoIdGrado) {
        this.gradoIdGrado = gradoIdGrado;
    }

    public Integer getIdSubarea1() {
        return idSubarea1;
    }

    public void setIdSubarea1(Integer idSubarea1) {
        this.idSubarea1 = idSubarea1;
    }

    public Integer getIdSubarea2() {
        return idSubarea2;
    }

    public void setIdSubarea2(Integer idSubarea2) {
        this.idSubarea2 = idSubarea2;
    }

    public Integer getIdSubarea3() {
        return idSubarea3;
    }

    public void setIdSubarea3(Integer idSubarea3) {
        this.idSubarea3 = idSubarea3;
    }

}
