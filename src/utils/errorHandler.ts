import { NextResponse } from "next/server";

interface CastError extends Error {
  name: "CastError";
  value: string;
}

const errorHandler = (error: any) => {
  if (error.name === "ValidationError") {
    return NextResponse.json({ message: "Validation Error!" }, { status: 400 });
  }

  if (error.name === "CastError") {
    return NextResponse.json(
      {
        message: `Resource with an ID of ${
          (error as CastError).value
        } is not found!`,
      },
      { status: 404 }
    );
  }

  if (error.code === 11000) {
    return NextResponse.json(
      {
        message: "Duplication key Error!",
      },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { message: "Internal Server Error!" },
    { status: 500 }
  );
};

export default errorHandler;
