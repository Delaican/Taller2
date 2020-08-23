from flask import Flask, render_template, flash, redirect, url_for, session, request, logging
from flask_mysqldb import MySQL
from wtforms import Form, StringField, PasswordField, SelectField, DateField, validators
from passlib.hash import sha256_crypt

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/integrantes')
def integrantes():
    return render_template('integrantes.html')

class RegisterForm(Form):
    nombres = StringField('Nombres', [validators.Length(min=1, max=25)])
    apellidos = StringField('Apellidos', [validators.Length(min=1, max=25)])
    tipo_documento = SelectField('Tipo de documento')
    documento = StringField('Documento', [validators.Length(min=10, max=10)])
    lugar_residencia = SelectField('Lugar de residencia')
    fecha_nacimiento = DateField('Fecha de nacimiento')
    email = StringField('Email', [validators.Length(min=6, max=50)])
    telefono = StringField('Telefono', [validators.Length(min=10, max=20)])
    usuario = StringField('Usuario', [validators.Length(min=4, max=25)])
    password = PasswordField('Contraseña', [
        validators.DataRequired(),
        validators.EqualTo('confirmar', message='Passwords do not match')
    ])
    confirmar = PasswordField('Confirmar contraseña')

@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegisterForm(request.form)
    if request.method == 'POST' and form.validate():
        return render_template('register.html')
    return render_template('register.html', form=form)


if __name__ == "__main__":
    app.run(debug=True)
    