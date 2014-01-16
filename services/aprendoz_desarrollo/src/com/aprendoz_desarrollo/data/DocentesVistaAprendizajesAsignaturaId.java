
package com.aprendoz_desarrollo.data;

import java.io.Serializable;
import java.util.Date;


/**
 *  aprendoz_desarrollo.DocentesVistaAprendizajesAsignaturaId
 *  01/15/2014 19:40:54
 * 
 */
public class DocentesVistaAprendizajesAsignaturaId
    implements Serializable
{

    private Integer idAprendizaje;
    private String aprendizaje;
    private String learning;
    private Date fechaEsperada;
    private String subtopico;
    private String unidad;
    private Integer numeroSubtopico;
    private Integer numeroUnidad;
    private Integer asignaturaIdAsignatura;
    private Integer peso;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof DocentesVistaAprendizajesAsignaturaId)) {
            return false;
        }
        DocentesVistaAprendizajesAsignaturaId other = ((DocentesVistaAprendizajesAsignaturaId) o);
        if (this.idAprendizaje == null) {
            if (other.idAprendizaje!= null) {
                return false;
            }
        } else {
            if (!this.idAprendizaje.equals(other.idAprendizaje)) {
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
        if (this.learning == null) {
            if (other.learning!= null) {
                return false;
            }
        } else {
            if (!this.learning.equals(other.learning)) {
                return false;
            }
        }
        if (this.fechaEsperada == null) {
            if (other.fechaEsperada!= null) {
                return false;
            }
        } else {
            if (!this.fechaEsperada.equals(other.fechaEsperada)) {
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
        if (this.unidad == null) {
            if (other.unidad!= null) {
                return false;
            }
        } else {
            if (!this.unidad.equals(other.unidad)) {
                return false;
            }
        }
        if (this.numeroSubtopico == null) {
            if (other.numeroSubtopico!= null) {
                return false;
            }
        } else {
            if (!this.numeroSubtopico.equals(other.numeroSubtopico)) {
                return false;
            }
        }
        if (this.numeroUnidad == null) {
            if (other.numeroUnidad!= null) {
                return false;
            }
        } else {
            if (!this.numeroUnidad.equals(other.numeroUnidad)) {
                return false;
            }
        }
        if (this.asignaturaIdAsignatura == null) {
            if (other.asignaturaIdAsignatura!= null) {
                return false;
            }
        } else {
            if (!this.asignaturaIdAsignatura.equals(other.asignaturaIdAsignatura)) {
                return false;
            }
        }
        if (this.peso == null) {
            if (other.peso!= null) {
                return false;
            }
        } else {
            if (!this.peso.equals(other.peso)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.idAprendizaje!= null) {
            rtn = (rtn + this.idAprendizaje.hashCode());
        }
        rtn = (rtn* 37);
        if (this.aprendizaje!= null) {
            rtn = (rtn + this.aprendizaje.hashCode());
        }
        rtn = (rtn* 37);
        if (this.learning!= null) {
            rtn = (rtn + this.learning.hashCode());
        }
        rtn = (rtn* 37);
        if (this.fechaEsperada!= null) {
            rtn = (rtn + this.fechaEsperada.hashCode());
        }
        rtn = (rtn* 37);
        if (this.subtopico!= null) {
            rtn = (rtn + this.subtopico.hashCode());
        }
        rtn = (rtn* 37);
        if (this.unidad!= null) {
            rtn = (rtn + this.unidad.hashCode());
        }
        rtn = (rtn* 37);
        if (this.numeroSubtopico!= null) {
            rtn = (rtn + this.numeroSubtopico.hashCode());
        }
        rtn = (rtn* 37);
        if (this.numeroUnidad!= null) {
            rtn = (rtn + this.numeroUnidad.hashCode());
        }
        rtn = (rtn* 37);
        if (this.asignaturaIdAsignatura!= null) {
            rtn = (rtn + this.asignaturaIdAsignatura.hashCode());
        }
        rtn = (rtn* 37);
        if (this.peso!= null) {
            rtn = (rtn + this.peso.hashCode());
        }
        return rtn;
    }

    public Integer getIdAprendizaje() {
        return idAprendizaje;
    }

    public void setIdAprendizaje(Integer idAprendizaje) {
        this.idAprendizaje = idAprendizaje;
    }

    public String getAprendizaje() {
        return aprendizaje;
    }

    public void setAprendizaje(String aprendizaje) {
        this.aprendizaje = aprendizaje;
    }

    public String getLearning() {
        return learning;
    }

    public void setLearning(String learning) {
        this.learning = learning;
    }

    public Date getFechaEsperada() {
        return fechaEsperada;
    }

    public void setFechaEsperada(Date fechaEsperada) {
        this.fechaEsperada = fechaEsperada;
    }

    public String getSubtopico() {
        return subtopico;
    }

    public void setSubtopico(String subtopico) {
        this.subtopico = subtopico;
    }

    public String getUnidad() {
        return unidad;
    }

    public void setUnidad(String unidad) {
        this.unidad = unidad;
    }

    public Integer getNumeroSubtopico() {
        return numeroSubtopico;
    }

    public void setNumeroSubtopico(Integer numeroSubtopico) {
        this.numeroSubtopico = numeroSubtopico;
    }

    public Integer getNumeroUnidad() {
        return numeroUnidad;
    }

    public void setNumeroUnidad(Integer numeroUnidad) {
        this.numeroUnidad = numeroUnidad;
    }

    public Integer getAsignaturaIdAsignatura() {
        return asignaturaIdAsignatura;
    }

    public void setAsignaturaIdAsignatura(Integer asignaturaIdAsignatura) {
        this.asignaturaIdAsignatura = asignaturaIdAsignatura;
    }

    public Integer getPeso() {
        return peso;
    }

    public void setPeso(Integer peso) {
        this.peso = peso;
    }

}
