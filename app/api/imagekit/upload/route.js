import { auth } from "@clerk/nextjs/server";
import ImageKit from "imagekit";
import { NextResponse } from "next/server";

const imageKit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
});

export async function POST(request) {
    try{
        const { userId } = await auth();
        if(!userId) {
            NextResponse.json({
                error: "Unauthorized",
            }, { status: 401 });
        }

        const formData = await request.formData();
        const file = formData.get("file");
        const fileName = formData.get("fileName");
        
        if(!file) {
            NextResponse.json({
                error: "No file provided",
            }, { status: 400 });
        }

        // Convert file to buffer
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Generate unique filename
        const timeStamp = Date.now();
        const sanitizedFileName = fileName?.replace(/[^a-zA-Z0-9.-]/g, "_") || "upload";
        const uniqueFileName = `${userId}/${timeStamp}_${sanitizedFileName}`;

        // Upload to ImageKit - Simple server-side upload
        const uploadResponse = await imageKit.upload({
            file: buffer,
            fileName: uniqueFileName,
            folder: "/projects",
        });

        // Generate thumbnail URL using ImageKit transformations
        const thumbnailUrl = imageKit.url({
            src: uploadResponse.url,
            transformation: [{
                width: 400,
                height: 300,
                cropMode: "maintain_ar",
                quality: 80,
            }],
        });

        // Return upload data
        return NextResponse.json({
            success: true,
            url: uploadResponse.url,
            thumbnailUrl: thumbnailUrl,
            fileId: uploadResponse.fileId,
            width: uploadResponse.width,
            height: uploadResponse.height,
            size: uploadResponse.size,
            name: uploadResponse.name,
        });
        
    } catch(error) {
        console.error("ImageKit upload error: ",error);
        return NextResponse.json({
            success: false,
            error: "Failed to upload image",
            details: error.message,
        }, { status: 500 })
    }
}