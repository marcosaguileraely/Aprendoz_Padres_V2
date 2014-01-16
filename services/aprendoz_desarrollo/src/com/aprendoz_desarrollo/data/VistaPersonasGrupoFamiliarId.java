
package com.aprendoz_desarrollo.data;

import java.io.Serializable;


/**
 *  aprendoz_desarrollo.VistaPersonasGrupoFamiliarId
 *  01/15/2014 19:40:54
 * 
 */
public class VistaPersonasGrupoFamiliarId
    implements Serializable
{

    private Integer personaIdPersona;
    private Integer grupoFamiliarIdGrupoFamiliar;
    private Integer tipoPersonaIdTipoPersona;
    private Boolean responsable;
    private Integer idPersona;
    private String nombreLdap;
    private String apellido1;
    private String apellido2;
    private String nombre1;
    private String nombre2;
    private String codigo;
    private Integer idGrupoFamiliar;
    private String grupoFamiliar;
    private Integer idTipoPersona;
    private String clave;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof VistaPersonasGrupoFamiliarId)) {
            return false;
        }
        VistaPersonasGrupoFamiliarId other = ((VistaPersonasGrupoFamiliarId) o);
        if (this.personaIdPersona == null) {
            if (other.personaIdPersona!= null) {
                return false;
            }
        } else {
            if (!this.personaIdPersona.equals(other.personaIdPersona)) {
                return false;
            }
        }
        if (this.grupoFamiliarIdGrupoFamiliar == null) {
            if (other.grupoFamiliarIdGrupoFamiliar!= null) {
                return false;
            }
        } else {
            if (!this.grupoFamiliarIdGrupoFamiliar.equals(other.grupoFamiliarIdGrupoFamiliar)) {
                return false;
            }
        }
        if (this.tipoPersonaIdTipoPersona == null) {
            if (other.tipoPersonaIdTipoPersona!= null) {
                return false;
            }
        } else {
            if (!this.tipoPersonaIdTipoPersona.equals(other.tipoPersonaIdTipoPersona)) {
                return false;
            }
        }
        if (this.responsable == null) {
            if (other.responsable!= null) {
                return false;
            }
        } else {
            if (!this.responsable.equals(other.responsable)) {
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
        if (this.nombreLdap == null) {
            if (other.nombreLdap!= null) {
                return false;
            }
        } else {
            if (!this.nombreLdap.equals(other.nombreLdap)) {
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
        if (this.codigo == null) {
            if (other.codigo!= null) {
                return false;
            }
        } else {
            if (!this.codigo.equals(other.codigo)) {
                return false;
            }
        }
        if (this.idGrupoFamiliar == null) {
            if (other.idGrupoFamiliar!= null) {
                return false;
            }
        } else {
            if (!this.idGrupoFamiliar.equals(other.idGrupoFamiliar)) {
                return false;
            }
        }
        if (this.grupoFamiliar == null) {
            if (other.grupoFamiliar!= null) {
                return false;
            }
        } else {
            if (!this.grupoFamiliar.equals(other.grupoFamiliar)) {
                return false;
            }
        }
        if (this.idTipoPersona == null) {
            if (other.idTipoPersona!= null) {
                return false;
            }
        } else {
            if (!this.idTipoPersona.equals(other.idTipoPersona)) {
                return false;
            }
        }
        if (this.clave == null) {
            if (other.clave!= null) {
                return false;
            }
        } else {
            if (!this.clave.equals(other.clave)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.personaIdPersona!= null) {
            rtn = (rtn + this.personaIdPersona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.grupoFamiliarIdGrupoFamiliar!= null) {
            rtn = (rtn + this.grupoFamiliarIdGrupoFamiliar.hashCode());
        }
        rtn = (rtn* 37);
        if (this.tipoPersonaIdTipoPersona!= null) {
            rtn = (rtn + this.tipoPersonaIdTipoPersona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.responsable!= null) {
            rtn = (rtn + this.responsable.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idPersona!= null) {
            rtn = (rtn + this.idPersona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.nombreLdap!= null) {
            rtn = (rtn + this.nombreLdap.hashCode());
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
        if (this.codigo!= null) {
            rtn = (rtn + this.codigo.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idGrupoFamiliar!= null) {
            rtn = (rtn + this.idGrupoFamiliar.hashCode());
        }
        rtn = (rtn* 37);
        if (this.grupoFamiliar!= null) {
            rtn = (rtn + this.grupoFamiliar.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idTipoPersona!= null) {
            rtn = (rtn + this.idTipoPersona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.clave!= null) {
            rtn = (rtn + this.clave.hashCode());
        }
        return rtn;
    }

    public Integer getPersonaIdPersona() {
        return personaIdPersona;
    }

    public void setPersonaIdPersona(Integer personaIdPersona) {
        this.personaIdPersona = personaIdPersona;
    }

    public Integer getGrupoFamiliarIdGrupoFamiliar() {
        return grupoFamiliarIdGrupoFamiliar;
    }

    public void setGrupoFamiliarIdGrupoFamiliar(Integer grupoFamiliarIdGrupoFamiliar) {
        this.grupoFamiliarIdGrupoFamiliar = grupoFamiliarIdGrupoFamiliar;
    }

    public Integer getTipoPersonaIdTipoPersona() {
        return tipoPersonaIdTipoPersona;
    }

    public void setTipoPersonaIdTipoPersona(Integer tipoPersonaIdTipoPersona) {
        this.tipoPersonaIdTipoPersona = tipoPersonaIdTipoPersona;
    }

    public Boolean getResponsable() {
        return responsable;
    }

    public void setResponsable(Boolean responsable) {
        this.responsable = responsable;
    }

    public Integer getIdPersona() {
        return idPersona;
    }

    public void setIdPersona(Integer idPersona) {
        this.idPersona = idPersona;
    }

    public String getNombreLdap() {
        return nombreLdap;
    }

    public void setNombreLdap(String nombreLdap) {
        this.nombreLdap = nombreLdap;
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

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public Integer getIdGrupoFamiliar() {
        return idGrupoFamiliar;
    }

    public void setIdGrupoFamiliar(Integer idGrupoFamiliar) {
        this.idGrupoFamiliar = idGrupoFamiliar;
    }

    public String getGrupoFamiliar() {
        return grupoFamiliar;
    }

    public void setGrupoFamiliar(String grupoFamiliar) {
        this.grupoFamiliar = grupoFamiliar;
    }

    public Integer getIdTipoPersona() {
        return idTipoPersona;
    }

    public void setIdTipoPersona(Integer idTipoPersona) {
        this.idTipoPersona = idTipoPersona;
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

}
