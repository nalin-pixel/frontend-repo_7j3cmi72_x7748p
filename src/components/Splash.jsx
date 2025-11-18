import React from 'react'
import { motion } from 'framer-motion'
import Logo from './Logo'
import { useNavigate } from 'react-router-dom'

export default function Splash() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#F7F9FC] flex flex-col items-center justify-center p-8 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="mb-8 flex justify-center">
          <Logo size={80} />
        </div>
        <h1 className="text-[28px] font-medium text-slate-900 mb-3">Rante Indonesia</h1>
        <p className="text-slate-600 max-w-sm mx-auto mb-8">Lindungi yang Penting Bersama Rante Indonesia.</p>
        <button
          onClick={() => navigate('/home')}
          className="inline-flex items-center justify-center w-full max-w-xs rounded-xl bg-[#0057FF] text-white px-6 py-4 font-medium shadow-md shadow-blue-500/20 active:scale-98 transition"
        >
          Mulai Sekarang
        </button>
      </motion.div>
    </div>
  )
}
