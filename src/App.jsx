import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Splash from './components/Splash'
import Home from './components/Home'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import Articles from './components/Articles'
import Profile from './components/Profile'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import { Home as HomeIcon, BookOpen, User, Grid2X2 } from 'lucide-react'

function TabBar() {
  const base = 'flex-1 flex flex-col items-center justify-center gap-1 text-xs'
  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur border-t border-slate-200 h-16 grid grid-cols-4 z-40">
      <Link to="/home" className={`${base} text-slate-600 hover:text-[#0057FF]`}>
        <HomeIcon className="w-5 h-5" />
        <span>Beranda</span>
      </Link>
      <Link to="/produk" className={`${base} text-slate-600 hover:text-[#0057FF]`}>
        <Grid2X2 className="w-5 h-5" />
        <span>Produk</span>
      </Link>
      <Link to="/artikel" className={`${base} text-slate-600 hover:text-[#0057FF]`}>
        <BookOpen className="w-5 h-5" />
        <span>Artikel</span>
      </Link>
      <Link to="/profile" className={`${base} text-slate-600 hover:text-[#0057FF]`}>
        <User className="w-5 h-5" />
        <span>Profil</span>
      </Link>
    </nav>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F9FC] text-slate-900 font-sans">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<><Home /><TabBar /></>} />
        <Route path="/produk" element={<><Products /><TabBar /></>} />
        <Route path="/produk/:id" element={<ProductDetail />} />
        <Route path="/artikel" element={<><Articles /><TabBar /></>} />
        <Route path="/profile" element={<><Profile /><TabBar /></>} />
      </Routes>
      <FloatingWhatsApp />
    </div>
  )
}
