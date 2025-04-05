import React from "react";
import { useForm } from "react-hook-form";

function BookEvent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log("Booking data:", data);
    alert("Event booked successfully!");
    reset(); // clear the form
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Event Registration
        </h2>

        {/* Event Name and Date */}
        <div className="flex justify-between gap-4">
          {/* Event Name */}
          <div className="flex flex-col w-1/2">
            <label htmlFor="event-name" className="text-gray-700 font-semibold mb-2">
              Event Name
            </label>
            <input
              id="event-name"
              type="text"
              placeholder="Enter event name"
              className="border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              {...register("eventName", { required: true })}
            />
            {errors.eventName && (
              <p className="text-red-500 text-sm">Event name is required</p>
            )}
          </div>

          {/* Date */}
          <div className="flex flex-col w-1/2">
            <label htmlFor="event-date" className="text-gray-700 font-semibold mb-2">
              Event Date
            </label>
            <input
              id="event-date"
              type="date"
              className="border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              {...register("eventDate", { required: true })}
            />
            {errors.eventDate && (
              <p className="text-red-500 text-sm">Event date is required</p>
            )}
          </div>
        </div>

        {/* Payment Method */}
        <div className="mt-6">
          <label className="text-gray-700 font-semibold mb-2 block">Payment Options</label>

          {/* Payment Radio Buttons */}
          <div className="flex items-center gap-4 mb-2">
            <input
              type="radio"
              id="credit-card"
              value="Credit Card"
              {...register("payment", { required: true })}
              className="form-radio h-5 w-5 text-blue-600"
            />
            <label htmlFor="credit-card" className="text-gray-700">Credit Card</label>
          </div>

          <div className="flex items-center gap-4 mb-2">
            <input
              type="radio"
              id="paypal"
              value="PayPal"
              {...register("payment")}
              className="form-radio h-5 w-5 text-blue-600"
            />
            <label htmlFor="paypal" className="text-gray-700">PayPal</label>
          </div>

          <div className="flex items-center gap-4 mb-2">
            <input
              type="radio"
              id="bank-transfer"
              value="Bank Transfer"
              {...register("payment")}
              className="form-radio h-5 w-5 text-blue-600"
            />
            <label htmlFor="bank-transfer" className="text-gray-700">Bank Transfer</label>
          </div>

          {errors.payment && (
            <p className="text-red-500 text-sm">Please select a payment method</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookEvent;
