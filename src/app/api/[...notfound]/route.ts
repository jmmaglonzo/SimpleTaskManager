import { NextResponse, NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  return NextResponse.json(
    {
      status: "fail",
      message: `Invalid API route accessed: ${req.url}`,
    },
    { status: 404 }
  );
};

export const POST = async (req: NextRequest) => {
  return NextResponse.json(
    {
      status: "fail",
      message: `Invalid API route accessed: ${req.url}`,
    },
    { status: 404 }
  );
};

export const PATCH = async (req: NextRequest) => {
  return NextResponse.json(
    {
      status: "fail",
      message: `Invalid API route accessed: ${req.url}`,
    },
    { status: 404 }
  );
};

export const PUT = async (req: NextRequest) => {
  return NextResponse.json(
    {
      status: "fail",
      message: `Invalid API route accessed: ${req.url}`,
    },
    { status: 404 }
  );
};

export const DELETE = async (req: NextRequest) => {
  return NextResponse.json(
    {
      status: "fail",
      message: `Invalid API route accessed: ${req.url}`,
    },
    { status: 404 }
  );
};
