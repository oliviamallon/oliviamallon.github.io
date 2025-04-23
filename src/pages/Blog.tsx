import { useRef } from 'react'
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

function Image({ id, caption }: { id: number, caption: string }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 300)

  return (
    <section
      className="h-4/5 snap-start flex justify-center items-center relative p-10 md:p-20"
    >
      <div
        ref={ref}
        className="w-[300px] h-[400px] bg-gray-100 overflow-hidden m-5 max-[500px]:w-[150px] max-[500px]:h-[200px] flex justify-center items-center"
      >
        <img
          src={`/images/life/${id}.jpg`}
          alt={`Photo ${id}`}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <motion.h2
        initial={{ visibility: 'hidden' }}
        animate={{ visibility: 'visible' }}
        style={{ y }}
        className="text-[#8df0cc] font-mono text-[50px] font-bold leading-[1.2] absolute left-[calc(50%+120px)] top-[calc(50%-25px)] max-[500px]:text-[20px]"
      >{`#00${id}`}</motion.h2>
      
      <p className="font-mono font-bold absolute bottom-3 left-1/2 transform -translate-x-1/2 text-center text-white bg-black bg-opacity-50 p-2 max-[500px]:text-[12px]">
        {caption}
      </p>
    </section>
  )
}

export default function Blog() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Example captions for each image
  const captions = [
    "I'm engaged to my wonderful fiance Jonny!",
    'I lead youth groups at my church & mentor young people during the week while running camps and teams in the summer.',
    'I love coffee and catching up with friends!',
    'I love the beach and exploring the wonderful island of Ireland',
    'I graduated university in June 2024 with a First Class Honours in BSc Computer Science.',
  ]

  return (
    <div className="px-6 py-8 text-white"> {/* Reduced padding here */}
      <h2 className="text-3xl font-extrabold text-center mb-4">Blog</h2> {/* Reduced margin */}
      <p className="text-lg max-w-2xl mx-auto text-center mb-6"> {/* Reduced bottom margin */}
        Welcome to a little glimpse into my life! Here are some of my favourite moments captured in photos. I hope you enjoy them as much as I do!
      </p>

      <div className="snap-y snap-mandatory">
        {[1, 2, 3, 4, 5].map((image, index) => (
          <Image key={image} id={image} caption={captions[index]} />
        ))}
      </div>

      <motion.div
        className="fixed bottom-[10px] left-0 right-0 h-[5px] bg-[#8df0cc] origin-left"
        style={{ scaleX }}
      />
    </div>
  )
}
