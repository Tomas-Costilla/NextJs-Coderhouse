"use client";
import { Button, Checkbox, Input } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

export default function Registrarse({}) {
  const [viewPassword, setViewPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState("");
  const [userData, setUserData] = useState({
    userFullName: "",
    userEmail: "",
    userPassword: "",
  });

  const handleUserData = (field, value) =>
    setUserData({ ...userData, [field]: value });

  const handleViewPassword = () => setViewPassword(!viewPassword);

  return (
    <main className="container m-auto p-5 flex justify-center">
      <div className="p-3 rounded-md bg-white flex flex-col gap-5 w-full sm:w-2/3">
        <h1 className="text-xl text-center font-semibold">Crear cuenta</h1>
        <p>Completa los datos requeridos (*)</p>
        <hr></hr>
        <Input
          isRequired
          type="text"
          label="Nombre Completo"
          placeholder="Ingresa tu nombre completo"
          onChange={(e) => handleUserData("userFullName", e.target.value)}
        />
        <Input
          isRequired
          type="email"
          label="Email"
          placeholder="Ingresa tu Email"
          onChange={(e) => handleUserData("userEmail", e.target.value)}
        />
        <Input
          label="Contraseña"
          placeholder="Ingresa tu contraseña"
          isRequired
          type={viewPassword ? "text" : "password"}
          onChange={(e) => handleUserData("userPassword", e.target.value)}
        />
        <Input
          label="Repetir contraseña"
          placeholder="Repeti tu contraseña ingresada"
          isRequired
          type={viewPassword ? "text" : "password"}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
        <Checkbox
          isSelected={viewPassword}
          onValueChange={() => handleViewPassword()}
        >
          {viewPassword ? "Ocultar contraseñas" : "Ver contraseñas"}
        </Checkbox>
        <div className="flex justify-center flex-col items-center gap-5 p-3">
          <Button className="sm:w-1/2 w-full bg-blue-600 text-white font-semibold">
            Registrarse
          </Button>
          <p>
            Ya tienes una cuenta?{" "}
            <Link className="font-semibold text-blue-600" href="/ingresar">
              Inicia sesion
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
