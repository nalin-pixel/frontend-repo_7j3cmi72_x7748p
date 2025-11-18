import React from 'react'

export default function Logo({ size = 56, withText = true }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="grid place-items-center rounded-2xl"
        style={{ width: size, height: size, background: 'linear-gradient(135deg,#0057FF, #00B383)' }}
      >
        <span className="text-white font-bold text-xl">R</span>
      </div>
      {withText && (
        <div className="leading-tight">
          <div className="text-slate-900 text-lg font-semibold">Rante Indonesia</div>
          <div className="text-slate-500 text-xs">Lindungi yang Penting</div>
        </div>
      )}
    </div>
  )
}
