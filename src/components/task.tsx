"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters",
  }),
});

export default function Task() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    reset();
  };
  return (
    <>
      <h1 className="text-3xl">Task Manager</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-2"
      >
        <div className="flex items-center">
          <input
            type="text"
            {...register("title")}
            className="outline-none border-2 rounded-l-md p-2 "
          />

          <button
            type="submit"
            className="text-white bg-black p-2 rounded-r-md"
          >
            Add Task
          </button>
        </div>
        {errors.title && (
          <span className="text-red-500 text-sm">{errors.title.message}</span>
        )}
      </form>
    </>
  );
}
