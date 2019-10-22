//action types
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

//action constructors(return값으로 action를 보낸다)
export const toggleFavorite = id => {
  return {
    type: TOGGLE_FAVORITE,
    mealId: id
  };
};
