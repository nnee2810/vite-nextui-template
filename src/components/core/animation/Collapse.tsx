import { PropsWithChildren } from "react"
import { AnimatePresence, motion } from "framer-motion"

interface CollapseProps {
  isOpen?: boolean
}

export function Collapse({
  isOpen,
  children,
}: PropsWithChildren<CollapseProps>) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={{
            enter: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
          }}
          initial="exit"
          animate="enter"
          exit="exit"
          className="overflow-hidden"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
