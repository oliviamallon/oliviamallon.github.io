import { motion } from "framer-motion";

const Home = () => (
  <section className="flex flex-col items-center text-center px-6 mt-20">
    <img
      src="../images/profile-photo.jpg"
      alt="Profile"
      className="w-40 h-40 rounded-full object-cover shadow-lg mb-6 border-4 border-blue-400"
    />
    <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400 bg-clip-text text-transparent">
      Hi, I’m Olivia!
    </h1>
    <p className="text-xl mt-4 max-w-xl text-gray-300">
      Software Developer · Youth Club Leader · Hobby Enthusiast
    </p>

    <motion.a
      href="/assets/OliviaMallonCV.pdf"
      download
      className="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-xl shadow hover:opacity-90 transition"
      whileHover={{
        scale: [null, 1.1, 1.6],
        transition: {
          duration: 0.5,
          times: [0, 0.6, 1],
          ease: ["easeInOut", "easeOut"],
        },
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      Download CV
    </motion.a>
  </section>
);

export default Home;
