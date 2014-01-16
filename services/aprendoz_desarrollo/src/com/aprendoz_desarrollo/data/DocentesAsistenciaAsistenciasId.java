
package com.aprendoz_desarrollo.data;

import java.io.Serializable;


/**
 *  aprendoz_desarrollo.DocentesAsistenciaAsistenciasId
 *  01/15/2014 19:40:54
 * 
 */
public class DocentesAsistenciaAsistenciasId
    implements Serializable
{

    private String comentario;
    private Integer idPersona;
    private String codigo;
    private String apellido1;
    private String apellido2;
    private String nombre1;
    private String nombre2;
    private String sexo;
    private Integer idTipo;
    private String tipo;
    private Integer idSesion;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof DocentesAsistenciaAsistenciasId)) {
            return false;
        }
        DocentesAsistenciaAsistenciasId other = ((DocentesAsistenciaAsistenciasId) o);
        if (this.comentario == null) {
            if (other.comentario!= null) {
                return false;
            }
        } else {
            if (!this.comentario.equals(other.comentario)) {
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
        if (this.codigo == null) {
            if (other.codigo!= null) {
                return false;
            }
        } else {
            if (!this.codigo.equals(other.codigo)) {
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
        if (this.sexo == null) {
            if (other.sexo!= null) {
                return false;
            }
        } else {
            if (!this.sexo.equals(other.sexo)) {
                return false;
            }
        }
        if (this.idTipo == null) {
            if (other.idTipo!= null) {
                return false;
            }
        } else {
            if (!this.idTipo.equals(other.idTipo)) {
                return false;
            }
        }
        if (this.tipo == null) {
            if (other.tipo!= null) {
                return false;
            }
        } else {
            if (!this.tipo.equals(other.tipo)) {
                return false;
            }
        }
        if (this.idSesion == null) {
            if (other.idSesion!= null) {
                return false;
            }
        } else {
            if (!this.idSesion.equals(other.idSesion)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.comentario!= null) {
            rtn = (rtn + this.comentario.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idPersona!= null) {
            rtn = (rtn + this.idPersona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.codigo!= null) {
            rtn = (rtn + this.codigo.hashCode());
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
        if (this.nombre1 != null) {
            rtn = (rtn + this.nombre1 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.nombre2 != null) {
            rtn = (rtn + this.nombre2 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.sexo!= null) {
            rtn = (rtn + this.sexo.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idTipo!= null) {
            rtn = (rtn + this.idTipo.hashCode());
        }
        rtn = (rtn* 37);
        if (this.tipo!= null) {
            rtn = (rtn + this.tipo.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idSesion!= null) {
            rtn = (rtn + this.idSesion.hashCode());
        }
        return rtn;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public Integer getIdPersona() {
        return idPersona;
    }

    public void setIdPersona(Integer idPersona) {
        this.idPersona = idPersona;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
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

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public Integer getIdTipo() {
        return idTipo;
    }

    public void setIdTipo(Integer idTipo) {
        this.idTipo = idTipo;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Integer getIdSesion() {
        return idSesion;
    }

    public void setIdSesion(Integer idSesion) {
        this.idSesion = idSesion;
    }

}
