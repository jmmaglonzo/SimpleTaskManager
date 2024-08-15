import errorHandler from "@/utils/errorHandler";
import Task from "@/models/task.model";
import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/db";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await connect();
    const getTask = await Task.findById(params.id);

    if (!getTask) {
      return NextResponse.json(
        {
          status: "fail",
          message: "Task not found with the provided ID",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        status: "success",
        data: getTask,
      },
      { status: 200 }
    );
  } catch (error) {
    return errorHandler(error);
  }
};

export const PATCH = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await connect();
    const body = await req.json();
    const updateTask = await Task.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });

    if (!updateTask) {
      return NextResponse.json(
        {
          status: "fail",
          message: "Task not found with the provided ID",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        status: "success",
        data: updateTask,
      },
      { status: 200 }
    );
  } catch (error) {
    return errorHandler(error);
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await connect();
    const deleteTask = await Task.findByIdAndDelete(params.id);

    if (!deleteTask) {
      return NextResponse.json(
        {
          status: "fail",
          message: "Task not found with the provided ID",
        },
        { status: 404 }
      );
    }
    return NextResponse.json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    return errorHandler(error);
  }
};
