import Footer from "@/components/footer";
import Hero from "./sections/hero";
import LiveCoach from "./sections/liveCoach";
import Courses from "./sections/courses";
import FAQ from "./sections/faq";
import Carousel from "@/components/ui/carousel";

// This is the main Home component for the application
// It renders a main container with buttons and a course card
export default function Home() {
  const carouselContents = [
    {
      author: 'Michael Kaizer',
      designation: 'CEO of Basecamp Corp',
      authorImage: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      quote: 'They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.'
    },
    {
      author: 'Jane Smith',
      designation: 'Marketing Director, BrightTech',
      authorImage: 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      quote: 'The level of professionalism and insight this team brings is unmatched. Their strategies helped us double our engagement rate within just a few months.'
    },
    {
      author: 'Emily Johnson',
      designation: 'Founder, StartSmart',
      authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      quote: 'From day one, they understood our vision and translated it into a results-driven campaign. The impact on our brand awareness has been phenomenal.'
    },
    {
      author: 'Michael Lee',
      designation: 'COO, InnovateX',
      authorImage: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      quote: 'Their ability to adapt quickly and respond to feedback made the entire process smooth and efficient. They’re a true partner in our growth.'
    },
    {
      author: 'Sarah Ahmed',
      designation: 'Head of Product, NeoWorks',
      authorImage: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      quote: 'Creative, strategic, and deeply knowledgeable—they brought fresh perspectives that truly resonated with our audience.'
    }
  ];

  return (
    <main>
      <div>
        <Hero />
      </div>

      <div>
        <LiveCoach />
      </div>

      <div>
        <Courses />
      </div>

      <div>
        <FAQ />
      </div>

      <div className="max-w-container py-[100px]">
        <Carousel contents={carouselContents} />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
};
