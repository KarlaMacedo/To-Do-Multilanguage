import './Footer.css'
import React, { useContext } from 'react';
import { LangContext } from '../provider/languajes';

export function Footer ({tasks}) {
  const { translations } = useContext(LangContext);

  return (
    <footer className='footer'>
      <h4>{`${translations.footer}`} ⚛️ － <span>@KarlaMacedo</span></h4>
      <h5>To Do App</h5>
      <p>{`${translations.footerTasks} ${tasks.length}`}</p>
    </footer>
  )
}