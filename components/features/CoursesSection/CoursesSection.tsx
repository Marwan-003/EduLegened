'use client'
import CourseCard from './CourseCard'
import { courses } from '@/data/Courses'
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { useMemo, useState } from 'react';

function CoursesSection() {
    const [activeFilter , setActiveFilter]  = useState("all")
    const filteredCourses = useMemo(() => {
        let data = [...courses];

        if (activeFilter === "all") return data;
        data = data.filter((course) => course.category.toLowerCase() === activeFilter.toLowerCase())
        return data;
     } , [activeFilter])


  return (
    <section className='container py-14' id='courses' aria-labelledby='courses-heading'>
        <div className='flex flex-col lg:flex-row lg:items-center gap-2 mb-8 justify-between'>
            <SectionHeader  badge='Exploration' title='Explore Topics & Skills' description='Select an industry vertical to filter specialized pathways.' />
            <div role='group' aria-label='Filter courses by category' className='flex gap-2 flex-wrap items-center'>
                <Button rounded variant={activeFilter === "all" ? "content" : 'outline'} aria-pressed={activeFilter === "all"} onClick={() => setActiveFilter("all")} >All courses</Button>
                <Button rounded variant={activeFilter === "marketing" ? "content" : 'outline'} aria-pressed={activeFilter === "marketing"} onClick={() => setActiveFilter("marketing")}>Marketing</Button>
                <Button rounded variant={activeFilter === "programming" ? "content" : 'outline'} aria-pressed={activeFilter === "programming"} onClick={() => setActiveFilter("programming")}>Programming</Button>
                <Button rounded variant={activeFilter === "design" ? "content" : 'outline'} aria-pressed={activeFilter === "design"} onClick={() => setActiveFilter("design")}>Design</Button>
                <Button rounded variant={activeFilter === "business" ? "content" : 'outline'} aria-pressed={activeFilter === "business"} onClick={() => setActiveFilter("business")}>Business</Button>
            </div>
        </div>

        <p role='status' className='sr-only'>
            {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'} shown
        </p>

        <ul className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {filteredCourses.map((course) => (
                <li key={course.id} className='grid'>
                    <CourseCard course={course}/>
                </li>
            ))}
        </ul>
    </section>
  )
}
 
export default CoursesSection