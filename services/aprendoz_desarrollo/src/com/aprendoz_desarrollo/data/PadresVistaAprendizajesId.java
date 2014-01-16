
package com.aprendoz_desarrollo.data;

import java.io.Serializable;
import java.util.Date;


/**
 *  aprendoz_desarrollo.PadresVistaAprendizajesId
 *  01/15/2014 19:40:54
 * 
 */
public class PadresVistaAprendizajesId
    implements Serializable
{

    private Integer idAsignatura;
    private Date fechaEsperada;
    private String aprendizaje;
    private String learning;
    private String subtopico;
    private String unidad;
    private Integer numeroUnidad;
    private Integer idAprendizaje;
    private Integer idSubtopico;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof PadresVistaAprendizajesId)) {
            return false;
        }
        PadresVistaAprendizajesId other = ((PadresVistaAprendizajesId) o);
        if (this.idAsignatura == null) {
            if (other.idAsignatura!= null) {
                return false;
            }
        } else {
            if (!this.idAsignatura.equals(other.idAsignatura)) {
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
        if (this.numeroUnidad == null) {
            if (other.numeroUnidad!= null) {
                return false;
            }
        } else {
            if (!this.numeroUnidad.equals(other.numeroUnidad)) {
                return false;
            }
        }
        if (this.idAprendizaje == null) {
            if (other.idAprendizaje!= null) {
                return false;
            }
        } else {
            if (!this.idAprendizaje.equals(other.idAprendizaje)) {
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
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.idAsignatura!= null) {
            rtn = (rtn + this.idAsignatura.hashCode());
        }
        rtn = (rtn* 37);
        if (this.fechaEsperada!= null) {
            rtn = (rtn + this.fechaEsperada.hashCode());
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
        if (this.subtopico!= null) {
            rtn = (rtn + this.subtopico.hashCode());
        }
        rtn = (rtn* 37);
        if (this.unidad!= null) {
            rtn = (rtn + this.unidad.hashCode());
        }
        rtn = (rtn* 37);
        if (this.numeroUnidad!= null) {
            rtn = (rtn + this.numeroUnidad.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idAprendizaje!= null) {
            rtn = (rtn + this.idAprendizaje.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idSubtopico!= null) {
            rtn = (rtn + this.idSubtopico.hashCode());
        }
        return rtn;
    }

    public Integer getIdAsignatura() {
        return idAsignatura;
    }

    public void setIdAsignatura(Integer idAsignatura) {
        this.idAsignatura = idAsignatura;
    }

    public Date getFechaEsperada() {
        return fechaEsperada;
    }

    public void setFechaEsperada(Date fechaEsperada) {
        this.fechaEsperada = fechaEsperada;
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

    public Integer getNumeroUnidad() {
        return numeroUnidad;
    }

    public void setNumeroUnidad(Integer numeroUnidad) {
        this.numeroUnidad = numeroUnidad;
    }

    public Integer getIdAprendizaje() {
        return idAprendizaje;
    }

    public void setIdAprendizaje(Integer idAprendizaje) {
        this.idAprendizaje = idAprendizaje;
    }

    public Integer getIdSubtopico() {
        return idSubtopico;
    }

    public void setIdSubtopico(Integer idSubtopico) {
        this.idSubtopico = idSubtopico;
    }

}
