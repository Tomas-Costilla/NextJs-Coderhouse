"use client";
import { Button, Checkbox, Input } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

export default function IniciarSesion({}) {
  const [viewPassword, setViewPassword] = useState(false);

  const handleViewPassword = () => setViewPassword(!viewPassword);

  return (
    <main className="container m-auto p-5 flex justify-center">
      <div className="p-3 rounded-md bg-white flex flex-col gap-3 w-full sm:w-2/3">
        <h1 className="text-xl text-center font-semibold">Iniciar sesion</h1>
        <hr></hr>
        <Input
          isRequired
          type="email"
          label="Email"
          placeholder="Ingresa tu Email"
        />
        <Input
          label="Contraseña"
          placeholder="Ingresa tu contraseña"
          isRequired
          type={viewPassword ? "text" : "password"}
        />
        <Checkbox
          isSelected={viewPassword}
          onValueChange={() => handleViewPassword()}
        >
          {viewPassword ? "Ocultar contraseñas" : "Ver contraseñas"}
        </Checkbox>
        <div className="flex justify-center flex-col items-center gap-5 p-3">
          <Button className="sm:w-1/2 w-full bg-blue-600 text-white font-semibold">
            Ingresar
          </Button>
          <p>
            No tienes una cuenta?{" "}
            <Link className="font-semibold text-blue-600" href="/registrarse">
              Registrate
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
