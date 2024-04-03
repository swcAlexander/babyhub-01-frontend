import { useState } from "react";

export const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(isOpen => !isOpen);

  return { isOpen, open, close, toggle };
};

/*
Хук для відкривання/закривання модального вікна.

Власний хук може приймати будь-які аргументи і повертати будь-що, 
правил немає, залежить від реалізації. У нашому випадку це об'єкт із 
чотирма властивостями.
*/