// Progresso leve do usuário guardado em localStorage:
// - última categoria aberta ("Continue de onde parou")
// - categorias já visitadas (selo dourado de concluído no card)
//
// Tudo é best-effort: se o localStorage falhar (modo privado, cota),
// as funções degradam em silêncio sem quebrar a navegação.

const LAST_KEY = 'fmteam:last-category';
const VISITED_KEY = 'fmteam:visited-categories';

export function getLastCategory(): string | null {
  try {
    return localStorage.getItem(LAST_KEY);
  } catch {
    return null;
  }
}

export function setLastCategory(id: string): void {
  try {
    localStorage.setItem(LAST_KEY, id);
  } catch {
    /* noop */
  }
}

export function getVisitedCategories(): Set<string> {
  try {
    const raw = localStorage.getItem(VISITED_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? new Set(parsed as string[]) : new Set();
  } catch {
    return new Set();
  }
}

export function markVisited(id: string): void {
  try {
    const visited = getVisitedCategories();
    if (visited.has(id)) return;
    visited.add(id);
    localStorage.setItem(VISITED_KEY, JSON.stringify([...visited]));
  } catch {
    /* noop */
  }
}
