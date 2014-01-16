
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Area
 *  01/15/2014 19:40:54
 * 
 */
public class Area {

    private Integer idArea;
    private String area;
    private String areaName;
    private Integer idSyIdIdSy;
    private Set<com.aprendoz_desarrollo.data.Subarea> subareas = new HashSet<com.aprendoz_desarrollo.data.Subarea>();

    public Integer getIdArea() {
        return idArea;
    }

    public void setIdArea(Integer idArea) {
        this.idArea = idArea;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getAreaName() {
        return areaName;
    }

    public void setAreaName(String areaName) {
        this.areaName = areaName;
    }

    public Integer getIdSyIdIdSy() {
        return idSyIdIdSy;
    }

    public void setIdSyIdIdSy(Integer idSyIdIdSy) {
        this.idSyIdIdSy = idSyIdIdSy;
    }

    public Set<com.aprendoz_desarrollo.data.Subarea> getSubareas() {
        return subareas;
    }

    public void setSubareas(Set<com.aprendoz_desarrollo.data.Subarea> subareas) {
        this.subareas = subareas;
    }

}
