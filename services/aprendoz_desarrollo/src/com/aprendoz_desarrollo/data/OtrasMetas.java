
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.OtrasMetas
 *  01/15/2014 19:40:54
 * 
 */
public class OtrasMetas {

    private Integer idOtraMeta;
    private Subtopico subtopico;
    private String meta;
    private Date fecha;
    private Boolean logrado;
    private Integer idSyIdIdSy;

    public Integer getIdOtraMeta() {
        return idOtraMeta;
    }

    public void setIdOtraMeta(Integer idOtraMeta) {
        this.idOtraMeta = idOtraMeta;
    }

    public Subtopico getSubtopico() {
        return subtopico;
    }

    public void setSubtopico(Subtopico subtopico) {
        this.subtopico = subtopico;
    }

    public String getMeta() {
        return meta;
    }

    public void setMeta(String meta) {
        this.meta = meta;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Boolean getLogrado() {
        return logrado;
    }

    public void setLogrado(Boolean logrado) {
        this.logrado = logrado;
    }

    public Integer getIdSyIdIdSy() {
        return idSyIdIdSy;
    }

    public void setIdSyIdIdSy(Integer idSyIdIdSy) {
        this.idSyIdIdSy = idSyIdIdSy;
    }

}
