import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
} from "react-icons/hi";
import { useTranslation } from "react-i18next";

/* -----------------------------
   Texto ultra-rápido (quase instantâneo)
----------------------------- */
function FastRevealText({ text }: { text: string }) {
  return (
    <motion.p
      className="leading-relaxed text-gray-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.30 }}
    >
      {text}
    </motion.p>
  );
}

/* -----------------------------
   Componente principal
----------------------------- */

export function EducationSection() {
  const { t } = useTranslation();

  const formationsRaw = t("formations.items", {
    returnObjects: true,
    defaultValue: [],
  });

  const formations = Array.isArray(formationsRaw)
    ? formationsRaw
    : Object.values(formationsRaw);

  const experiencesRaw = t("experiences.items", {
    returnObjects: true,
    defaultValue: [],
  });

  const experiences = Array.isArray(experiencesRaw)
    ? experiencesRaw
    : Object.values(experiencesRaw);

  const [tab, setTab] = useState<"formations" | "experiences">("formations");
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const items = tab === "formations" ? formations : experiences;

  return (
    <section className="mx-auto max-w-5xl px-4 py-28">
      {/* Tabs */}
      <div className="mb-16 flex justify-center gap-14">
        {[
          { key: "formations", label: "Formações" },
          { key: "experiences", label: "Experiências" },
        ].map((tabItem) => {
          const active = tab === tabItem.key;

          return (
            <button
              key={tabItem.key}
              onClick={() => {
                setTab(tabItem.key as any);
                setActiveIndex(0);
              }}
              className={`relative text-lg font-semibold transition-colors ${
                active
                  ? "text-primary"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tabItem.label}
              {active && (
                <motion.span
                  layoutId="tab-indicator"
                  className="absolute -bottom-2 left-0 h-[2px] w-full bg-primary"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Subtitle */}
      <motion.h2
        className="mb-8 text-center text-xl font-kaushan text-white"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 0.35, y: 0 }}
        viewport={{ once: true }}
      >
        {t(`${tab}.subtitle`)}
      </motion.h2>

      {/* Timeline */}
      <div className="relative space-y-12">
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={index}
              layout
              onClick={() =>
                setActiveIndex(isActive ? null : index)
              }
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={{
                rest: {},
                hover: {},
              }}
              className="group relative grid cursor-pointer grid-cols-[36px_1fr] gap-8 rounded-xl p-4 transition-colors hover:bg-white/5"
            >
              {/* Linha + Nó */}
              <div className="relative flex flex-col items-center">
                {/* Linha SEMPRE visível */}
                <motion.div
                  className="absolute top-0 h-full w-[2px] origin-top bg-primary/20"
                  animate={{
                    backgroundColor: isActive
                      ? "rgba(76,175,80,0.6)"
                      : "rgba(76,175,80,0.25)",
                  }}
                />

                {/* Nó */}
                <motion.div
                  animate={
                    isActive
                      ? {
                          scale: 1.3,
                          boxShadow:
                            "0 0 28px rgba(76,175,80,0.6)",
                        }
                      : { scale: 1 }
                  }
                  whileHover={{
                    scale: 1.15,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  className="z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary bg-black"
                >
                  {tab === "formations" ? (
                    <HiOutlineAcademicCap className="text-primary text-lg" />
                  ) : (
                    <HiOutlineBriefcase className="text-primary text-lg" />
                  )}
                </motion.div>
              </div>

              {/* Conteúdo */}
              <motion.div layout className="select-none">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-primary text-start">
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span className="text-primary/80">
                      {item.location}
                    </span>
                    <span>{item.period}</span>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        duration: 0.25,
                        ease: "easeOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 max-w-2xl text-start">
                        <FastRevealText text={item.details} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}