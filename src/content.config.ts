import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tales = defineCollection({
  loader: glob({ base: './src/content/tales', pattern: '**/*.mdx' }),
  schema: z.object({
    /** Название на татарском — то, что читатель видит первым. */
    title: z.string(),
    /** Русское название: подзаголовок в списке и на странице. */
    titleRu: z.string(),
    /** Жанровая помета: «халык әкияте», «Габдулла Тукай» и т. п. */
    kind: z.string().default('халык әкияте'),
    /** Ключи фильтров на главной. */
    tags: z.array(z.string()).default([]),
    /** Аннотация для карточки. */
    summary: z.string(),
    /** Издание, по которому подготовлен текст. */
    source: z.string().optional(),
    /** Выбор редакции: крупная карточка наверху. Ставится вручную —
     *  ротации по расписанию нет. Флаг у нескольких сказок сразу
     *  безопасен: возьмётся первая по order. */
    featured: z.boolean().default(false),
    /** Порядок в списке: меньше — выше. */
    order: z.number().default(100),
  }),
});

export const collections = { tales };
