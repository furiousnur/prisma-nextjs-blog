import { NextResponse } from "next/server";
import { PrismaClient, PrismaClientValidationError  } from "@prisma/client";

const prisma=new PrismaClient();
export async function POST(req, res) {
    try{
        let reqBody = await req.json();
        const result = await prisma.subscribers.create({
            data: reqBody
        });
        return NextResponse.json({ status: "success", data: result });
    }
    catch (error) {
        if (error instanceof PrismaClientValidationError) {
            console.error("Validation Error:", error.message);
            return NextResponse.json({ status: "fail", error: "Validation Error" });
        } else {
            console.error("Error:", error);
            return NextResponse.json({ status: "fail", error: "Internal Server Error" });
        }
    } finally {
        await prisma.$disconnect();
    }
}
