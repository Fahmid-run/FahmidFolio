
import { SectionTitle } from '../SectionTitle';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { BsJavascript, BsTypescript } from 'react-icons/bs';
import { BiLogoNetlify, BiLogoPostgresql, BiLogoTailwindCss } from 'react-icons/bi';

import { TbBrandNextjs } from 'react-icons/tb';
import { SiExpress, SiMongodb, SiPostman, SiPrisma, SiShadcnui } from 'react-icons/si';
import { DiNpm } from 'react-icons/di';
import { Github } from 'lucide-react';
import { RxVercelLogo } from 'react-icons/rx';
import { VscVscode } from 'react-icons/vsc';
export  function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <SectionTitle title="My Skills" subtitle="Technologies I work with" />

        <div className=" grid md:grid-cols-2 grid-cols-1 gap-10">
          <div className="bg-dark-card border border-primary-500/10 rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all duration-300 h-full flex flex-col p-5 capitalize">
            <h1 className="font-bold text-2xl px-3">Frontend</h1>
            <p className="font-medium text-xs px-3 py-2 text-gray-500">
              ui and interaction
            </p>
            <div className="flex items-center ">
              <div className="p-2">
                <div className="bg-gray-950/60 rounded-xl flex flex-col p-3 items-center justify-between">
                  <FaReact size={30} className="text-blue-300" />
                </div>
                <h2 className="text-xs mt-2 text-center">React js</h2>
              </div>
              <div className="p-2">
                <div className="bg-gray-950/60 rounded-xl flex flex-col p-3 items-center justify-between">
                  <BsJavascript size={30} className="text-yellow-300" />
                </div>
                <h2 className="text-xs mt-2 text-center">Javascript</h2>
              </div>
              <div className="p-2">
                <div className="bg-gray-950/60 rounded-xl flex flex-col p-3 items-center justify-between">
                  <BiLogoTailwindCss size={30} className="text-blue-300" />
                </div>
                <h2 className="text-xs mt-2 text-center">React js</h2>
              </div>
              <div className="p-2">
                <div className="bg-gray-950/60 rounded-xl flex flex-col p-3 items-center justify-between">
                  <BsTypescript size={30} className="text-blue-300" />
                </div>
                <h2 className="text-xs mt-2 text-center">Tailwind</h2>
              </div>

              <div className="p-2">
                <div className="bg-gray-950/60 rounded-xl flex flex-col p-3 items-center justify-between">
                  <SiShadcnui size={30}  />
                </div>
                <h2 className="text-xs mt-2 text-center">shadcdn</h2>
              </div>
              <div className="p-2">
                <div className="bg-gray-950/60 rounded-xl flex flex-col p-3 items-center justify-between">
                  <TbBrandNextjs size={30} />
                </div>
                <h2 className="text-xs mt-2 text-center">Next Js</h2>
              </div>
            </div>
          </div>

          <div className="bg-dark-card border border-primary-500/10 rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all duration-300 h-full flex flex-col p-5 capitalize">
            <h1 className="font-bold text-2xl px-3">backend</h1>
            <p className="font-medium text-xs px-3 py-2 text-gray-500">
              Api and server logic
            </p>
            <div className="flex items-center ">
              <div className="p-2">
                <div className="bg-gray-950/60 rounded-xl flex flex-col p-3 items-center justify-between">
                  <FaNodeJs size={30} className="text-green-400" />
                </div>
                <h2 className="text-xs mt-2 text-center">Node js</h2>
              </div>
              <div className="p-2">
                <div className="bg-gray-950/60 rounded-xl flex flex-col p-3 items-center justify-between">
                  <SiExpress size={30} />
                </div>
                <h2 className="text-xs mt-2 text-center">Express js</h2>
              </div>
            </div>
          </div>

          <div className="bg-dark-card border border-primary-500/10 rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all duration-300 h-full flex flex-col p-5 capitalize">
            <h1 className="font-bold text-2xl px-3">database</h1>
            <p className="font-medium text-xs px-3 py-2 text-gray-500">
              storage and data
            </p>
            <div className="flex items-center ">
              <div className="p-2">
                <div className="bg-gray-950/60 rounded-xl flex flex-col p-3 items-center justify-between">
                  <BiLogoPostgresql size={30} className="text-blue-600" />
                </div>
                <h2 className="text-xs mt-2 text-center">posgressSQL</h2>
              </div>

              <div className="p-2">
                <div className="bg-gray-950/60 rounded-xl flex flex-col p-3 items-center justify-between">
                  <SiMongodb size={30} className="text-green-600" />
                </div>
                <h2 className="text-xs mt-2 text-center">mongodb</h2>
              </div>

              <div className="p-2">
                <div className="bg-gray-950/60 rounded-xl flex flex-col p-3 items-center justify-between">
                  <SiPrisma size={30} className="text-gray-600" />
                </div>
                <h2 className="text-xs mt-2 text-center">prisma</h2>
              </div>
            </div>
          </div>

          <div className="bg-dark-card border border-primary-500/10 rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all duration-300 h-full flex flex-col p-5 capitalize">
            <h1 className="font-bold text-2xl px-3">Tools</h1>
            <p className="font-medium text-xs px-3 py-2 text-gray-500">
              workflow
            </p>
            <div className="flex items-center ">
              <div className="p-2">
                <div className="bg-gray-950/60 rounded-xl flex flex-col p-3 items-center justify-between">
                  <SiPostman size={30} className="text-orange-600" />
                </div>
                <h2 className="text-xs mt-2 text-center">posgressSQL</h2>
              </div>

              <div className="p-2">
                <div className="bg-gray-950/60 rounded-xl flex flex-col p-3 items-center justify-between">
                  <Github size={30} className="text-green-600" />
                </div>
                <h2 className="text-xs mt-2 text-center">mongodb</h2>
              </div>

              <div className="p-2">
                <div className="bg-gray-950/60 rounded-xl flex flex-col p-3 items-center justify-between">
                  <RxVercelLogo size={30} className="text-gray-600" />
                </div>
                <h2 className="text-xs mt-2 text-center">vercel</h2>
              </div>

              <div className="p-2">
                <div className="bg-gray-950/60 rounded-xl flex flex-col p-3 items-center justify-between">
                  <VscVscode size={30} className="text-blue-400" />
                </div>
                <h2 className="text-xs mt-2 text-center">vs code</h2>
              </div>

              <div className="p-2">
                <div className="bg-gray-950/60 rounded-xl flex flex-col p-3 items-center justify-between">
                  <DiNpm size={30} className="text-red-600" />
                </div>
                <h2 className="text-xs mt-2 text-center">npm</h2>
              </div>

              <div className="p-2">
                <div className="bg-gray-950/60 rounded-xl flex flex-col p-3 items-center justify-between">
                  <BiLogoNetlify size={30} className="text-blue-400" />
                </div>
                <h2 className="text-xs mt-2 text-center">netlify</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
