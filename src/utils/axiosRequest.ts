import axios from "@/lib/instance";
import { TaskType } from "@/types/task";

export const fetchData = async (): Promise<TaskType[]> => {
  const { data } = await axios.get("task");
  return data;
};
