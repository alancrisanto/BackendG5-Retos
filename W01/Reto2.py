# Hacer un programa que primero capture cuantas Personas vamos a ingresar, luego pedir su nombre, dni y fecha de nacimiento y al final mostrarlas en un orden de la mas joven a la mas adulta
from datetime import datetime
count = 0
nombres = []
dnis = []
fecNacimientos = []

numero_personas = int(input("¿Cuántas personas va a ingresar? "))

while count < numero_personas:

    nombre = str(input("¿Cuál es su nombre? "))
    dni = int(input("Ingrese su DNI: "))
    fecNac = str(input("Ingrese Fecha de nacimiento (DD/MM/YY): "))
    
    nombres.append(nombre)
    dnis.append(dni)
    fecNacimientos.append(fecNac)

    count += 1

datas = zip(nombres, dnis, fecNacimientos)

new_data = sorted(datas, key=lambda fecha_nac: datetime.strptime(fecha_nac[2], "%d/%m/%Y"),reverse=True)

# print(new_data)
# print(f"{new_data[0][2]}")

for i in new_data:
    print(f"{i[0].capitalize():5} {('.')*5} {i[1]} {('.')*5} {i[2]}")

