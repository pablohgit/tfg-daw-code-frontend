/**
 * Interfaz Aula
 * -- code => Codigo: string | representa el codigo de cada aula
 * -- description => Descripcion: string | representa la descripcion de cada aula
 */
export interface Classroom {
  code: string;
  description: string;
}

/**
 * Interfaz Cuentas
 * -- user => Usuario: string | representa el dni del profesor/admin con el que se accede a la aplicacion
 * -- password => Contraseña: string | representa la contraseña de la cuenta
 */
export interface Accounts {
  user: string;
  password: string;
}

/**
 * Interfaz Elemento prestado
 * -- id => Id: number A.I | representa el identificador del elemento prestado, es auto-incremental
 * -- element => Elemento: number | representa el identificador del elemento prestado
 * -- professor => Profesor: string | representa el dni del profesor al que le ha sido prestado el elemento
 * -- classroom => Aula: string | representa el codigo del aula donde se ha utilizado el elemento prestado
 * -- borrowed_date => Fecha prestamo: Date | fecha en la cual se realiza el prestamo
 * -- limit_date => Fecha limite: Date | fecha limite a la que se establece el prestamo
 */
export interface BorrowedElement {
  id?: number;
  element: number;
  professor: string;
  classroom: string;
  borrowed_date: Date;
  limit_date: Date;
}

/**
 * Interfaz Elemento
 * -- id => Id: number A.I | representa el identificador de cada elemento
 * -- description => Descripcion: string | representa la descripcion de cada elemento
 * -- type => Tipo: string | representa de que tipo es cada elemento
 * -- serial_number => Numero serie: number | el numero de serie de cada elemento
 * -- quantity => Cantidad: number | el nuermo de stock que hay de cada elemento para ser prestado
 */
export interface Element {
  id?: number;
  description?: string;
  type: string;
  serial_number: number;
  quantity: number;
}

/**
 * Interfaz Profesor
 * -- dni => Codigo: string | representa el codigo personal de cada profesor
 * -- name => Nombre: string | representa el nombre de cada profesor
 * -- second_name => Apellido: string | representa el apellido de cada profesor
 * -- email => Email: string | representa el correo
 * -- telefone_number => Numero telefono: string | el numero de telefono de contacto de cada profesor
 * -- birth_date => Fecha nacimiento: Date | representa la fecha de nacimiento del profesor
 * -- booth => Puesto: string | el puesto que ejerce cada profesor
 * -- address => Direccion: string | la direccion de vivienda de cada profesor
 */
export interface Professor {
  dni: string;
  name: string;
  second_name: string;
  email: string;
  telefone_number?: string;
  birth_date: Date;
  booth: string;
  address?: string;
}

/**
 * Interfaz Tipo
 * -- name => Nombre: string | representa el nombre del tipo de elemento
 * -- description => string | representa la descripcion de cada tipo
 */
export interface Type {
  name: string;
  description?: string;
}
