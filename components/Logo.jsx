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
          d="M9.66,5.69h3.21V18.31H9.66v-6.8L6.59,16.58H6.27l-3-5v6.78H0V5.69H3.23l3.2,5.39ZM24,18.31H20.54l-2.2-4.08H17.19v4.08H14V5.69H19a4.47,4.47,0,0,1,3.22,1.25,4,4,0,0,1,1.32,3.11A3.91,3.91,0,0,1,23,12.13a4.19,4.19,0,0,1-1.56,1.51ZM19,8.67H17.19V11.5H19a1.27,1.27,0,0,0,1-.38,1.45,1.45,0,0,0,.37-1,1.45,1.45,0,0,0-.37-1A1.32,1.32,0,0,0,19,8.67Z"
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
          d="M9.66,5.69h3.21V18.31H9.66v-6.8L6.59,16.58H6.27l-3-5v6.78H0V5.69H3.23l3.2,5.39ZM24,18.31H20.54l-2.2-4.08H17.19v4.08H14V5.69H19a4.47,4.47,0,0,1,3.22,1.25,4,4,0,0,1,1.32,3.11A3.91,3.91,0,0,1,23,12.13a4.19,4.19,0,0,1-1.56,1.51ZM19,8.67H17.19V11.5H19a1.27,1.27,0,0,0,1-.38,1.45,1.45,0,0,0,.37-1,1.45,1.45,0,0,0-.37-1A1.32,1.32,0,0,0,19,8.67Z"
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