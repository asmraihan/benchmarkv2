import { motion } from "framer-motion";

const FadeUpStagger = ({ title }) => {
    const PreviewAnimation = {
        initial: {
            y: 30,
            opacity: 0,
            scale: 0.9
        },
        animate: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                ease: [0.6, 0.01, 0.05, 0.95],
                duration: 0.8,
            }
        }
    }
    return (
        <motion.div
            initial="initial"
            whileInView="animate"
            variants={PreviewAnimation}
        >
            {title}
        </motion.div>
    );
}

export default FadeUpStagger;