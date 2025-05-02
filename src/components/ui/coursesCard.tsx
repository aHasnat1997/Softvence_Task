import { JSX } from "react";
import Image from "next/image";
import Button from "./button";

/**
 * CoursesCard component renders a card with course details.
 * 
 * @param {Object} props - The properties object.
 * @param {string} props.image - The image URL for the course card.
 * @param {string} props.author - The author of the course.
 * @param {string} props.duration - The duration of the course.
 * @param {string} props.stage - The stage or level of the course.
 * @param {string} props.title - The title of the course.
 * @param {string} props.description - The description of the course.
 * @returns {JSX.Element} The rendered CoursesCard component.
 */
export function CoursesCard(
  { image, author, duration, stage, title, description }:
    { image: string, author: string, duration: string, stage: string, title: string, description: string }
): JSX.Element {

  /**
   * Badge component renders a small badge with text.
   * 
   * @param {Object} props - The properties object.
   * @param {string} props.text - The text to display inside the badge. 
   * @returns {JSX.Element} The rendered Badge component.
   */
  const Badge = ({ text }: { text: string }): JSX.Element => (
    <div className="px-[16px] py-[10px] rounded-[8px] text-xs lg:text-lg bg-white text-[#4C4C4D]">
      {text}
    </div>
  );

  return (
    <div className="max-w-[705.81px] p-[25px] lg:p-[50px] bg-[#F0F0F0] rounded-[15px]">
      <Image
        src={image}
        alt="Courses Card Image"
        width={605.11}
        height={380}
        className="rounded-[8px]"
      />

      <div className="py-[30px] lg:flex justify-between items-center">
        <div className="flex items-center gap-[10px]">
          <Badge text={duration} />
          <Badge text={stage} />
        </div>
        <p className="text-[#262626] mt-4 lg:mt-0 text-xs lg:text-xl">By {author}</p>
      </div>

      <div className="space-y-[14px]">
        <h2 className="text-[#262626] text-xl lg:text-2xl font-semibold">{title}</h2>
        <p className="text-[#4C4C4D] text-xs lg:text-lg">{description}</p>
      </div>

      <div className="pt-[30px]">
        <Button
          title="Get it Now"
          fullWidth={true}
        />
      </div>
    </div>
  );
};