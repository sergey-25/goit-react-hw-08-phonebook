export const getUserIsLoggedIn = (state) => state.auth.isLoggedIn;
export const getIsLoading = (state) => state.auth.IsLoading;
export const getUserName = (state) => state.auth.user.name;
export const getIsFetchCurrentUser = (state) => state.auth.isFetchCurrentUser;
export const getAuthError = (state) => state.auth.error;