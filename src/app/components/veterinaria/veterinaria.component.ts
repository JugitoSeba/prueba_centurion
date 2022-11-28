import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { VeterinariaService } from "../../services/veterinaria.service";
import { IAnimal } from "../../models/animal";

@Component({
  selector: 'app-veterinaria',
  templateUrl: './veterinaria.component.html',
  styleUrls: ['./veterinaria.component.css']
})
export class VeterinariaComponent implements OnInit {

  formAnimal:FormGroup
  lista_animales:any=[]
  class_btn:string='btn btn-success'
  text_btn:string='Guardar'

  reset_display:string='display:none'

  constructor(private fb:FormBuilder,private veterinariaService:VeterinariaService) {
    this.formAnimal=this.fb.group({
      id:[null],
      nombre:[''],
      edad:[''],
      imagen:[''],
      sexo:[''],
      desparasitado:[''],
      vacunado:[''],
      castrado:[''],
      contacto:['']
    })
  }

  ngOnInit(): void {this.obtener_animales()}

  guardar_animal(){
    if(this.formAnimal.value.id){
      this.actualizar_animales()
      this.class_btn='btn btn-success'
      this.text_btn='Guardar'
    }else{

      this.veterinariaService.save_animales(this.formAnimal.value).subscribe(
        respuesta =>{
          console.log(respuesta)
          this.formAnimal.reset()
          this.obtener_animales()
        },error => console.log
      )  

    } 
  }

  obtener_animales(){
    this.veterinariaService.get_animales().subscribe(
      respuesta => {this.lista_animales=respuesta},error => console.log(error))
  }

  eliminar_animales(id:number){
    this.veterinariaService.delete_animales(id).subscribe(
      respuesta =>{console.log(respuesta)
      this.obtener_animales()
      },
      error => console.log(error))
  }

  editar_animales(unAnimal:IAnimal){
    this.formAnimal.setValue({
      id:unAnimal.id,
      nombre:unAnimal.nombre,
      edad:unAnimal.edad,
      imagen:unAnimal.imagen,
      sexo:unAnimal.sexo,
      desparasitado:unAnimal.desparasitado,
      vacunado:unAnimal.vacunado,
      castrado:unAnimal.castrado,
      contacto:unAnimal.contacto
    })
    this.class_btn='btn btn-info'
    this.text_btn='Actualizar'
    this.reset_display='display:block'
  }
  
  actualizar_animales(){
    this.veterinariaService.update_animales(this.formAnimal.value).subscribe(
      respuesta =>{
        console.log(respuesta)
        this.formAnimal.reset()
        this.obtener_animales()
     },
    error=> console.log(error)
    )
  }

  resetear(){
    this.formAnimal.reset()
    this.class_btn='btn btn-success'
    this.text_btn='Guardar'
    this.reset_display='display:none'
  }
}