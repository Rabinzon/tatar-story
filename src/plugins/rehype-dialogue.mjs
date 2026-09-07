import { visit } from 'unist-util-visit';

/**
 * Абзацы, начинающиеся с тире, — это реплики. Помечаем их классом,
 * чтобы тире висело в поле, как в книжном наборе, и авторам сказок
 * не приходилось расставлять классы руками.
 */
export function rehypeDialogue() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'p') return;
      const first = node.children?.[0];
      if (!first || first.type !== 'text' || !/^\s*[—–-]\s/.test(first.value)) return;
      const existing = node.properties?.className ?? [];
      node.properties = {
        ...node.properties,
        className: [...(Array.isArray(existing) ? existing : [existing]), 'say'],
      };
    });
  };
}
