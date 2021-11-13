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

export const Small = (props) => {
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
  const animationOne = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: `rgba(${props.colorOne}, 0)`
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: `rgba(${props.colorOne}, 1)`
    }
  }

  const animationTwo = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: `rgba(${props.colorTwo}, 0)`
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: `rgba(${props.colorTwo}, 1)`
    }
  }
  
  const styles = {
    overflow: "visible",
    stroke: `rgba(${props.colorStrokeOne}, 1)`,
    strokeWidth: "0.15",
    strokeLinejoin: "round",
    strokeLinecap: "round",
    shapeRendering: "geometricPrecision"
  }

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 356 24"
      style={styles}
    >
      <defs>
        <motion.path
          d="M142.11,16h-2.5v7.58h-5.28V.46h9.23a7.9,7.9,0,0,1,7.92,7.91,7.62,7.62,0,0,1-4.26,6.7l4.91,8.47h-5.66Zm-2.5-4.62h3.95a2.79,2.79,0,0,0,2.64-3,2.79,2.79,0,0,0-2.64-3h-3.95ZM159.89.46V23.54h-5.27V.46Zm19.46,5.08h-5.93v18h-5.28v-18h-5.93V.46h17.14Zm14.18,14.37H185l-1.15,3.63H178L185.89.46h6.72l7.85,23.08h-5.77ZM192,15l-2.7-8.47L186.54,15Zm11.32-4.78h-4L200.63.46h5.28Zm4,8.11,4.55-2.64a4.83,4.83,0,0,0,4.84,3.2c2.51,0,3.14-1,3.14-1.88,0-1.42-1.32-2-4.78-2.94s-6.8-2.6-6.8-7,3.76-7,7.75-7a9,9,0,0,1,8.44,5.21l-4.45,2.6a4.05,4.05,0,0,0-4-2.67c-1.65,0-2.47.83-2.47,1.75s.56,1.78,4.15,2.87S225,12,225,16.91c0,4.45-3.56,7.09-8.57,7.09C211.61,24,208.51,21.69,207.23,18.3Z"
          id={props.idOne}
          variants={animationOne}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 1.2, ease: 'easeInOut' },
            fill: { duration: 1.2, ease: [1, 0, 0.8, 1] }
          }}
        />
        <motion.path
          d="M23.17,23.54H17.89V10.12l-6,9.79h-.59l-6-9.79V23.54H.09V.46H5.36l6.27,10.26L17.89.46h5.28Zm17.48-3.63H32.08l-1.15,3.63H25.16L33,.46h6.73l7.84,23.08H41.81ZM39.07,15,36.37,6.5,33.66,15Zm33.57,8.57H67.37V10.12l-6,9.79h-.59l-6-9.79V23.54H49.57V.46h5.27L61.1,10.72,67.37.46h5.27Zm27.05,0H94.41V10.12l-6,9.79h-.6l-6-9.79V23.54H76.61V.46h5.28l6.26,10.26L94.41.46h5.28Zm17.48-3.63H108.6l-1.15,3.63h-5.77L109.53.46h6.72l7.85,23.08h-5.77ZM115.59,15l-2.7-8.47L110.19,15Zm119.35-3a11.7,11.7,0,0,1,12-12,11.54,11.54,0,0,1,9.89,5.34L252.28,8a6,6,0,0,0-5.34-2.84c-4.09,0-6.73,2.74-6.73,6.86s2.64,6.86,6.73,6.86A5.93,5.93,0,0,0,252.28,16l4.55,2.64A11.44,11.44,0,0,1,246.94,24,11.7,11.7,0,0,1,234.94,12Zm24.21,4.09V.46h5.27V15.63c0,1.75.82,3.23,3.63,3.23s3.62-1.48,3.62-3.23V.46H277V16.09c0,4.94-3.83,7.91-8.9,7.91S259.15,21,259.15,16.09ZM279.76,12a11.7,11.7,0,0,1,12-12,11.51,11.51,0,0,1,9.89,5.34L297.1,8a6,6,0,0,0-5.34-2.84C287.67,5.14,285,7.88,285,12s2.63,6.86,6.72,6.86A5.93,5.93,0,0,0,297.1,16l4.55,2.64A11.44,11.44,0,0,1,291.76,24,11.7,11.7,0,0,1,279.76,12ZM309.41.46V23.54h-5.27V.46Zm22.09,0V23.54h-3.95L318.65,11V23.54h-5.28V.46h4L326.23,13V.46ZM349,19.91h-8.57l-1.16,3.63h-5.77L341.34.46h6.72l7.85,23.08h-5.77ZM347.41,15,344.7,6.5,342,15Z"
          id={props.idTwo}
          variants={animationTwo}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 1.2, ease: 'easeInOut' },
            fill: { duration: 1.2, ease: [1, 0, 0.8, 1] }
          }}
        />
        <clipPath id={`clip${props.idOne}`}>
          <use xlinkHref={`#${props.idOne}`}/>
        </clipPath>
        <clipPath id={`clip${props.idTwo}`}>
          <use xlinkHref={`#${props.idTwo}`}/>
        </clipPath>
      </defs>
      <g>
        <use
          xlinkHref={`#${props.idOne}`}
          stroke={`rgba(${props.colorStrokeOne}, 1)`}
          strokeWidth="0.15"
          clipPath={`url(#clip${props.idOne})`}
        />
      </g>
      <g>
        <use
          xlinkHref={`#${props.idTwo}`}
          stroke={`rgba(${props.colorStrokeTwo}, 1)`}
          strokeWidth="0.15"
          clipPath={`url(#clip${props.idTwo})`}
        />
      </g>
    </motion.svg>
  )
}