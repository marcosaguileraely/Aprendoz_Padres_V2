
package com.aprendoz_desarrollo.data;

import java.io.Serializable;


/**
 *  aprendoz_desarrollo.VistaDashboardAvanzadosYMagistralesId
 *  01/15/2014 19:40:54
 * 
 */
public class VistaDashboardAvanzadosYMagistralesId
    implements Serializable
{

    private Integer idAsignatura;
    private String asignatura;
    private Long aprProgreso;
    private Long aprCompetente;
    private Long aprAvanzado;
    private Long aprMagistral;
    private Long total;
    private Long sy;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof VistaDashboardAvanzadosYMagistralesId)) {
            return false;
        }
        VistaDashboardAvanzadosYMagistralesId other = ((VistaDashboardAvanzadosYMagistralesId) o);
        if (this.idAsignatura == null) {
            if (other.idAsignatura!= null) {
                return false;
            }
        } else {
            if (!this.idAsignatura.equals(other.idAsignatura)) {
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
        if (this.aprProgreso == null) {
            if (other.aprProgreso!= null) {
                return false;
            }
        } else {
            if (!this.aprProgreso.equals(other.aprProgreso)) {
                return false;
            }
        }
        if (this.aprCompetente == null) {
            if (other.aprCompetente!= null) {
                return false;
            }
        } else {
            if (!this.aprCompetente.equals(other.aprCompetente)) {
                return false;
            }
        }
        if (this.aprAvanzado == null) {
            if (other.aprAvanzado!= null) {
                return false;
            }
        } else {
            if (!this.aprAvanzado.equals(other.aprAvanzado)) {
                return false;
            }
        }
        if (this.aprMagistral == null) {
            if (other.aprMagistral!= null) {
                return false;
            }
        } else {
            if (!this.aprMagistral.equals(other.aprMagistral)) {
                return false;
            }
        }
        if (this.total == null) {
            if (other.total!= null) {
                return false;
            }
        } else {
            if (!this.total.equals(other.total)) {
                return false;
            }
        }
        if (this.sy == null) {
            if (other.sy!= null) {
                return false;
            }
        } else {
            if (!this.sy.equals(other.sy)) {
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
        if (this.asignatura!= null) {
            rtn = (rtn + this.asignatura.hashCode());
        }
        rtn = (rtn* 37);
        if (this.aprProgreso!= null) {
            rtn = (rtn + this.aprProgreso.hashCode());
        }
        rtn = (rtn* 37);
        if (this.aprCompetente!= null) {
            rtn = (rtn + this.aprCompetente.hashCode());
        }
        rtn = (rtn* 37);
        if (this.aprAvanzado!= null) {
            rtn = (rtn + this.aprAvanzado.hashCode());
        }
        rtn = (rtn* 37);
        if (this.aprMagistral!= null) {
            rtn = (rtn + this.aprMagistral.hashCode());
        }
        rtn = (rtn* 37);
        if (this.total!= null) {
            rtn = (rtn + this.total.hashCode());
        }
        rtn = (rtn* 37);
        if (this.sy!= null) {
            rtn = (rtn + this.sy.hashCode());
        }
        return rtn;
    }

    public Integer getIdAsignatura() {
        return idAsignatura;
    }

    public void setIdAsignatura(Integer idAsignatura) {
        this.idAsignatura = idAsignatura;
    }

    public String getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(String asignatura) {
        this.asignatura = asignatura;
    }

    public Long getAprProgreso() {
        return aprProgreso;
    }

    public void setAprProgreso(Long aprProgreso) {
        this.aprProgreso = aprProgreso;
    }

    public Long getAprCompetente() {
        return aprCompetente;
    }

    public void setAprCompetente(Long aprCompetente) {
        this.aprCompetente = aprCompetente;
    }

    public Long getAprAvanzado() {
        return aprAvanzado;
    }

    public void setAprAvanzado(Long aprAvanzado) {
        this.aprAvanzado = aprAvanzado;
    }

    public Long getAprMagistral() {
        return aprMagistral;
    }

    public void setAprMagistral(Long aprMagistral) {
        this.aprMagistral = aprMagistral;
    }

    public Long getTotal() {
        return total;
    }

    public void setTotal(Long total) {
        this.total = total;
    }

    public Long getSy() {
        return sy;
    }

    public void setSy(Long sy) {
        this.sy = sy;
    }

}
