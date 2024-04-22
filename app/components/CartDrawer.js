'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  IconButton,
  Divider
} from "@chakra-ui/react"
import { useCartContext } from "./context/CartContext"
import { DeleteIcon } from "@chakra-ui/icons"


export default function CartDrawer({ open, handleDrawer }) {
  const [openCart, setOpenCart] = useState(false)
  const handleCartDrawer = () => setOpenCart(!openCart)
  const { cart, getItemsCart, deleteItemCart } = useCartContext()


  useEffect(() => {

  }, [cart])


  return <>
    <Drawer
      isOpen={open}
      placement='right'
      onClose={handleDrawer}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Tu Carrito</DrawerHeader>

        <DrawerBody>
          {/* <Input placeholder='Type here...' /> */}
          {cart.length > 0 ? cart.map((value, index) => <div key={index} className="flex flex-row items-center justify-between border-b p-3">
            <Image
              src={value.image}
              width={80}
              height={80}
              alt="product image"
              className="mt-5"
            />
            <div>
              <p>{value.title}</p>
              <p>{value.price}</p>
              <p>{value.quantity}</p>
            </div>
            <div>
              <IconButton onClick={() => deleteItemCart(value.id)} icon={<DeleteIcon />} />
            </div>
          </div>) : <p>Aun no tienes productos en tu carrito</p>}

        </DrawerBody>

        <DrawerFooter>

          <Button>
            Continuar con la compra
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>

  </>
}
