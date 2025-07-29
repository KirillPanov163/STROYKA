 'use client'

import React from 'react'
import { FaqListPage } from '../../widgets/FAQ/FaqListPage'
import style from '@/app/admin/menu/page.module.css'


export default function page() {
  return (
    <div className={style.sidebar}>
      <FaqListPage/>
    </div>
  )
}
