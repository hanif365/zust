const fruitSlice = (set) => ({
  fruit: 0,
  addFruit: () => set((state) => ({ fruit: state.fruit + 1 }), false, "fruitSlice/addFruit"),
});

export default fruitSlice;
