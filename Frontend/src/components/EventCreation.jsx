import React from 'react';
import { useForm } from 'react-hook-form';

function EventCreation() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    const imageFile = data.eventImage[0];
    const formData = new FormData();

    formData.append('eventName', data.eventName);
    formData.append('eventDate', data.eventDate);
    formData.append('eventPlace', data.eventPlace);
    formData.append('amount', data.amount);
    formData.append('eventImage', imageFile);
    formData.append('eventDescription', data.eventDescription);

    console.log('Form submitted:', data);


    alert('Event registered successfully!');
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-500">Event Creation</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* Event Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Event Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              {...register('eventName', { required: true })}
              placeholder="Enter event name"
            />
            {errors.eventName && <p className="text-sm text-red-500">Event name is required</p>}
          </div>

          {/* Event Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-lg"
              {...register('eventDate', { required: true })}
            />
            {errors.eventDate && <p className="text-sm text-red-500">Event date is required</p>}
          </div>

          {/* Event Place */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Event Place</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              {...register('eventPlace', { required: true })}
              placeholder="Enter event place"
            />
            {errors.eventPlace && <p className="text-sm text-red-500">Event place is required</p>}
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded-lg"
              {...register('amount', { required: true })}
              placeholder="Enter event amount"
            />
            {errors.amount && <p className="text-sm text-red-500">Amount is required</p>}
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Event Image</label>
            <input
              type="file"
              accept="image/*"
              className="w-full"
              {...register('eventImage', { required: true })}
            />
            {errors.eventImage && <p className="text-sm text-red-500">Event image is required</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Event Description</label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg"
              {...register('eventDescription', { required: true })}
              placeholder="Enter a brief description"
            />
            {errors.eventDescription && <p className="text-sm text-red-500">Description is required</p>}
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Register Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EventCreation;
