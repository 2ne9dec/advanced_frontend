// <page adress, scroll position>
export type ScrollRestoration = Record<string, number>;

export interface ScrollRestorationSchema {
  scroll: ScrollRestoration;
}
