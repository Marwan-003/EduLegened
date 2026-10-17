import type { ComponentProps } from "react";
import Image from "next/image"
import PersonImage from '@/public/assets/person.webp'
import { twMerge } from "tailwind-merge";

const baseStyles = "flex gap-5"

type CommentProps = ComponentProps<"article"> & {
  name: string,
  date: string,
  dateTime?: string,
  message: string
}

function Comment({ name, date, dateTime, message, className, ...props }: CommentProps) {
  const classes = twMerge(
    baseStyles,
    className
  );

  return (
    <article className={classes} {...props}>
      <div className="w-12 h-12 rounded-full relative overflow-hidden shrink-0">
        <Image src={PersonImage} alt="" fill sizes="48px" className="object-cover" />
      </div>
      <div className="flex flex-col">
        <p className="text-slate-700 font-semibold mb-1">{name}</p>
        <time dateTime={dateTime} className="text-slate-500 mb-2">{date}</time>
        <blockquote>
          <p className="text-slate-500">{message}</p>
        </blockquote>
      </div>
    </article>
  )
}

export default Comment