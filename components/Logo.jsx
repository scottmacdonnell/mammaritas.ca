import { motion } from 'framer-motion'

export const Default = (props) => {
  const styles = {
    overflow: "visible",
    stroke: `rgba(${props.color}, 1)`,
    strokeWidth: "0.15",
    strokeLinejoin: "round",
    strokeLinecap: "round",
    shapeRendering: "geometricPrecision"
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={`rgba(${props.color}, 1)`}
      style={styles}
    >
      <defs>
        <path
          d="M13,0,24,16.32,13,24ZM11,0,0,16.32,11,24Z"
          id={props.id}
        />
        <clipPath id={`clip${props.id}`}>
          <use xlinkHref={`#${props.id}`}/>
        </clipPath>
      </defs>
      <g>
        <use
          xlinkHref={`#${props.id}`}
          stroke={`rgba(${props.color}, 1)`}
          strokeWidth="0.15"
          clipPath={`url(#clip${props.id})`}
        />
      </g>
    </svg>
  )
}

export const Animated = (props) => {
  const animation = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: `rgba(${props.color}, 0)`
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: `rgba(${props.color}, 1)`
    }
  }
  
  const styles = {
    overflow: "visible",
    stroke: `rgba(${props.color}, 1)`,
    strokeWidth: "0.15",
    strokeLinejoin: "round",
    strokeLinecap: "round",
    shapeRendering: "geometricPrecision"
  }

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={styles}
    >
      <defs>
        <motion.path
          d="M13,0,24,16.32,13,24ZM11,0,0,16.32,11,24Z"
          id={props.id}
          variants={animation}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 1.2, ease: 'easeInOut' },
            fill: { duration: 1.2, ease: [1, 0, 0.8, 1] }
          }}
        />
        <clipPath id={`clip${props.id}`}>
          <use xlinkHref={`#${props.id}`}/>
        </clipPath>
      </defs>
      <g>
        <use
          xlinkHref={`#${props.id}`}
          stroke={`rgba(${props.color}, 1)`}
          strokeWidth="0.15"
          clipPath={`url(#clip${props.id})`}
        />
      </g>
    </motion.svg>
  )
}