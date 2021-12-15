import React, { useState } from "react"
import "../../App.css"
import Footer from "../Footer"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import "./OrderPage.css"

const CARD_OPTIONS = {
  iconstyle: "solid",
  Style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: "500",
      fontFamily: "Roboto, open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  }
}

export default function PageToOrder() {
  const [success, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    })

    if (!error) {
      try {
        const {id} = paymentMethod
        const response = await axios.post("http://localhost:4000/payment", {
          amount: 45,
          id,
        })
        if (response.data.success) {
          console.log("successful payment")
          setSuccess(true)
        }
      } catch (error) {
        console.log(" Error", error)
      }
    } else {
      console.log(error.message)
    }
  }
  return (
    <div>
      <h1 className="OrderPage">Online Payment</h1>
      <br></br>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          
          
          <button className="button">Pay</button>
        </form>
      ) : (
        <div>
          <h2>Thank you for your order.</h2>
        </div>
      )}
      <br /> <br /> <br /> <br /> <br />
    </div>
  )
}
