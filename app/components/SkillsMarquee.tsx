import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";

import { useTranslation } from "react-i18next";

const skills = [
  { Icon: FaHtml5, name: "HTML", color: "#E34F26" },
  { Icon: FaCss3Alt, name: "CSS", color: "#1572B6" },
  { Icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: SiBootstrap, name: "Bootstrap", color: "#9235FC" },
  { Icon: SiTailwindcss, name: "Tailwind", color: "#38BDF8" },
  { Icon: FaReact, name: "React", color: "#61DAFB" },
  { Icon: FaNodeJs, name: "Node.js", color: "#339933" },
  { Icon: FaPhp, name: "PHP", color: "#777BB4" },
  { Icon: FaLaravel, name: "Laravel", color: "#F14D54" },
  { Icon: FaDatabase, name: "SQL", color: "#4479A1" },
];

// duplicação para scroll infinito
const duplicated = [...skills, ...skills];

export function SkillsMarquee() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="relative py-16">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center text-4xl font-kaushan text-white"
      >
        {t("skills.title")}
      </motion.h2>

      {/* Marquee */}
      <div
        className="relative w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <motion.div
          className="flex w-max items-center gap-14 px-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicated.map((skill, index) => {
            const Icon = skill.Icon;

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="flex cursor-pointer flex-col items-center justify-center opacity-70 hover:opacity-100"
              >
                <Icon
                  size={56}
                  style={{ color: skill.color }}
                />

                <span className="mt-2 text-xs font-medium tracking-wide text-gray-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}