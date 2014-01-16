
package com.aprendoz_desarrollo.data;

import java.io.Serializable;
import java.util.Date;


/**
 *  aprendoz_desarrollo.VistaAlumnosActivosId
 *  01/15/2014 19:40:54
 * 
 */
public class VistaAlumnosActivosId
    implements Serializable
{

    private String schoolYear;
    private Integer idGrado;
    private String nivel;
    private String grado;
    private Integer idCurso;
    private String curso;
    private String codigo;
    private String apellido1;
    private String apellido2;
    private String nombre1;
    private String nombre2;
    private Integer idPersona;
    private String noDocumento;
    private String tipoDocumento;
    private Boolean hijoDeExalumno;
    private String nombreLdap;
    private String clave;
    private String email;
    private Boolean activoRetirado;
    private String nivelAcademico;
    private Date fechaNacimiento;
    private String lugarNacimientoMunicipio;
    private String lugarNacimientoDepartamento;
    private String nacionalidad;
    private String direccionResidencia;
    private String telefono;
    private String telefono2;
    private String religion;
    private String lugarExpedicionMunicipio;
    private String lugarExpedicionDepartamento;
    private String barrio;
    private String municipio;
    private String departamento;
    private String saludPrepagada;
    private String eps;
    private String numeroContratoSalud;
    private String clinicaEmergencia;
    private String viveCon;
    private String tipoSangre;
    private String sexo;
    private String codigoFamilia;
    private Date fechaIngreso;
    private String gradoIngreso;
    private String cursoIngreso;
    private Date fechaRetiro;
    private String comentarioRetiro;
    private String colegioAnterior;
    private String nombrePadreExalumno;
    private String promocion;
    private String profesion;
    private String empresa;
    private String cargo;
    private String celular;
    private String direccionOficina;
    private String telefonoOficina;
    private String parentesco;
    private String rutaM;
    private String rutaT;
    private Boolean tomaAlmuerzo;
    private Boolean tomaMediasNueves;
    private Boolean tomaSeguroAccidentes;
    private String noPlaqueta;
    private Integer tipoPersonaIdTipoPersona;
    private Integer grupoFamiliarIdGrupoFamiliar;
    private Integer paisNacId;
    private Boolean matriculado;
    private Integer inscAlumCursoIdInscAlumCurso;
    private String paisDomicilio;
    private String codigoPostal;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof VistaAlumnosActivosId)) {
            return false;
        }
        VistaAlumnosActivosId other = ((VistaAlumnosActivosId) o);
        if (this.schoolYear == null) {
            if (other.schoolYear!= null) {
                return false;
            }
        } else {
            if (!this.schoolYear.equals(other.schoolYear)) {
                return false;
            }
        }
        if (this.idGrado == null) {
            if (other.idGrado!= null) {
                return false;
            }
        } else {
            if (!this.idGrado.equals(other.idGrado)) {
                return false;
            }
        }
        if (this.nivel == null) {
            if (other.nivel!= null) {
                return false;
            }
        } else {
            if (!this.nivel.equals(other.nivel)) {
                return false;
            }
        }
        if (this.grado == null) {
            if (other.grado!= null) {
                return false;
            }
        } else {
            if (!this.grado.equals(other.grado)) {
                return false;
            }
        }
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
        if (this.codigo == null) {
            if (other.codigo!= null) {
                return false;
            }
        } else {
            if (!this.codigo.equals(other.codigo)) {
                return false;
            }
        }
        if (this.apellido1 == null) {
            if (other.apellido1 != null) {
                return false;
            }
        } else {
            if (!this.apellido1 .equals(other.apellido1)) {
                return false;
            }
        }
        if (this.apellido2 == null) {
            if (other.apellido2 != null) {
                return false;
            }
        } else {
            if (!this.apellido2 .equals(other.apellido2)) {
                return false;
            }
        }
        if (this.nombre1 == null) {
            if (other.nombre1 != null) {
                return false;
            }
        } else {
            if (!this.nombre1 .equals(other.nombre1)) {
                return false;
            }
        }
        if (this.nombre2 == null) {
            if (other.nombre2 != null) {
                return false;
            }
        } else {
            if (!this.nombre2 .equals(other.nombre2)) {
                return false;
            }
        }
        if (this.idPersona == null) {
            if (other.idPersona!= null) {
                return false;
            }
        } else {
            if (!this.idPersona.equals(other.idPersona)) {
                return false;
            }
        }
        if (this.noDocumento == null) {
            if (other.noDocumento!= null) {
                return false;
            }
        } else {
            if (!this.noDocumento.equals(other.noDocumento)) {
                return false;
            }
        }
        if (this.tipoDocumento == null) {
            if (other.tipoDocumento!= null) {
                return false;
            }
        } else {
            if (!this.tipoDocumento.equals(other.tipoDocumento)) {
                return false;
            }
        }
        if (this.hijoDeExalumno == null) {
            if (other.hijoDeExalumno!= null) {
                return false;
            }
        } else {
            if (!this.hijoDeExalumno.equals(other.hijoDeExalumno)) {
                return false;
            }
        }
        if (this.nombreLdap == null) {
            if (other.nombreLdap!= null) {
                return false;
            }
        } else {
            if (!this.nombreLdap.equals(other.nombreLdap)) {
                return false;
            }
        }
        if (this.clave == null) {
            if (other.clave!= null) {
                return false;
            }
        } else {
            if (!this.clave.equals(other.clave)) {
                return false;
            }
        }
        if (this.email == null) {
            if (other.email!= null) {
                return false;
            }
        } else {
            if (!this.email.equals(other.email)) {
                return false;
            }
        }
        if (this.activoRetirado == null) {
            if (other.activoRetirado!= null) {
                return false;
            }
        } else {
            if (!this.activoRetirado.equals(other.activoRetirado)) {
                return false;
            }
        }
        if (this.nivelAcademico == null) {
            if (other.nivelAcademico!= null) {
                return false;
            }
        } else {
            if (!this.nivelAcademico.equals(other.nivelAcademico)) {
                return false;
            }
        }
        if (this.fechaNacimiento == null) {
            if (other.fechaNacimiento!= null) {
                return false;
            }
        } else {
            if (!this.fechaNacimiento.equals(other.fechaNacimiento)) {
                return false;
            }
        }
        if (this.lugarNacimientoMunicipio == null) {
            if (other.lugarNacimientoMunicipio!= null) {
                return false;
            }
        } else {
            if (!this.lugarNacimientoMunicipio.equals(other.lugarNacimientoMunicipio)) {
                return false;
            }
        }
        if (this.lugarNacimientoDepartamento == null) {
            if (other.lugarNacimientoDepartamento!= null) {
                return false;
            }
        } else {
            if (!this.lugarNacimientoDepartamento.equals(other.lugarNacimientoDepartamento)) {
                return false;
            }
        }
        if (this.nacionalidad == null) {
            if (other.nacionalidad!= null) {
                return false;
            }
        } else {
            if (!this.nacionalidad.equals(other.nacionalidad)) {
                return false;
            }
        }
        if (this.direccionResidencia == null) {
            if (other.direccionResidencia!= null) {
                return false;
            }
        } else {
            if (!this.direccionResidencia.equals(other.direccionResidencia)) {
                return false;
            }
        }
        if (this.telefono == null) {
            if (other.telefono!= null) {
                return false;
            }
        } else {
            if (!this.telefono.equals(other.telefono)) {
                return false;
            }
        }
        if (this.telefono2 == null) {
            if (other.telefono2 != null) {
                return false;
            }
        } else {
            if (!this.telefono2 .equals(other.telefono2)) {
                return false;
            }
        }
        if (this.religion == null) {
            if (other.religion!= null) {
                return false;
            }
        } else {
            if (!this.religion.equals(other.religion)) {
                return false;
            }
        }
        if (this.lugarExpedicionMunicipio == null) {
            if (other.lugarExpedicionMunicipio!= null) {
                return false;
            }
        } else {
            if (!this.lugarExpedicionMunicipio.equals(other.lugarExpedicionMunicipio)) {
                return false;
            }
        }
        if (this.lugarExpedicionDepartamento == null) {
            if (other.lugarExpedicionDepartamento!= null) {
                return false;
            }
        } else {
            if (!this.lugarExpedicionDepartamento.equals(other.lugarExpedicionDepartamento)) {
                return false;
            }
        }
        if (this.barrio == null) {
            if (other.barrio!= null) {
                return false;
            }
        } else {
            if (!this.barrio.equals(other.barrio)) {
                return false;
            }
        }
        if (this.municipio == null) {
            if (other.municipio!= null) {
                return false;
            }
        } else {
            if (!this.municipio.equals(other.municipio)) {
                return false;
            }
        }
        if (this.departamento == null) {
            if (other.departamento!= null) {
                return false;
            }
        } else {
            if (!this.departamento.equals(other.departamento)) {
                return false;
            }
        }
        if (this.saludPrepagada == null) {
            if (other.saludPrepagada!= null) {
                return false;
            }
        } else {
            if (!this.saludPrepagada.equals(other.saludPrepagada)) {
                return false;
            }
        }
        if (this.eps == null) {
            if (other.eps!= null) {
                return false;
            }
        } else {
            if (!this.eps.equals(other.eps)) {
                return false;
            }
        }
        if (this.numeroContratoSalud == null) {
            if (other.numeroContratoSalud!= null) {
                return false;
            }
        } else {
            if (!this.numeroContratoSalud.equals(other.numeroContratoSalud)) {
                return false;
            }
        }
        if (this.clinicaEmergencia == null) {
            if (other.clinicaEmergencia!= null) {
                return false;
            }
        } else {
            if (!this.clinicaEmergencia.equals(other.clinicaEmergencia)) {
                return false;
            }
        }
        if (this.viveCon == null) {
            if (other.viveCon!= null) {
                return false;
            }
        } else {
            if (!this.viveCon.equals(other.viveCon)) {
                return false;
            }
        }
        if (this.tipoSangre == null) {
            if (other.tipoSangre!= null) {
                return false;
            }
        } else {
            if (!this.tipoSangre.equals(other.tipoSangre)) {
                return false;
            }
        }
        if (this.sexo == null) {
            if (other.sexo!= null) {
                return false;
            }
        } else {
            if (!this.sexo.equals(other.sexo)) {
                return false;
            }
        }
        if (this.codigoFamilia == null) {
            if (other.codigoFamilia!= null) {
                return false;
            }
        } else {
            if (!this.codigoFamilia.equals(other.codigoFamilia)) {
                return false;
            }
        }
        if (this.fechaIngreso == null) {
            if (other.fechaIngreso!= null) {
                return false;
            }
        } else {
            if (!this.fechaIngreso.equals(other.fechaIngreso)) {
                return false;
            }
        }
        if (this.gradoIngreso == null) {
            if (other.gradoIngreso!= null) {
                return false;
            }
        } else {
            if (!this.gradoIngreso.equals(other.gradoIngreso)) {
                return false;
            }
        }
        if (this.cursoIngreso == null) {
            if (other.cursoIngreso!= null) {
                return false;
            }
        } else {
            if (!this.cursoIngreso.equals(other.cursoIngreso)) {
                return false;
            }
        }
        if (this.fechaRetiro == null) {
            if (other.fechaRetiro!= null) {
                return false;
            }
        } else {
            if (!this.fechaRetiro.equals(other.fechaRetiro)) {
                return false;
            }
        }
        if (this.comentarioRetiro == null) {
            if (other.comentarioRetiro!= null) {
                return false;
            }
        } else {
            if (!this.comentarioRetiro.equals(other.comentarioRetiro)) {
                return false;
            }
        }
        if (this.colegioAnterior == null) {
            if (other.colegioAnterior!= null) {
                return false;
            }
        } else {
            if (!this.colegioAnterior.equals(other.colegioAnterior)) {
                return false;
            }
        }
        if (this.nombrePadreExalumno == null) {
            if (other.nombrePadreExalumno!= null) {
                return false;
            }
        } else {
            if (!this.nombrePadreExalumno.equals(other.nombrePadreExalumno)) {
                return false;
            }
        }
        if (this.promocion == null) {
            if (other.promocion!= null) {
                return false;
            }
        } else {
            if (!this.promocion.equals(other.promocion)) {
                return false;
            }
        }
        if (this.profesion == null) {
            if (other.profesion!= null) {
                return false;
            }
        } else {
            if (!this.profesion.equals(other.profesion)) {
                return false;
            }
        }
        if (this.empresa == null) {
            if (other.empresa!= null) {
                return false;
            }
        } else {
            if (!this.empresa.equals(other.empresa)) {
                return false;
            }
        }
        if (this.cargo == null) {
            if (other.cargo!= null) {
                return false;
            }
        } else {
            if (!this.cargo.equals(other.cargo)) {
                return false;
            }
        }
        if (this.celular == null) {
            if (other.celular!= null) {
                return false;
            }
        } else {
            if (!this.celular.equals(other.celular)) {
                return false;
            }
        }
        if (this.direccionOficina == null) {
            if (other.direccionOficina!= null) {
                return false;
            }
        } else {
            if (!this.direccionOficina.equals(other.direccionOficina)) {
                return false;
            }
        }
        if (this.telefonoOficina == null) {
            if (other.telefonoOficina!= null) {
                return false;
            }
        } else {
            if (!this.telefonoOficina.equals(other.telefonoOficina)) {
                return false;
            }
        }
        if (this.parentesco == null) {
            if (other.parentesco!= null) {
                return false;
            }
        } else {
            if (!this.parentesco.equals(other.parentesco)) {
                return false;
            }
        }
        if (this.rutaM == null) {
            if (other.rutaM!= null) {
                return false;
            }
        } else {
            if (!this.rutaM.equals(other.rutaM)) {
                return false;
            }
        }
        if (this.rutaT == null) {
            if (other.rutaT!= null) {
                return false;
            }
        } else {
            if (!this.rutaT.equals(other.rutaT)) {
                return false;
            }
        }
        if (this.tomaAlmuerzo == null) {
            if (other.tomaAlmuerzo!= null) {
                return false;
            }
        } else {
            if (!this.tomaAlmuerzo.equals(other.tomaAlmuerzo)) {
                return false;
            }
        }
        if (this.tomaMediasNueves == null) {
            if (other.tomaMediasNueves!= null) {
                return false;
            }
        } else {
            if (!this.tomaMediasNueves.equals(other.tomaMediasNueves)) {
                return false;
            }
        }
        if (this.tomaSeguroAccidentes == null) {
            if (other.tomaSeguroAccidentes!= null) {
                return false;
            }
        } else {
            if (!this.tomaSeguroAccidentes.equals(other.tomaSeguroAccidentes)) {
                return false;
            }
        }
        if (this.noPlaqueta == null) {
            if (other.noPlaqueta!= null) {
                return false;
            }
        } else {
            if (!this.noPlaqueta.equals(other.noPlaqueta)) {
                return false;
            }
        }
        if (this.tipoPersonaIdTipoPersona == null) {
            if (other.tipoPersonaIdTipoPersona!= null) {
                return false;
            }
        } else {
            if (!this.tipoPersonaIdTipoPersona.equals(other.tipoPersonaIdTipoPersona)) {
                return false;
            }
        }
        if (this.grupoFamiliarIdGrupoFamiliar == null) {
            if (other.grupoFamiliarIdGrupoFamiliar!= null) {
                return false;
            }
        } else {
            if (!this.grupoFamiliarIdGrupoFamiliar.equals(other.grupoFamiliarIdGrupoFamiliar)) {
                return false;
            }
        }
        if (this.paisNacId == null) {
            if (other.paisNacId!= null) {
                return false;
            }
        } else {
            if (!this.paisNacId.equals(other.paisNacId)) {
                return false;
            }
        }
        if (this.matriculado == null) {
            if (other.matriculado!= null) {
                return false;
            }
        } else {
            if (!this.matriculado.equals(other.matriculado)) {
                return false;
            }
        }
        if (this.inscAlumCursoIdInscAlumCurso == null) {
            if (other.inscAlumCursoIdInscAlumCurso!= null) {
                return false;
            }
        } else {
            if (!this.inscAlumCursoIdInscAlumCurso.equals(other.inscAlumCursoIdInscAlumCurso)) {
                return false;
            }
        }
        if (this.paisDomicilio == null) {
            if (other.paisDomicilio!= null) {
                return false;
            }
        } else {
            if (!this.paisDomicilio.equals(other.paisDomicilio)) {
                return false;
            }
        }
        if (this.codigoPostal == null) {
            if (other.codigoPostal!= null) {
                return false;
            }
        } else {
            if (!this.codigoPostal.equals(other.codigoPostal)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.schoolYear!= null) {
            rtn = (rtn + this.schoolYear.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idGrado!= null) {
            rtn = (rtn + this.idGrado.hashCode());
        }
        rtn = (rtn* 37);
        if (this.nivel!= null) {
            rtn = (rtn + this.nivel.hashCode());
        }
        rtn = (rtn* 37);
        if (this.grado!= null) {
            rtn = (rtn + this.grado.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idCurso!= null) {
            rtn = (rtn + this.idCurso.hashCode());
        }
        rtn = (rtn* 37);
        if (this.curso!= null) {
            rtn = (rtn + this.curso.hashCode());
        }
        rtn = (rtn* 37);
        if (this.codigo!= null) {
            rtn = (rtn + this.codigo.hashCode());
        }
        rtn = (rtn* 37);
        if (this.apellido1 != null) {
            rtn = (rtn + this.apellido1 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.apellido2 != null) {
            rtn = (rtn + this.apellido2 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.nombre1 != null) {
            rtn = (rtn + this.nombre1 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.nombre2 != null) {
            rtn = (rtn + this.nombre2 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.idPersona!= null) {
            rtn = (rtn + this.idPersona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.noDocumento!= null) {
            rtn = (rtn + this.noDocumento.hashCode());
        }
        rtn = (rtn* 37);
        if (this.tipoDocumento!= null) {
            rtn = (rtn + this.tipoDocumento.hashCode());
        }
        rtn = (rtn* 37);
        if (this.hijoDeExalumno!= null) {
            rtn = (rtn + this.hijoDeExalumno.hashCode());
        }
        rtn = (rtn* 37);
        if (this.nombreLdap!= null) {
            rtn = (rtn + this.nombreLdap.hashCode());
        }
        rtn = (rtn* 37);
        if (this.clave!= null) {
            rtn = (rtn + this.clave.hashCode());
        }
        rtn = (rtn* 37);
        if (this.email!= null) {
            rtn = (rtn + this.email.hashCode());
        }
        rtn = (rtn* 37);
        if (this.activoRetirado!= null) {
            rtn = (rtn + this.activoRetirado.hashCode());
        }
        rtn = (rtn* 37);
        if (this.nivelAcademico!= null) {
            rtn = (rtn + this.nivelAcademico.hashCode());
        }
        rtn = (rtn* 37);
        if (this.fechaNacimiento!= null) {
            rtn = (rtn + this.fechaNacimiento.hashCode());
        }
        rtn = (rtn* 37);
        if (this.lugarNacimientoMunicipio!= null) {
            rtn = (rtn + this.lugarNacimientoMunicipio.hashCode());
        }
        rtn = (rtn* 37);
        if (this.lugarNacimientoDepartamento!= null) {
            rtn = (rtn + this.lugarNacimientoDepartamento.hashCode());
        }
        rtn = (rtn* 37);
        if (this.nacionalidad!= null) {
            rtn = (rtn + this.nacionalidad.hashCode());
        }
        rtn = (rtn* 37);
        if (this.direccionResidencia!= null) {
            rtn = (rtn + this.direccionResidencia.hashCode());
        }
        rtn = (rtn* 37);
        if (this.telefono!= null) {
            rtn = (rtn + this.telefono.hashCode());
        }
        rtn = (rtn* 37);
        if (this.telefono2 != null) {
            rtn = (rtn + this.telefono2 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.religion!= null) {
            rtn = (rtn + this.religion.hashCode());
        }
        rtn = (rtn* 37);
        if (this.lugarExpedicionMunicipio!= null) {
            rtn = (rtn + this.lugarExpedicionMunicipio.hashCode());
        }
        rtn = (rtn* 37);
        if (this.lugarExpedicionDepartamento!= null) {
            rtn = (rtn + this.lugarExpedicionDepartamento.hashCode());
        }
        rtn = (rtn* 37);
        if (this.barrio!= null) {
            rtn = (rtn + this.barrio.hashCode());
        }
        rtn = (rtn* 37);
        if (this.municipio!= null) {
            rtn = (rtn + this.municipio.hashCode());
        }
        rtn = (rtn* 37);
        if (this.departamento!= null) {
            rtn = (rtn + this.departamento.hashCode());
        }
        rtn = (rtn* 37);
        if (this.saludPrepagada!= null) {
            rtn = (rtn + this.saludPrepagada.hashCode());
        }
        rtn = (rtn* 37);
        if (this.eps!= null) {
            rtn = (rtn + this.eps.hashCode());
        }
        rtn = (rtn* 37);
        if (this.numeroContratoSalud!= null) {
            rtn = (rtn + this.numeroContratoSalud.hashCode());
        }
        rtn = (rtn* 37);
        if (this.clinicaEmergencia!= null) {
            rtn = (rtn + this.clinicaEmergencia.hashCode());
        }
        rtn = (rtn* 37);
        if (this.viveCon!= null) {
            rtn = (rtn + this.viveCon.hashCode());
        }
        rtn = (rtn* 37);
        if (this.tipoSangre!= null) {
            rtn = (rtn + this.tipoSangre.hashCode());
        }
        rtn = (rtn* 37);
        if (this.sexo!= null) {
            rtn = (rtn + this.sexo.hashCode());
        }
        rtn = (rtn* 37);
        if (this.codigoFamilia!= null) {
            rtn = (rtn + this.codigoFamilia.hashCode());
        }
        rtn = (rtn* 37);
        if (this.fechaIngreso!= null) {
            rtn = (rtn + this.fechaIngreso.hashCode());
        }
        rtn = (rtn* 37);
        if (this.gradoIngreso!= null) {
            rtn = (rtn + this.gradoIngreso.hashCode());
        }
        rtn = (rtn* 37);
        if (this.cursoIngreso!= null) {
            rtn = (rtn + this.cursoIngreso.hashCode());
        }
        rtn = (rtn* 37);
        if (this.fechaRetiro!= null) {
            rtn = (rtn + this.fechaRetiro.hashCode());
        }
        rtn = (rtn* 37);
        if (this.comentarioRetiro!= null) {
            rtn = (rtn + this.comentarioRetiro.hashCode());
        }
        rtn = (rtn* 37);
        if (this.colegioAnterior!= null) {
            rtn = (rtn + this.colegioAnterior.hashCode());
        }
        rtn = (rtn* 37);
        if (this.nombrePadreExalumno!= null) {
            rtn = (rtn + this.nombrePadreExalumno.hashCode());
        }
        rtn = (rtn* 37);
        if (this.promocion!= null) {
            rtn = (rtn + this.promocion.hashCode());
        }
        rtn = (rtn* 37);
        if (this.profesion!= null) {
            rtn = (rtn + this.profesion.hashCode());
        }
        rtn = (rtn* 37);
        if (this.empresa!= null) {
            rtn = (rtn + this.empresa.hashCode());
        }
        rtn = (rtn* 37);
        if (this.cargo!= null) {
            rtn = (rtn + this.cargo.hashCode());
        }
        rtn = (rtn* 37);
        if (this.celular!= null) {
            rtn = (rtn + this.celular.hashCode());
        }
        rtn = (rtn* 37);
        if (this.direccionOficina!= null) {
            rtn = (rtn + this.direccionOficina.hashCode());
        }
        rtn = (rtn* 37);
        if (this.telefonoOficina!= null) {
            rtn = (rtn + this.telefonoOficina.hashCode());
        }
        rtn = (rtn* 37);
        if (this.parentesco!= null) {
            rtn = (rtn + this.parentesco.hashCode());
        }
        rtn = (rtn* 37);
        if (this.rutaM!= null) {
            rtn = (rtn + this.rutaM.hashCode());
        }
        rtn = (rtn* 37);
        if (this.rutaT!= null) {
            rtn = (rtn + this.rutaT.hashCode());
        }
        rtn = (rtn* 37);
        if (this.tomaAlmuerzo!= null) {
            rtn = (rtn + this.tomaAlmuerzo.hashCode());
        }
        rtn = (rtn* 37);
        if (this.tomaMediasNueves!= null) {
            rtn = (rtn + this.tomaMediasNueves.hashCode());
        }
        rtn = (rtn* 37);
        if (this.tomaSeguroAccidentes!= null) {
            rtn = (rtn + this.tomaSeguroAccidentes.hashCode());
        }
        rtn = (rtn* 37);
        if (this.noPlaqueta!= null) {
            rtn = (rtn + this.noPlaqueta.hashCode());
        }
        rtn = (rtn* 37);
        if (this.tipoPersonaIdTipoPersona!= null) {
            rtn = (rtn + this.tipoPersonaIdTipoPersona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.grupoFamiliarIdGrupoFamiliar!= null) {
            rtn = (rtn + this.grupoFamiliarIdGrupoFamiliar.hashCode());
        }
        rtn = (rtn* 37);
        if (this.paisNacId!= null) {
            rtn = (rtn + this.paisNacId.hashCode());
        }
        rtn = (rtn* 37);
        if (this.matriculado!= null) {
            rtn = (rtn + this.matriculado.hashCode());
        }
        rtn = (rtn* 37);
        if (this.inscAlumCursoIdInscAlumCurso!= null) {
            rtn = (rtn + this.inscAlumCursoIdInscAlumCurso.hashCode());
        }
        rtn = (rtn* 37);
        if (this.paisDomicilio!= null) {
            rtn = (rtn + this.paisDomicilio.hashCode());
        }
        rtn = (rtn* 37);
        if (this.codigoPostal!= null) {
            rtn = (rtn + this.codigoPostal.hashCode());
        }
        return rtn;
    }

    public String getSchoolYear() {
        return schoolYear;
    }

    public void setSchoolYear(String schoolYear) {
        this.schoolYear = schoolYear;
    }

    public Integer getIdGrado() {
        return idGrado;
    }

    public void setIdGrado(Integer idGrado) {
        this.idGrado = idGrado;
    }

    public String getNivel() {
        return nivel;
    }

    public void setNivel(String nivel) {
        this.nivel = nivel;
    }

    public String getGrado() {
        return grado;
    }

    public void setGrado(String grado) {
        this.grado = grado;
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

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getApellido1() {
        return apellido1;
    }

    public void setApellido1(String apellido1) {
        this.apellido1 = apellido1;
    }

    public String getApellido2() {
        return apellido2;
    }

    public void setApellido2(String apellido2) {
        this.apellido2 = apellido2;
    }

    public String getNombre1() {
        return nombre1;
    }

    public void setNombre1(String nombre1) {
        this.nombre1 = nombre1;
    }

    public String getNombre2() {
        return nombre2;
    }

    public void setNombre2(String nombre2) {
        this.nombre2 = nombre2;
    }

    public Integer getIdPersona() {
        return idPersona;
    }

    public void setIdPersona(Integer idPersona) {
        this.idPersona = idPersona;
    }

    public String getNoDocumento() {
        return noDocumento;
    }

    public void setNoDocumento(String noDocumento) {
        this.noDocumento = noDocumento;
    }

    public String getTipoDocumento() {
        return tipoDocumento;
    }

    public void setTipoDocumento(String tipoDocumento) {
        this.tipoDocumento = tipoDocumento;
    }

    public Boolean getHijoDeExalumno() {
        return hijoDeExalumno;
    }

    public void setHijoDeExalumno(Boolean hijoDeExalumno) {
        this.hijoDeExalumno = hijoDeExalumno;
    }

    public String getNombreLdap() {
        return nombreLdap;
    }

    public void setNombreLdap(String nombreLdap) {
        this.nombreLdap = nombreLdap;
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Boolean getActivoRetirado() {
        return activoRetirado;
    }

    public void setActivoRetirado(Boolean activoRetirado) {
        this.activoRetirado = activoRetirado;
    }

    public String getNivelAcademico() {
        return nivelAcademico;
    }

    public void setNivelAcademico(String nivelAcademico) {
        this.nivelAcademico = nivelAcademico;
    }

    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public String getLugarNacimientoMunicipio() {
        return lugarNacimientoMunicipio;
    }

    public void setLugarNacimientoMunicipio(String lugarNacimientoMunicipio) {
        this.lugarNacimientoMunicipio = lugarNacimientoMunicipio;
    }

    public String getLugarNacimientoDepartamento() {
        return lugarNacimientoDepartamento;
    }

    public void setLugarNacimientoDepartamento(String lugarNacimientoDepartamento) {
        this.lugarNacimientoDepartamento = lugarNacimientoDepartamento;
    }

    public String getNacionalidad() {
        return nacionalidad;
    }

    public void setNacionalidad(String nacionalidad) {
        this.nacionalidad = nacionalidad;
    }

    public String getDireccionResidencia() {
        return direccionResidencia;
    }

    public void setDireccionResidencia(String direccionResidencia) {
        this.direccionResidencia = direccionResidencia;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getTelefono2() {
        return telefono2;
    }

    public void setTelefono2(String telefono2) {
        this.telefono2 = telefono2;
    }

    public String getReligion() {
        return religion;
    }

    public void setReligion(String religion) {
        this.religion = religion;
    }

    public String getLugarExpedicionMunicipio() {
        return lugarExpedicionMunicipio;
    }

    public void setLugarExpedicionMunicipio(String lugarExpedicionMunicipio) {
        this.lugarExpedicionMunicipio = lugarExpedicionMunicipio;
    }

    public String getLugarExpedicionDepartamento() {
        return lugarExpedicionDepartamento;
    }

    public void setLugarExpedicionDepartamento(String lugarExpedicionDepartamento) {
        this.lugarExpedicionDepartamento = lugarExpedicionDepartamento;
    }

    public String getBarrio() {
        return barrio;
    }

    public void setBarrio(String barrio) {
        this.barrio = barrio;
    }

    public String getMunicipio() {
        return municipio;
    }

    public void setMunicipio(String municipio) {
        this.municipio = municipio;
    }

    public String getDepartamento() {
        return departamento;
    }

    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }

    public String getSaludPrepagada() {
        return saludPrepagada;
    }

    public void setSaludPrepagada(String saludPrepagada) {
        this.saludPrepagada = saludPrepagada;
    }

    public String getEps() {
        return eps;
    }

    public void setEps(String eps) {
        this.eps = eps;
    }

    public String getNumeroContratoSalud() {
        return numeroContratoSalud;
    }

    public void setNumeroContratoSalud(String numeroContratoSalud) {
        this.numeroContratoSalud = numeroContratoSalud;
    }

    public String getClinicaEmergencia() {
        return clinicaEmergencia;
    }

    public void setClinicaEmergencia(String clinicaEmergencia) {
        this.clinicaEmergencia = clinicaEmergencia;
    }

    public String getViveCon() {
        return viveCon;
    }

    public void setViveCon(String viveCon) {
        this.viveCon = viveCon;
    }

    public String getTipoSangre() {
        return tipoSangre;
    }

    public void setTipoSangre(String tipoSangre) {
        this.tipoSangre = tipoSangre;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getCodigoFamilia() {
        return codigoFamilia;
    }

    public void setCodigoFamilia(String codigoFamilia) {
        this.codigoFamilia = codigoFamilia;
    }

    public Date getFechaIngreso() {
        return fechaIngreso;
    }

    public void setFechaIngreso(Date fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    }

    public String getGradoIngreso() {
        return gradoIngreso;
    }

    public void setGradoIngreso(String gradoIngreso) {
        this.gradoIngreso = gradoIngreso;
    }

    public String getCursoIngreso() {
        return cursoIngreso;
    }

    public void setCursoIngreso(String cursoIngreso) {
        this.cursoIngreso = cursoIngreso;
    }

    public Date getFechaRetiro() {
        return fechaRetiro;
    }

    public void setFechaRetiro(Date fechaRetiro) {
        this.fechaRetiro = fechaRetiro;
    }

    public String getComentarioRetiro() {
        return comentarioRetiro;
    }

    public void setComentarioRetiro(String comentarioRetiro) {
        this.comentarioRetiro = comentarioRetiro;
    }

    public String getColegioAnterior() {
        return colegioAnterior;
    }

    public void setColegioAnterior(String colegioAnterior) {
        this.colegioAnterior = colegioAnterior;
    }

    public String getNombrePadreExalumno() {
        return nombrePadreExalumno;
    }

    public void setNombrePadreExalumno(String nombrePadreExalumno) {
        this.nombrePadreExalumno = nombrePadreExalumno;
    }

    public String getPromocion() {
        return promocion;
    }

    public void setPromocion(String promocion) {
        this.promocion = promocion;
    }

    public String getProfesion() {
        return profesion;
    }

    public void setProfesion(String profesion) {
        this.profesion = profesion;
    }

    public String getEmpresa() {
        return empresa;
    }

    public void setEmpresa(String empresa) {
        this.empresa = empresa;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public String getDireccionOficina() {
        return direccionOficina;
    }

    public void setDireccionOficina(String direccionOficina) {
        this.direccionOficina = direccionOficina;
    }

    public String getTelefonoOficina() {
        return telefonoOficina;
    }

    public void setTelefonoOficina(String telefonoOficina) {
        this.telefonoOficina = telefonoOficina;
    }

    public String getParentesco() {
        return parentesco;
    }

    public void setParentesco(String parentesco) {
        this.parentesco = parentesco;
    }

    public String getRutaM() {
        return rutaM;
    }

    public void setRutaM(String rutaM) {
        this.rutaM = rutaM;
    }

    public String getRutaT() {
        return rutaT;
    }

    public void setRutaT(String rutaT) {
        this.rutaT = rutaT;
    }

    public Boolean getTomaAlmuerzo() {
        return tomaAlmuerzo;
    }

    public void setTomaAlmuerzo(Boolean tomaAlmuerzo) {
        this.tomaAlmuerzo = tomaAlmuerzo;
    }

    public Boolean getTomaMediasNueves() {
        return tomaMediasNueves;
    }

    public void setTomaMediasNueves(Boolean tomaMediasNueves) {
        this.tomaMediasNueves = tomaMediasNueves;
    }

    public Boolean getTomaSeguroAccidentes() {
        return tomaSeguroAccidentes;
    }

    public void setTomaSeguroAccidentes(Boolean tomaSeguroAccidentes) {
        this.tomaSeguroAccidentes = tomaSeguroAccidentes;
    }

    public String getNoPlaqueta() {
        return noPlaqueta;
    }

    public void setNoPlaqueta(String noPlaqueta) {
        this.noPlaqueta = noPlaqueta;
    }

    public Integer getTipoPersonaIdTipoPersona() {
        return tipoPersonaIdTipoPersona;
    }

    public void setTipoPersonaIdTipoPersona(Integer tipoPersonaIdTipoPersona) {
        this.tipoPersonaIdTipoPersona = tipoPersonaIdTipoPersona;
    }

    public Integer getGrupoFamiliarIdGrupoFamiliar() {
        return grupoFamiliarIdGrupoFamiliar;
    }

    public void setGrupoFamiliarIdGrupoFamiliar(Integer grupoFamiliarIdGrupoFamiliar) {
        this.grupoFamiliarIdGrupoFamiliar = grupoFamiliarIdGrupoFamiliar;
    }

    public Integer getPaisNacId() {
        return paisNacId;
    }

    public void setPaisNacId(Integer paisNacId) {
        this.paisNacId = paisNacId;
    }

    public Boolean getMatriculado() {
        return matriculado;
    }

    public void setMatriculado(Boolean matriculado) {
        this.matriculado = matriculado;
    }

    public Integer getInscAlumCursoIdInscAlumCurso() {
        return inscAlumCursoIdInscAlumCurso;
    }

    public void setInscAlumCursoIdInscAlumCurso(Integer inscAlumCursoIdInscAlumCurso) {
        this.inscAlumCursoIdInscAlumCurso = inscAlumCursoIdInscAlumCurso;
    }

    public String getPaisDomicilio() {
        return paisDomicilio;
    }

    public void setPaisDomicilio(String paisDomicilio) {
        this.paisDomicilio = paisDomicilio;
    }

    public String getCodigoPostal() {
        return codigoPostal;
    }

    public void setCodigoPostal(String codigoPostal) {
        this.codigoPostal = codigoPostal;
    }

}
