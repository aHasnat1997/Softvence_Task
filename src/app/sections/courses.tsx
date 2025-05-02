import Button from "@/components/ui/button";
import imageOne from "@/assets/card-image-one.png";
import imageTwo from "@/assets/card-image-two.png";
import { CoursesCard } from "@/components/ui/coursesCard";

export default function Courses() {
  const courses = [
    {
      image: imageOne,
      author: 'John Smith',
      duration: '4 Weeks',
      stage: 'Beginner',
      title: 'Web Design Fundamentals',
      description: 'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.'
    },
    {
      image: imageTwo,
      author: 'John Smith',
      duration: '4 Weeks',
      stage: 'Beginner',
      title: 'Web Design Fundamentals',
      description: 'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.'
    }
  ];

  return (
    <section className="max-w-container py-8">
      <h3 className="text-[#262626] text-3xl md:text-5xl leading-[150%] font-semibold">Our Courses</h3>
      <div className="lg:flex items-center justify-between">
        <p className="text-[#59595A] text-xs md:text-lg mb-4 lg:mb-0">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. <br /> Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
        <Button title="View All" />
      </div>

      <div className="mt-[48px] flex flex-col md:flex-row items-center justify-between md:gap-[30px]">
        {
          courses.map((course, index) => (
            <div key={index} className="mb-[30px]">
              <CoursesCard
                image={course.image as unknown as string}
                author={course.author}
                duration={course.duration}
                stage={course.stage}
                title={course.title}
                description={course.description}
              />
            </div>
          ))
        }
      </div>
    </section>
  );
};
