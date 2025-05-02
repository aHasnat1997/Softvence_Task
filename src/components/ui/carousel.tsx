'use client';

import Image from "next/image";
import { JSX, useState } from "react";
import Button from "./button";
import arrowBlue from "../../assets/arrow-blue.svg";
import arrowWhite from "../../assets/arrow-white.svg";

/**
 * TCarouselProps defines the structure of the carousel items.
 * 
 * @param {string} author - The name of the author.
 * @param {string} designation - The designation of the author.
 * @param {string} authorImage - The URL of the author's image.
 * @param {string} quote - The quote or text to display in the carousel.
 */
type TCarouselProps = {
  author: string,
  designation: string,
  authorImage: string | unknown,
  quote: string
}[];

/**
 * Carousel component renders a list of items in a carousel format.
 * 
 * @param {TCarouselProps} contents - The contents of the carousel, an array of objects with author, designation, authorImage, and quote.
 * * @returns {JSX.Element} The rendered Carousel component.
 */
export default function Carousel({ contents }: { contents: TCarouselProps }): JSX.Element {
  // State to track the currently visible carousel item. Default is the first item.
  const [index, setIndex] = useState<number>(0);

  return (

    <div className={`w-full space-y-[40px] lg:space-y-[74px]`}>
      {/* Display the quote of the current carousel item */}
      <h3 className="min-h-[180px] text-[#010205] text-2xl font-semibold lg:text-[36px]">“{contents[index].quote}”</h3>

      <div className="md:flex items-center justify-between">
        <div className="flex items-center gap-[24px]">
          {/* Display the author's image */}
          <Image
            src={contents[index].authorImage as unknown as string}
            alt="Author Image"
            width={70}
            height={70}
            className="size-[35px] md:size-[70px] rounded-full"
          />
          <div>
            {/* Display the author's name and designation */}
            <h4 className="text-[#010205] text-lg md:text-[20px] font-bold">{contents[index].author}</h4>
            <p className="text-[#878C91] text-xs md:text-[16px]">{contents[index].designation}</p>
          </div>
        </div>

        <div className="flex items-center gap-[38px] mt-8 md:mt-0">
          {/* Button to navigate to the previous carousel item */}
          <Button
            title={
              <Image
                src={index === 0 ? arrowBlue : arrowWhite}
                alt="Left Arrow"
                width={24}
                height={24}
                className={index === 0 ? '' : 'rotate-180'}
              />
            }
            variant={index === 0 ? 'secondary' : 'primary'}
            shape="rounded"
            customStyle={'px-[32px] py-[16px]'}
            onClick={() => setIndex(index > 0 ? index - 1 : 0)}
          />

          {/* Display the current item index and total items */}
          <div className="text-[20px] ">
            <span className="text-[#00245F]">{index + 1 < 10 ? '0' + `${index + 1}` : index + 1}</span>
            <span className="text-[#010205]/40">/{contents.length < 10 ? '0' + `${contents.length}` : contents.length}</span>
          </div>

          {/* Button to navigate to the next carousel item */}
          <Button
            title={
              <Image
                src={index === contents.length - 1 ? arrowBlue : arrowWhite}
                alt="Right Arrow"
                width={24}
                height={24}
                className={index === contents.length - 1 ? 'rotate-180' : ''}
              />
            }
            variant={index === contents.length - 1 ? 'secondary' : 'primary'}
            shape="rounded"
            customStyle={'px-[32px] py-[16px]'}
            onClick={() => setIndex(index === contents.length - 1 ? contents.length - 1 : index + 1)}
          />
        </div>
      </div>
    </div>
  );
};
