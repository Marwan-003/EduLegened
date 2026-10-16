import Label from "@/components/ui/Label"
import { type Course } from "@/data/Courses"
import { Bookmark, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import PersonImage from "@/public/assets/person.webp"

function CourseCard({ course }: { course: Course }) {
  return (
    <article className="flex flex-col rounded-3xl overflow-hidden border border-slate-100 shadow-sm group transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg @container">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={course.image}
          alt=""
          fill
          loading="lazy"
          placeholder="blur"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-translate duration-300 ease-in-out group-hover:scale-105"
        />
        <button
          type="button"
          aria-label={`Save ${course.title}`}
          className="absolute top-5 right-5 bg-white rounded-full size-8 p-1.5 cursor-pointer transition-colors duration-300 ease-in-out hover:text-red-500"
        >
          <Bookmark aria-hidden="true" className="size-full" />
        </button>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-4 justify-between mb-2">
          <Label rounded>{course.category}</Label>
          <span className="flex items-center gap-2">
            <Star aria-hidden="true" fill="orange" size={18} strokeWidth={0} />
            <span className="font-semibold">4.9</span>
            <span className="sr-only">out of 5 rating</span>
          </span>
        </div>

        <h3 className="font-bold text-xl transition-colors duration-300 ease-in-out hover:text-(--color-primary-300)">
          <Link href="/">{course.title}</Link>
        </h3>
        <p className="text-slate-500 mt-1 mb-auto">{course.description}</p>

        <div className="mb-4">
          <div className="flex items-center gap-4 justify-between">
            <span className="text-slate-500">Progress</span>
            <span className="text-(--color-primary-400) text-sm font-semibold">
              {course.progress}% Complete
            </span>
          </div>
          <div
            role="progressbar"
            aria-label={`${course.title} progress`}
            aria-valuenow={course.progress}
            aria-valuemin={0}
            aria-valuemax={100}
            className="relative rounded-3xl bg-slate-100 w-full h-2 overflow-hidden"
          >
            <span
              className="absolute bg-(--color-primary-300) h-full rounded-3xl"
              style={{ width: `${course.progress}%` }}
            ></span>
          </div>
        </div>

        <footer className="flex gap-4 justify-between items-center py-4 border-t border-slate-200 @max-sm:flex-col @max-sm:items-start">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full relative overflow-hidden">
              <Image src={PersonImage} alt="" fill className="object-cover" />
            </div>
            <div>
              <p className="font-bold">{course.instructor}</p>
              <p className="text-slate-500">Instructor</p>
            </div>
          </div>
          <Link
            href="/"
            className="inline-flex items-center rounded-full justify-center  px-5 py-2 font-medium cursor-pointer transition-colors bg-(--color-primary-400) text-white hover:bg-(--color-primary-500) @max-sm:w-full"
          >
            Watch course
          </Link>
        </footer>
      </div>
    </article>
  );
}

export default CourseCard