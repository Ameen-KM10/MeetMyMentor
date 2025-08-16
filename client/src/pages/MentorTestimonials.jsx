import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Photo1 from "../assets/profile/photo1.webp";
import Photo2 from "../assets/profile/photo2.webp";
import Photo3 from "../assets/profile/photo3.webp";
import Photo4 from "../assets/profile/photo4.webp";
import Photo5 from "../assets/profile/photo5.webp";

const testimonials = [
  {
    name: 'Surya Jayaraman',
    title: 'CEO, Giamiti Metal Formers',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    avatar: Photo1,
    profile: Photo1,
  },
  {
    name: 'Surya Jayaraman',
    title: 'CEO, Giamiti Metal Formers',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    avatar: Photo2,
    profile: Photo2,
  },
  {
    name: 'Surya Jayaraman',
    title: 'CEO, Giamiti Metal Formers',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    avatar: Photo3,
    profile: Photo3,
  },
  {
    name: 'Surya Jayaraman',
    title: 'CEO, Giamiti Metal Formers',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    avatar: Photo4,
    profile: Photo4,
  },
]

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 12 } },
}

const MentorTestimonials = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      style={{
        background: '#FAF3EC',
        padding: '56px 0',
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{ width: '100%', maxWidth: 1100, marginBottom: 32 }}
      >
        <div style={{ fontWeight: 700, color: '#888', fontSize: '1.1rem', marginBottom: 8 }}>TESTIMONIALS</div>
        <h2 style={{ fontWeight: 700, fontSize: '2.2rem', color: '#18405A', marginBottom: 0, lineHeight: 1.2 }}>
          Don’t take our word for it Hear it from our Mentors
        </h2>
      </motion.div>
      <div
        style={{
          width: '100%',
          maxWidth: '1100px',
          overflowX: 'auto',
          paddingBottom: 8,
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        className="hide-scrollbar"
      >
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          style={{
            display: 'flex',
            gap: '32px',
            padding: '8px 0',
            minWidth: testimonials.length * 260 + testimonials.length * 32,
          }}
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              style={{
                perspective: '1200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FlipCard testimonial={t} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>
    </motion.section>
  )
}

function FlipCard({ testimonial }) {
  const [flipped, setFlipped] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      style={{
        width: 260,
        height: 340,
        borderRadius: 16,
        boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
        background: '#fff',
        position: 'relative',
        cursor: 'pointer',
        transition: 'box-shadow 0.2s',
        perspective: '1200px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          willChange: 'transform',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s cubic-bezier(.4,.2,.2,1)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front Side */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            borderRadius: 16,
            background: '#fff',
            boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '32px 18px 18px 18px',
          }}
        >
          <img src={testimonial.avatar} alt={testimonial.name} style={{ width: 54, height: 54, borderRadius: '50%', objectFit: 'cover', marginBottom: 18 }} />
          <p style={{ fontSize: '1rem', color: '#444', marginBottom: 24, textAlign: 'left', lineHeight: 1.6 }}>{testimonial.text}</p>
          <div style={{ marginTop: 'auto', width: '100%' }}>
            <div style={{ fontFamily: 'cursive', fontSize: '1.1rem', color: '#18405A', marginBottom: 2 }}>{testimonial.name}</div>
            <div style={{ fontSize: '0.95rem', color: '#888' }}>{testimonial.title}</div>
          </div>
        </div>
        {/* Back Side */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            borderRadius: 16,
            background: '#fff',
            boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'rotateY(180deg)',
          }}
        >
          <img src={testimonial.profile} alt={testimonial.name + ' profile'} style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }} />
        </div>
      </div>
    </div>
  )
}

export default MentorTestimonials