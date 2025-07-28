import React from 'react'
import { MetaDataEditor } from '../../../widgets/metaData/MetaDataEdit'
import style from '../../../page.module.css'

export default function MetadataPortfolioMain() {
  return (
    <div className={style.sidebar}>
      <MetaDataEditor index={4} />
    </div>
  )
}
