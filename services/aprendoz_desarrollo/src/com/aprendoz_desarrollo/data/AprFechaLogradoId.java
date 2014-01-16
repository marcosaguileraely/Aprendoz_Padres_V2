
package com.aprendoz_desarrollo.data;

import java.io.Serializable;
import java.util.Date;


/**
 *  aprendoz_desarrollo.AprFechaLogradoId
 *  10/08/2011 12:59:25
 * 
 */
public class AprFechaLogradoId
    implements Serializable
{

    private Integer persona;
    private Integer asignatura;
    private Date fechaLogro;
    private Date fechaEsperada;
    private Long cantidad;

    public AprFechaLogradoId() {
    }

    public AprFechaLogradoId(Integer persona, Integer asignatura, Date fechaLogro, Date fechaEsperada, Long cantidad) {
        this.persona = persona;
        this.asignatura = asignatura;
        this.fechaLogro = fechaLogro;
        this.fechaEsperada = fechaEsperada;
        this.cantidad = cantidad;
    }

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof AprFechaLogradoId)) {
            return false;
        }
        AprFechaLogradoId other = ((AprFechaLogradoId) o);
        if (this.persona == null) {
            if (other.persona!= null) {
                return false;
            }
        } else {
            if (!this.persona.equals(other.persona)) {
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
        if (this.fechaLogro == null) {
            if (other.fechaLogro!= null) {
                return false;
            }
        } else {
            if (!this.fechaLogro.equals(other.fechaLogro)) {
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
        if (this.cantidad == null) {
            if (other.cantidad!= null) {
                return false;
            }
        } else {
            if (!this.cantidad.equals(other.cantidad)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.persona!= null) {
            rtn = (rtn + this.persona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.asignatura!= null) {
            rtn = (rtn + this.asignatura.hashCode());
        }
        rtn = (rtn* 37);
        if (this.fechaLogro!= null) {
            rtn = (rtn + this.fechaLogro.hashCode());
        }
        rtn = (rtn* 37);
        if (this.fechaEsperada!= null) {
            rtn = (rtn + this.fechaEsperada.hashCode());
        }
        rtn = (rtn* 37);
        if (this.cantidad!= null) {
            rtn = (rtn + this.cantidad.hashCode());
        }
        return rtn;
    }

    public Integer getPersona() {
        return persona;
    }

    public void setPersona(Integer persona) {
        this.persona = persona;
    }

    public Integer getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(Integer asignatura) {
        this.asignatura = asignatura;
    }

    public Date getFechaLogro() {
        return fechaLogro;
    }

    public void setFechaLogro(Date fechaLogro) {
        this.fechaLogro = fechaLogro;
    }

    public Date getFechaEsperada() {
        return fechaEsperada;
    }

    public void setFechaEsperada(Date fechaEsperada) {
        this.fechaEsperada = fechaEsperada;
    }

    public Long getCantidad() {
        return cantidad;
    }

    public void setCantidad(Long cantidad) {
        this.cantidad = cantidad;
    }

}
