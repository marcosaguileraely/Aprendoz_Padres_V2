
package com.aprendoz_desarrollo.data;

import java.io.Serializable;


/**
 *  aprendoz_desarrollo.VistaAlumnosActivosPrejardinNuevosId
 *  01/15/2014 19:40:54
 * 
 */
public class VistaAlumnosActivosPrejardinNuevosId
    implements Serializable
{

    private String schoolYear;
    private String nivel;
    private String grado;
    private String curso;
    private String codigo;
    private String apellido1;
    private String apellido2;
    private String nombre1;
    private String nombre2;
    private Integer idPersona;
    private String noDocumento;
    private String tipoDocumento;
    private String direccionResidencia;
    private String telefono;
    private String telefono2;
    private String barrio;
    private String municipio;
    private String departamento;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof VistaAlumnosActivosPrejardinNuevosId)) {
            return false;
        }
        VistaAlumnosActivosPrejardinNuevosId other = ((VistaAlumnosActivosPrejardinNuevosId) o);
        if (this.schoolYear == null) {
            if (other.schoolYear!= null) {
                return false;
            }
        } else {
            if (!this.schoolYear.equals(other.schoolYear)) {
                return false;
            }
        }
        if (this.nivel == null) {
            if (other.nivel!= null) {
                return false;
            }
        } else {
            if (!this.nivel.equals(other.nivel)) {
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
        if (this.curso == null) {
            if (other.curso!= null) {
                return false;
            }
        } else {
            if (!this.curso.equals(other.curso)) {
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
        if (this.idPersona == null) {
            if (other.idPersona!= null) {
                return false;
            }
        } else {
            if (!this.idPersona.equals(other.idPersona)) {
                return false;
            }
        }
        if (this.noDocumento == null) {
            if (other.noDocumento!= null) {
                return false;
            }
        } else {
            if (!this.noDocumento.equals(other.noDocumento)) {
                return false;
            }
        }
        if (this.tipoDocumento == null) {
            if (other.tipoDocumento!= null) {
                return false;
            }
        } else {
            if (!this.tipoDocumento.equals(other.tipoDocumento)) {
                return false;
            }
        }
        if (this.direccionResidencia == null) {
            if (other.direccionResidencia!= null) {
                return false;
            }
        } else {
            if (!this.direccionResidencia.equals(other.direccionResidencia)) {
                return false;
            }
        }
        if (this.telefono == null) {
            if (other.telefono!= null) {
                return false;
            }
        } else {
            if (!this.telefono.equals(other.telefono)) {
                return false;
            }
        }
        if (this.telefono2 == null) {
            if (other.telefono2 != null) {
                return false;
            }
        } else {
            if (!this.telefono2 .equals(other.telefono2)) {
                return false;
            }
        }
        if (this.barrio == null) {
            if (other.barrio!= null) {
                return false;
            }
        } else {
            if (!this.barrio.equals(other.barrio)) {
                return false;
            }
        }
        if (this.municipio == null) {
            if (other.municipio!= null) {
                return false;
            }
        } else {
            if (!this.municipio.equals(other.municipio)) {
                return false;
            }
        }
        if (this.departamento == null) {
            if (other.departamento!= null) {
                return false;
            }
        } else {
            if (!this.departamento.equals(other.departamento)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.schoolYear!= null) {
            rtn = (rtn + this.schoolYear.hashCode());
        }
        rtn = (rtn* 37);
        if (this.nivel!= null) {
            rtn = (rtn + this.nivel.hashCode());
        }
        rtn = (rtn* 37);
        if (this.grado!= null) {
            rtn = (rtn + this.grado.hashCode());
        }
        rtn = (rtn* 37);
        if (this.curso!= null) {
            rtn = (rtn + this.curso.hashCode());
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
        if (this.idPersona!= null) {
            rtn = (rtn + this.idPersona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.noDocumento!= null) {
            rtn = (rtn + this.noDocumento.hashCode());
        }
        rtn = (rtn* 37);
        if (this.tipoDocumento!= null) {
            rtn = (rtn + this.tipoDocumento.hashCode());
        }
        rtn = (rtn* 37);
        if (this.direccionResidencia!= null) {
            rtn = (rtn + this.direccionResidencia.hashCode());
        }
        rtn = (rtn* 37);
        if (this.telefono!= null) {
            rtn = (rtn + this.telefono.hashCode());
        }
        rtn = (rtn* 37);
        if (this.telefono2 != null) {
            rtn = (rtn + this.telefono2 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.barrio!= null) {
            rtn = (rtn + this.barrio.hashCode());
        }
        rtn = (rtn* 37);
        if (this.municipio!= null) {
            rtn = (rtn + this.municipio.hashCode());
        }
        rtn = (rtn* 37);
        if (this.departamento!= null) {
            rtn = (rtn + this.departamento.hashCode());
        }
        return rtn;
    }

    public String getSchoolYear() {
        return schoolYear;
    }

    public void setSchoolYear(String schoolYear) {
        this.schoolYear = schoolYear;
    }

    public String getNivel() {
        return nivel;
    }

    public void setNivel(String nivel) {
        this.nivel = nivel;
    }

    public String getGrado() {
        return grado;
    }

    public void setGrado(String grado) {
        this.grado = grado;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
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

    public Integer getIdPersona() {
        return idPersona;
    }

    public void setIdPersona(Integer idPersona) {
        this.idPersona = idPersona;
    }

    public String getNoDocumento() {
        return noDocumento;
    }

    public void setNoDocumento(String noDocumento) {
        this.noDocumento = noDocumento;
    }

    public String getTipoDocumento() {
        return tipoDocumento;
    }

    public void setTipoDocumento(String tipoDocumento) {
        this.tipoDocumento = tipoDocumento;
    }

    public String getDireccionResidencia() {
        return direccionResidencia;
    }

    public void setDireccionResidencia(String direccionResidencia) {
        this.direccionResidencia = direccionResidencia;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getTelefono2() {
        return telefono2;
    }

    public void setTelefono2(String telefono2) {
        this.telefono2 = telefono2;
    }

    public String getBarrio() {
        return barrio;
    }

    public void setBarrio(String barrio) {
        this.barrio = barrio;
    }

    public String getMunicipio() {
        return municipio;
    }

    public void setMunicipio(String municipio) {
        this.municipio = municipio;
    }

    public String getDepartamento() {
        return departamento;
    }

    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }

}
