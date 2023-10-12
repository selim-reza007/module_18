import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {

    try {
        const prisma = new PrismaClient();
        let category = await prisma.category.findMany();
        return NextResponse.json({ status: "Success", data: category })
    }
    catch (e) {
        return NextResponse.json({ status: "Fail", data: e })
    }
}

export async function POST() {

    try {
        const prisma = new PrismaClient();
        let category = await prisma.category.create({
            data: {
                title: "LLL lll LLL",
                metaTitle: "LLL lll LLL",
                slug: "LLL lll LLL",
                content: "LLL lll LLL"
            }
        })
        return NextResponse.json({ status: "Success", data: category })
    }
    catch (e) {
        return NextResponse.json({ Status: "Fail", data: e })
    }
}

export async function PATCH() {


    try {
        let prisma = new PrismaClient();
        let category = await prisma.category.update({
            where: { id: 6 },
            data: { slug: "dong dong dong", }
        });
        return NextResponse.json({ status: "Success", data: category })
    }
    catch (e) {
        return NextResponse.json({ Status: "Fail", data: e })
    }
}


export async function DELETE() {


    try {
        let prisma = new PrismaClient();
        let category = await prisma.category.delete({
            where: { id: 6 }
        });

        return NextResponse.json({ status: "Success", data: category })
    }
    catch (e) {
        return NextResponse.json({ Status: "Fail", data: e })
    }
}