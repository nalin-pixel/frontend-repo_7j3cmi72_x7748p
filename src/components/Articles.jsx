import React from 'react'
import FloatingWhatsApp from './FloatingWhatsApp'

const articles = [
  { id: 'pilih-asuransi-kesehatan', title: 'Cara memilih asuransi kesehatan yang tepat', cover: 'https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=1200&auto=format&fit=crop', body: `Memilih asuransi kesehatan yang tepat dimulai dari memahami kebutuhan keluarga. Perhatikan jaringan rumah sakit, limit tahunan, dan kemudahan klaim. Bandingkan beberapa produk dan pastikan manfaatnya sesuai dengan anggaran.` },
  { id: 'jiwa-vs-investasi', title: 'Kenali perbedaan asuransi jiwa dan investasi', cover: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1200&auto=format&fit=crop', body: `Asuransi jiwa fokus pada proteksi risiko meninggal, sedangkan produk investasi bertujuan menumbuhkan aset. Keduanya bisa saling melengkapi, namun jangan lupa bahwa tujuan utama proteksi adalah memastikan keluarga terlindungi.` },
]

export default function Articles() {
  const [active, setActive] = React.useState(null)

  return (
    <div className="min-h-screen bg-[#F7F9FC] pb-24">
      <div className="px-5 pt-6 pb-2">
        <h2 className="text-[22px] font-semibold text-slate-900">Artikel & Edukasi</h2>
        <p className="text-slate-600 text-sm">Baca tips dan panduan seputar asuransi</p>
      </div>

      <div className="px-5 space-y-4">
        {articles.map((a) => (
          <div key={a.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <img src={a.cover} alt={a.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-slate-900 font-semibold">{a.title}</h3>
              <button onClick={() => setActive(active === a.id ? null : a.id)} className="text-[#0057FF] text-sm mt-2 font-medium">{active === a.id ? 'Tutup' : 'Baca'}</button>
              {active === a.id && (
                <div className="mt-3 text-slate-700 leading-relaxed">{a.body}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <FloatingWhatsApp />
    </div>
  )
}
