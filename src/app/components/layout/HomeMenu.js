import Image from "next/image"
import MenuItems from "@/app/components/menu/MenuItems";
import SectionHeaders from "@/app/components/SectionHeaders";

export default function HomeMenu(){
    return(
        <section className="">
            <div className="absolute left-0 right-0 w-full justify-start">
                <div className="absolute left-0 -top-[70px] text-left -z-10">
                    <img src={'sallad1.png'} layout={'fill'} objectFit={'contain'} alt={'sallad'}/>
                </div>
                <div className="absolute -top-[00px] right-0 -z-10">
                    <img src={'sallad2.png'} width={107} height={195} alt={'sallad'}/>
                </div>
            </div>
            <div className="text-center mb-4">
                <SectionHeaders 
                subHeader={'check out'}
                mainHeader={'Menu'}/>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>             
            </div>
        </section>
    );
}