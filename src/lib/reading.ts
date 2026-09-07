/** Средняя скорость вдумчивого чтения на татарском, слов в минуту. */
const WPM = 150;

/**
 * Считает объём текста по исходнику MDX: разметка и JSX-теги отбрасываются,
 * содержимое компонентов вроде <Gloss> остаётся.
 */
export function readingStats(body = '') {
  const text = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#*_>[\]()`~|]/g, ' ');
  const words = text.match(/[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu)?.length ?? 0;
  return { words, minutes: Math.max(1, Math.round(words / WPM)) };
}

/** 1240 → «1 240» с неразрывным пробелом. */
export function formatWords(words: number) {
  return words.toLocaleString('ru-RU').replace(/ |\s/g, ' ');
}
