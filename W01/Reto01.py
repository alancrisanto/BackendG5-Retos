from datetime import datetime, time


nombre = str(input("Ingrese su nombre: "))
edad = int(input("Ingrese su edad: "))
hora = datetime.now()

if edad < 18 and hora.hour >= 18:
    print(f"{nombre} Debes ir a dormir")
elif edad < 18 and hora.hour < 18:
    print(f"{nombre} Debes hacer tu tarea")
else:
    print(f"{nombre} No estas obligado a hacer algo")
