// Controle de acesso às áreas premium (Mentoria e Bioimpedância).
// As senhas são as mesmas usadas anteriormente na página Index.
// O estado de "desbloqueado" é guardado em sessionStorage para que, ao abrir
// uma capa bloqueada na home Netflix e digitar a senha, a seção detalhada
// também já esteja liberada.

export type LockKey = 'mentoring' | 'bioimpedance';

export const PASSWORDS: Record<LockKey, string> = {
  mentoring: 'mentoria123', // Você pode alterar a senha aqui
  bioimpedance: 'bio123', // Senha exclusiva para bioimpedância
};

const storageKey = (key: LockKey) => `fmteam:unlocked:${key}`;

export function isUnlocked(key: LockKey): boolean {
  try {
    return sessionStorage.getItem(storageKey(key)) === '1';
  } catch {
    return false;
  }
}

export function unlock(key: LockKey): void {
  try {
    sessionStorage.setItem(storageKey(key), '1');
  } catch {
    /* ignore */
  }
}

export function checkPassword(key: LockKey, input: string): boolean {
  return input === PASSWORDS[key];
}
