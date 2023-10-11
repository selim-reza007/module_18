import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET() {
    try {
        let result = await prisma.post_Categoty.findMany();

        return NextResponse.json({ status: "success", data: result })
    }
    catch (e) {
        return NextResponse.json({ status: "Fail", data: e })
    }
}

export async function POST() {

    try {
        let result = await prisma.post_Categoty.create({
            data: {
                Post: { connect: { id: 2 } },
                Category: { connect: { id: 2 } }
            }
        })
        return NextResponse.json({ status: "success", data: result })
    }
    catch (e) {
        return NextResponse.json({ status: "Fail", data: e })
    }
}

export async function PATCH() {

    try {
        let prisma = new PrismaClient();
        let result = await prisma.post_Categoty.update({
            where: { id: 2 },
            data: { Post: { connect: { id: 1 } } }
        });
        return NextResponse.json({ status: "Success", data: result })
    }
    catch (e) {
        return NextResponse.json({ Status: "Fail", data: e })
    }
}


export async function DELETE() {


    try {
        let prisma = new PrismaClient();
        let result = await prisma.post_Categoty.delete({
            where: { id: 4 }
        });

        return NextResponse.json({ status: "Success", data: result })
    }
    catch (e) {
        return NextResponse.json({ Status: "Fail", data: e })
    }
}