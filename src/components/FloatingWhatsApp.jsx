import React from 'react'
import { MessageCircle } from 'lucide-react'

const waLink = 'https://wa.me/6281234567890?text=Halo%20Rante%20Indonesia%2C%20saya%20tertarik%20produk%20ini.'

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#00B383] text-white px-5 py-3 shadow-lg shadow-emerald-600/30 hover:shadow-xl active:scale-95 transition"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="font-medium">WhatsApp</span>
    </a>
  )
}
