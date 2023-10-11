import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET() {
    try {
        let result = await prisma.post.findMany();

        return NextResponse.json({ status: "success", data: result })
    }
    catch (e) {
        return NextResponse.json({ status: "Fail", data: e })
    }
}

export async function POST() {

    try {

        let result = await prisma.post.create({
            data: {
                title: "blah blah",
                metaTitle: "blah blah",
                slug: "blah blah",
                summary: "blah blah",
                content: "blah blah",
                user: { connect: { id: 2 } }
            }
        })

        await prisma.$disconnect();

        return NextResponse.json({ status: "success", data: result })
    }
    catch (e) {
        return NextResponse.json({ status: "Fail", data: e })
    }
}

export async function PATCH() {

    try {
        let prisma = new PrismaClient();
        let result = await prisma.post.update({
            where: { id: 2 },
            data: { metaTitle: "mmmmm mmmm" }
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
        let result = await prisma.post.delete({
            where: { id: 4 }
        });

        return NextResponse.json({ status: "Success", data: result })
    }
    catch (e) {
        return NextResponse.json({ Status: "Fail", data: e })
    }
}