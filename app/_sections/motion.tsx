"use client";

import { domAnimation, LazyMotion, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function Motion({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  return (
    <LazyMotion features={domAnimation}>
      {" "}
      <motion.div
        key={pathName}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        layout
        className="w-full"
      >
        {children}
      </motion.div>
    </LazyMotion>
  );
}
