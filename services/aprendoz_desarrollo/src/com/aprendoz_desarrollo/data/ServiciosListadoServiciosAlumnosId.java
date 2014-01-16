
package com.aprendoz_desarrollo.data;

import java.io.Serializable;


/**
 *  aprendoz_desarrollo.ServiciosListadoServiciosAlumnosId
 *  01/15/2014 19:40:54
 * 
 */
public class ServiciosListadoServiciosAlumnosId
    implements Serializable
{

    private Integer idInscAlumCosto;
    private Integer idPersona;
    private String codigo;
    private String apellido1;
    private String apellido2;
    private String nombre1;
    private String nombre2;
    private Integer idCosto;
    private String codigoProd;
    private String nombreProducto;
    private String descripcion;
    private Boolean inscrito;
    private Integer syIdSy;
    private String schoolYear;
    private Integer idSy;
    private String tipoDocumento;
    private String noDocumento;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof ServiciosListadoServiciosAlumnosId)) {
            return false;
        }
        ServiciosListadoServiciosAlumnosId other = ((ServiciosListadoServiciosAlumnosId) o);
        if (this.idInscAlumCosto == null) {
            if (other.idInscAlumCosto!= null) {
                return false;
            }
        } else {
            if (!this.idInscAlumCosto.equals(other.idInscAlumCosto)) {
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
        if (this.idCosto == null) {
            if (other.idCosto!= null) {
                return false;
            }
        } else {
            if (!this.idCosto.equals(other.idCosto)) {
                return false;
            }
        }
        if (this.codigoProd == null) {
            if (other.codigoProd!= null) {
                return false;
            }
        } else {
            if (!this.codigoProd.equals(other.codigoProd)) {
                return false;
            }
        }
        if (this.nombreProducto == null) {
            if (other.nombreProducto!= null) {
                return false;
            }
        } else {
            if (!this.nombreProducto.equals(other.nombreProducto)) {
                return false;
            }
        }
        if (this.descripcion == null) {
            if (other.descripcion!= null) {
                return false;
            }
        } else {
            if (!this.descripcion.equals(other.descripcion)) {
                return false;
            }
        }
        if (this.inscrito == null) {
            if (other.inscrito!= null) {
                return false;
            }
        } else {
            if (!this.inscrito.equals(other.inscrito)) {
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
        if (this.schoolYear == null) {
            if (other.schoolYear!= null) {
                return false;
            }
        } else {
            if (!this.schoolYear.equals(other.schoolYear)) {
                return false;
            }
        }
        if (this.idSy == null) {
            if (other.idSy!= null) {
                return false;
            }
        } else {
            if (!this.idSy.equals(other.idSy)) {
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
        if (this.noDocumento == null) {
            if (other.noDocumento!= null) {
                return false;
            }
        } else {
            if (!this.noDocumento.equals(other.noDocumento)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.idInscAlumCosto!= null) {
            rtn = (rtn + this.idInscAlumCosto.hashCode());
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
        if (this.idCosto!= null) {
            rtn = (rtn + this.idCosto.hashCode());
        }
        rtn = (rtn* 37);
        if (this.codigoProd!= null) {
            rtn = (rtn + this.codigoProd.hashCode());
        }
        rtn = (rtn* 37);
        if (this.nombreProducto!= null) {
            rtn = (rtn + this.nombreProducto.hashCode());
        }
        rtn = (rtn* 37);
        if (this.descripcion!= null) {
            rtn = (rtn + this.descripcion.hashCode());
        }
        rtn = (rtn* 37);
        if (this.inscrito!= null) {
            rtn = (rtn + this.inscrito.hashCode());
        }
        rtn = (rtn* 37);
        if (this.syIdSy!= null) {
            rtn = (rtn + this.syIdSy.hashCode());
        }
        rtn = (rtn* 37);
        if (this.schoolYear!= null) {
            rtn = (rtn + this.schoolYear.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idSy!= null) {
            rtn = (rtn + this.idSy.hashCode());
        }
        rtn = (rtn* 37);
        if (this.tipoDocumento!= null) {
            rtn = (rtn + this.tipoDocumento.hashCode());
        }
        rtn = (rtn* 37);
        if (this.noDocumento!= null) {
            rtn = (rtn + this.noDocumento.hashCode());
        }
        return rtn;
    }

    public Integer getIdInscAlumCosto() {
        return idInscAlumCosto;
    }

    public void setIdInscAlumCosto(Integer idInscAlumCosto) {
        this.idInscAlumCosto = idInscAlumCosto;
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

    public Integer getIdCosto() {
        return idCosto;
    }

    public void setIdCosto(Integer idCosto) {
        this.idCosto = idCosto;
    }

    public String getCodigoProd() {
        return codigoProd;
    }

    public void setCodigoProd(String codigoProd) {
        this.codigoProd = codigoProd;
    }

    public String getNombreProducto() {
        return nombreProducto;
    }

    public void setNombreProducto(String nombreProducto) {
        this.nombreProducto = nombreProducto;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Boolean getInscrito() {
        return inscrito;
    }

    public void setInscrito(Boolean inscrito) {
        this.inscrito = inscrito;
    }

    public Integer getSyIdSy() {
        return syIdSy;
    }

    public void setSyIdSy(Integer syIdSy) {
        this.syIdSy = syIdSy;
    }

    public String getSchoolYear() {
        return schoolYear;
    }

    public void setSchoolYear(String schoolYear) {
        this.schoolYear = schoolYear;
    }

    public Integer getIdSy() {
        return idSy;
    }

    public void setIdSy(Integer idSy) {
        this.idSy = idSy;
    }

    public String getTipoDocumento() {
        return tipoDocumento;
    }

    public void setTipoDocumento(String tipoDocumento) {
        this.tipoDocumento = tipoDocumento;
    }

    public String getNoDocumento() {
        return noDocumento;
    }

    public void setNoDocumento(String noDocumento) {
        this.noDocumento = noDocumento;
    }

}
