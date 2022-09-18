type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods, additional: string[]): string {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
    ...additional,
  ].join(' ');
}

classNames('remove-btn', { hovered: false, selecteble: true }, ['pdg']);
