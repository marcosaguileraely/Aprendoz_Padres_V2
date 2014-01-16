
package com.aprendoz_desarrollo.data;

import java.io.Serializable;


/**
 *  aprendoz_desarrollo.AdministracionVistaAsignaturasCursoId
 *  01/15/2014 19:40:54
 * 
 */
public class AdministracionVistaAsignaturasCursoId
    implements Serializable
{

    private String nombreLdap;
    private Integer idAsignatura;
    private String asignatura;
    private Integer syIdSy;
    private Integer idCurso;
    private String curso;
    private Integer gradoIdGrado;
    private String grado;
    private Integer idGrado;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof AdministracionVistaAsignaturasCursoId)) {
            return false;
        }
        AdministracionVistaAsignaturasCursoId other = ((AdministracionVistaAsignaturasCursoId) o);
        if (this.nombreLdap == null) {
            if (other.nombreLdap!= null) {
                return false;
            }
        } else {
            if (!this.nombreLdap.equals(other.nombreLdap)) {
                return false;
            }
        }
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
        if (this.idCurso == null) {
            if (other.idCurso!= null) {
                return false;
            }
        } else {
            if (!this.idCurso.equals(other.idCurso)) {
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
        if (this.gradoIdGrado == null) {
            if (other.gradoIdGrado!= null) {
                return false;
            }
        } else {
            if (!this.gradoIdGrado.equals(other.gradoIdGrado)) {
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
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.nombreLdap!= null) {
            rtn = (rtn + this.nombreLdap.hashCode());
        }
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
        if (this.idCurso!= null) {
            rtn = (rtn + this.idCurso.hashCode());
        }
        rtn = (rtn* 37);
        if (this.curso!= null) {
            rtn = (rtn + this.curso.hashCode());
        }
        rtn = (rtn* 37);
        if (this.gradoIdGrado!= null) {
            rtn = (rtn + this.gradoIdGrado.hashCode());
        }
        rtn = (rtn* 37);
        if (this.grado!= null) {
            rtn = (rtn + this.grado.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idGrado!= null) {
            rtn = (rtn + this.idGrado.hashCode());
        }
        return rtn;
    }

    public String getNombreLdap() {
        return nombreLdap;
    }

    public void setNombreLdap(String nombreLdap) {
        this.nombreLdap = nombreLdap;
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

    public Integer getIdCurso() {
        return idCurso;
    }

    public void setIdCurso(Integer idCurso) {
        this.idCurso = idCurso;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public Integer getGradoIdGrado() {
        return gradoIdGrado;
    }

    public void setGradoIdGrado(Integer gradoIdGrado) {
        this.gradoIdGrado = gradoIdGrado;
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

}
