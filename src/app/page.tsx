import Link from "next/link";
import Image from "next/link";
import Header from "@/app/components/layout/Header";
import Hero from "@/app/components/layout/Hero";
import HomeMenu from "@/app/components/layout/HomeMenu";
import MenuItems from "./components/menu/MenuItems";
import SectionHeader from "@/app/components/layout/SectionHeader"

export default function Home(){
  return(
    <>
    <Header/>
    <Hero/>
    <HomeMenu/>
    <section className="text-center my-16">
    <SectionHeader
       subHeader={'Out story'}
       mainHeader={'About us'}
       />
       <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex-col gap-4">
       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate expedita tenetur cumque explicabo, quaerat sint quo quam nam sunt. Nemo sunt hic a nesciunt recusandae, consequuntur amet odio pariatur in.
       </p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit officiis, dolore hic facere rem beatae, excepturi ea odit fuga assumenda ad quaerat temporibus sapiente eos consectetur, maiores dignissimos nemo veniam.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi pariatur incidunt recusandae dolore quam nesciunt? Minima, in illo optio laboriosam voluptatibus voluptas commodi quos necessitatibus eaque atque expedita ratione pariatur?</p>
       </div>
    </section>
    <section className="text-center my-8">
      <SectionHeader subHeader={'Don\'t hesitate'}
                      mainHeader={'Contact us'}/>
      <div className="mt-8">
      <a className="text-4xl underline text-gray-500" href="tel:+46738123123">+46 738 123 123</a>
      </div>
    </section>
    <footer className="border-t p-8 text-center text-gray-500 mt-16">
      &copy; 2023 All rights reserved
    </footer>
    </>
  )
}
