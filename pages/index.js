import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <motion.h1 className="text-5xl font-bold mb-6" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Build a 6-Figure Fitness Business That Gives You Freedom.
        </motion.h1>
        <motion.p className="text-lg mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}>
          We help fitness coaches become respected online entrepreneurs — without losing your mind, health, or time.
        </motion.p>
        <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition">Apply Now</button>
      </section>

      <section className="py-16 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">What We Do</h2>
        <p>We turn fitness coaches into CEOs through real mentorship, hands-on systems, and custom strategies built around you.</p>
      </section>

      <section className="py-16 px-6 bg-gray-900 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">How We Do It</h2>
        <ul className="grid gap-4 text-left">
          <li>1. Irresistible Offer</li>
          <li>2. Authority-Driven Content</li>
          <li>3. Sales Systems That Convert</li>
          <li>4. Automation + Delivery</li>
          <li>5. Scale & Expand</li>
        </ul>
      </section>

      <footer className="py-8 text-center text-sm text-gray-500">
        © 2025 Fitness CEO. All rights reserved.
      </footer>
    </main>
  )
}
