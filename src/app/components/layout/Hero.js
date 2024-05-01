import Image from "next/image";
import Right from "@/app/components/icons/Right"
export default function Hero() {
    return (
            <section className="hero">
            <div className="py-16">
            <h1 className="text-4xl font-semibold">
                    Everything <br/>
                    is better <br/>
                    with a <span className="text-primary">Pizza</span>
                </h1>
                <p className="my-4 text-gray-500 text-sm">
                    Pizza is the missing piece that make everyday complete, a simple yet delicious joy in life
                    </p>
            
                <div className="flex gap-4 text-sm">
                    <button className="bg-primary uppercase text-white px-8 py-2 rounded-full flex gap-2 text-sm items-center"> 
                    Order Now
                    <Right/>
                    </button>
                    <button className="flex gap-2 py-2 text-gray-600 font-semibold items-center">
                        Learn More
                        <Right/>
                    </button>
            </div>
            </div>
            <div className="relative">
                <img src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
            </div>
                
            </section>
    )
}
