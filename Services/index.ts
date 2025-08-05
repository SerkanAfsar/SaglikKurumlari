"use server";
import { DataType } from "@/types";
import fs from "fs";
import path from "path";

export async function GetList(): Promise<DataType[] | undefined> {
  try {
    const filePath = path.join(process.cwd(), "public", "data.json"); // kök klasör altındaki data klasörü
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContent) as DataType[];
  } catch (error: any) {
    console.log(error);
  }
}
