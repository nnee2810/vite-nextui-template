import { PropsWithChildren } from "react"
import { AnimatePresence, motion } from "framer-motion"

interface FadeProps {
  isOpen?: boolean
}

export default function Fade({
  isOpen,
  children,
}: PropsWithChildren<FadeProps>) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={{
            enter: {
              opacity: 1,
            },
            exit: {
              opacity: 0,
            },
          }}
          initial="exit"
          animate="enter"
          exit="exit"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
