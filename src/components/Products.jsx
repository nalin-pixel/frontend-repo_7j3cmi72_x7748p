import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Stethoscope, Car, Heart, Home as HomeIcon, SlidersHorizontal } from 'lucide-react'
import FloatingWhatsApp from './FloatingWhatsApp'

const allProducts = [
  { id: 'health-plus', title: 'Health Plus Family', category: 'kesehatan', image: 'https://images.unsplash.com/photo-1747018838524-71c9f55e9db6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIZWFsdGglMjBQbHVzJTIwRmFtaWx5fGVufDB8MHx8fDE3NjM0Nzg3Njl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', price: 'Rp150.000/bulan' },
  { id: 'auto-guard', title: 'AutoGuard Comprehensive', category: 'kendaraan', image: 'https://images.unsplash.com/photo-1594495220397-d9fdb9aed9f4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBdXRvR3VhcmQlMjBDb21wcmVoZW5zaXZlfGVufDB8MHx8fDE3NjM0Nzg3Njl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', price: 'Rp120.000/bulan' },
  { id: 'life-sure', title: 'LifeSure Proteksi', category: 'jiwa', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop', price: 'Rp200.000/bulan' },
  { id: 'home-shield', title: 'HomeShield Property', category: 'properti', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop', price: 'Rp90.000/bulan' }
]

const categoryMeta = {
  kesehatan: { label: 'Kesehatan', icon: Stethoscope },
  kendaraan: { label: 'Kendaraan', icon: Car },
  jiwa: { label: 'Jiwa', icon: Heart },
  properti: { label: 'Properti', icon: HomeIcon },
}

function useQuery() {
  const { search } = useLocation()
  return React.useMemo(() => new URLSearchParams(search), [search])
}

export default function Products() {
  const navigate = useNavigate()
  const q = useQuery()
  const activeCat = q.get('cat') || 'all'

  const filtered = activeCat === 'all' ? allProducts : allProducts.filter(p => p.category === activeCat)

  return (
    <div className="min-h-screen bg-[#F7F9FC] pb-24">
      <div className="px-5 pt-6 pb-2 flex items-center justify-between">
        <h2 className="text-[22px] font-semibold text-slate-900">Semua Produk</h2>
        <div className="flex items-center gap-2">
          <button onClick={() => navigate('/home')} className="text-[#0057FF] text-sm">Beranda</button>
          <button className="inline-flex items-center gap-1 bg-white text-slate-700 text-sm px-3 py-2 rounded-lg shadow-sm">
            <SlidersHorizontal className="w-4 h-4" /> Filter
          </button>
        </div>
      </div>

      <div className="px-5">
        <div className="grid grid-cols-4 gap-3 mb-4">
          {Object.entries(categoryMeta).map(([key, meta]) => {
            const Icon = meta.icon
            const active = activeCat === key
            return (
              <button key={key} onClick={() => navigate(`/produk?cat=${key}`)} className={`rounded-xl p-3 text-center shadow-sm bg-white hover:shadow transition border ${active ? 'border-[#0057FF]' : 'border-transparent'}`}>
                <div className="w-10 h-10 mx-auto rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 grid place-items-center text-slate-700 mb-2">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-xs text-slate-700">{meta.label}</div>
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {filtered.map((p) => (
            <div key={p.id} onClick={() => navigate(`/produk/${p.id}`)} className="bg-white rounded-2xl shadow-sm overflow-hidden active:scale-[0.99] transition cursor-pointer">
              <img src={p.image} alt={p.title} className="w-full h-28 object-cover" />
              <div className="p-3">
                <h4 className="text-slate-900 text-sm font-semibold line-clamp-2 min-h-[40px]">{p.title}</h4>
                <p className="text-[#0057FF] text-xs mt-1">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <FloatingWhatsApp />
    </div>
  )
}
