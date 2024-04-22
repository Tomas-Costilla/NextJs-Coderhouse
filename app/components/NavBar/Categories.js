import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Link from "next/link";

const Categories = ({ categories }) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light" className="text-white text-base">
          Categorias
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {categories.map((item, index) => (
          <DropdownItem key={index} as={Link} href={`/categoria/${item.description}`}>
            {item.description}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default Categories;
