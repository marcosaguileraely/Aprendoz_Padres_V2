
package com.aprendoz_desarrollo.data;

import java.io.Serializable;


/**
 *  aprendoz_desarrollo.CurriculoGradoId
 *  01/15/2014 19:40:54
 * 
 */
public class CurriculoGradoId
    implements Serializable
{

    private Integer idAsignatura;
    private String asignatura;
    private Integer idUnidad;
    private String unidad;
    private Integer idSubtopico;
    private String subtopico;
    private String aprendizaje;
    private String actividad;
    private String recurso;
    private Integer asignaturaSyIdSy;
    private Integer asignaturaGradoIdGrado;
    private Integer gradoIdGrado;
    private String gradoGrado;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof CurriculoGradoId)) {
            return false;
        }
        CurriculoGradoId other = ((CurriculoGradoId) o);
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
        if (this.idUnidad == null) {
            if (other.idUnidad!= null) {
                return false;
            }
        } else {
            if (!this.idUnidad.equals(other.idUnidad)) {
                return false;
            }
        }
        if (this.unidad == null) {
            if (other.unidad!= null) {
                return false;
            }
        } else {
            if (!this.unidad.equals(other.unidad)) {
                return false;
            }
        }
        if (this.idSubtopico == null) {
            if (other.idSubtopico!= null) {
                return false;
            }
        } else {
            if (!this.idSubtopico.equals(other.idSubtopico)) {
                return false;
            }
        }
        if (this.subtopico == null) {
            if (other.subtopico!= null) {
                return false;
            }
        } else {
            if (!this.subtopico.equals(other.subtopico)) {
                return false;
            }
        }
        if (this.aprendizaje == null) {
            if (other.aprendizaje!= null) {
                return false;
            }
        } else {
            if (!this.aprendizaje.equals(other.aprendizaje)) {
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
        if (this.recurso == null) {
            if (other.recurso!= null) {
                return false;
            }
        } else {
            if (!this.recurso.equals(other.recurso)) {
                return false;
            }
        }
        if (this.asignaturaSyIdSy == null) {
            if (other.asignaturaSyIdSy!= null) {
                return false;
            }
        } else {
            if (!this.asignaturaSyIdSy.equals(other.asignaturaSyIdSy)) {
                return false;
            }
        }
        if (this.asignaturaGradoIdGrado == null) {
            if (other.asignaturaGradoIdGrado!= null) {
                return false;
            }
        } else {
            if (!this.asignaturaGradoIdGrado.equals(other.asignaturaGradoIdGrado)) {
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
        if (this.gradoGrado == null) {
            if (other.gradoGrado!= null) {
                return false;
            }
        } else {
            if (!this.gradoGrado.equals(other.gradoGrado)) {
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
        if (this.idUnidad!= null) {
            rtn = (rtn + this.idUnidad.hashCode());
        }
        rtn = (rtn* 37);
        if (this.unidad!= null) {
            rtn = (rtn + this.unidad.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idSubtopico!= null) {
            rtn = (rtn + this.idSubtopico.hashCode());
        }
        rtn = (rtn* 37);
        if (this.subtopico!= null) {
            rtn = (rtn + this.subtopico.hashCode());
        }
        rtn = (rtn* 37);
        if (this.aprendizaje!= null) {
            rtn = (rtn + this.aprendizaje.hashCode());
        }
        rtn = (rtn* 37);
        if (this.actividad!= null) {
            rtn = (rtn + this.actividad.hashCode());
        }
        rtn = (rtn* 37);
        if (this.recurso!= null) {
            rtn = (rtn + this.recurso.hashCode());
        }
        rtn = (rtn* 37);
        if (this.asignaturaSyIdSy!= null) {
            rtn = (rtn + this.asignaturaSyIdSy.hashCode());
        }
        rtn = (rtn* 37);
        if (this.asignaturaGradoIdGrado!= null) {
            rtn = (rtn + this.asignaturaGradoIdGrado.hashCode());
        }
        rtn = (rtn* 37);
        if (this.gradoIdGrado!= null) {
            rtn = (rtn + this.gradoIdGrado.hashCode());
        }
        rtn = (rtn* 37);
        if (this.gradoGrado!= null) {
            rtn = (rtn + this.gradoGrado.hashCode());
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

    public Integer getIdUnidad() {
        return idUnidad;
    }

    public void setIdUnidad(Integer idUnidad) {
        this.idUnidad = idUnidad;
    }

    public String getUnidad() {
        return unidad;
    }

    public void setUnidad(String unidad) {
        this.unidad = unidad;
    }

    public Integer getIdSubtopico() {
        return idSubtopico;
    }

    public void setIdSubtopico(Integer idSubtopico) {
        this.idSubtopico = idSubtopico;
    }

    public String getSubtopico() {
        return subtopico;
    }

    public void setSubtopico(String subtopico) {
        this.subtopico = subtopico;
    }

    public String getAprendizaje() {
        return aprendizaje;
    }

    public void setAprendizaje(String aprendizaje) {
        this.aprendizaje = aprendizaje;
    }

    public String getActividad() {
        return actividad;
    }

    public void setActividad(String actividad) {
        this.actividad = actividad;
    }

    public String getRecurso() {
        return recurso;
    }

    public void setRecurso(String recurso) {
        this.recurso = recurso;
    }

    public Integer getAsignaturaSyIdSy() {
        return asignaturaSyIdSy;
    }

    public void setAsignaturaSyIdSy(Integer asignaturaSyIdSy) {
        this.asignaturaSyIdSy = asignaturaSyIdSy;
    }

    public Integer getAsignaturaGradoIdGrado() {
        return asignaturaGradoIdGrado;
    }

    public void setAsignaturaGradoIdGrado(Integer asignaturaGradoIdGrado) {
        this.asignaturaGradoIdGrado = asignaturaGradoIdGrado;
    }

    public Integer getGradoIdGrado() {
        return gradoIdGrado;
    }

    public void setGradoIdGrado(Integer gradoIdGrado) {
        this.gradoIdGrado = gradoIdGrado;
    }

    public String getGradoGrado() {
        return gradoGrado;
    }

    public void setGradoGrado(String gradoGrado) {
        this.gradoGrado = gradoGrado;
    }

}
