
package com.aprendoz_desarrollo.data;

import java.io.Serializable;


/**
 *  aprendoz_desarrollo.VistaTransporteRutasId
 *  09/19/2012 14:22:31
 * 
 */
public class VistaTransporteRutasId
    implements Serializable
{

    private Integer idRuta;
    private String numeroRuta;
    private String placaVehiculo;
    private Integer tipoTransporteIdTipoTransporte;

    public VistaTransporteRutasId() {
    }

    public VistaTransporteRutasId(Integer idRuta, String numeroRuta, String placaVehiculo, Integer tipoTransporteIdTipoTransporte) {
        this.idRuta = idRuta;
        this.numeroRuta = numeroRuta;
        this.placaVehiculo = placaVehiculo;
        this.tipoTransporteIdTipoTransporte = tipoTransporteIdTipoTransporte;
    }

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof VistaTransporteRutasId)) {
            return false;
        }
        VistaTransporteRutasId other = ((VistaTransporteRutasId) o);
        if (this.idRuta == null) {
            if (other.idRuta!= null) {
                return false;
            }
        } else {
            if (!this.idRuta.equals(other.idRuta)) {
                return false;
            }
        }
        if (this.numeroRuta == null) {
            if (other.numeroRuta!= null) {
                return false;
            }
        } else {
            if (!this.numeroRuta.equals(other.numeroRuta)) {
                return false;
            }
        }
        if (this.placaVehiculo == null) {
            if (other.placaVehiculo!= null) {
                return false;
            }
        } else {
            if (!this.placaVehiculo.equals(other.placaVehiculo)) {
                return false;
            }
        }
        if (this.tipoTransporteIdTipoTransporte == null) {
            if (other.tipoTransporteIdTipoTransporte!= null) {
                return false;
            }
        } else {
            if (!this.tipoTransporteIdTipoTransporte.equals(other.tipoTransporteIdTipoTransporte)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.idRuta!= null) {
            rtn = (rtn + this.idRuta.hashCode());
        }
        rtn = (rtn* 37);
        if (this.numeroRuta!= null) {
            rtn = (rtn + this.numeroRuta.hashCode());
        }
        rtn = (rtn* 37);
        if (this.placaVehiculo!= null) {
            rtn = (rtn + this.placaVehiculo.hashCode());
        }
        rtn = (rtn* 37);
        if (this.tipoTransporteIdTipoTransporte!= null) {
            rtn = (rtn + this.tipoTransporteIdTipoTransporte.hashCode());
        }
        return rtn;
    }

    public Integer getIdRuta() {
        return idRuta;
    }

    public void setIdRuta(Integer idRuta) {
        this.idRuta = idRuta;
    }

    public String getNumeroRuta() {
        return numeroRuta;
    }

    public void setNumeroRuta(String numeroRuta) {
        this.numeroRuta = numeroRuta;
    }

    public String getPlacaVehiculo() {
        return placaVehiculo;
    }

    public void setPlacaVehiculo(String placaVehiculo) {
        this.placaVehiculo = placaVehiculo;
    }

    public Integer getTipoTransporteIdTipoTransporte() {
        return tipoTransporteIdTipoTransporte;
    }

    public void setTipoTransporteIdTipoTransporte(Integer tipoTransporteIdTipoTransporte) {
        this.tipoTransporteIdTipoTransporte = tipoTransporteIdTipoTransporte;
    }

}
