import { Injectable } from '@angular/core';

// Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

// Model
import { Usuario } from '../models/usuario';

@Injectable()
export class UsuarioService {

  usuarioList: AngularFireList<any>;
  selectedUsuario: Usuario = new Usuario();

  constructor(private firebase: AngularFireDatabase) { }

  getUsuarios()
  {
    return this.usuarioList = this.firebase.list('usuarios');
  }

  insertUsuario(usuario: Usuario)
  {
    this.usuarioList.push({
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      tipodoc: usuario.tipodoc,
      documento: usuario.documento,
      ciudad: usuario.ciudad,
      fechanac: usuario.fechanac,
      email: usuario.email,
      telefono: usuario.telefono,
      username: usuario.username,
      password: usuario.password
    });
  }

  updateUsuario(usuario: Usuario)
  {
    this.usuarioList.update(usuario.$key, {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      tipodoc: usuario.tipodoc,
      documento: usuario.documento,
      ciudad: usuario.ciudad,
      fechanac: usuario.fechanac,
      email: usuario.email,
      telefono: usuario.telefono,
      username: usuario.username,
      password: usuario.password
    });
  }

  deleteUsuario($key: string)
  {
    this.usuarioList.remove($key);
  }
}
