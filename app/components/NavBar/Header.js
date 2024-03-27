"use client";
import { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import Categories from "./Categories";

const menuItems = [
  "Profile",
  "Dashboard",
  "Activity",
  "Analytics",
  "System",
  "Deployments",
  "My Settings",
  "Team Settings",
  "Help & Feedback",
  "Log Out",
];

const menuEcommerce = [
  {
    title: "Nosotros",
    page: "/nosotros",
  },
];

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleGetAllCategories = async () => {
    let response = await fetch("https://fakestoreapi.com/products/categories");
    let categories = await response.json();
    setCategories(categories);
  };

  useEffect(() => {
    handleGetAllCategories();
  }, []);

  return (
    <Navbar className="bg-blue-700" onMenuOpenChange={setIsOpenMenu}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isOpenMenu ? "Close menu" : "Open menu"}
          className="text-white font-bold sm:hidden"
        />
        <NavbarBrand as={Link} href="/">
          {/*    <AcmeLogo /> */}
          <p className="font-bold text-white">Ecommerce App</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <Categories categories={categories} />
        {menuEcommerce.map((item, index) => (
          <NavbarItem key={index}>
            <Link /* color="" */ className="text-white" href={item.page}>
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarItem className="">
        <Button as={Link} className="text-blue-700 bg-white" href="/ingresar">
          Iniciar sesion
        </Button>
      </NavbarItem>

      <NavbarItem>
        <Button
          as={Link}
          className="border-white text-white bg-blue-700 border"
          href="/registrarse"
        >
          Registrarse
        </Button>
      </NavbarItem>
      <NavbarMenu>
        {menuEcommerce.map((item, index) => (
          <NavbarMenuItem key={`${index}`}>
            <Link
              /*  color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              } */
              className="w-full"
              href={item.page}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
