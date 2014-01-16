
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.CafeteriaMenu
 *  01/15/2014 19:40:54
 * 
 */
public class CafeteriaMenu {

    private Integer idMenu;
    private Date fecha;
    private String diaSemana;
    private Integer sopaIdSopa;
    private Integer garniturasIdGarnituras;
    private Integer postresIdPostres;

    public Integer getIdMenu() {
        return idMenu;
    }

    public void setIdMenu(Integer idMenu) {
        this.idMenu = idMenu;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getDiaSemana() {
        return diaSemana;
    }

    public void setDiaSemana(String diaSemana) {
        this.diaSemana = diaSemana;
    }

    public Integer getSopaIdSopa() {
        return sopaIdSopa;
    }

    public void setSopaIdSopa(Integer sopaIdSopa) {
        this.sopaIdSopa = sopaIdSopa;
    }

    public Integer getGarniturasIdGarnituras() {
        return garniturasIdGarnituras;
    }

    public void setGarniturasIdGarnituras(Integer garniturasIdGarnituras) {
        this.garniturasIdGarnituras = garniturasIdGarnituras;
    }

    public Integer getPostresIdPostres() {
        return postresIdPostres;
    }

    public void setPostresIdPostres(Integer postresIdPostres) {
        this.postresIdPostres = postresIdPostres;
    }

}
