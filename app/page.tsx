import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import { ArrowRight, Infinity, Play, Star, Users, Verified } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <section
          id="home"
          aria-labelledby="hero-heading"
          className="bg-[linear-gradient(rgba(255,255,255,0.95),rgba(255,255,255,0.95)),url('/assets/hero_section.webp')] bg-cover bg-center bg-fixed"
        >
          <div className="container py-28 flex flex-col items-center gap-6 text-center">
            <div className="flex gap-2 items-center bg-white px-4 rounded-full border border-slate-200/80 shadow-sm py-1 text-sm">
              <Star aria-hidden="true" fill="orange" strokeWidth={0} />
              <span className="font-semibold">4.9/5 Rating</span>
              <span aria-hidden="true" className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span className="text-slate-300">48,000+ Active Students</span>
              <Label rounded variant="success" className="uppercase text-sm hidden sm:block">
                Certified
              </Label>
            </div>

            <h1
              id="hero-heading"
              className="font-bold text-5xl max-w-3xl capitalize"
            >
              Master in-demand skills from{" "}
              <span className="text-(--color-primary-600) md:underline md:decoration-wavy md:underline-offset-20 md:decoration-2">
                industry experts.
              </span>
            </h1>

            <p className="text-slate-400 text-xl max-w-3xl mt-4">
              Access over 1,200+ structured, interactive courses with hands-on
              projects, personalized mentor code reviews, and industry-recognized
              certifications.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch gap-5 my-6">
              <Button rounded className="py-3 sm:py-2">
                Explore All Courses <ArrowRight aria-hidden="true" size={18} />
              </Button>
              <Button rounded variant="outline">
                <Play
                  aria-hidden="true"
                  fill="red"
                  strokeWidth={0}
                  className="bg-red-100 rounded-full p-1 size-7"
                />
                Try free Class
              </Button>
            </div>

            <ul className="flex flex-col sm:flex-row items-center gap-6 text-sm">
              <li className="flex items-center gap-2">
                <Verified aria-hidden="true" className="text-(--color-primary-400)" size={18} />
                100% Verified Certificates
              </li>
              <li className="flex items-center gap-2">
                <Users aria-hidden="true" className="text-(--color-primary-400)" size={18} />
                1-on-1 Mentor Feedback
              </li>
              <li className="flex items-center gap-2">
                <Infinity aria-hidden="true" className="text-(--color-primary-400)" size={18} />
                Lifetime Access
              </li>
            </ul>
          </div>
        </section>
        {/* gonna add more sections here  */}
      </main>
      <Footer />
    </div>
  );
}