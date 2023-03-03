import Image from "next/image";
import clsx from "clsx";
import { className } from "postcss-selector-parser";

export type FaqItem = {
    id: number;
    text: string;
    description: string;
    active: boolean;
};

type Props = {
    items: FaqItem[];
    handleClick(id: number): void;
};

export function Card({ items, handleClick }: Props) {
    return (
        <div
            className={"md:desktop-images bg-white shadow-card w-full rounded-3xl px-6 pb-12 relative pt-34 max-w-[57.5rem] max-h-[509px] md:pt-16 md:pr-24 flex md:justify-end md:pb-24 md:overflow-hidden h-full"}>
            <Image className={"md:hidden absolute top-[-90px] left-2/4 translate-x-[-50%]"}
                   src={"/images/illustration-woman-online-mobile.svg"} alt={"Hero image"} width={237} height={180}/>

            <div className={"absolute h-[359px] w-[472px] hidden md:block ml-[-1.55rem] flex-1 left-0"}>
                <Image className={"hero-desktop"}
                       src={"/images/illustration-woman-online-desktop.svg"} alt={"Hero image"} fill/>
            </div>

            <div className={"cube hidden md:block absolute top-[50%] left-[-45px] translate-y-[-50%]"}>
            </div>
            <div className={"max-w-[21.875rem]"}>
                <h1 className={"uppercase text-black font-bold text-3xl text-center pb-9"}>Faq</h1>

                <ul>
                    {items.map(({ id, active, text, description }, index) => (
                        <li key={id}
                            className={clsx("border-b pb-1 border-gray cursor-pointer", { "pt-4": index !== 0 })}
                            onClick={() => handleClick(id)}>
                            <div className={clsx("flex items-center", { "pb-[1.125rem]": !active, "pb-2.5": active })}>
                                <div
                                    className={clsx("flex-1 text-[0.8125rem] text-blackMedium leading-4 hover:text-orange")}>
                                    <div className={clsx({ "font-bold": active })}>{text}</div>
                                </div>
                                <div
                                    className={clsx("arrow relative basis-[0.5rem] h-[0.25rem]", { "rotate-180": active })}>
                                    <Image src={"/images/icon-arrow-down.svg"} fill alt={"Arrow"}/>
                                </div>
                            </div>

                            <div
                                className={clsx("description text-xs text-grayDark", {
                                    "opacity-0 h-0": !active,
                                    "mb-3": active
                                })}>{description}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}