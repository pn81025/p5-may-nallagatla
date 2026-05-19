"use client" ;

import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import {Image} from "@heroui/image";
import { addToast } from "@heroui/toast";


export default function A5Page() {
  const Reason1 = () => {
    addToast({
  
      title: "Reason #1",
      description:
        "The first reason why Ultron isn't entirely wrong because as he stated, there's no peace in the world due to humans which is a valid point but his approach to fixing it was wrong since the only solution he had was destroying human life",
      color: "foreground",
    });}

  const Reason2 = () => {
      addToast({
    
        title: "Reason #2",
        description:
          "The second reason Ultron isn't entirely wrong is because, he had the mindset of tony stark, his creator who didnt really know the difference between saving the world and destroying it",
        color: "foreground",
      });}

    const Reason3 = () => {
        addToast({
      
          title: "Reason #3",
          description:
            "The third reason Ultron isn't entirely wrong is because he is an AI who was programmed to bring peace, and in his view peace couldnt coexist with humans so he was only doing what he was designed to do even though it was an entirely wrong approach. He also didnt ask to get created. ",
          color: "foreground",
        });}
    
  return (
    <div>
      <h1 className={title()}>A5: Defend the Fictional Villain</h1>
      

      <div className="flex flex-wrap gap-3">
        <Button
        color="primary"
        onClick={() => {
          Reason1();
        }}> Reason #1 </Button>
        <Button
        color="secondary"
        onClick={() => {
          Reason2();
        }}> Reason #2 </Button>
        <Button
        color="primary"
        onClick={() => {
          Reason3();
        }}> Reason #3 </Button>

      </div>
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
