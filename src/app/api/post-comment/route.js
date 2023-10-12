import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET() {
    try {
        let result = await prisma.post_Commnet.findMany();

        return NextResponse.json({ status: "success", data: result })
    }
    catch (e) {
        return NextResponse.json({ status: "Fail", data: e })
    }
}

export async function POST() {

    try {
        let result = await prisma.post_Commnet.create({
            data: {
                title: "blah blah",
                published: 1,
                content: "khuhkj kkjk",
                postId: 3
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
        let result = await prisma.post_Commnet.update({
            where: { id: 2 },
            data: { title: "hhhh hjjj kkk", }
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
        let result = await prisma.post_Commnet.delete({
            where: { id: 4 }
        });

        return NextResponse.json({ status: "Success", data: result })
    }
    catch (e) {
        return NextResponse.json({ Status: "Fail", data: e })
    }
}