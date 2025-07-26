import { cn } from "@/utils";
import Link from "next/link";
import { useState } from "react";

export default function HeaderMenuDepartments() {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div className="block">
      <div
        onClick={() => setIsActive(!isActive)}
        className="relative block h-[14px] w-[20px] cursor-pointer self-center"
      >
        <span
          className={cn(
            "bg-primary absolute top-0 right-0 block h-[2px] w-[14px] transition-all",
            isActive && "bg-primary top-[50%] -translate-y-1/2 -rotate-45",
          )}
        ></span>
        <span
          className={cn(
            "bg-primary absolute top-[50%] right-0 block h-[2px] w-full -translate-y-1/2 transition-all",
            isActive && "hidden",
          )}
        ></span>
        <span
          className={cn(
            "bg-primary absolute right-0 bottom-0 block h-[2px] w-[14px] transition-all",
            isActive && "bg-primary top-[50%] -translate-y-1/2 rotate-45",
          )}
        ></span>
      </div>
      {isActive && (
        <div className="departments">
          <ul>
            <li>
              <Link href={"/"}>Neurology Clinic</Link>
            </li>
            <li>
              <Link href={"/"}>Cardiology Clinic</Link>
            </li>
            <li>
              <Link href={"/"}>Pathology Clinic</Link>
            </li>
            <li>
              <Link href={"/"}>Laboratory Clinic</Link>
            </li>
            <li>
              <Link href={"/"}>Pediatric Clinic</Link>
            </li>
            <li>
              <Link href={"/"}>Cardiac Clinic</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
