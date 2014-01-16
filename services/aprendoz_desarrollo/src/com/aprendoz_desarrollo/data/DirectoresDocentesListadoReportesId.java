
package com.aprendoz_desarrollo.data;

import java.io.Serializable;


/**
 *  aprendoz_desarrollo.DirectoresDocentesListadoReportesId
 *  01/15/2014 19:40:54
 * 
 */
public class DirectoresDocentesListadoReportesId
    implements Serializable
{

    private Integer idreporte;
    private String codigo;
    private String reporte;
    private String uri;
    private Integer idTipoPersona;
    private String tipoPersona;
    private String descripcion;
    private Integer idPersona;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof DirectoresDocentesListadoReportesId)) {
            return false;
        }
        DirectoresDocentesListadoReportesId other = ((DirectoresDocentesListadoReportesId) o);
        if (this.idreporte == null) {
            if (other.idreporte!= null) {
                return false;
            }
        } else {
            if (!this.idreporte.equals(other.idreporte)) {
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
        if (this.reporte == null) {
            if (other.reporte!= null) {
                return false;
            }
        } else {
            if (!this.reporte.equals(other.reporte)) {
                return false;
            }
        }
        if (this.uri == null) {
            if (other.uri!= null) {
                return false;
            }
        } else {
            if (!this.uri.equals(other.uri)) {
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
        if (this.tipoPersona == null) {
            if (other.tipoPersona!= null) {
                return false;
            }
        } else {
            if (!this.tipoPersona.equals(other.tipoPersona)) {
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
        if (this.idPersona == null) {
            if (other.idPersona!= null) {
                return false;
            }
        } else {
            if (!this.idPersona.equals(other.idPersona)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.idreporte!= null) {
            rtn = (rtn + this.idreporte.hashCode());
        }
        rtn = (rtn* 37);
        if (this.codigo!= null) {
            rtn = (rtn + this.codigo.hashCode());
        }
        rtn = (rtn* 37);
        if (this.reporte!= null) {
            rtn = (rtn + this.reporte.hashCode());
        }
        rtn = (rtn* 37);
        if (this.uri!= null) {
            rtn = (rtn + this.uri.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idTipoPersona!= null) {
            rtn = (rtn + this.idTipoPersona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.tipoPersona!= null) {
            rtn = (rtn + this.tipoPersona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.descripcion!= null) {
            rtn = (rtn + this.descripcion.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idPersona!= null) {
            rtn = (rtn + this.idPersona.hashCode());
        }
        return rtn;
    }

    public Integer getIdreporte() {
        return idreporte;
    }

    public void setIdreporte(Integer idreporte) {
        this.idreporte = idreporte;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getReporte() {
        return reporte;
    }

    public void setReporte(String reporte) {
        this.reporte = reporte;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

    public Integer getIdTipoPersona() {
        return idTipoPersona;
    }

    public void setIdTipoPersona(Integer idTipoPersona) {
        this.idTipoPersona = idTipoPersona;
    }

    public String getTipoPersona() {
        return tipoPersona;
    }

    public void setTipoPersona(String tipoPersona) {
        this.tipoPersona = tipoPersona;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Integer getIdPersona() {
        return idPersona;
    }

    public void setIdPersona(Integer idPersona) {
        this.idPersona = idPersona;
    }

}
