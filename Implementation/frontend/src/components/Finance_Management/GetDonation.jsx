import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const GetDoanation = () => {
  const [payData, setpayData] = useState([]);
  const [isError, setIsError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPayData, setFilteredPayData] = useState([]);

  function refreshPage() {
    setTimeout(function () {
      window.location.reload(false);
    }, 2000);
  }

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/cusDonation")
      .then((response) => {
        console.log(response);
        setpayData(response.data);
        filterPayments(response.data);
      })

      .catch((error) => setIsError(error.message));
  }, []);

  function calculateprice() {
    const income = payData

      .filter(({ status }) => status === "Verified")
      .reduce((total, { price }) => total + price, 0);

    return income;
  }

  const max = calculateprice();

  function filterPayments(data) {
    const filtered = data.filter((payment) =>
      payment.cus_id.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPayData(filtered);
  }

  // function handleSearch(e) {
  //   setSearchTerm(e.target.value);
  //   if (e.target.value === "") {
  //     setFilteredPayData(payData);
  //   } else {
  //     filterPayments(payData);
  //   }
  // }




  function handleSearch(e) {
    const selectedOption = e.target.value;
    setSearchTerm(selectedOption);

    if (selectedOption === "") {
      setFilteredPayData(payData);
    } else {
      const filteredData = payData.filter(item => {
        return item.status === selectedOption;
      });
      setFilteredPayData(filteredData);
    }
  }


  console.log(searchTerm);

  return (
    <>
      {/* //BALANCE BAR */}

      <div class="flex ml-48 justify-center flex-cols-1 gap-4 mt-24 ">
        <div class="bg-[#2E4960] shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <svg
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div class="text-right">
            <p class="text-2xl"> &nbsp; Rs. {max}</p>
            <p>Balances</p>
          </div>
        </div>

        <div class="flex ">
         
        </div>
      </div>

      {isError !== "" && <h2>{isError}</h2>}

      <div class="mt-4 mb-16 mr-8 rounded-lg">
        <div class="w-full overflow-hidden  shadow-xs">
          <div class="w-full overflow-x-auto">
            <table class="table-auto rounded-lg ml-80">
              <thead>
                <tr class="text-base font-semibold tracking-wide  text-gray-500 uppercase border-b dark:border-gray-900 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                  <th className="px-10 py-4">Customer Name</th>
                  <th className="px-10 py-4">Payment</th>
                  <th className="px-10 py-4">Date</th>
                  <th className="px-10 py-4">        <select
                    value={searchTerm}
                    onChange={handleSearch}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-28 text-center  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option className="text-center" value="PAID">PAID</option>
                    <option className="text-center" value="Verified">Verified</option>



                  </select></th>
                  <th className="px-10 py-4">Action</th>
                </tr>
              </thead>

              <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                {filteredPayData.map((data) => {
                  const {
                    _id,
                    cus_id,
                    description,
                    price,
                    payment_date,
                    payment_time,
                    status,
                  } = data;

                  const notify = () =>
                    toast.success("Payment Verified ", {
                      position: "top-right",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: false,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    });

                  function updateTransaction() {
                    const updatedTransaction = {
                      status: "Verified",
                      cus_id: cus_id,
                      description: description,
                      payment_date: payment_date,
                      payment_time: payment_time,
                      price: price.toString(),
                    };

                    axios
                      .put(
                        `http://localhost:8080/api/cusDonation/${_id}`,
                        updatedTransaction
                      )
                      .then((response) => {
                        console.log(response.data);
                        calculateprice();
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  }

                  return (
                    <tr
                      key={_id}
                      class="font-semibold bg-gray-50 dark:bg-gray-100 hover:bg-gray-100 dark:hover:bg-gray-400 text-gray-100 dark:text-gray-900"
                    >
                      <td class="px-10 py-2">
                        <div class="flex items-center px-10 py-3 text-sm">
                          <div>
                            <p class="font-semibold">{cus_id}</p>
                          </div>
                        </div>
                      </td>

                      <td class="text-center px-10 py-3 text-sm">{price}</td>

                      <td class="text-center px-10 py-3 text-sm ">
                        {payment_date}
                      </td>
                      <td class="text-center px-10 py-3 text-sm">{status}</td>

                      <td class="text-center px-10 py-3 text-sm">
                        <button
                          class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                          onClick={() => {
                            notify();
                            refreshPage();
                            updateTransaction();
                          }}
                        >
                          {" "}
                          Verify{" "}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetDoanation;
