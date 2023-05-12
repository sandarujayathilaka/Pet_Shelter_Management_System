import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import adpotServices from "../../services/api/adoptPet";
import { toast } from "react-toastify";
import Spinner from "../common/Spinner";

const Booking = (props) => {
  const [data, setData] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({});
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDescriptonModal, setShowDescriptonModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    adpotServices.getAll(user).then((res) => {
      setData(res.profiles);
    });

    setFormData((prevFormData) => ({
      ...prevFormData,
      token: user.token,
    }));
    setIsLoading(false);
  }, []);

  const handleDescription = (booking) => {
    setSelectedBooking(booking);
    setShowDescriptonModal(true);
  };

  const handleDelete = (pet) => {

    pet = {
      petId:pet.petId ,
      bookedmarked: "no",
      token: user.token,
      owenerId: user._id,
    };
    const response = adpotServices.updateOne(pet);
    console.log(response);

    if (response) toast.success("Pet Successfully Removed from wish list");
    setTimeout(() => {
      refreshTable();
    },2000);
  };

  const refreshTable = () => {
    setData([]);
    adpotServices.getAll(user).then((res) => {
      setData(res.profiles);
    });
  };

  const handleMainInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      id: selectedBooking._id,
      token: user.token,
    }));
  };

  return (
    <div>
      <div className="w-full bg-bgsec pb-[80px]">
        <div className=" mx-auto rounded-[20px] bg-[#FFBE52] p-16 flex h-[830px]  w-[1000px]">
          <div className="w-full ">
            <h1 className="text-center text-[20px] font-bold mb-5">My Pets</h1>
            <div className="flex justify-end">
              {/* <button
                className="bg-secondary h-[27px] w-[80px] rounded-[30px] text-white mb-[10px]"
                onClick={() => refreshTable()}
              >
                Refresh
              </button> */}
            </div>
            {isLoading ? (
              <Spinner />
            ) : (
              <table className="w-full bg-bgsec rounded-[10px]" id="myTable">
                <thead className="bg-secondary rounded-[10px] text-white">
                  <tr className="h-[40px]">
                    <th className="w-[20%]">Pet id</th>
                    <th className="">Name</th>
                    <th className="">Breed</th>
                    <th className="">Birth</th>
                    <th className="">Gender</th>
                    <th className="">Status</th>
                    <th className="text-center">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) =>
                    item.bookedmarked === "yes" ? (
                      <>
                        <tr
                          key={item._id}
                          className="h-[55px] border-[1px] border-gray-400"
                        >
                          <td
                            className="pl-4"
                            onClick={() => handleDescription(item)}
                          >
                            {item.petId}
                          </td>
                          <td className="text-center">{item.petName}</td>
                          <td className="text-center">{item.breed}</td>
                          <td className="text-center">{item.birth}</td>
                          <td className="text-center">{item.gender}</td>
                          <td className="text-center pr-5 rounded-[100px] text-white">
                            <p className="bg-green-600 h-[27px]  rounded-[30px]">
                              {item.petStatus}
                            </p>
                          </td>

                          <td className="text-center">
                      <button
                        onFocus={() =>
                          setFormData((prevFormData) => ({
                            ...prevFormData,
                            id: item._id,
                          }))
                        }
                        onClick={() => handleDelete(item)}
                      >
                        Remove
                      </button>
                    </td>
                        </tr>
                      </>
                    ) : (
                      <></>
                    )
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {showDescriptonModal && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-lg font-bold mb-4 ">
              Pet ID {selectedBooking.petId}
            </h2>
            <img
              src={selectedBooking.image}
              className="w-[300px] h-[300px]"
            ></img>
            <br></br>
            <table class="border-collapse w-full">
              <tbody>
                <tr class="bg-gray-200">
                  <td class="border border-gray-400 px-4 py-2 font-medium">
                    Name
                  </td>
                  <td class="border border-gray-400 px-4 py-2">
                    {selectedBooking.petName}
                  </td>
                </tr>
                <tr class="bg-gray-100">
                  <td class="border border-gray-400 px-4 py-2 font-medium">
                    Species
                  </td>
                  <td class="border border-gray-400 px-4 py-2">
                    {selectedBooking.species}
                  </td>
                </tr>
                <tr class="bg-gray-200">
                  <td class="border border-gray-400 px-4 py-2 font-medium">
                    Gender
                  </td>
                  <td class="border border-gray-400 px-4 py-2">
                    {selectedBooking.gender}
                  </td>
                </tr>
                <br></br>
              </tbody>
            </table>
            <button className="" onClick={() => setShowDescriptonModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
