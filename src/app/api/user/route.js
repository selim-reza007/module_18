import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {

    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    try {
        const prisma = new PrismaClient();
        let users = await prisma.user.findMany();
        return NextResponse.json({ status: "Success", data: users })
    }
    catch (e) {
        return NextResponse.json({ status: "Fail", data: e })
    }
}

export async function POST() {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    
    try {
        const prisma = new PrismaClient();
        let users = await prisma.user.create({
            data: {
                firstName: "Muhammad",
                middleName: "Forid",
                lastName: "Ali",
                mobile: "01752698523",
                email: "sagor@gmail.com",
                passwordHash: "25478933S",
                intro: "Blah...Blah",
                profile: "Blah...Blah"
            }
        })
        return NextResponse.json({ status: "Success", data: users })
    }
    catch (e) {
        return NextResponse.json({ Status: "Fail", data: e })
    }
}

export async function PATCH() {

    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    try {
        let prisma = new PrismaClient();
        let user = await prisma.user.update({
            where: { id: 2 },
            data: { middleName: "Romim", email: "Romim@gmail.com" }
        });
        return NextResponse.json({ status: "Success", data: user })
    }
    catch (e) {
        return NextResponse.json({ Status: "Fail", data: e })
    }
}


export async function DELETE() {

    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    try {
        let prisma = new PrismaClient();
        let user = await prisma.user.delete({
            where: { id: 4 }
        });

        return NextResponse.json({ status: "Success", data: user })
    }
    catch (e) {
        return NextResponse.json({ Status: "Fail", data: e })
    }
}