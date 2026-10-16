
import CoursesSection from "@/components/features/CoursesSection/CoursesSection";
import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import { ArrowRight, CircleCheckBig, Infinity, MonitorPlay, Play, Star, UserGroup, Users, UserStar, Verified } from "lucide-react";

export default function Home() {
  
  return (
    <div>
      <Navbar />
      <main>
        {/* --------------------------- Hero section --------------------------- */}

        <section
          id="home"
          aria-labelledby="hero-heading"
          className="bg-[linear-gradient(rgba(255,255,255,0.95),rgba(255,255,255,0.95)),url('/assets/hero_section.webp')] bg-cover bg-center bg-fixed"
        >
          <div className="container py-28 flex flex-col items-center gap-6 text-center">
            <div className="flex gap-2 items-center bg-white px-4 rounded-full border border-slate-200/80 shadow-sm py-1 text-sm">
              <Star aria-hidden="true" fill="orange" strokeWidth={0} />
              <span className="font-semibold">4.9/5 Rating</span>
              <span
                aria-hidden="true"
                className="w-1 h-1 rounded-full bg-slate-300"
              ></span>
              <span className="text-slate-300">48,000+ Active Students</span>
              <Label
                rounded
                variant="success"
                className="uppercase text-sm hidden sm:block"
              >
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
              projects, personalized mentor code reviews, and
              industry-recognized certifications.
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
                <Verified
                  aria-hidden="true"
                  className="text-(--color-primary-400)"
                  size={18}
                />
                100% Verified Certificates
              </li>
              <li className="flex items-center gap-2">
                <Users
                  aria-hidden="true"
                  className="text-(--color-primary-400)"
                  size={18}
                />
                1-on-1 Mentor Feedback
              </li>
              <li className="flex items-center gap-2">
                <Infinity
                  aria-hidden="true"
                  className="text-(--color-primary-400)"
                  size={18}
                />
                Lifetime Access
              </li>
            </ul>
          </div>
        </section>
        {/* --------------------------- Stats section --------------------------- */}
        
        <section
          aria-labelledby="stats-heading"
          className="bg-slate-50 py-14 border-y border-slate-200"
        >
          <h2 id="stats-heading" className="sr-only">
            EduLegend in numbers
          </h2>

          <ul className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-slate-300 bg-slate-50 gap-4 text-center">
            <li className="py-2 group">
              <MonitorPlay
                aria-hidden="true"
                className="text-(--color-primary-500) size-12 p-3 rounded-2xl bg-(--color-primary-50)/20 border border-(--color-primary-200) transition-all duration-300 ease-in-out group-hover:scale-110 mx-auto mb-6"
              />
              <span className="font-semibold text-4xl">1,200+</span>
              <p className="text-slate-500 mt-1">Curated Courses</p>
            </li>
            <li className="py-2 group">
              <UserGroup
                aria-hidden="true"
                className="text-red-500 size-12 p-3 rounded-2xl bg-red-50 border border-red-100 transition-all duration-300 ease-in-out group-hover:scale-110 mx-auto mb-6"
              />
              <span className="font-semibold text-4xl">85,000+</span>
              <p className="text-slate-500 mt-1">Active Learners</p>
            </li>
            <li className="py-2 group">
              <CircleCheckBig
                aria-hidden="true"
                className="text-green-800 size-12 p-3 rounded-2xl bg-green-50 border border-green-200 transition-all duration-300 ease-in-out group-hover:scale-110 mx-auto mb-6"
              />
              <span className="font-semibold text-4xl">94%</span>
              <p className="text-slate-500 mt-1">Completion Rate</p>
            </li>
            <li className="py-2 group">
              <UserStar
                aria-hidden="true"
                className="text-blue-800 size-12 p-3 rounded-2xl bg-blue-50 border border-blue-100 transition-all duration-300 ease-in-out group-hover:scale-110 mx-auto mb-6"
              />
              <span className="font-semibold text-4xl">250+</span>
              <p className="text-slate-500 mt-1">Staff Mentors</p>
            </li>
          </ul>
        </section>
        {/* --------------------------- Courses section --------------------------- */}
          <CoursesSection />
        {/* gonna add more sections here  */}
      
      </main>
      <Footer />
    </div>
  );
}