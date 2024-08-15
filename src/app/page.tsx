import Task from "@/components/task";
import TaskCard from "@/components/taskCard";
import TaskHeader from "@/components/taskHeader";

export default function Home() {
  return (
    <main className="flex items-center justify-start mt-[100px] max-w-[450px] mx-auto space-y-4 flex-col">
      <Task />
      <TaskHeader />
      <TaskCard />
    </main>
  );
}
