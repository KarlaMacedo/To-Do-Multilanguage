import React, { useContext } from 'react';
import { LangContext } from '../provider/languajes';

export function ToggleLangButton() {
  const { translations, toggleLang } = useContext(LangContext);

  return (
    <button className="toggle-lang-button" onClick={toggleLang}>
      {translations.toggleLang}
    </button>
  );
}
