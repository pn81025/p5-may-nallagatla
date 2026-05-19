"use client";
import {Image} from "@heroui/image";


import { useState } from "react";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { Button } from "@heroui/button";

import { title, subtitle } from "@/components/primitives";
import ConfettiButton from "@/components/confettiButton";


export default function Home() {
  const [spinning, setSpinning] = useState(false);

  const spinButton = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 1500);
  };

  return (
    // <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
    //   <div className="inline-block max-w-xl text-center justify-center">
    //     <span className={title()}>Discount&nbsp;</span>
    //     <span className={title({ color: "violet" })}>Time Machine&nbsp;</span>
    //     <br />
    //     <span className={title()}>Wholesale</span>
    //     <div className={subtitle({ class: "mt-4" })}>
    //       A project template for YOU to make your own!
    //     </div>
    //   </div>

    //   <div className="flex gap-3">
    //     <ConfettiButton />

    //     <div className={spinning ? "animate-spin" : ""}>
    //       <Button radius="full" variant="ghost" onPress={spinButton}>
    //         Spin
    //       </Button>
    //     </div>
    //   </div>

    //   <div className="mt-8">
    //     <Snippet hideCopyButton hideSymbol variant="bordered">
    //       <span>
    //         Get started by editing <Code color="primary">app/page.tsx</Code>
    //       </span>
    //     </Snippet>
    //   </div>
    // </section>
    <div>
      
  <Image
  alt="Ultron First Form"
  src="https://tse4.mm.bing.net/th/id/OIP.wyVmwdWlGGD7Hto-EOo82wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
  width={500}
  ></Image>

  <Image 
  alt="AOU End Scene"
  src = "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/6/60/Ultron's_Last_Body.jpg/revision/latest?cb=20151031195150"
  width={500}    
  />

<Image 
  alt="Ultron"
  src = "https://tse2.mm.bing.net/th/id/OIP.mqCuGfZBHwfkXXN7YrSufwHaDt?rs=1&pid=ImgDetMain&o=7&rm=3"
  width={500}    
  />

<Image 
  alt="Ultron 2"
  src = "https://tse3.mm.bing.net/th/id/OIP.G5if927TxbO2M0cXclASmgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
  width={500}    
  />

<Image 
  alt="Ultron 3"
  src = "https://cdn.shopify.com/s/files/1/0556/5795/5430/articles/Age-of-Ultron-return-Vision-Quest-alive.webp?v=1733330081"
  width={500}    
  />

    </div>
  );
}
