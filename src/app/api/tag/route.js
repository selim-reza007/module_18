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
                title: "blah blah blah",
                metaTitle: "blah blah blah",
                slug: "blah blah blah",
                content: "blah blah blah"
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
        let tag = await prisma.tag.delete({
            where: { id: 1 }
        });

        return NextResponse.json({ status: "Success", data: tag })
    }
    catch (e) {
        return NextResponse.json({ Status: "Fail", data: e })
    }
}