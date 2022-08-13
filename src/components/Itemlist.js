import { useEffect, useState } from 'react'
import {useParams } from "react-router-dom";
import Item from '../components/Item'
import { collection, doc, getDocs, getFirestore } from 'firebase/firestore'
const Itemlist = () => {

const [datos, setDatos] = useState([])
let {categoria} = useParams()
console.log(categoria)

useEffect(() => {
  const db = getFirestore() 
  const itemsCollection = collection(db, 'items')
  getDocs(itemsCollection).then((snp)=>{
    setDatos(snp.docs.map((doc)=>({
      id: doc.id, ...doc.data()
    })))
  })
}, [])
  return (
    <>
      <Item products={datos}/>
    </>
  )
}
export default Itemlist