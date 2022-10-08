import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Cliente } from './Cliente';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public cliente: Cliente = new Cliente()

  constructor(private clienteService:FormService, private router:Router, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  async create():Promise<void>{
  //   this.clienteService.create(this.cliente).subscribe(
  //     cliente=>{
  //       this.router.navigate(['/login'])
  //       Swal.fire('Cliente nuevo', `El cliente ${cliente.nombre} ha sido creado con exito`, 'success')
  //     }
  //   );
  // }
  await Swal.fire('Cliente nuevo', `El cliente  ha sido creado con exito`, 'success');
  window.location.reload()


}

}