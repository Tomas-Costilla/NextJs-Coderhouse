import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function ProductItem({ item }) {
  return (
    <Card className="p-3 w-80 h-96">
      <CardBody className="flex items-center justify-center">
        <Image
          alt="product Image"
          src={item.image}
          width={80}
          height={80}
          className="w-auto h-auto object-cover rounded-xl"
        />
      </CardBody>
      <CardHeader className="flex flex-col justify-start items-start gap-3">
        <p>{item.title}</p>
        <p className=" font-semibold text-lg ">${item.price}</p>
      </CardHeader>
      <Divider />
      <CardFooter>
        <Button
          className="bg-blue-500 text-white"
          as={Link}
          href={`/producto/${item.id}`}
        >
          Ver mas
        </Button>
      </CardFooter>
    </Card>
  );
}

{
  /* <Card className="p-5 w-80 h-96">
      <CardHeader>
        <p className="text-center flex-shrink">{item.title}</p>
      </CardHeader>

      <Button
        variant="solid"
        className="bg-blue-700 text-white font-semibold text-base rounded-2xl"
        as={Link}
        href={`/producto/${item.id}`}
      >
        Ver detalle
      </Button>
    </Card> */
}
