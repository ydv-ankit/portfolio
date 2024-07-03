import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { ImLoop2 } from "react-icons/im";
import { motion } from "framer-motion";
import { FaFigma } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

const Skill = ({ text, x, y }: { text: string; x: number; y: number }) => {
  return (
    <motion.div
      className="absolute flex justify-center items-center rounded-full font-semibold bg-black text-white px-4 py-2 shadow-dark cursor-pointer"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1 }}>
      {text}
    </motion.div>
  );
};

export default function Skills() {
  return (
    <div className="w-full">
      <div className="my-3 text-2xl font-extrabold">Skills</div>
      <div className="w-full h-vh flex items-center justify-center">
        <div className="hidden lg:flex flex-wrap justify-center items-center rounded-full bg-circularLight h-screen">
          <motion.div
            className="flex justify-center items-center rounded-full font-semibold bg-white text-black p-4 px-6 shadow-dark cursor-pointer"
            whileHover={{ scale: 1.05 }}>
            Skills
          </motion.div>
          <Skill text="ReactJs" x={120} y={30} />
          <Skill text="TailwindCSS" x={-140} y={-50} />
          <Skill text="Next.js" x={-30} y={110} />
          <Skill text="TypeScript" x={50} y={-210} />
          <Skill text="Node.js" x={160} y={-120} />
          <Skill text="Express.js" x={-180} y={-180} />
          <Skill text="MongoDB" x={-140} y={280} />
          <Skill text="AWS" x={240} y={200} />
          <Skill text="Docker" x={70} y={210} />
          <Skill text="CI/CD" x={-200} y={150} />
          <Skill text="Git" x={-50} y={-290} />
          <Skill text="Redux" x={300} y={20} />
          <Skill text="Figma" x={-300} y={-10} />
          <Skill text="Postman" x={230} y={-200} />
        </div>
      </div>
      <div className="lg:hidden flex flex-wrap gap-4 pb-4">
        <div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
          <FaReact />
          <span className="mx-2">ReactJs</span>
        </div>
        <div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
          <TbBrandNextjs />
          <span className="mx-2">Next.js</span>
        </div>
        <div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
          <SiTailwindcss />
          <span className="mx-2">TailwindCSS</span>
        </div>
        <div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
          <SiTypescript />
          <span className="mx-2">TypeScript</span>
        </div>
        <div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
          <FaNodeJs />
          <span className="mx-2">Node.js</span>
        </div>
        <div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
          <SiExpress />
          <span className="mx-2">Express.js</span>
        </div>
        <div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
          <SiMongodb />
          <span className="mx-2">MongoDB</span>
        </div>
        <div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
          <FaAws />
          <span className="mx-2">AWS</span>
        </div>
        <div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
          <FaDocker />
          <span className="mx-2">Docker</span>
        </div>
        <div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
          <ImLoop2 />
          <span className="mx-2">CI/CD</span>
        </div>
        <div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
          <FaGitAlt />
          <span className="mx-2">Git</span>
        </div>
        <div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
          <FaFigma />
          <span className="mx-2">Figma</span>
        </div>
        <div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
          <SiPostman />
          <span className="mx-2">Postman</span>
        </div>
      </div>
    </div>
  );
}
