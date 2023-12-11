const countSlice = (set) => ({
  count: 0,
  addCount: () => set((state) => ({ count: state.count + 1 }), false, "countSlice/addCount"),
});

export default countSlice;
