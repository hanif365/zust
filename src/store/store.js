import { produce } from "immer";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import countSlice from "./countSlice";
import fruitSlice from "./fruitSlice";
import userSlice from "./userSlice";

// Create a store with a complex object
// const useStore = create((set) => ({
//   user: {
//     id: 1,
//     name: 'John Doe',
//     address: {
//       street: '123 Main St',
//       city: 'Cityville',
//       zip: '12345',
//     },
//     hobbies: ['Reading', 'Gaming'],
//   },
//   updateUser: (newUser) =>
//   set(
//     produce((state) => {
//         state.user.name = newUser.name;
//         state.user.address.city = newUser.address.city;
//         state.user.hobbies = newUser.hobbies;
//     })
//   ),
// }));

// store without middleware
// const useStore = create((...a) => ({
//   ...countSlice(...a),
//   ...fruitSlice(...a),
//   ...userSlice(...a),
// }));

const useStore = create(
  devtools((...a) => ({
    ...countSlice(...a),
    ...fruitSlice(...a),
    ...userSlice(...a),
  }))
);

export default useStore;
