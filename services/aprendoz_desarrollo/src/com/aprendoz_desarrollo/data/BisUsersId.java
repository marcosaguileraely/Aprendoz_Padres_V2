
package com.aprendoz_desarrollo.data;

import java.io.Serializable;


/**
 *  aprendoz_desarrollo.BisUsersId
 *  01/15/2014 19:40:54
 * 
 */
public class BisUsersId
    implements Serializable
{

    private String nombre;
    private String apellido;
    private String id;
    private String auth;
    private String hex;
    private String dec;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof BisUsersId)) {
            return false;
        }
        BisUsersId other = ((BisUsersId) o);
        if (this.nombre == null) {
            if (other.nombre!= null) {
                return false;
            }
        } else {
            if (!this.nombre.equals(other.nombre)) {
                return false;
            }
        }
        if (this.apellido == null) {
            if (other.apellido!= null) {
                return false;
            }
        } else {
            if (!this.apellido.equals(other.apellido)) {
                return false;
            }
        }
        if (this.id == null) {
            if (other.id!= null) {
                return false;
            }
        } else {
            if (!this.id.equals(other.id)) {
                return false;
            }
        }
        if (this.auth == null) {
            if (other.auth!= null) {
                return false;
            }
        } else {
            if (!this.auth.equals(other.auth)) {
                return false;
            }
        }
        if (this.hex == null) {
            if (other.hex!= null) {
                return false;
            }
        } else {
            if (!this.hex.equals(other.hex)) {
                return false;
            }
        }
        if (this.dec == null) {
            if (other.dec!= null) {
                return false;
            }
        } else {
            if (!this.dec.equals(other.dec)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.nombre!= null) {
            rtn = (rtn + this.nombre.hashCode());
        }
        rtn = (rtn* 37);
        if (this.apellido!= null) {
            rtn = (rtn + this.apellido.hashCode());
        }
        rtn = (rtn* 37);
        if (this.id!= null) {
            rtn = (rtn + this.id.hashCode());
        }
        rtn = (rtn* 37);
        if (this.auth!= null) {
            rtn = (rtn + this.auth.hashCode());
        }
        rtn = (rtn* 37);
        if (this.hex!= null) {
            rtn = (rtn + this.hex.hashCode());
        }
        rtn = (rtn* 37);
        if (this.dec!= null) {
            rtn = (rtn + this.dec.hashCode());
        }
        return rtn;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getAuth() {
        return auth;
    }

    public void setAuth(String auth) {
        this.auth = auth;
    }

    public String getHex() {
        return hex;
    }

    public void setHex(String hex) {
        this.hex = hex;
    }

    public String getDec() {
        return dec;
    }

    public void setDec(String dec) {
        this.dec = dec;
    }

}
