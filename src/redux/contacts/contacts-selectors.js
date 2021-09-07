import { createSelector } from "@reduxjs/toolkit";

export const getFilterValue = (state) => state.contacts.filter;

export const getContactsList = (state) => state.contacts.items;

export const getFiltredContactsList = createSelector(
  [getFilterValue, getContactsList],
  (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts
      .filter(
        ({ name, number }) =>
          name.toLowerCase().includes(normalizedFilter) ||
          number.includes(normalizedFilter)
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }
);

export const getError = (state) => state.contacts.error;
export const getLoadingStatus = (state) => state.contacts.isLoading;