import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilterValue = state => state.filter;

export const selectVisibleTasks = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filterValue) => {
    const normaliseFilter = filterValue.toLowerCase().trim();

    if (normaliseFilter !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normaliseFilter)
      );
    }
    return contacts;
  }
);
