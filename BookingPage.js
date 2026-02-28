import React, { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../api";

function updateTimes(state, action) {
  return fetchAPI(action.date);
}

function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      window.location.href = "/confirmed";
    }
  };

  return (
    <section>
      <h1>Book a Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
}

export default BookingPage;