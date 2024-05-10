import { Anchor, AnchorLabel } from "@/components/anchor/Anchor";
import React from "react";
import Image from "next/image";
import TS1 from "/images/TS1.jpg";
import TS2 from "/images/TS2.jpg";

async function DemoPage({ children }) {
  // const payload = await getToDoItems()
  // const tasks = Object.entries(payload.todos).reverse()

  return (
    <>
      <header className="mt-10 ml-5">
        <h2 className="text-3xl text-slate-900">Transaction System </h2>
      </header>
      <ul>
        <li>  <Image
          src={TS1}
          alt="Description of the image"
          width={600} // Width of the image
          height={400} // Height of the image
          quality={100}
        /></li>
        <li>  <Image
          src={TS2}
          alt="Description of the image"
          width={600} // Width of the image
          height={400} // Height of the image
          quality={100}
        /></li>
      </ul>
      <main className="">
      
      </main>
      <footer>
        <Anchor href="/">
          <AnchorLabel className="text-xl font-sans hover:font-mono text-slate-200">
            back to main page
          </AnchorLabel>
        </Anchor>
      </footer>
    </>
  );
}

export default DemoPage;
