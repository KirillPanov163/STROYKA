import style from './page.module.css'
import { MetaDataEditor } from './widgets/metaData/MetaDataEdit';

export default function AdminMenu() {
  return (
    <div className={style.sidebar} >
      <MetaDataEditor index={0}/>
    </div>
  );
}