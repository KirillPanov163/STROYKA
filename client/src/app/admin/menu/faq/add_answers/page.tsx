 'use client'

import React from 'react'
import { FaqCreatePage } from '../../widgets/FAQ/FaqCreatePage'
import style from '@/app/admin/menu/page.module.css'

export default function page() {
  return (
    <div className={style.sidebar}>
      <FaqCreatePage />
    </div>
  )
}
