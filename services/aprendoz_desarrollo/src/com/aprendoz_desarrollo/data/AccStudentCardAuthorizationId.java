
package com.aprendoz_desarrollo.data;

import java.io.Serializable;


/**
 *  aprendoz_desarrollo.AccStudentCardAuthorizationId
 *  01/15/2014 19:40:54
 * 
 */
public class AccStudentCardAuthorizationId
    implements Serializable
{

    private Integer studentCardId;
    private Integer authorizationId;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof AccStudentCardAuthorizationId)) {
            return false;
        }
        AccStudentCardAuthorizationId other = ((AccStudentCardAuthorizationId) o);
        if (this.studentCardId == null) {
            if (other.studentCardId!= null) {
                return false;
            }
        } else {
            if (!this.studentCardId.equals(other.studentCardId)) {
                return false;
            }
        }
        if (this.authorizationId == null) {
            if (other.authorizationId!= null) {
                return false;
            }
        } else {
            if (!this.authorizationId.equals(other.authorizationId)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.studentCardId!= null) {
            rtn = (rtn + this.studentCardId.hashCode());
        }
        rtn = (rtn* 37);
        if (this.authorizationId!= null) {
            rtn = (rtn + this.authorizationId.hashCode());
        }
        return rtn;
    }

    public Integer getStudentCardId() {
        return studentCardId;
    }

    public void setStudentCardId(Integer studentCardId) {
        this.studentCardId = studentCardId;
    }

    public Integer getAuthorizationId() {
        return authorizationId;
    }

    public void setAuthorizationId(Integer authorizationId) {
        this.authorizationId = authorizationId;
    }

}
