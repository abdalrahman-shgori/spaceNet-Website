import {motion} from 'framer-motion'

const transition = (OgComponent) => {
    return () => (
        <>
        <OgComponent/>
        {[...Array(10)].map((_, index) => (
          <motion.div
          key={index}
          style={{
            background: '#011343',
            position: 'absolute',
            bottom: '0',
            left: `${index * 9.98}%`,
            height: '100%',
            width: '10%',
            zIndex: 10,
           
          }}
          initial={{y: ['100%', '0%', '-101%']}}
          animate={{ y: ['100%', '0%', '-101%'] }}
          exit={{ y: ['100%', '0%', '-101%']}}
          transition={{
            duration: 1.5,  
            delay:0.1 * index
                 
          }}
        />
      ))}
        </>
    )
       
    
}

export default transition