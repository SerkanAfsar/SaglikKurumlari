import { DataType } from "@/types";

export async function GetList(): Promise<DataType[] | undefined> {
  try {
    const response = await fetch("http://localhost:3000/data.json");
    const result = (await response.json()) as DataType[];
    return result;
  } catch (error: any) {
    console.log(error);
  }
}
