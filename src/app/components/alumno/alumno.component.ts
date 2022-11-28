import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { AlumnoService } from "../../services/alumno.service";
import { IAlumno } from "../../models/alumno";

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  formAlumno:FormGroup
  lista_alumnos:any=[]
  class_btn:string='btn btn-success'
  text_btn:string='Guardar'

  reset_display:string='display:none'

  constructor(private fb:FormBuilder,private alumnoService:AlumnoService) {
    this.formAlumno=this.fb.group({
      id:[null],
      nombre:[''],
      apellido:[''],
      correo:['']
    })
  }

  ngOnInit(): void {this.obtener_alumno()}

  guardar_alumno(){
    if(this.formAlumno.value.id){
      this.actualizar_alumno()
      this.class_btn='btn btn-success'
      this.text_btn='Guardar'
    }else{

      this.alumnoService.save_alumno(this.formAlumno.value).subscribe(
        respuesta =>{
          console.log(respuesta)
          this.formAlumno.reset()
          this.obtener_alumno()
        },error => console.log
      )  

    } 
  }

  obtener_alumno(){
    this.alumnoService.get_alumnos().subscribe(
      respuesta => {this.lista_alumnos=respuesta},error => console.log(error))
  }

  eliminar_alumno(id:number){
    this.alumnoService.delete_alumnos(id).subscribe(
      respuesta =>{console.log(respuesta)
      this.obtener_alumno()
      },
      error => console.log(error))
  }

  editar_alumno(unAlumno:IAlumno){
    this.formAlumno.setValue({
      id:unAlumno.id,
      nombre:unAlumno.nombre,
      apellido:unAlumno.apellido,
      correo:unAlumno.correo     
    })
    this.class_btn='btn btn-info'
    this.text_btn='Actualizar'
    this.reset_display='display:block'
  }
  
  actualizar_alumno(){
    this.alumnoService.update_alumnos(this.formAlumno.value).subscribe(
      respuesta =>{
        console.log(respuesta)
        this.formAlumno.reset()
        this.obtener_alumno()
     },
    error=> console.log(error)
    )
  }

  resetear(){
    this.formAlumno.reset()
    this.class_btn='btn btn-success'
    this.text_btn='Guardar'
    this.reset_display='display:none'
  }
}