"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';

const HomeSection: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center min-h-screen">
      
      {/* Text */}
      <motion.div
        className="w-full lg:w-1/2 px-6 lg:px-12 pt-36 text-center max-md:flex max-md:flex-col max-md:items-center lg:text-left lg:mt-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >

       
        <motion.button
          className="
            group
            px-6 sm:px-8 md:px-10 lg:px-12
            py-3 sm:py-4 md:py-5
            w-fit sm:w-auto
            min-w-50 sm:min-w-55 md:min-w-60 lg:min-w-65 xl:min-w-70
            h-auto
            bg-linear-to-r from-[#6d58b0] to-[#ab9de0]
            bg-size-[200%_100%] bg-left
            text-white font-semibold 
            rounded-full
            shadow-lg
            text-sm sm:text-base md:text-lg lg:text-xl
            whitespace-nowrap
            flex items-center justify-center
          "
          initial={{ backgroundPosition: "0% 0%" }}
          whileHover={{ 
            backgroundPosition: "100% 0%",
            scale: 1.05,
            boxShadow: "0 25px 30px -5px rgba(109, 88, 176, 0.4)"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ 
            duration: 0.7,
            ease: "easeOut",
            scale: { duration: 0.3 }
          }}
          style={{
            backgroundSize: "200% 100%",
            backgroundImage: "linear-gradient(to right, #6d58b0, #ab9de0, #5a4698, #8f7bd4)"
          }}
        >
          WELCOME TO SALEPUSH
        </motion.button>

        
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <span className="bg-linear-to-r from-[#775fb1] to-[#cda0b4] bg-clip-text text-transparent">
            The Experts
          </span>
          <br className="hidden sm:block" />
          in Optimizing Your Site!
        </motion.h1>

       
        <motion.p
          className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mt-4 lg:mt-6 max-w-2xl mx-auto lg:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          On a broad scale, I see SEO becoming a normalized marketing tactic,
          the same way TV, radio, and print are traditionally thought of as marketing tactics
        </motion.p>

        {/* الزر الثاني */}
        <motion.button
          className="
            group
            mt-9
            w-fit
            px-6 sm:px-8 md:px-10 lg:px-12
            py-3 sm:py-4 md:py-5
            sm:w-auto
            min-w-50 sm:min-w-55 md:min-w-60 lg:min-w-65 xl:min-w-70
            h-auto
            bg-[#221f3f]
            bg-size-[200%_100%] bg-left
            hover:bg-right
            text-white font-semibold 
            rounded-full
            transform transition-all duration-700 ease-out
            hover:scale-105
            hover:bg-[#f1871b]
            shadow-lg hover:shadow-2xl
            flex items-center justify-center gap-2 sm:gap-3
            text-sm sm:text-base md:text-lg lg:text-xl
            whitespace-nowrap
          "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        >
          <span>FREE SEO ANALYSIS</span>
          <motion.span
            initial={{ x: 0 }}
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ x: 8, scale: 1.2, transition: { duration: 0.2 } }}
            className="inline-flex"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </motion.span>
        </motion.button>

      </motion.div>

      {/* Right side*/}
      <div className="w-full lg:w-1/2 relative flex items-center justify-center min-h-150">

        {/*icons */}
        <div className="absolute inset-0 z-20">
          <div className="absolute right-[15%] top-[20%]">
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
              <Image src="/google.png" width={40} height={40} alt="" />
            </motion.div>
          </div>

          <div className="absolute right-[20%] top-[40%]">
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
              <Image src="/2.png" width={40} height={40} alt="" />
            </motion.div>
          </div>

          <div className="absolute left-[15%] bottom-[20%]">
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity }}>
              <Image src="/3.png" width={70} height={70} alt="" />
            </motion.div>
          </div>

          <div className="absolute left-[25%] top-[25%]">
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 4.5, repeat: Infinity }}>
              <Image src="/4.png" width={60} height={60} alt="" />
            </motion.div>
          </div>
        </div>

        {/* main contain*/}
        <div className="relative w-[80%] max-w-125">
          <div className="w-full bg-linear-to-br from-fuchsia-700 to-fuchsia-600 
          rounded-bl-[250px] rounded-br-[90px] shadow-2xl">

            <div
              className="bg-cover bg-center bg-no-repeat rounded-bl-[270px] overflow-hidden relative w-full flex items-center justify-center p-6"
              style={{ backgroundImage: "url('/bg.png')" }}
            >
              <div className="relative flex justify-center items-center">
                
                {/* cycle */}
                <motion.div
                  className="w-64 h-64 bg-linear-to-r from-amber-500 to-amber-600 
                  rounded-full absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 z-0 shadow-2xl"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                    scale: [0.95, 1.05, 0.95],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                />

                {/* image */}
                <Image
                  src="/man.png"
                  alt=""
                  width={350}
                  height={350}
                  className="relative z-10 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeSection;
