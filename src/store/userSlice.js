import { produce } from "immer";

const userSlice = (set) => ({
  user: {
    id: 1,
    name: "John Doe",
    address: {
      street: "123 Main St",
      city: "Cityville",
      zip: "12345",
    },
    hobbies: ["Reading", "Gaming"],
  },
  updateUser: (newUser) =>
    set(
      produce((state) => {
        state.user.name = newUser.name ? newUser.name : state.user.name;
        state.user.address.city = newUser.city
          ? newUser.city
          : state.user.address.city;
        state.user.hobbies = newUser.hobbies
          ? newUser.hobbies
          : state.user.hobbies;
      }), false, "userSlice/updateUser"
    ),
});

export default userSlice;
