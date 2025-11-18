import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate, Link } from 'react-router-dom'
import { ChevronRight, Heart, Car, Home as HomeIcon, Stethoscope } from 'lucide-react'

const bannerImages = [
  'https://images.unsplash.com/photo-1583912267550-cf28eec3b43e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=1200&auto=format&fit=crop'
]

const categories = [
  { key: 'kesehatan', name: 'Kesehatan', icon: Stethoscope, emoji: '🏥', color: 'from-blue-500 to-blue-600' },
  { key: 'kendaraan', name: 'Kendaraan', icon: Car, emoji: '🚗', color: 'from-indigo-500 to-indigo-600' },
  { key: 'jiwa', name: 'Jiwa', icon: Heart, emoji: '❤️', color: 'from-rose-500 to-rose-600' },
  { key: 'properti', name: 'Properti', icon: HomeIcon, emoji: '🏠', color: 'from-emerald-500 to-emerald-600' }
]

const popular = [
  {
    id: 'health-plus',
    title: 'Health Plus Family',
    category: 'kesehatan',
    price: 'Mulai Rp150.000/bulan',
    image: 'https://images.unsplash.com/photo-1747018838524-71c9f55e9db6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIZWFsdGglMjBQbHVzJTIwRmFtaWx5fGVufDB8MHx8fDE3NjM0Nzg3Njl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'Perlindungan kesehatan menyeluruh untuk keluarga dengan jaringan RS luas dan klaim cashless.'
  },
  {
    id: 'auto-guard',
    title: 'AutoGuard Comprehensive',
    category: 'kendaraan',
    price: 'Mulai Rp120.000/bulan',
    image: 'https://images.unsplash.com/photo-1594495220397-d9fdb9aed9f4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBdXRvR3VhcmQlMjBDb21wcmVoZW5zaXZlfGVufDB8MHx8fDE3NjM0Nzg3Njl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'Asuransi kendaraan dengan perlindungan komprehensif, layanan derek 24 jam, dan bengkel rekanan luas.'
  },
  {
    id: 'life-sure',
    title: 'LifeSure Proteksi',
    category: 'jiwa',
    price: 'Mulai Rp200.000/bulan',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
    description: 'Memberi ketenangan finansial bagi keluarga dengan manfaat meninggal dan penyakit kritis.'
  }
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#F7F9FC] pb-24">
      <div className="px-5 pt-6 pb-3 flex items-center justify-between">
        <div>
          <p className="text-slate-500 text-sm">Halo! Mau cari asuransi apa hari ini?</p>
          <h2 className="text-[22px] font-semibold text-slate-900">Rante Indonesia</h2>
        </div>
        <Link to="/profile" className="text-[#0057FF] text-sm font-medium">Profil</Link>
      </div>

      <div className="px-5">
        <div className="overflow-x-auto no-scrollbar -mx-5 px-5">
          <div className="flex gap-4">
            {bannerImages.map((src, i) => (
              <motion.img key={i} src={src} alt="Banner" className="h-36 w-72 object-cover rounded-2xl shadow-sm"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-slate-900 text-lg font-semibold">Kategori Produk</h3>
            <button onClick={() => navigate('/produk')} className="text-[#0057FF] text-sm font-medium">Lihat Semua</button>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {categories.map((c) => (
              <button key={c.key} onClick={() => navigate(`/produk?cat=${c.key}`)} className="bg-white rounded-xl p-3 text-center shadow-sm hover:shadow transition">
                <div className={`w-10 h-10 mx-auto rounded-xl bg-gradient-to-br ${c.color} grid place-items-center text-white mb-2`}>
                  <c.icon className="w-5 h-5" />
                </div>
                <div className="text-xs text-slate-700">{c.name}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-slate-900 text-lg font-semibold">Produk Populer</h3>
            <button onClick={() => navigate('/produk')} className="text-[#0057FF] text-sm font-medium">Lihat Semua</button>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {popular.map((p) => (
              <div key={p.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-slate-900 font-semibold">{p.title}</h4>
                      <p className="text-slate-500 text-sm">{p.price}</p>
                    </div>
                    <button onClick={() => navigate(`/produk/${p.id}`)} className="text-[#0057FF] inline-flex items-center gap-1 text-sm">
                      Detail <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-slate-600 text-sm mt-2">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
