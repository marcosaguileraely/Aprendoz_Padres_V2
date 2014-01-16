
package com.aprendoz_desarrollo.data;

import java.io.Serializable;
import java.math.BigDecimal;


/**
 *  aprendoz_desarrollo.VistaDashboardNoCalificadosId
 *  01/15/2014 19:40:54
 * 
 */
public class VistaDashboardNoCalificadosId
    implements Serializable
{

    private Integer idAsignatura;
    private Long asignaturasNoCalificadas;
    private Long totalEstudiantes;
    private BigDecimal totalPorcentaje;
    private BigDecimal califPorcentaje;
    private Long aprProgreso;
    private Long sy;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof VistaDashboardNoCalificadosId)) {
            return false;
        }
        VistaDashboardNoCalificadosId other = ((VistaDashboardNoCalificadosId) o);
        if (this.idAsignatura == null) {
            if (other.idAsignatura!= null) {
                return false;
            }
        } else {
            if (!this.idAsignatura.equals(other.idAsignatura)) {
                return false;
            }
        }
        if (this.asignaturasNoCalificadas == null) {
            if (other.asignaturasNoCalificadas!= null) {
                return false;
            }
        } else {
            if (!this.asignaturasNoCalificadas.equals(other.asignaturasNoCalificadas)) {
                return false;
            }
        }
        if (this.totalEstudiantes == null) {
            if (other.totalEstudiantes!= null) {
                return false;
            }
        } else {
            if (!this.totalEstudiantes.equals(other.totalEstudiantes)) {
                return false;
            }
        }
        if (this.totalPorcentaje == null) {
            if (other.totalPorcentaje!= null) {
                return false;
            }
        } else {
            if (!this.totalPorcentaje.equals(other.totalPorcentaje)) {
                return false;
            }
        }
        if (this.califPorcentaje == null) {
            if (other.califPorcentaje!= null) {
                return false;
            }
        } else {
            if (!this.califPorcentaje.equals(other.califPorcentaje)) {
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
        if (this.asignaturasNoCalificadas!= null) {
            rtn = (rtn + this.asignaturasNoCalificadas.hashCode());
        }
        rtn = (rtn* 37);
        if (this.totalEstudiantes!= null) {
            rtn = (rtn + this.totalEstudiantes.hashCode());
        }
        rtn = (rtn* 37);
        if (this.totalPorcentaje!= null) {
            rtn = (rtn + this.totalPorcentaje.hashCode());
        }
        rtn = (rtn* 37);
        if (this.califPorcentaje!= null) {
            rtn = (rtn + this.califPorcentaje.hashCode());
        }
        rtn = (rtn* 37);
        if (this.aprProgreso!= null) {
            rtn = (rtn + this.aprProgreso.hashCode());
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

    public Long getAsignaturasNoCalificadas() {
        return asignaturasNoCalificadas;
    }

    public void setAsignaturasNoCalificadas(Long asignaturasNoCalificadas) {
        this.asignaturasNoCalificadas = asignaturasNoCalificadas;
    }

    public Long getTotalEstudiantes() {
        return totalEstudiantes;
    }

    public void setTotalEstudiantes(Long totalEstudiantes) {
        this.totalEstudiantes = totalEstudiantes;
    }

    public BigDecimal getTotalPorcentaje() {
        return totalPorcentaje;
    }

    public void setTotalPorcentaje(BigDecimal totalPorcentaje) {
        this.totalPorcentaje = totalPorcentaje;
    }

    public BigDecimal getCalifPorcentaje() {
        return califPorcentaje;
    }

    public void setCalifPorcentaje(BigDecimal califPorcentaje) {
        this.califPorcentaje = califPorcentaje;
    }

    public Long getAprProgreso() {
        return aprProgreso;
    }

    public void setAprProgreso(Long aprProgreso) {
        this.aprProgreso = aprProgreso;
    }

    public Long getSy() {
        return sy;
    }

    public void setSy(Long sy) {
        this.sy = sy;
    }

}
