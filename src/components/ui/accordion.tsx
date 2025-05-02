'use client';

import { JSX, useState } from "react";
import Button from "./button";
import Image from "next/image";
import plusIcon from "../../assets/Plus.svg";
import minusIcon from "../../assets/Minus.svg";

/**
 * TAccordionProps defines the structure of the accordion items.
 * Each item has a `title` (string) and `content` (string).
 */
type TAccordionProps = {
  title: string;
  content: string;
}[];

/**
 * Accordion component renders a list of collapsible items.
 * 
 * @param {TAccordionProps} contents - The contents of the accordion, an array of objects with title and content.
 * @returns {JSX.Element} The rendered Accordion component.
 */
export default function Accordion({ contents }: { contents: TAccordionProps }): JSX.Element {
  // State to track the currently open accordion item. Default is the first item.
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="w-full">
      {contents.map((item, index) => (
        <div key={index} className="py-4 border-b border-[#CCCCCC] flex items-center gap-[40px]">
          {/* Display the index of the accordion item, formatted as two digits */}
          <p className="text-[#8B7D4C] text-[32px] font-questrial">{index + 1 < 10 ? '0' + `${index + 1}` : index + 1}</p>
          <div className="w-full">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setOpen(open === index ? -1 : index)}
            >
              {/* Title of the accordion item */}
              <h2 className="text-[#111111] text-[20px] lg:text-[40px] font-questrial">{item.title}</h2>
              {/* Button to toggle the accordion item */}
              <Button
                title={open === index ?
                  <Image
                    src={plusIcon}
                    alt="Plus Icon"
                    width={40}
                    height={40}
                  />
                  :
                  <Image
                    src={minusIcon}
                    alt="Minus Icon"
                    width={40}
                    height={40}
                  />}
                variant="secondary"
                customStyle="border-none hover:shadow-none"
              />
            </div>

            {/* Content of the accordion item, visible only if the item is open */}
            <div className={`max-w-[1210px] text-[#636363] text-xs lg:text-[16px] font-inter duration-300 ${open === index ? "h-full py-2 scale-y-100" : "h-0 scale-y-0"}`}>
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
