import { cva } from "class-variance-authority";

export const cardVariants = cva("rounded-2xl transition-all duration-300", {
    variants: {
        variant: {
            default:
                "bg-[#F9FAFB] dark:bg-[#1E293B] text-center border-transparent hover:border-[#C8A45C] dark:hover:border-[#D4AF37] cursor-pointer",
            outline: "bg-transparent border-[#C8A45C] dark:border-[#D4AF37]",
            services:
                "h-full bg-white dark:bg-[#1E293B] rounded-2xl cursor-pointer overflow-hidden",
        },
        size: {
            sm: "p-6",
            md: "p-8",
            lg: "p-10",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "md",
    },
});
