// export async function GET(request) {}

// export async function HEAD(request) {}

// export async function POST(request) {}

// export async function PUT(request) {}

// export async function DELETE(request) {}

// export async function PATCh(request) {}

// export async function OPTIONS(request) {}

import { NextResponse } from "next/server";

export async function POST(request) {
    let data = await request.json();
    console.log(data);
    return NextResponse.json({success:true, data:data})
}