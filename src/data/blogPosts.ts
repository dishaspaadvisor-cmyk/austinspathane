import { JOURNAL_PART_1 } from './journalPart1';
import { JOURNAL_PART_2 } from './journalPart2';
import { JournalPost } from './journalTypes';

export type { JournalPost, JournalSection } from './journalTypes';

export const JOURNAL_POSTS: JournalPost[] = [...JOURNAL_PART_1, ...JOURNAL_PART_2];

export function getJournalPostBySlug(slug: string): JournalPost | undefined {
  return JOURNAL_POSTS.find((post) => post.slug === slug);
}
