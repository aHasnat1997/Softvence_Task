import Image from "next/image"
import heroImage from "../../assets/image.png"
import robot from "../../assets/image2.png"
import table from "../../assets/backup_table.png"
import art from "../../assets/atr.png"
import Navigation from "@/components/navigation"

/**
 * Hero component renders the main landing section of the application.
 * 
 * Features:
 * - Navigation bar at the top.
 * - Headline and subtext describing the AI-powered sales coach.
 * - Visual elements including images and statistics.
 * - Responsive design for different screen sizes.
 */
export default function Hero() {
  return (
    <section className="w-full hero-bg pb-48 md:pb-24">
      <Navigation />
      <div className="max-w-container lg:flex items-center justify-between">
        <div>
          <h1 className="text-[#111111] text-[40px] md:text-[80px]">Your AI- <br /> Powered <br /> Sales Coach</h1>
          <div className="md:flex items-center gap-[80px] mt-6">
            <Image
              src={robot}
              alt="robot"
              width={204}
              height={198}
            />
            <p className="text-[#05131D]/70 text-[18px] mt-4 md:mt-0 md:text-[20px] leading-[163%]">
              Get real-time coaching, script <br /> suggestions, and deal-closing <br /> strategies powered by advanced AI <br /> technology.
            </p>
          </div>
          <div className="mt-16 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-0">
            <div className="flex items-center gap-8">
              <div className="rounded-[15.57px] p-6 bg-white shadow-[10px_10px_20px_rgba(0,0,0,0.3)]">
                <Image
                  src={table}
                  alt="table"
                  width={46.42}
                  height={46.42}
                />
              </div>
              <div>
                <h3 className="text-[#05131D] text-[40px] font-semibold">2000+</h3>
                <p className="text-[#05131D]/70 text-[20px]">Your protection</p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="rounded-[15.57px] p-6 bg-white shadow-[10px_10px_20px_rgba(0,0,0,0.3)]">
                <Image
                  src={art}
                  alt="art"
                  width={46.42}
                  height={46.42}
                />
              </div>
              <div>
                <h3 className="text-[#05131D] text-[40px] font-semibold">7001+</h3>
                <p className="text-[#05131D]/70 text-[20px]">Provide tailored</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-8 lg:mt-0">
          <Image
            src={heroImage}
            alt="Hero Image"
            width={583}
            height={628}
            className="md:w-full lg:w-[583px]"
          />
          <div className="max-w-[467px] absolute top-[72%] md:top-[62%] lg:-left-[30%] bg-white rounded-[27px] p-8 shadow-[-5px_5px_20px_rgba(0,0,0,0.08)]">
            <div className="w-full flex items-center justify-between">
              <p className="text-[#00245F] text-2xl md:text-[50px] font-semibold">721+</p>
              <p className="text-[#00245F] text-2xl md:text-[50px] font-semibold">1000+</p>
            </div>
            <h3 className="text-[#05131D] md:text-[27.98px] font-semibold py-4 md:py-10">Growth is our priority.</h3>
            <p className="text-[#05131D]/70 md:text-[17px] font-poppins">
              As a full-service business agency, we specialize in helping companies of all sizes optimize their operations
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};
