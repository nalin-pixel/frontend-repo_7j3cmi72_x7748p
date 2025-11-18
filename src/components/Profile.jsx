import React from 'react'
import FloatingWhatsApp from './FloatingWhatsApp'

export default function Profile() {
  return (
    <div className="min-h-screen bg-[#F7F9FC] pb-24">
      <div className="px-5 pt-6 pb-2">
        <h2 className="text-[22px] font-semibold text-slate-900">Profil</h2>
        <p className="text-slate-600 text-sm">Tentang kami dan kebijakan</p>
      </div>

      <div className="px-5 space-y-6">
        <section className="bg-white rounded-2xl shadow-sm p-4">
          <h3 className="font-semibold text-slate-900 mb-2">Tentang Kami</h3>
          <p className="text-slate-700">Rante Indonesia adalah platform digital yang menyediakan informasi produk asuransi secara transparan dan mudah dipahami.</p>
        </section>

        <section className="bg-white rounded-2xl shadow-sm p-4">
          <h3 className="font-semibold text-slate-900 mb-2">Syarat & Ketentuan</h3>
          <p className="text-slate-700 text-sm">Dengan menggunakan aplikasi ini, Anda setuju untuk membaca dan memahami informasi produk sebelum melakukan pembelian melalui mitra resmi kami.</p>
        </section>

        <section className="bg-white rounded-2xl shadow-sm p-4">
          <h3 className="font-semibold text-slate-900 mb-2">Kebijakan Privasi</h3>
          <p className="text-slate-700 text-sm">Kami berkomitmen menjaga data Anda aman. Informasi yang Anda berikan hanya digunakan untuk tujuan layanan dan konsultasi.</p>
        </section>

        <section className="bg-white rounded-2xl shadow-sm p-4">
          <h3 className="font-semibold text-slate-900 mb-2">Hubungi Kami</h3>
          <a href="https://wa.me/6281234567890?text=Halo%20Rante%20Indonesia%2C%20saya%20butuh%20bantuan." target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#00B383] text-white px-5 py-3 font-medium shadow">
            WhatsApp
          </a>
        </section>
      </div>

      <FloatingWhatsApp />
    </div>
  )
}
