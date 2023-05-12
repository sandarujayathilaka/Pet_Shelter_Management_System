const asyncHandler = require("express-async-handler");
const Booking = require("../models/bookingModel");

const addBooking = asyncHandler(async (req, res) => {
  const {
    cus_id,
    contactNumbers,
    description,
    startDate,
    endDate,
    petCount,
    mini,
    bid,
    cus_name,
    price
  } = req.body;

  console.log()

  const booking = await Booking.create({
    bid,
    cus_id,
    cus_name,
    contactNumbers,
    description,
    petCount,
    startDate,
    endDate,
    mini,
    price
  });

  booking
    ? res.status(201).json(booking)
    : res.status(400).json({ message: "Booking not created" });
});

const readBookingOpen = asyncHandler(async (req, res) => {

  const booking = await Booking.find({});
  res.json(booking);
});

const readBooking = asyncHandler(async (req, res) => {

  const id = req.params.id;
  const booking = await Booking.find({ cus_id: id});
  res.json(booking);
});


const updateBooking = asyncHandler(async (req, res) => {
  const { id, description, startDate, endDate, status } = req.body;
  const booking = await Booking.findByIdAndUpdate(id, {
    description,
    startDate,
    endDate,
    status,
  });

  booking
    ? res.status(201).json(booking)
    : res.status(400).json({ message: "Booking not updated" });
});


const deleteBooking = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const booking = await Booking.findByIdAndDelete(id);
  console.log(booking);
  booking
    ? res.status(200).json(booking)
    : res.status(400).json({ message: "Booking not deleted" });
});

module.exports = {
  addBooking,
  readBooking,
  updateBooking,
  deleteBooking,
  readBookingOpen
};

