class Persona():
    
    def __init__(self, nombre, fecNac, edad):
        self.nombre = nombre
        self.fecNac = fecNac
        self.edad = edad

    def saludo (self):
        print (f"Hola mundo soy {self.nombre}")
        print(f"Tengo {self.edad} y nací el {self.fecNac}")

class Profesional(Persona):

    def __init__(self,profesion):
        self.profesion = profesion


pers1 = Profesional("Medico")
pers1.nombre = "Juan"
pers1.edad = 36
pers1.fecNac = "26 de abril"
pers1.saludo()

pers2= Profesional("Estudiante")
pers2.nombre = "Alex"
pers2.edad = 25
pers2.fecNac = "15 jul"
pers2.saludo()