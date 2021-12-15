import React, {useState} from 'react'
import '../../App.css';
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PageToOrder from "./PageToOrder"

import Footer from "../Footer"



// import React from 'react'

const PUBLIC_KEY = "pk_test_51K4G30FAkwIKgY1k2MkccZ7Bh9Us5Oqnct6bLE56TqlyZbaenpfSETFe1OOaiy3oqqCC6pBmdobhEfmSNrEbomSa00u5ve3PBK"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function OrderPage() {
    return (
      <>
        <Elements stripe={stripeTestPromise}>
          <PageToOrder />
        </Elements>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </>
    )
}



