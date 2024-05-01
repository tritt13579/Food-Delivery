import Image from "next/link";

export default function SectionHeaders({subHeader,mainHeader}){
    return(
        <>
        <h3 className="uppercase text-gray-600 font-semibold leading-4">
            Check Out
            {subHeader}
            </h3>
        <h2 className="text-primary font-bold text-4xl italic">
            Menu
            {mainHeader}
        </h2>
        </>
    );
}
