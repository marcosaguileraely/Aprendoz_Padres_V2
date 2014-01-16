
package com.aprendoz_desarrollo.data;

import java.io.Serializable;
import java.util.Date;


/**
 *  aprendoz_desarrollo.AprFechaEsperadaId
 *  10/08/2011 12:59:25
 * 
 */
public class AprFechaEsperadaId
    implements Serializable
{

    private Integer asignatura;
    private Long cantidad;
    private Integer idAsignatura;
    private Integer idUnidad;
    private Integer unidadIdUnidad;
    private Integer idSubtopico;
    private Integer subtopicoIdSubtopico;
    private Integer idAprendizaje;
    private Integer aprendizajeIdAprendizaje;
    private String asignatura1;
    private String subject;
    private Integer idPersona;
    private Integer personaIdPersona;
    private String nombre1;
    private String nombre2;
    private String apellido1;
    private String apellido2;
    private String subtopico;
    private String unidad;
    private Date fechaEsperada;

    public AprFechaEsperadaId() {
    }

    public AprFechaEsperadaId(Integer asignatura, Long cantidad, Integer idAsignatura, Integer idUnidad, Integer unidadIdUnidad, Integer idSubtopico, Integer subtopicoIdSubtopico, Integer idAprendizaje, Integer aprendizajeIdAprendizaje, String asignatura1, String subject, Integer idPersona, Integer personaIdPersona, String nombre1, String nombre2, String apellido1, String apellido2, String subtopico, String unidad, Date fechaEsperada) {
        this.asignatura = asignatura;
        this.cantidad = cantidad;
        this.idAsignatura = idAsignatura;
        this.idUnidad = idUnidad;
        this.unidadIdUnidad = unidadIdUnidad;
        this.idSubtopico = idSubtopico;
        this.subtopicoIdSubtopico = subtopicoIdSubtopico;
        this.idAprendizaje = idAprendizaje;
        this.aprendizajeIdAprendizaje = aprendizajeIdAprendizaje;
        this.asignatura1 = asignatura1;
        this.subject = subject;
        this.idPersona = idPersona;
        this.personaIdPersona = personaIdPersona;
        this.nombre1 = nombre1;
        this.nombre2 = nombre2;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.subtopico = subtopico;
        this.unidad = unidad;
        this.fechaEsperada = fechaEsperada;
    }

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof AprFechaEsperadaId)) {
            return false;
        }
        AprFechaEsperadaId other = ((AprFechaEsperadaId) o);
        if (this.asignatura == null) {
            if (other.asignatura!= null) {
                return false;
            }
        } else {
            if (!this.asignatura.equals(other.asignatura)) {
                return false;
            }
        }
        if (this.cantidad == null) {
            if (other.cantidad!= null) {
                return false;
            }
        } else {
            if (!this.cantidad.equals(other.cantidad)) {
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
        if (this.idUnidad == null) {
            if (other.idUnidad!= null) {
                return false;
            }
        } else {
            if (!this.idUnidad.equals(other.idUnidad)) {
                return false;
            }
        }
        if (this.unidadIdUnidad == null) {
            if (other.unidadIdUnidad!= null) {
                return false;
            }
        } else {
            if (!this.unidadIdUnidad.equals(other.unidadIdUnidad)) {
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
        if (this.subtopicoIdSubtopico == null) {
            if (other.subtopicoIdSubtopico!= null) {
                return false;
            }
        } else {
            if (!this.subtopicoIdSubtopico.equals(other.subtopicoIdSubtopico)) {
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
        if (this.aprendizajeIdAprendizaje == null) {
            if (other.aprendizajeIdAprendizaje!= null) {
                return false;
            }
        } else {
            if (!this.aprendizajeIdAprendizaje.equals(other.aprendizajeIdAprendizaje)) {
                return false;
            }
        }
        if (this.asignatura1 == null) {
            if (other.asignatura1 != null) {
                return false;
            }
        } else {
            if (!this.asignatura1 .equals(other.asignatura1)) {
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
        if (this.idPersona == null) {
            if (other.idPersona!= null) {
                return false;
            }
        } else {
            if (!this.idPersona.equals(other.idPersona)) {
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
        if (this.fechaEsperada == null) {
            if (other.fechaEsperada!= null) {
                return false;
            }
        } else {
            if (!this.fechaEsperada.equals(other.fechaEsperada)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.asignatura!= null) {
            rtn = (rtn + this.asignatura.hashCode());
        }
        rtn = (rtn* 37);
        if (this.cantidad!= null) {
            rtn = (rtn + this.cantidad.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idAsignatura!= null) {
            rtn = (rtn + this.idAsignatura.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idUnidad!= null) {
            rtn = (rtn + this.idUnidad.hashCode());
        }
        rtn = (rtn* 37);
        if (this.unidadIdUnidad!= null) {
            rtn = (rtn + this.unidadIdUnidad.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idSubtopico!= null) {
            rtn = (rtn + this.idSubtopico.hashCode());
        }
        rtn = (rtn* 37);
        if (this.subtopicoIdSubtopico!= null) {
            rtn = (rtn + this.subtopicoIdSubtopico.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idAprendizaje!= null) {
            rtn = (rtn + this.idAprendizaje.hashCode());
        }
        rtn = (rtn* 37);
        if (this.aprendizajeIdAprendizaje!= null) {
            rtn = (rtn + this.aprendizajeIdAprendizaje.hashCode());
        }
        rtn = (rtn* 37);
        if (this.asignatura1 != null) {
            rtn = (rtn + this.asignatura1 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.subject!= null) {
            rtn = (rtn + this.subject.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idPersona!= null) {
            rtn = (rtn + this.idPersona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.personaIdPersona!= null) {
            rtn = (rtn + this.personaIdPersona.hashCode());
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
        if (this.apellido1 != null) {
            rtn = (rtn + this.apellido1 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.apellido2 != null) {
            rtn = (rtn + this.apellido2 .hashCode());
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
        if (this.fechaEsperada!= null) {
            rtn = (rtn + this.fechaEsperada.hashCode());
        }
        return rtn;
    }

    public Integer getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(Integer asignatura) {
        this.asignatura = asignatura;
    }

    public Long getCantidad() {
        return cantidad;
    }

    public void setCantidad(Long cantidad) {
        this.cantidad = cantidad;
    }

    public Integer getIdAsignatura() {
        return idAsignatura;
    }

    public void setIdAsignatura(Integer idAsignatura) {
        this.idAsignatura = idAsignatura;
    }

    public Integer getIdUnidad() {
        return idUnidad;
    }

    public void setIdUnidad(Integer idUnidad) {
        this.idUnidad = idUnidad;
    }

    public Integer getUnidadIdUnidad() {
        return unidadIdUnidad;
    }

    public void setUnidadIdUnidad(Integer unidadIdUnidad) {
        this.unidadIdUnidad = unidadIdUnidad;
    }

    public Integer getIdSubtopico() {
        return idSubtopico;
    }

    public void setIdSubtopico(Integer idSubtopico) {
        this.idSubtopico = idSubtopico;
    }

    public Integer getSubtopicoIdSubtopico() {
        return subtopicoIdSubtopico;
    }

    public void setSubtopicoIdSubtopico(Integer subtopicoIdSubtopico) {
        this.subtopicoIdSubtopico = subtopicoIdSubtopico;
    }

    public Integer getIdAprendizaje() {
        return idAprendizaje;
    }

    public void setIdAprendizaje(Integer idAprendizaje) {
        this.idAprendizaje = idAprendizaje;
    }

    public Integer getAprendizajeIdAprendizaje() {
        return aprendizajeIdAprendizaje;
    }

    public void setAprendizajeIdAprendizaje(Integer aprendizajeIdAprendizaje) {
        this.aprendizajeIdAprendizaje = aprendizajeIdAprendizaje;
    }

    public String getAsignatura1() {
        return asignatura1;
    }

    public void setAsignatura1(String asignatura1) {
        this.asignatura1 = asignatura1;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public Integer getIdPersona() {
        return idPersona;
    }

    public void setIdPersona(Integer idPersona) {
        this.idPersona = idPersona;
    }

    public Integer getPersonaIdPersona() {
        return personaIdPersona;
    }

    public void setPersonaIdPersona(Integer personaIdPersona) {
        this.personaIdPersona = personaIdPersona;
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

    public Date getFechaEsperada() {
        return fechaEsperada;
    }

    public void setFechaEsperada(Date fechaEsperada) {
        this.fechaEsperada = fechaEsperada;
    }

}
