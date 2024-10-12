import React from 'react';
import Image from 'next/image';
import SupportLink from "../_components/support/support-link";
import { tv_box } from "@/constant";
import "./page.css"
import Link from "next/link";

const LionzTvBoxPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">

      <div className="flex flex-col md:flex-row items-center mb-86">
      <div className="md:w-1/2 md:pl-8">
      <h1 className="text-3xl font-bold mb-6 text-right title">Lionz Tv Box</h1>
          <p className="text-lg text-center md:text-right">
          الجهاز الاكثر مبيعا فى الخليج تي في بوكس ليونز  مع اكبر محتوي ترفيهي فى الشرق الاوسط .</p>
          <div className='mr-10'>
          <ul className="list-none mt-[50px] mr-10">
              {tv_box.map((support, i) => (
                <SupportLink
                  key={i}
                  description={support}
                  duration={i * 0.2 + 1}
                />
              ))}
            </ul>
            <button className="text-white bg-main-blue my-5 transition shadow-[-5px_6px_9px_0px_#000000a3] font-bold hover:bg-main-orange px-4 py-2 rounded flex justify-start ms-8">
            <Link href="https://qrco.de/lionztv" target="_blank">
              تواصل لطلب الجهاز
            </Link>
          </button>
          </div>
        </div>
        <div className="md:w-1/2 mb-4 md:mb-0 bg-tvbox">
          <Image
            src="/tvbox/21.png"
            alt="Lionz Tv Box"
            width={500}
            height={500}
            layout="responsive"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
              
    </div>
  );
};

export default LionzTvBoxPage;
