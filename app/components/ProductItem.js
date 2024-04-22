import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function ProductItem({ item }) {
  return (
    <Card className="p-5 w-80 h-96">
      <CardBody className="flex items-center justify-center">
        <Image
          alt="product Image"
          src={item.image}
          width={100}
          height={100}
          className="w-auto h-auto object-cover rounded-xl"
        />
      </CardBody>
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
    </Card>
  );
}
