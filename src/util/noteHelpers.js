export const generateId = () => Math.floor(Math.random() * 100000);

export const addNote = (notes, note) => [...notes, note];

export const removeNote = (notes, id) => {
  const removeIndex = notes.findIndex(note => note.id === id);
  return [...notes.slice(0, removeIndex), ...notes.slice(removeIndex + 1)];
};
