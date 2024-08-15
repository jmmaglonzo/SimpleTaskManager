import errorHandler from "@/utils/errorHandler";
import Task from "@/models/task.model";
import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/db";
export const GET = async () => {
  try {
    await connect();
    const tasks = await Task.find();

    if (tasks.length < 1) {
      return NextResponse.json(
        { status: "fail", message: "No tasks have been created yet" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        status: "success",
        results: tasks.length,
        data: tasks,
      },
      { status: 200 }
    );
  } catch (error) {
    return errorHandler(error);
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await connect();
    const body = await req.json();
    const newTask = await Task.create(body);

    return NextResponse.json(
      {
        status: "success",
        data: newTask,
      },
      { status: 201 }
    );
  } catch (error) {
    return errorHandler(error);
  }
};
