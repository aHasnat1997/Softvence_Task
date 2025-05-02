'use client';

import refresh from "@/assets/refresh.svg";
import thumbsUp from "@/assets/thumbs-up.svg";
import thumbsDown from "@/assets/thumbs-down.svg";
import clipboard from "@/assets/clipboard.svg";
import volume from "@/assets/volume-2.svg";
import nodes from "@/assets/Nodes.svg";
import frame from "@/assets/Frame.svg";
import frame2 from "@/assets/Frame2.svg";
import frame3 from "@/assets/Frame3.svg";
import arrowUp from "@/assets/ArrowUp.png";
import Image from "next/image";
import Button from "@/components/ui/button";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function LiveCoach() {
  const confidenceLevel = 60;
  const objectionHandling = 85;

  const [messageArray, setMessageArray] = useState<{ id: string; text: string }[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.querySelector('input') as HTMLInputElement;
    const value = input.value.trim();
    if (value) {
      setMessageArray((prev) => [...prev, { id: uuidv4(), text: value }]);
      input.value = '';
    }
  };

  const ChatBox = () => (
    <div className="h-[577px] rounded-[12px] bg-[#F2F3F3] overflow-hidden flex flex-col">
      <div className="w-full px-[34px] py-6 bg-white">
        <h4 className="text-[#1B1B1B] text-[18px] leading-[120%] font-bold">AI Sales Coach</h4>
      </div>

      <div className="px-[34px] py-6 space-y-4 overflow-y-scroll">
        <div className="flex items-start gap-6">
          <Image
            src='https://img.freepik.com/premium-vector/cute-robot-cartoon-vector-icon-illustration-techology-robot-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-1474.jpg'
            alt="clipboard"
            width={100}
            height={100}
            className="size-10 rounded-full object-cover"
          />
          <div className="px-[24px] py-[8px] bg-white rounded-[8px]">
            <p className="text-[#181818] text-xs md:text-lg font-lato">Hello! I&apos;m your AI sales coach. How can I help you improve your sales performance today?</p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-6">
          {
            messageArray.length > 0 ? (
              messageArray.map((item) => (
                <div key={item.id} className="flex items-start gap-6">
                  <div className="px-[24px] py-[8px] bg-white rounded-[8px]">
                    <p className="text-[#181818] text-xs md:text-lg font-lato">{item.text}</p>
                  </div>

                  <Image
                    src='https://cdn-icons-png.flaticon.com/512/1177/1177568.png'
                    alt="clipboard"
                    width={100}
                    height={100}
                    className="size-10 rounded-full object-cover"
                  />
                </div>
              ))
            ) : null
          }
        </div>
      </div>

      <div className="w-full pt-4 pb-6 px-[34px] bg-white mt-auto">
        <div className="flex flex-wrap items-center gap-2 lg:gap-[13px]">
          {
            [
              'How do I handle objections?',
              'Give me a cold email template',
              'Closing techniques',
              'Negotiation tips'
            ].map((item, index) => (
              <div key={index} className="bg-[#002868]/8 rounded-full p-2 md:p-[12px]">
                <p className="text-[#002868] text-[10px] md:text-[14px] leading-[100%] font-geist">{item}</p>
              </div>
            ))
          }
        </div>
        <div>
          <form className="flex items-center mt-4 gap-3" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ask anything you need"
              className="w-full rounded-[4px] border border-[#E5E7EB] p-2 md:px-[23px] md:py-[12px] text-xs md:text-lg"
            />
            <Button
              title={
                <div className="flex items-center gap-2">
                  <p>Send</p>
                  <Image
                    src={arrowUp}
                    alt="arrow-up"
                    width={40}
                    height={40}
                  />
                </div>
              }
              customStyle="p-[6px] md:p-[14px] text-[10px] md:text-lg font-geist"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full pt-12 pb-16 gradient-bg">
      <div className="max-w-container">
        <div>
          <p className="text-[#FCE38A] text-xs md:text-[24px] font-questrial">Live Ai Coach</p>
          <h3 className="text-white text-3xl md:text-[60px] mt-[20px] font-questrial">Take a Suggestion Coaching</h3>
        </div>

        <div className="mt-[60px] flex flex-col lg:flex-row items-center gap-6">
          <div>
            <ChatBox />
          </div>

          <div className="bg-[#F2F3F3] p-6 rounded-full flex lg:flex-col items-center gap-5 md:gap-10">
            <Image
              src={refresh}
              alt="refresh"
              width={24}
              height={24}
              className="cursor-pointer duration-200 hover:scale-125 active:scale-95"
              onClick={() => setMessageArray([])}
            />
            <Image
              src={thumbsUp}
              alt="thumbs-up"
              width={24}
              height={24}
              className="cursor-pointer duration-200 hover:scale-125 active:scale-95"
            />
            <Image
              src={thumbsDown}
              alt="thumbs-down"
              width={24}
              height={24}
              className="cursor-pointer duration-200 hover:scale-125 active:scale-95"
            />
            <Image
              src={clipboard}
              alt="clipboard"
              width={24}
              height={24}
              className="cursor-pointer duration-200 hover:scale-125 active:scale-95"
            />
            <Image
              src={volume}
              alt="volume"
              width={24}
              height={24}
              className="cursor-pointer duration-200 hover:scale-125 active:scale-95"
            />
          </div>

          <div className="w-full lg:w-[535px] flex flex-col gap-6">
            <div className="bg-[#EFEFEF] p-[30px] rounded-[20px] space-y-[20px]">
              <h3 className="text-[#323232] font-bold text-2xl md:text-[32px]">Real-time Analysis</h3>
              <div className="bg-white rounded-[12px] p-4 space-y-[12px]">
                <div className="flex items-center gap-1">
                  <Image
                    src={nodes}
                    alt="nodes"
                    width={24}
                    height={24}
                  />
                  <h4 className="md:text-[18px] font-semibold text-[#171D25] leading-[132%]">Confidence Level</h4>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-full h-2 bg-[#DFDFDF] rounded-full">
                    <div
                      className="h-2 bg-[#44D618] rounded-full"
                      style={{ width: `${confidenceLevel}%` }}
                    ></div>
                  </div>
                  <p className="text-[12px] text-[#6D6D6D]">{confidenceLevel}%</p>
                </div>
              </div>

              <div className="bg-white rounded-[12px] p-4 space-y-[12px] leading-[132%]">
                <div className="flex items-center gap-1">
                  <Image
                    src={frame}
                    alt="frame"
                    width={24}
                    height={24}
                  />
                  <h4 className="md:text-[18px] font-semibold text-[#171D25]">Confidence Level</h4>
                </div>
                <p className="md:text-[18px] text-[#909090] leading-[32px] font-lato">{objectionHandling}% improvement in objection handling</p>
              </div>
            </div>

            <div className="bg-[#EFEFEF] p-[30px] rounded-[20px] space-y-[20px]">
              <h3 className="text-[#323232] font-bold text-2xl md:text-[32px]">Quick Actions</h3>
              <div className="flex items-center gap-5">
                <div className="w-full bg-white rounded-[12px] p-4 space-y-[12px]">
                  <Image
                    src={frame2}
                    alt="Frame2"
                    width={24}
                    height={24}
                  />
                  <p className="md:text-[18px] font-semibold text-[#171D25] leading-[132%]">Generate Script</p>
                </div>

                <div className="w-full bg-white rounded-[12px] p-4 space-y-[12px]">
                  <Image
                    src={frame3}
                    alt="frame3"
                    width={24}
                    height={24}
                  />
                  <p className="md:text-[18px] font-semibold text-[#171D25] leading-[132%]">Practice Pitch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
