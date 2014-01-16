
package com.aprendoz_desarrollo.data;

import java.io.Serializable;


/**
 *  aprendoz_desarrollo.TmpEnrLogId
 *  01/15/2014 19:40:54
 * 
 */
public class TmpEnrLogId
    implements Serializable
{

    private String nit;
    private String identificacion;
    private String monto;
    private String concepto;
    private String created;
    private Integer idpersona;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof TmpEnrLogId)) {
            return false;
        }
        TmpEnrLogId other = ((TmpEnrLogId) o);
        if (this.nit == null) {
            if (other.nit!= null) {
                return false;
            }
        } else {
            if (!this.nit.equals(other.nit)) {
                return false;
            }
        }
        if (this.identificacion == null) {
            if (other.identificacion!= null) {
                return false;
            }
        } else {
            if (!this.identificacion.equals(other.identificacion)) {
                return false;
            }
        }
        if (this.monto == null) {
            if (other.monto!= null) {
                return false;
            }
        } else {
            if (!this.monto.equals(other.monto)) {
                return false;
            }
        }
        if (this.concepto == null) {
            if (other.concepto!= null) {
                return false;
            }
        } else {
            if (!this.concepto.equals(other.concepto)) {
                return false;
            }
        }
        if (this.created == null) {
            if (other.created!= null) {
                return false;
            }
        } else {
            if (!this.created.equals(other.created)) {
                return false;
            }
        }
        if (this.idpersona == null) {
            if (other.idpersona!= null) {
                return false;
            }
        } else {
            if (!this.idpersona.equals(other.idpersona)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.nit!= null) {
            rtn = (rtn + this.nit.hashCode());
        }
        rtn = (rtn* 37);
        if (this.identificacion!= null) {
            rtn = (rtn + this.identificacion.hashCode());
        }
        rtn = (rtn* 37);
        if (this.monto!= null) {
            rtn = (rtn + this.monto.hashCode());
        }
        rtn = (rtn* 37);
        if (this.concepto!= null) {
            rtn = (rtn + this.concepto.hashCode());
        }
        rtn = (rtn* 37);
        if (this.created!= null) {
            rtn = (rtn + this.created.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idpersona!= null) {
            rtn = (rtn + this.idpersona.hashCode());
        }
        return rtn;
    }

    public String getNit() {
        return nit;
    }

    public void setNit(String nit) {
        this.nit = nit;
    }

    public String getIdentificacion() {
        return identificacion;
    }

    public void setIdentificacion(String identificacion) {
        this.identificacion = identificacion;
    }

    public String getMonto() {
        return monto;
    }

    public void setMonto(String monto) {
        this.monto = monto;
    }

    public String getConcepto() {
        return concepto;
    }

    public void setConcepto(String concepto) {
        this.concepto = concepto;
    }

    public String getCreated() {
        return created;
    }

    public void setCreated(String created) {
        this.created = created;
    }

    public Integer getIdpersona() {
        return idpersona;
    }

    public void setIdpersona(Integer idpersona) {
        this.idpersona = idpersona;
    }

}
