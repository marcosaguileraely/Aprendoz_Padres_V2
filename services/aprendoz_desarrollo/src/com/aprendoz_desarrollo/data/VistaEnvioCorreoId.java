
package com.aprendoz_desarrollo.data;

import java.io.Serializable;


/**
 *  aprendoz_desarrollo.VistaEnvioCorreoId
 *  01/15/2014 19:40:54
 * 
 */
public class VistaEnvioCorreoId
    implements Serializable
{

    private Integer idCurso;
    private String curso;
    private String grupoFamiliar;
    private String alumnoCodigo;
    private Integer alumnoId;
    private String alumnoApellido1;
    private String alumnoApellido2;
    private String alumnoNombre1;
    private String alumnoNombre2;
    private String alumnoUsuario;
    private String alumnoClave;
    private String alumnoMail;
    private String padreApellido1;
    private String padreApellido2;
    private String padreNombre1;
    private String padreNombre2;
    private String padreUsuario;
    private String padreClave;
    private String padreMail;
    private String madreApellido1;
    private String madreApellido2;
    private String madreNombre1;
    private String madreNombre2;
    private String madreUsuario;
    private String madreClave;
    private String madreCorreo;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof VistaEnvioCorreoId)) {
            return false;
        }
        VistaEnvioCorreoId other = ((VistaEnvioCorreoId) o);
        if (this.idCurso == null) {
            if (other.idCurso!= null) {
                return false;
            }
        } else {
            if (!this.idCurso.equals(other.idCurso)) {
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
        if (this.grupoFamiliar == null) {
            if (other.grupoFamiliar!= null) {
                return false;
            }
        } else {
            if (!this.grupoFamiliar.equals(other.grupoFamiliar)) {
                return false;
            }
        }
        if (this.alumnoCodigo == null) {
            if (other.alumnoCodigo!= null) {
                return false;
            }
        } else {
            if (!this.alumnoCodigo.equals(other.alumnoCodigo)) {
                return false;
            }
        }
        if (this.alumnoId == null) {
            if (other.alumnoId!= null) {
                return false;
            }
        } else {
            if (!this.alumnoId.equals(other.alumnoId)) {
                return false;
            }
        }
        if (this.alumnoApellido1 == null) {
            if (other.alumnoApellido1 != null) {
                return false;
            }
        } else {
            if (!this.alumnoApellido1 .equals(other.alumnoApellido1)) {
                return false;
            }
        }
        if (this.alumnoApellido2 == null) {
            if (other.alumnoApellido2 != null) {
                return false;
            }
        } else {
            if (!this.alumnoApellido2 .equals(other.alumnoApellido2)) {
                return false;
            }
        }
        if (this.alumnoNombre1 == null) {
            if (other.alumnoNombre1 != null) {
                return false;
            }
        } else {
            if (!this.alumnoNombre1 .equals(other.alumnoNombre1)) {
                return false;
            }
        }
        if (this.alumnoNombre2 == null) {
            if (other.alumnoNombre2 != null) {
                return false;
            }
        } else {
            if (!this.alumnoNombre2 .equals(other.alumnoNombre2)) {
                return false;
            }
        }
        if (this.alumnoUsuario == null) {
            if (other.alumnoUsuario!= null) {
                return false;
            }
        } else {
            if (!this.alumnoUsuario.equals(other.alumnoUsuario)) {
                return false;
            }
        }
        if (this.alumnoClave == null) {
            if (other.alumnoClave!= null) {
                return false;
            }
        } else {
            if (!this.alumnoClave.equals(other.alumnoClave)) {
                return false;
            }
        }
        if (this.alumnoMail == null) {
            if (other.alumnoMail!= null) {
                return false;
            }
        } else {
            if (!this.alumnoMail.equals(other.alumnoMail)) {
                return false;
            }
        }
        if (this.padreApellido1 == null) {
            if (other.padreApellido1 != null) {
                return false;
            }
        } else {
            if (!this.padreApellido1 .equals(other.padreApellido1)) {
                return false;
            }
        }
        if (this.padreApellido2 == null) {
            if (other.padreApellido2 != null) {
                return false;
            }
        } else {
            if (!this.padreApellido2 .equals(other.padreApellido2)) {
                return false;
            }
        }
        if (this.padreNombre1 == null) {
            if (other.padreNombre1 != null) {
                return false;
            }
        } else {
            if (!this.padreNombre1 .equals(other.padreNombre1)) {
                return false;
            }
        }
        if (this.padreNombre2 == null) {
            if (other.padreNombre2 != null) {
                return false;
            }
        } else {
            if (!this.padreNombre2 .equals(other.padreNombre2)) {
                return false;
            }
        }
        if (this.padreUsuario == null) {
            if (other.padreUsuario!= null) {
                return false;
            }
        } else {
            if (!this.padreUsuario.equals(other.padreUsuario)) {
                return false;
            }
        }
        if (this.padreClave == null) {
            if (other.padreClave!= null) {
                return false;
            }
        } else {
            if (!this.padreClave.equals(other.padreClave)) {
                return false;
            }
        }
        if (this.padreMail == null) {
            if (other.padreMail!= null) {
                return false;
            }
        } else {
            if (!this.padreMail.equals(other.padreMail)) {
                return false;
            }
        }
        if (this.madreApellido1 == null) {
            if (other.madreApellido1 != null) {
                return false;
            }
        } else {
            if (!this.madreApellido1 .equals(other.madreApellido1)) {
                return false;
            }
        }
        if (this.madreApellido2 == null) {
            if (other.madreApellido2 != null) {
                return false;
            }
        } else {
            if (!this.madreApellido2 .equals(other.madreApellido2)) {
                return false;
            }
        }
        if (this.madreNombre1 == null) {
            if (other.madreNombre1 != null) {
                return false;
            }
        } else {
            if (!this.madreNombre1 .equals(other.madreNombre1)) {
                return false;
            }
        }
        if (this.madreNombre2 == null) {
            if (other.madreNombre2 != null) {
                return false;
            }
        } else {
            if (!this.madreNombre2 .equals(other.madreNombre2)) {
                return false;
            }
        }
        if (this.madreUsuario == null) {
            if (other.madreUsuario!= null) {
                return false;
            }
        } else {
            if (!this.madreUsuario.equals(other.madreUsuario)) {
                return false;
            }
        }
        if (this.madreClave == null) {
            if (other.madreClave!= null) {
                return false;
            }
        } else {
            if (!this.madreClave.equals(other.madreClave)) {
                return false;
            }
        }
        if (this.madreCorreo == null) {
            if (other.madreCorreo!= null) {
                return false;
            }
        } else {
            if (!this.madreCorreo.equals(other.madreCorreo)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.idCurso!= null) {
            rtn = (rtn + this.idCurso.hashCode());
        }
        rtn = (rtn* 37);
        if (this.curso!= null) {
            rtn = (rtn + this.curso.hashCode());
        }
        rtn = (rtn* 37);
        if (this.grupoFamiliar!= null) {
            rtn = (rtn + this.grupoFamiliar.hashCode());
        }
        rtn = (rtn* 37);
        if (this.alumnoCodigo!= null) {
            rtn = (rtn + this.alumnoCodigo.hashCode());
        }
        rtn = (rtn* 37);
        if (this.alumnoId!= null) {
            rtn = (rtn + this.alumnoId.hashCode());
        }
        rtn = (rtn* 37);
        if (this.alumnoApellido1 != null) {
            rtn = (rtn + this.alumnoApellido1 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.alumnoApellido2 != null) {
            rtn = (rtn + this.alumnoApellido2 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.alumnoNombre1 != null) {
            rtn = (rtn + this.alumnoNombre1 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.alumnoNombre2 != null) {
            rtn = (rtn + this.alumnoNombre2 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.alumnoUsuario!= null) {
            rtn = (rtn + this.alumnoUsuario.hashCode());
        }
        rtn = (rtn* 37);
        if (this.alumnoClave!= null) {
            rtn = (rtn + this.alumnoClave.hashCode());
        }
        rtn = (rtn* 37);
        if (this.alumnoMail!= null) {
            rtn = (rtn + this.alumnoMail.hashCode());
        }
        rtn = (rtn* 37);
        if (this.padreApellido1 != null) {
            rtn = (rtn + this.padreApellido1 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.padreApellido2 != null) {
            rtn = (rtn + this.padreApellido2 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.padreNombre1 != null) {
            rtn = (rtn + this.padreNombre1 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.padreNombre2 != null) {
            rtn = (rtn + this.padreNombre2 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.padreUsuario!= null) {
            rtn = (rtn + this.padreUsuario.hashCode());
        }
        rtn = (rtn* 37);
        if (this.padreClave!= null) {
            rtn = (rtn + this.padreClave.hashCode());
        }
        rtn = (rtn* 37);
        if (this.padreMail!= null) {
            rtn = (rtn + this.padreMail.hashCode());
        }
        rtn = (rtn* 37);
        if (this.madreApellido1 != null) {
            rtn = (rtn + this.madreApellido1 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.madreApellido2 != null) {
            rtn = (rtn + this.madreApellido2 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.madreNombre1 != null) {
            rtn = (rtn + this.madreNombre1 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.madreNombre2 != null) {
            rtn = (rtn + this.madreNombre2 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.madreUsuario!= null) {
            rtn = (rtn + this.madreUsuario.hashCode());
        }
        rtn = (rtn* 37);
        if (this.madreClave!= null) {
            rtn = (rtn + this.madreClave.hashCode());
        }
        rtn = (rtn* 37);
        if (this.madreCorreo!= null) {
            rtn = (rtn + this.madreCorreo.hashCode());
        }
        return rtn;
    }

    public Integer getIdCurso() {
        return idCurso;
    }

    public void setIdCurso(Integer idCurso) {
        this.idCurso = idCurso;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public String getGrupoFamiliar() {
        return grupoFamiliar;
    }

    public void setGrupoFamiliar(String grupoFamiliar) {
        this.grupoFamiliar = grupoFamiliar;
    }

    public String getAlumnoCodigo() {
        return alumnoCodigo;
    }

    public void setAlumnoCodigo(String alumnoCodigo) {
        this.alumnoCodigo = alumnoCodigo;
    }

    public Integer getAlumnoId() {
        return alumnoId;
    }

    public void setAlumnoId(Integer alumnoId) {
        this.alumnoId = alumnoId;
    }

    public String getAlumnoApellido1() {
        return alumnoApellido1;
    }

    public void setAlumnoApellido1(String alumnoApellido1) {
        this.alumnoApellido1 = alumnoApellido1;
    }

    public String getAlumnoApellido2() {
        return alumnoApellido2;
    }

    public void setAlumnoApellido2(String alumnoApellido2) {
        this.alumnoApellido2 = alumnoApellido2;
    }

    public String getAlumnoNombre1() {
        return alumnoNombre1;
    }

    public void setAlumnoNombre1(String alumnoNombre1) {
        this.alumnoNombre1 = alumnoNombre1;
    }

    public String getAlumnoNombre2() {
        return alumnoNombre2;
    }

    public void setAlumnoNombre2(String alumnoNombre2) {
        this.alumnoNombre2 = alumnoNombre2;
    }

    public String getAlumnoUsuario() {
        return alumnoUsuario;
    }

    public void setAlumnoUsuario(String alumnoUsuario) {
        this.alumnoUsuario = alumnoUsuario;
    }

    public String getAlumnoClave() {
        return alumnoClave;
    }

    public void setAlumnoClave(String alumnoClave) {
        this.alumnoClave = alumnoClave;
    }

    public String getAlumnoMail() {
        return alumnoMail;
    }

    public void setAlumnoMail(String alumnoMail) {
        this.alumnoMail = alumnoMail;
    }

    public String getPadreApellido1() {
        return padreApellido1;
    }

    public void setPadreApellido1(String padreApellido1) {
        this.padreApellido1 = padreApellido1;
    }

    public String getPadreApellido2() {
        return padreApellido2;
    }

    public void setPadreApellido2(String padreApellido2) {
        this.padreApellido2 = padreApellido2;
    }

    public String getPadreNombre1() {
        return padreNombre1;
    }

    public void setPadreNombre1(String padreNombre1) {
        this.padreNombre1 = padreNombre1;
    }

    public String getPadreNombre2() {
        return padreNombre2;
    }

    public void setPadreNombre2(String padreNombre2) {
        this.padreNombre2 = padreNombre2;
    }

    public String getPadreUsuario() {
        return padreUsuario;
    }

    public void setPadreUsuario(String padreUsuario) {
        this.padreUsuario = padreUsuario;
    }

    public String getPadreClave() {
        return padreClave;
    }

    public void setPadreClave(String padreClave) {
        this.padreClave = padreClave;
    }

    public String getPadreMail() {
        return padreMail;
    }

    public void setPadreMail(String padreMail) {
        this.padreMail = padreMail;
    }

    public String getMadreApellido1() {
        return madreApellido1;
    }

    public void setMadreApellido1(String madreApellido1) {
        this.madreApellido1 = madreApellido1;
    }

    public String getMadreApellido2() {
        return madreApellido2;
    }

    public void setMadreApellido2(String madreApellido2) {
        this.madreApellido2 = madreApellido2;
    }

    public String getMadreNombre1() {
        return madreNombre1;
    }

    public void setMadreNombre1(String madreNombre1) {
        this.madreNombre1 = madreNombre1;
    }

    public String getMadreNombre2() {
        return madreNombre2;
    }

    public void setMadreNombre2(String madreNombre2) {
        this.madreNombre2 = madreNombre2;
    }

    public String getMadreUsuario() {
        return madreUsuario;
    }

    public void setMadreUsuario(String madreUsuario) {
        this.madreUsuario = madreUsuario;
    }

    public String getMadreClave() {
        return madreClave;
    }

    public void setMadreClave(String madreClave) {
        this.madreClave = madreClave;
    }

    public String getMadreCorreo() {
        return madreCorreo;
    }

    public void setMadreCorreo(String madreCorreo) {
        this.madreCorreo = madreCorreo;
    }

}
