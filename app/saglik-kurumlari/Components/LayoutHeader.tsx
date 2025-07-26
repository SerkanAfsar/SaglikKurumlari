"use client";
import { cn, slugAllUrl } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LayoutHeaderType = {
  cityName: string;
  districtSlug: string;
  typeDetail: string[];
};
export default function LayoutHeader({
  cityName,
  districtSlug,
  typeDetail,
}: LayoutHeaderType) {
  const pathName = usePathname();
  const pathNameLenght = pathName.split("/").length;
  const condition = pathNameLenght == 3 || pathName.includes("turunde");

  const tumuUrl = slugAllUrl(
    cityName,
    undefined,
    condition ? undefined : districtSlug,
  );

  const slugPathUrl = (url: string) => {
    return slugAllUrl(
      cityName,
      condition ? `${url} türünde` : url,
      condition ? undefined : districtSlug,
      false,
    );
  };

  const CustomLink = ({
    innerCondition,
    title,
    href,
  }: {
    innerCondition: any;
    title: string;
    href: string;
  }) => {
    return (
      <Link
        className={cn("bg-primary rounded-md p-3 text-white", {
          "bg-secondary text-white underline underline-offset-4":
            innerCondition,
        })}
        href={href}
        title={title}
      >
        {title}
      </Link>
    );
  };

  return (
    <header className="flex gap-3">
      <nav className="mb-3 flex flex-wrap gap-3">
        <CustomLink
          innerCondition={
            pathNameLenght == 3 ||
            (pathNameLenght == 4 && !pathName.includes("turunde"))
          }
          href={tumuUrl}
          title="TÜMÜ"
        />
        {typeDetail.map((item, index) => {
          const path = slugPathUrl(item);
          return (
            <CustomLink
              key={index}
              innerCondition={path == pathName}
              href={path}
              title={item}
            />
          );
        })}
      </nav>
    </header>
  );
}
