import { NextResponse } from "next/server"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../../firebase/config.js"

export async function GET(req, res) {
  const productosRef = collection(db, 'productos')
  const querySnapshot = await getDocs(productosRef)
  const productsDocs = querySnapshot.docs.map(doc => doc.data())
  //console.log(productsDocs)
  return NextResponse.json(productsDocs)
}
