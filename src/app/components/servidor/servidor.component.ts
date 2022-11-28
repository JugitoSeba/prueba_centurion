import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ServidorService } from "../../services/servidor.service";
import { IServidor } from "../../models/servidor";

@Component({
  selector: 'app-servidor',
  templateUrl: './servidor.component.html',
  styleUrls: ['./servidor.component.css']
})
export class ServidorComponent implements OnInit {

  formServidor:FormGroup
  lista_servidores:any=[]
  class_btn:string='btn btn-success'
  text_btn:string='Guardar'

  reset_display:string='display:none'

  constructor(private fb:FormBuilder,private servidorService:ServidorService) {
    this.formServidor=this.fb.group({
      id:[null],
      razon_social:[''],
      direccion_ip:[''],
      descripcion_equipo:[''],
      sistema_operativo:[''],
      estado:['']
    })
  }

  ngOnInit(): void {this.obtener_servidor()}

  guardar_servidor(){
    if(this.formServidor.value.id){
      this.actualizar_servidor()
      this.class_btn='btn btn-success'
      this.text_btn='Guardar'
    }else{

      this.servidorService.save_servers(this.formServidor.value).subscribe(
        respuesta =>{
          console.log(respuesta)
          this.formServidor.reset()
          this.obtener_servidor()
        },error => console.log
      )  

    } 
  }

  obtener_servidor(){
    this.servidorService.get_servers().subscribe(
      respuesta => {this.lista_servidores=respuesta},error => console.log(error))
  }

  eliminar_servidor(id:number){
    this.servidorService.delete_servers(id).subscribe(
      respuesta =>{console.log(respuesta)
      this.obtener_servidor()
      },
      error => console.log(error))
  }

  editar_servidor(unServidor:IServidor){
    this.formServidor.setValue({
      id:unServidor.id,
      razon_social:unServidor.razon_social,
      direccion_ip:unServidor.direccion_ip,
      descripcion_equipo:unServidor.descripcion_equipo,
      sistema_operativo:unServidor.sistema_operativo,
      estado:unServidor.estado,
    })
    this.class_btn='btn btn-info'
    this.text_btn='Actualizar'
    this.reset_display='display:block'
  }
  
  actualizar_servidor(){
    this.servidorService.update_servers(this.formServidor.value).subscribe(
      respuesta =>{
        console.log(respuesta)
        this.formServidor.reset()
        this.obtener_servidor()
     },
    error=> console.log(error)
    )
  }

  resetear(){
    this.formServidor.reset()
    this.class_btn='btn btn-success'
    this.text_btn='Guardar'
    this.reset_display='display:none'
  }
}