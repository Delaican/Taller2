import { Component, OnInit } from '@angular/core';

// model
import { Usuario } from '../../../models/usuario';

// service
import { UsuarioService } from '../../../services/usuario.service';

// toastr
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  usuarioList: Usuario[];

  constructor(
    private usuarioService: UsuarioService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    return this.usuarioService.getUsuarios()
      .snapshotChanges().subscribe(item => {
        this.usuarioList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.usuarioList.push(x as Usuario);
        });
      });
  }

  onEdit(usuario: Usuario) {
    this.usuarioService.selectedUsuario = Object.assign({}, usuario);
  }

  onDelete($key: string) {
    if(confirm('Deseas eliminar este elemento?')) {
      this.usuarioService.deleteUsuario($key);
      this.toastr.warning('Operación Exitosa', 'Usuario Eliminado');
    }
  }

}
