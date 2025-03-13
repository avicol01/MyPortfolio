import { Anchor, AnchorLabel } from "@/components/anchor/Anchor";
import React from "react";
import Image from "next/image";
import fullCart from "/images/fullCart.jpg";
import transComp from "/images/transComp.jpg";
import logo from "/images/AVogT.png"

async function DemoPage({ children }) {
  // const payload = await getToDoItems()
  // const tasks = Object.entries(payload.todos).reverse()

  return (
    <>

      <header className=" container mx-auto max-w-screen-xl">
        <div className="relative flex justify-between  ml-5">
          <h2 className="text-3xl text-slate-900 mt-10">Transaction System </h2>
          <Anchor
            href="/">
            <Image className="absolute top-0 right-0 mr-10 mb-10"
              src={logo}
              alt="logo"
              width={100}
              height={100}
            />
          </Anchor>
        </div>
      </header>
      <main className="container mx-auto max-w-screen-xl">
        <div className="md:flex sm:flex-col md:flex-col md:justify-center lg:flex-row my-5 mx-1">

          <div className="border border-blue-400/50 p-4 m-2 rounded-lg shadow-md">
            {/* Requirements */}
            <h2 className="text-xl text-blue-600 tracking-wider font-semibold mb-2">Requirements</h2>
            <ul className="list-disc pl-8">
              <li>Employee selects a category, and its associated parts are displayed.</li>
              <li>Discontinued products should not be shown and cannot be added to the cart.</li>
              <li>Employee proceeds with cart entry after adding an item/s.</li>
              <li>Employees can adjust quantities or remove items from the cart.</li>
              <li>Box to enter coupon code, verify with a button, and display discount if valid.</li>
              <li>Payment types are Cash, Credit, and Debit, respectively.</li>
              <li className="mb-3">Dynamically display Subtotal, Tax (pre-discount), Discount (percentage on Subtotal), and Total.</li>
            </ul>
            {/* Validation */}
            <div>
              <h2 className="text-xl text-blue-600 tracking-wider font-semibold my-2">Validations</h2>
              <h3 className="font-semibold">Throw Exception if:</h3>
              <ul className="list-disc pl-8 text-black">
                <li>Item is already in the cart.</li>
                <li>Quantity is negative or zero.</li>
                <li>Stock quantity is below zero.</li>
                <li>Coupon is not valid (does not exist or out of date).</li>
                <li>Payment is not selected.</li>
                <li>Checkout is clicked and no items are in the cart.</li>
              </ul>
            </div>
          </div>

          <div className="border border-blue-400/50 rounded-lg shadow-md m-2 shrink-0 flex flex-col items-center justify-center">
            <h2 className="text-xl text-blue-600 tracking-wider font-semibold m-2">Screenshots</h2>
            <Image className="p-2 "
              src={fullCart}
              alt="Full cart and coupon valitation"
              width={500}
              height={210}
              quality={100} />

            <Image className="p-2"
              src={transComp}
              alt="transaction completed with sale ID"
              width={500}
              height={270}
              quality={100} />
          </div>
        </div>

        {/* buttons */}
        <div className="border border-blue-400/50 p-4 rounded-lg shadow-md m-3">
          <h2 className="text-xl text-blue-600 tracking-wider font-semibold mb-4">Buttons Functionalities</h2>
          <ul className="xl:grid lg:grid-cols-2 gap-4">
            {/* <!-- Add Part to Cart --> */}

            <li className="sm:flex border border-gray-300 p-4 my-2 rounded-lg space-y-2">
              <div className="flex items-center w-40">
                <button className="bg-green-700 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded my-2 mx-4 h-12 shrink-0">
                  Add Part to Cart
                </button>
              </div>
              <ul className="px-10 list-disc">
                <li>Adds parts and quantity to the cart.</li>
                <li>Recalculate totals.</li>
              </ul>
            </li>

            {/* <!-- Refresh --> */}
            <li className="sm:flex border border-gray-300 p-4 my-2 rounded-lg space-y-2">
              <div className="flex items-center w-40">
                <button className="bg-transparent hover:bg-blue-500 text-blue-600 font-semibold hover:text-white
                                py-2 px-4 my-2 mx-4 border-2 border-blue-400 hover:border-transparent rounded h-12 shrink-0">
                  Refresh
                </button>
              </div>
              <ul className="px-10 list-disc">
                <li>Update quantity.</li>
                <li>Update Totals (Item Total, Subtotal, Tax, Total).</li>
              </ul>
            </li>
            {/* <!-- Remove --> */}
            <li className="sm:flex border border-gray-300 p-4 my-2 rounded-lg space-y-2">
              <div className="flex items-center w-40">
                <button className="bg-transparent hover:bg-gray-300 text-gray-500 font-semibold py-2 px-4 my-2 mx-4 border-2 h-12 border-gray-300 rounded">
                  Remove
                </button>
              </div>
              <ul className="px-10 list-disc">
                <li>Remove single item from cart.</li>
              </ul>
            </li>
            {/* <!-- Cancel --> */}
            <li className="sm:flex border border-gray-300 p-4 my-2 rounded-lg space-y-2">
              <div className="flex items-center w-40">
                <button className="bg-transparent hover:bg-red-500 text-red-600 font-semibold hover:text-white py-2 px-4 my-2 h-12 mx-4 border border-red-500 hover:border-transparent rounded shrink-0">
                  Cancel
                </button>
              </div>
              <ul className="px-10 list-disc">
                <li>Clears all inputs and resets form.</li>
              </ul>
            </li>
            {/* <!-- Verify Coupon --> */}
            <li className="sm:flex border border-gray-300 p-4 my-2 rounded-lg space-y-2">

              <button className="bg-transparent hover:bg-gray-300 text-gray-500 font-semibold py-2 px-4 my-2 mx-4 border-2 h-12 border-gray-300 rounded shrink-0">
                Verify Coupon
              </button>
              <ul className="px-10 list-disc">
                <li>Checks coupon validity: ensure it exists and checks if its within the date range.</li>
                <li>Display discount percentage.</li>
                <li>Recalculate totals with the discount applied to the subtotal.</li>
              </ul>
            </li>

            {/* <!-- Checkout --> */}
            <li className="sm:flex border border-gray-300 p-4 rounded-lg space-y-2">
              <div className="flex items-center w-40">
                <button className="bg-green-700 hover:bg-green-600 text-white font-semibold py-2 px-4 my-2 mx-4 rounded h-12 shrink-0">
                  Checkout
                </button>
              </div>
              <ul className="px-10 list-disc">
                <li>Create a sale with the items in database from shopping cart data.</li>
                <li>Reduce item quantities in stock.</li>
                <li>Display sale ID when checkout complete.</li>
                <li>Clear the form after a transaction is completed to prevent alterations.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="border border-blue-400/50 p-4 rounded-lg shadow-md m-3">
          <h2 className="text-xl text-blue-600 tracking-wider font-semibold mb-2">Learning Opportunity</h2>
          <p>One challenge I encountered involved the handling of coupon codes within the system. This arose due to the structure of the database, where the sales table stored CouponID rather than CouponName and the user inputs the CouponName. To address this, I had to make changes to the method in the business logic layer by changing the logic and adding additional validation. </p>
        </div>



      </main>
      <footer className="flex justify-end container mx-auto max-w-screen-xl m-10">
        <Anchor href="/">
          <AnchorLabel className="text-xl font-sans hover:font-mono text-white border bg-slate-500 py-2 px-5 rounded-lg hover:shadow-md">
            Main Page
          </AnchorLabel>
        </Anchor>
      </footer>
    </>
  );
}

export default DemoPage;
