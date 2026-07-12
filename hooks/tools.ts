export interface ToolItem {
  id: string;
  cursor: string;
  active?: boolean;
  svg: string;
}

export const tools: ToolItem[] = [
  {
    id: "cursor",
    cursor: "Cursor",
    active: true,
    svg: `<svg viewBox="0 0 24 24"><path d="M5 3l5 16 2.6-6.4L19 10z"/></svg>`,
  },
  {
    id: "move",
    cursor: "Move",
    svg: `<svg viewBox="0 0 24 24"><path d="M12 2v20M12 2l-3 3M12 2l3 3M2 12h20M2 12l3-3M2 12l3 3M22 12l-3-3M22 12l-3 3M12 22l-3-3M12 22l3-3"/></svg>`,
  },
  {
    id: "marquee",
    cursor: "Marquee",
    svg: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" stroke-dasharray="3 3"/></svg>`,
  },
  {
    id: "lasso",
    cursor: "Lasso",
    svg: `<svg viewBox="0 0 24 24"><path d="M4 10c0-4 4-6 8-6s8 2 8 6-4 6-8 6c-2 0-3 1-3 2.5S10 21 9 20"/></svg>`,
  },
  {
    id: "crop",
    cursor: "Crop",
    svg: `<svg viewBox="0 0 24 24"><path d="M6 2v16h16M2 6h16v16"/></svg>`,
  },
  {
    id: "brush",
    cursor: "Brush",
    svg: `<svg viewBox="0 0 24 24"><path d="M14 4l6 6-8 8H6v-6zM9 15l-4 4"/></svg>`,
  },
  {
    id: "type",
    cursor: "Type",
    svg: `<svg viewBox="0 0 24 24"><path d="M4 5h16M12 5v14M8 19h8"/></svg>`,
  },
  {
    id: "pen",
    cursor: "Pen",
    svg: `<svg viewBox="0 0 24 24"><path d="M12 19c0-6 0-10 6-12-4 7-4 9-6 12zM12 19c0-6 0-10-6-12 4 7 4 9 6 12z"/></svg>`,
  },
];
