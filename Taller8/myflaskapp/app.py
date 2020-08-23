from flask import Flask, render_template, flash, redirect, url_for, session, request, logging
from flask_mysqldb import MySQL
from wtforms import Form, StringField, PasswordField, SelectField, DateField, validators
from passlib.hash import sha256_crypt

app = Flask(__name__)

# Config MySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'flaskapp'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
# init MYSQL
mysql = MySQL(app)

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/integrantes')
def integrantes():
    return render_template('integrantes.html')

class RegisterForm(Form):
    nombres = StringField('Nombres', [validators.Length(min=1, max=25)])
    apellidos = StringField('Apellidos', [validators.Length(min=1, max=25)])
    tipo_documento = SelectField(u'Tipo de documento', choices=[('CC', 'Cédula de Ciudadanía'), ('CE', 'Cédula de Extranjería'), ('PA', 'Pasaporte'), ('RC', 'Registro Civil'), ('TI', 'Tarjeta de Identidad')])
    documento = StringField('Documento', [validators.Length(min=10, max=10)])
    lugar_residencia = SelectField(u'Lugar de Residencia', choices=[('1', 'Bogotá'), ('2', 'Medellín'), ('3', 'Cali'), ('4', 'Barranquilla'), ('5', 'Cartagena de Indias'), ('6', 'Soacha'), ('7', 'Cúcuta'), ('8', 'Soledad'), ('9', 'Bucaramanga'), ('10', 'Bello'), ('11', 'Villavicencio'), ('12', 'Ibagué'), ('13', 'Santa Marta'), ('14', 'Valledupar'), ('15', 'Manizales'), ('16', 'Pereira'), ('17', 'Monteria'), ('18', 'Neiva'), ('19', 'Pasto'), ('20', 'Armenia')])
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
        nombres = form.nombres.data
        apellidos = form.apellidos.data
        tipo_documento = form.tipo_documento.data
        documento = form.documento.data
        lugar_residencia = form.lugar_residencia.data
        fecha_nacimiento = form.fecha_nacimiento.data
        email = form.email.data
        telefono = form.telefono.data
        usuario = form.usuario.data
        password = sha256_crypt.encrypt(str(form.password.data))

        # Crear cursors
        cur = mysql.connection.cursor()

        # Ejecutar consulta
        cur.execute("INSERT INTO persona(nombres, apellidos, tipo_documento, documento, lugar_residencia, fecha_nacimiento, email, telefono, usuario, password) VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)", (nombres, apellidos, tipo_documento, documento, lugar_residencia, fecha_nacimiento, email, telefono, usuario, password))

        # Commit a la BD
        mysql.connection.commit()

        # Cerrar conexión
        cur.close()

        flash('Te has registrado satisfactoriamente y puedes iniciar sesión', 'success')
        
        return redirect(url_for('login'))
    return render_template('register.html', form=form)


if __name__ == "__main__":
    app.secret_key = 'zumitos'
    app.run(debug=True)
    