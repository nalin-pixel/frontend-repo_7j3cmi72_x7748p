import React from 'react'
import FloatingWhatsApp from './FloatingWhatsApp'
import { ChevronLeft } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'

const data = {
  'health-plus': {
    title: 'Health Plus Family',
    image: 'https://images.unsplash.com/photo-1747018838524-71c9f55e9db6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIZWFsdGglMjBQbHVzJTIwRmFtaWx5fGVufDB8MHx8fDE3NjM0Nzg3Njl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    price: 'Mulai Rp150.000/bulan',
    description: `Paket perlindungan kesehatan komprehensif yang dirancang untuk keluarga Indonesia. Nikmati akses ke ratusan rumah sakit rekanan, layanan klaim cashless, dan manfaat rawat inap hingga limit tinggi.`,
    benefits: [
      'Klaim cashless di RS rekanan',
      'Rawat inap dan rawat jalan',
      'Manfaat melahirkan & imunisasi',
      'Jaringan RS luas di seluruh Indonesia'
    ],
    faq: [
      { q: 'Siapa yang bisa membeli polis ini?', a: 'Individu berusia 18–60 tahun, dapat menambahkan pasangan dan anak sebagai tertanggung.' },
      { q: 'Apakah ada masa tunggu?', a: 'Ya, masa tunggu 30 hari untuk penyakit biasa dan 12 bulan untuk kondisi khusus sesuai ketentuan polis.' },
      { q: 'Bagaimana cara klaim?', a: 'Gunakan kartu peserta di RS rekanan untuk klaim cashless atau ajukan klaim reimbursement melalui aplikasi.' }
    ]
  },
  'auto-guard': {
    title: 'AutoGuard Comprehensive',
    image: 'https://images.unsplash.com/photo-1594495220397-d9fdb9aed9f4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBdXRvR3VhcmQlMjBDb21wcmVoZW5zaXZlfGVufDB8MHx8fDE3NjM0Nzg3Njl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    price: 'Mulai Rp120.000/bulan',
    description: `Perlindungan menyeluruh untuk kendaraan Anda dari risiko tabrakan, pencurian, bencana alam, hingga tanggung jawab pihak ketiga.`,
    benefits: [
      'Perlindungan komprehensif & TLO',
      'Bengkel rekanan resmi luas',
      'Tersedia mobil pengganti',
      'Layanan derek 24 jam'
    ],
    faq: [
      { q: 'Apa beda komprehensif dan TLO?', a: 'Komprehensif menanggung sebagian/seluruh kerusakan, TLO menanggung jika kerusakan ≥75% atau hilang.' },
      { q: 'Apakah ada perluasan banjir?', a: 'Tersedia sebagai perluasan manfaat dengan tambahan premi terjangkau.' }
    ]
  },
  'life-sure': {
    title: 'LifeSure Proteksi',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
    price: 'Mulai Rp200.000/bulan',
    description: `Memberikan perlindungan finansial bagi keluarga apabila terjadi risiko meninggal dunia, disertai manfaat penyakit kritis opsional.`,
    benefits: [
      'Uang pertanggungan hingga Rp2 Miliar',
      'Pilihan masa pertanggungan fleksibel',
      'Tambahan rider penyakit kritis',
      'Proses underwriting cepat'
    ],
    faq: [
      { q: 'Kapan polis aktif?', a: 'Setelah pembayaran pertama berhasil dan proses underwriting disetujui.' },
      { q: 'Apakah ada nilai tunai?', a: 'Produk ini fokus pada proteksi murni sehingga tidak memiliki nilai tunai.' }
    ]
  },
  'home-shield': {
    title: 'HomeShield Property',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop',
    price: 'Mulai Rp90.000/bulan',
    description: `Proteksi rumah tinggal dari risiko kebakaran, banjir, gempa (opsional), hingga pencurian.`,
    benefits: [
      'Perlindungan struktur dan isi rumah',
      'Perluasan banjir & gempa',
      'Ganti rugi cepat & transparan',
      'Bantuan darurat 24 jam'
    ],
    faq: [
      { q: 'Apakah menyertakan gempa?', a: 'Manfaat gempa tersedia sebagai perluasan dengan tambahan premi.' }
    ]
  }
}

export default function ProductDetail() {
  const navigate = useNavigate()
  const { id } = useParams()
  const p = data[id]

  if (!p) return <div className="p-6">Produk tidak ditemukan.</div>

  return (
    <div className="min-h-screen bg-[#F7F9FC] pb-28">
      <div className="px-5 pt-6 pb-2 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="text-slate-600"><ChevronLeft className="w-5 h-5" /></button>
        <h2 className="text-[22px] font-semibold text-slate-900">{p.title}</h2>
      </div>

      <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />

      <div className="px-5 py-4">
        <p className="text-slate-600 leading-relaxed">{p.description}</p>

        <div className="mt-5">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Manfaat</h3>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            {p.benefits.map((b, i) => (<li key={i}>{b}</li>))}
          </ul>
        </div>

        <div className="mt-5">
          <h3 className="text-lg font-semibold text-slate-900">Harga</h3>
          <p className="text-[#0057FF] font-medium">{p.price}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">FAQ</h3>
          <div className="divide-y divide-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
            {p.faq.map((f, i) => (
              <details key={i} className="group">
                <summary className="list-none cursor-pointer p-4 font-medium text-slate-800 flex items-center justify-between">
                  <span>{f.q}</span>
                  <span className="text-slate-400 group-open:rotate-180 transition">⌄</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>

      <a href="https://wa.me/6281234567890?text=Halo%20Rante%20Indonesia%2C%20saya%20tertarik%20produk%20ini." target="_blank" rel="noreferrer" className="fixed bottom-6 inset-x-5 z-40 rounded-xl bg-[#00B383] text-white text-center py-4 font-semibold shadow-lg active:scale-[0.99]">
        Konsultasi via WhatsApp
      </a>

      <FloatingWhatsApp />
    </div>
  )
}
