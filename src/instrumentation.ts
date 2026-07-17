export async function register() {
  // The Claude Code VS Code extension passes --localstorage-file to the Node
  // process without a valid path, which causes Next.js to create a broken
  // localStorage mock on the server (getItem is not a function).
  // This polyfill overrides it with a working in-memory implementation.
  if (
    typeof window === "undefined" &&
    (typeof localStorage === "undefined" ||
      typeof localStorage.getItem !== "function")
  ) {
    const store: Record<string, string> = {};
    (global as unknown as Record<string, unknown>).localStorage = {
      getItem: (key: string) => store[key] ?? null,
      setItem: (key: string, value: string) => {
        store[key] = String(value);
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        for (const key in store) delete store[key];
      },
      get length() {
        return Object.keys(store).length;
      },
      key: (index: number) => Object.keys(store)[index] ?? null,
    };
  }
}
