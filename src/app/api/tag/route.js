import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {

    try {
        const prisma = new PrismaClient();
        let tag = await prisma.tag.findMany();
        return NextResponse.json({ status: "Success", data: tag })
    }
    catch (e) {
        return NextResponse.json({ status: "Fail", data: e })
    }
}

export async function POST() {

    try {
        const prisma = new PrismaClient();
        let tag = await prisma.tag.create({
            data: {
                title: "MMM mmm MMM",
                metaTitle: "MMM mmm MMM",
                slug: "MMM mmm MMM",
                content: "MMM mmm MMM"
            }
        })
        return NextResponse.json({ status: "Success", data: tag })
    }
    catch (e) {
        return NextResponse.json({ Status: "Fail", data: e })
    }
}

export async function PATCH() {


    try {
        let prisma = new PrismaClient();
        let tag = await prisma.tag.update({
            where: { id: 1 },
            data: { slug: "ding dong", }
        });
        return NextResponse.json({ status: "Success", data: tag })
    }
    catch (e) {
        return NextResponse.json({ Status: "Fail", data: e })
    }
}


export async function DELETE() {


    try {
        let prisma = new PrismaClient();
        let result = await prisma.tag.delete({
            where: { id: 2 }
        });

        return NextResponse.json({ status: "Success", data: result })
    }
    catch (e) {
        return NextResponse.json({ Status: "Fail", data: e })
    }
}