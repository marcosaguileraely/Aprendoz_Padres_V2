
package com.aprendoz_desarrollo.data;

import java.io.Serializable;
import java.util.Date;


/**
 *  aprendoz_desarrollo.VistaMatriculasGraficasTotalDiaId
 *  01/15/2014 19:40:54
 * 
 */
public class VistaMatriculasGraficasTotalDiaId
    implements Serializable
{

    private Long cont;
    private Integer idMatricula;
    private Integer cursoIdCurso;
    private Integer personaIdPersona;
    private Integer syIdSy;
    private Date fechaMatricula;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof VistaMatriculasGraficasTotalDiaId)) {
            return false;
        }
        VistaMatriculasGraficasTotalDiaId other = ((VistaMatriculasGraficasTotalDiaId) o);
        if (this.cont == null) {
            if (other.cont!= null) {
                return false;
            }
        } else {
            if (!this.cont.equals(other.cont)) {
                return false;
            }
        }
        if (this.idMatricula == null) {
            if (other.idMatricula!= null) {
                return false;
            }
        } else {
            if (!this.idMatricula.equals(other.idMatricula)) {
                return false;
            }
        }
        if (this.cursoIdCurso == null) {
            if (other.cursoIdCurso!= null) {
                return false;
            }
        } else {
            if (!this.cursoIdCurso.equals(other.cursoIdCurso)) {
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
        if (this.syIdSy == null) {
            if (other.syIdSy!= null) {
                return false;
            }
        } else {
            if (!this.syIdSy.equals(other.syIdSy)) {
                return false;
            }
        }
        if (this.fechaMatricula == null) {
            if (other.fechaMatricula!= null) {
                return false;
            }
        } else {
            if (!this.fechaMatricula.equals(other.fechaMatricula)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.cont!= null) {
            rtn = (rtn + this.cont.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idMatricula!= null) {
            rtn = (rtn + this.idMatricula.hashCode());
        }
        rtn = (rtn* 37);
        if (this.cursoIdCurso!= null) {
            rtn = (rtn + this.cursoIdCurso.hashCode());
        }
        rtn = (rtn* 37);
        if (this.personaIdPersona!= null) {
            rtn = (rtn + this.personaIdPersona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.syIdSy!= null) {
            rtn = (rtn + this.syIdSy.hashCode());
        }
        rtn = (rtn* 37);
        if (this.fechaMatricula!= null) {
            rtn = (rtn + this.fechaMatricula.hashCode());
        }
        return rtn;
    }

    public Long getCont() {
        return cont;
    }

    public void setCont(Long cont) {
        this.cont = cont;
    }

    public Integer getIdMatricula() {
        return idMatricula;
    }

    public void setIdMatricula(Integer idMatricula) {
        this.idMatricula = idMatricula;
    }

    public Integer getCursoIdCurso() {
        return cursoIdCurso;
    }

    public void setCursoIdCurso(Integer cursoIdCurso) {
        this.cursoIdCurso = cursoIdCurso;
    }

    public Integer getPersonaIdPersona() {
        return personaIdPersona;
    }

    public void setPersonaIdPersona(Integer personaIdPersona) {
        this.personaIdPersona = personaIdPersona;
    }

    public Integer getSyIdSy() {
        return syIdSy;
    }

    public void setSyIdSy(Integer syIdSy) {
        this.syIdSy = syIdSy;
    }

    public Date getFechaMatricula() {
        return fechaMatricula;
    }

    public void setFechaMatricula(Date fechaMatricula) {
        this.fechaMatricula = fechaMatricula;
    }

}
