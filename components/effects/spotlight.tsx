"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const Spotlight = ({ className, fill = "#D85A5A" }: SpotlightProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={cn(
        "pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%]",
        className
      )}
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1155 678"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M317.219 518.975L203.852 678L0 0L1155 0L945.063 678L827.703 518.975L713.582 678L599.461 518.975L485.34 678L371.219 518.975L317.219 518.975Z"
          fill={`url(#spotlight-gradient-${fill})`}
          fillOpacity="0.15"
        />
        <defs>
          <linearGradient
            id={`spotlight-gradient-${fill}`}
            x1="577.5"
            y1="0"
            x2="577.5"
            y2="678"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={fill} />
            <stop offset="1" stopColor={fill} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};
