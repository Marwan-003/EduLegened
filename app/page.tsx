import CoursesSection from "@/components/features/CoursesSection/CoursesSection";
import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import Button from "@/components/ui/Button";
import Comment from "@/components/ui/Comment";
import Label from "@/components/ui/Label";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  ArrowRight,
  BadgeCheck,
  CircleCheck,
  CircleCheckBig,
  Columns3,
  FileText,
  Infinity,
  Lock,
  MessageSquareHeart,
  MonitorPlay,
  Play,
  Star,
  UserGroup,
  Users,
  UserStar,
  Verified,
} from "lucide-react";

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
          className="bg-slate-50 py-14 border-y border-slate-200 my-8"
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
        {/* --------------------------- Career path section --------------------------- */}

        <section
          id="career-paths"
          className="bg-slate-50 py-14 border-y border-slate-200"
        >
          <div className="container">
            <SectionHeader
              badge="The EduCraft Methodology"
              title="Engineered for deep learning & actual career growth"
              description="We combined asynchronous video flexibility with structured cohort pacing and live feedback milestones."
              align="center"
              size="large"
              className="max-w-3xl mx-auto mb-8"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-6 flex flex-col gap-4 rounded-3xl bg-white border border-slate-200 transition-shadow duration-300 hover:shadow-sm">
                <Columns3
                  aria-hidden="true"
                  className="text-(--color-primary-500) size-12 p-3 rounded-2xl bg-(--color-primary-50)/20 border border-(--color-primary-200) "
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    Structured Week-by-Week Flow
                  </h3>
                  <p className="text-slate-500">
                    {" "}
                    Say goodbye to chaotic tutorials. Every track features
                    bite-sized weekly modules (Week 1-4, Week 5-8) with clear
                    benchmarks, exercises, and self-checks.
                  </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-2 mt-auto ">
                  <Label variant="danger" rounded className="text-sm">
                    10-15 Min Lessons
                  </Label>
                  <Label variant="success" rounded className="text-sm">
                    Weekly Quizzes
                  </Label>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-4 rounded-3xl bg-white border border-slate-200 transition-shadow duration-300 hover:shadow-sm">
                <MessageSquareHeart
                  aria-hidden="true"
                  className="text-red-500 size-12 p-3 rounded-2xl bg-red-50 border border-red-100"
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    Human Mentor Feedback
                  </h3>
                  <p className="text-slate-500">
                    Stuck on a tricky bug or design layout? Submit exercises for
                    annotated screen reviews and discussion board feedback
                    within 24 hours.
                  </p>
                </div>
                <div className="flex  flex-col lg:flex-row gap-2 mt-auto ">
                  <Label variant="danger" rounded className="text-sm">
                    24h SLA Responses
                  </Label>
                  <Label variant="success" rounded className="text-sm">
                    Video Critiques
                  </Label>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-4 rounded-3xl bg-white border border-slate-200 transition-shadow duration-300 hover:shadow-sm">
                <BadgeCheck
                  aria-hidden="true"
                  className="text-green-800 size-12 p-3 rounded-2xl bg-green-50 border border-green-200"
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    Verified Credentials & Portfolios
                  </h3>
                  <p className="text-slate-500">
                    Earn cryptographic, verifiable completion badges you can
                    share on LinkedIn, along with 3 portfolio-ready capstone
                    artifacts.
                  </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-2 mt-auto ">
                  <Label variant="danger" rounded className="text-sm">
                    LinkedIn Shareable
                  </Label>
                  <Label variant="success" rounded className="text-sm">
                    Capstone Project
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* --------------------------- Community section --------------------------- */}

        <section
          id="community"
          aria-label="Course syllabus and student feedback"
          className="py-14"
        >
          <div className="container flex flex-col lg:flex-row items-start gap-8">
            <article
              aria-labelledby="syllabus-heading"
              className="w-full lg:w-5/12 rounded-2xl border border-slate-200/60 p-6 bg-white flex flex-col gap-4 shadow-sm"
            >
              <div className="text-lg font-semibold flex items-center gap-2 justify-between">
                <h2 id="syllabus-heading">Weekly Module Breakdown</h2>
                <Label rounded variant="success" className="text-xs sm:text-sm">
                  Live Syllabus
                </Label>
              </div>

              <ul className="flex flex-col gap-4">
                <li className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col gap-6">
                  <div>
                    <h3 className="text-lg font-semibold">Week 1-4</h3>
                    <p className="text-slate-500 mt-1">
                      Core Search Architecture & Keyword Intent Mapping
                    </p>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 justify-between">
                      <span className="flex items-center gap-2">
                        <FileText
                          aria-hidden="true"
                          className="text-green-600 size-5"
                        />
                        Introduction to Search Engines
                        <span className="sr-only">Completed</span>
                      </span>
                      <CircleCheck
                        aria-hidden="true"
                        className="text-green-600 size-5"
                      />
                    </li>

                    <li className="flex items-center gap-4 justify-between">
                      <span className="flex items-center gap-2">
                        <FileText
                          aria-hidden="true"
                          className="text-slate-500 size-5"
                        />
                        Course Overview & Setup
                      </span>
                      <span className="space-x-2">
                        <Label variant="success" rounded className="text-xs">
                          0 QUESTION
                        </Label>
                        <Label variant="danger" rounded className="text-xs">
                          10 MIN
                        </Label>
                      </span>
                    </li>

                    <li className="flex items-center gap-4 justify-between">
                      <span className="flex items-center gap-2 text-slate-400">
                        <FileText
                          aria-hidden="true"
                          className="text-slate-400 size-5"
                        />
                        Semantic Crawling Exercises
                        <span className="sr-only">Locked</span>
                      </span>
                      <Lock
                        aria-hidden="true"
                        className="text-slate-400 size-4"
                      />
                    </li>
                  </ul>
                </li>

                <li className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col gap-6">
                  <div>
                    <h3 className="text-lg font-semibold">Week 5-8</h3>
                    <p className="text-slate-500 mt-1">
                      Technical Audits, Backlink Signals & SERP Dominance
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 justify-between">
                      <span className="flex items-center gap-2">
                        <FileText
                          aria-hidden="true"
                          className="text-slate-500 size-5"
                        />
                        6 Lessons Included
                      </span>
                      <span className="space-x-2">
                        <Label variant="success" rounded className="text-xs">
                          2 QUIZZES
                        </Label>
                        <Label variant="danger" rounded className="text-xs">
                          45 MIN
                        </Label>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </article>

            <div className="flex flex-col w-full lg:w-7/12 gap-6">
              <SectionHeader
                badge="Community Feedback"
                title="What our students are building"
                description="Real feedback from graduates working across top tech companies worldwide."
              />
              <ul className="flex flex-col gap-4">
                <li>
                  <Comment
                    name="Alex Romero"
                    date="Oct 10, 2026"
                    dateTime="2026-10-10"
                    message="The week-by-week curriculum structure makes it impossible to get overwhelmed. The mentor feedback on my final SEO audit project was direct and practical—I applied it to our startup the next morning."
                    className="p-4 rounded-2xl border border-slate-200/60"
                  />
                </li>
                <li>
                  <Comment
                    name="Elena Rostova"
                    date="Nov 25, 2026"
                    dateTime="2026-11-25"
                    message="Transitioning from graphic design into UI/UX Design Systems felt daunting until I took this course. The Figma file handoff tutorials were pure gold."
                    className="p-4 rounded-2xl border border-slate-200/60"
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* --------------------------- Contact us section --------------------------- */}
        <section id="contact-us" className="py-14">
          <div className="container rounded-3xl bg-slate-900 p-12 md:p-16 flex flex-col gap-4 items-center text-center">
            <Label rounded variant="success" className="w-fit bg-green-50/20 text-green-300 text-xs sm:text-sm">
              Start Today — First Week Free
            </Label>
            <h1 className="text-3xl font-semibold text-white">Ready to build the career you actually want?</h1>
            <p className="text-slate-300 max-w-3xl">Join 85,000+ engineers, designers, and marketers learning at their own pace. Get immediate access to course materials, source code, and community discords.</p>
            <form className="flex flex-col md:flex-row gap-2 w-full justify-center">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Enter your email"
                className="h-10 w-full rounded-full border-4 border-transparent px-4 focus:outline-none focus:border-slate-200 bg-white text-slate-600 max-w-xl"
              />
              <Button type="submit" rounded className="w-full md:w-auto shrink-0">
                Get Started
              </Button>
            </form>
            <p className="text-slate-400">No credit card required. Cancel anytime with 1-click.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
