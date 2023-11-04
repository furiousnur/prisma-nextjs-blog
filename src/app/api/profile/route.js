import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function PUT(req, res) {
    try {
        let reqBody = await req.json();
        reqBody.otp = "0";
        const prisma = new PrismaClient();

        const updatedUser = await prisma.users.update({
            where: {
                email: reqBody.email
            },
            data: {
                email: reqBody.email,
                firstName: reqBody.firstName,
                lastName: reqBody.lastName,
                mobile: reqBody.mobile,
                password: reqBody.password,
            }
        });
        
        return NextResponse.json({ status: "success", data: updatedUser });
    } catch (e) {
        // Send an error response
        return NextResponse.json({ status: "fail", data: e });
    }
}
