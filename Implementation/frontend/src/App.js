import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/common/Header";
import Home from "./components/Home";
import InvDashboard from "./components/InvDashboard";
import InvItems from "./components/InvItems";
import InvAddItem from "./components/InvAddItem";
import InvItemUpdate from "./components/InvItemUpdate";
import InvRequestStock from "./components/InvRequestStock";
import InvRequestedStock from "./components/InvRequestedStock";
import InvReleaseStock from "./components/InvReleaseStock";
import InvStockIn from "./components/InvStockIn";
import InvStockOut from "./components/InvStockOut";
import InvEventStocks from "./components/InvEventStocks";

import EditVehicle from "./components/EditVehicle";
import Vehicles from "./components/Vehicles";
import AddNewVehicle from "./components/AddNewVehicle";
import PendingBookings from "./components/PendingBookings";
import AddAvailability from "./components/AddAvailability";
import Availabilities from "./components/Availabilities";
import EditAvailabilities from "./components/EditAvailabilities";
import AddTBooking from "./components/AddTBooking";
import AddVehicleBudgetRequestForm from "./components/AddVehicleBudgetRequest";
import AllVBudgetRequests from "./components/AllVBudgetRequests";
import VHome from "./components/VHome";
import "react-toastify/dist/ReactToastify.css";

import VetPortal from "./components/portals/VetPortal";
import AllPetProfile from "./components/AnimalManagement/PetProfile/petProfile";
import AddPetProfile from "./components/AnimalManagement/PetProfile/AddPetProfile";
import UpdatePetProfile from "./components/AnimalManagement/PetProfile/UpdatePetProfile";
import ProfilePage from "./components/AnimalManagement/PetProfile/ProfilePage";
import HealthProfile from "./components/AnimalManagement/HealthProfile/HealthProfile";
import AddHealth from "./components/AnimalManagement/HealthProfile/AddHealth";
import DisplayHealth from "./components/AnimalManagement/HealthProfile/DisplayHealth";
import Addvac from "./components/AnimalManagement/HealthProfile/Addvac";
import UpdateVac from "./components/AnimalManagement/HealthProfile/UpdateVac";
import Dashboard from "./components/AnimalManagement/Dashboard/Dashboard";
import Shelterpets from "./components/AnimalManagement/PetProfile/ShelterPets";
import Breed from "./components/AnimalManagement/PetProfile/Breed";
import QrPetProfile from "./components/AnimalManagement/PetProfile/QrPetProfile";

import PortalHandler from "./components/PortalHandler";

import AddEvent from "./components/EventManagement/AddEvent";
import AllEvent from "./components/EventManagement/AllEvent";
import RegisterEvent from "./components/User/RegisterEvent";
import AllRegisterEvent from "./components/EventManagement/AllRegisterEvent";
import AllEventUser from "./components/User/AllEventUser";
import EditEvent from "./components/EventManagement/EditEvent";
import AddEventFeedback from "./components/EventManagement/AddEventFeedback";
import AllEventFeedback from "./components/EventManagement/AllEventFeedback";
import EventReport from "./components/EventManagement/EventReport";
import BudgetRequestForm from "./components/EventManagement/BudgetRequestForm";
import AllEventBudget from "./components/EventManagement/AllEventBudget";
import EditBudget from "./components/EventManagement/BudgetRequestEdit";
import StockRequestForm from "./components/EventManagement/StockRequestForm";
import StockRequestEdit from "./components/EventManagement/StockRequestEdit";
import AllEventStock from "./components/EventManagement/AllEventStock";
import EventChart from "./components/EventManagement/EventChart";
import QRCodeContent from "./components/EventManagement/QRCodeContent";
import IncomeExpenseReport from "./components/EventManagement/IncomeExpenseReport";
import EventPortal from "./components/portals/EventPortal";
import EventDashboard from "./components/EventManagement/EventDashboard";
import EditBooking from "./components/EventManagement/EditBooking";

import GetTransaction from "./components/Finance_Management/GetTransaction";
import GetPayment from "./components/Finance_Management/GetPayment";
import GetDoanation from "./components/Finance_Management/GetDonation";
import GetOrganization from "./components/Finance_Management/GetOrganization";
import AddOrganization from "./components/Finance_Management/AddOrganization";
import FinaDashBoard from "./components/Finance_Management/FinaDashBoard";
import GetBooking from "./components/Finance_Management/GetBooking";
import AddDonation from "./components/Finance_Management/AddDonations";
import FinaGetEvents from "./components/Finance_Management/FinaGetEvents";
import FinaGetVehicle from "./components/Finance_Management/FinaGetVehicle";
import FinaGetStock from "./components/Finance_Management/FinaGetStock";

import FinaLeftBar from "./components/portals/FinaHeader_SB";

import AdoptPet from "./components/User/AdoptPet";
import Footer from "./components/common/Footer";
import ShelterPet from "./components/User/ShelterPet";
import UserPortal from "./components/User/UserProtal";
import Booking from "./components/User/myBooking";
import Pets from "./components/User/myPets";
import Profile from "./components/User/myProfile";

import SupplierList from "./components/SupplierList";
import AddSuppliers from "./components/AddSuppliers";
import ManageSuppliers from "./components/ManageSuppliers";
import UpdateSupplier from "./components/UpdateSupplier";
import StockRequests from "./components/StockRequests";
import EventStockReqs from "./components/EventStockReqs";
import StockBudgetRequests from "./components/StockBudgetRequests";
import StockBudgetRequestForm from "./components/StockBudgetRequestForm";
import UpdateStockBudgetRequest from "./components/UpdateStockBudgetRequest";

import Spinner from "./components/common/Spinner";

import Employee from "./components/admin/Employee";
import Feedback from "./components/admin/Feedback";
import ForgotPassWord from "./components/ForgotPassWord"
import Scanner from "./components/User/Scanner"



function App() {
  return (
    <>
      <Router>
        <div className="App">
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<PortalHandler />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot" element={<ForgotPassWord />} />
            <Route path="register" element={<Register />} />
            <Route path="shelterpet" element={<ShelterPet />} />
            <Route path="adoptpet" element={<AdoptPet />} />
            <Route path="/feedback" element={<Feedback />} />
            //user
            <Route path="user" element={<UserPortal />} />
            <Route path="profile" element={<Profile />} />
            <Route path="booking" element={<Booking />} />
            <Route path="pets" element={<Pets />} />
            <Route path="events" element={<AllEventUser />} />
            <Route path="registerevent/:id" element={<RegisterEvent />} />
            <Route path="feedbackevent/:id" element={<AddEventFeedback />} />
            <Route path="/scanner" element={<Scanner />}/> 
            //
            <Route path="/supplierList" element={<SupplierList />} />
            <Route path="/addSuppliers" element={<AddSuppliers />} />
            <Route path="/manageSuppliers" element={<ManageSuppliers />} />
            <Route path="/updateSuppliers/:id" element={<UpdateSupplier />} />
            <Route path="/stockRequests" element={<StockRequests />} />
            <Route path="/eventstockReqs" element={<EventStockReqs />} />
            <Route
              path="/StockBudgetRequests"
              element={<StockBudgetRequests />}
            />
            <Route
              path="/StockBudgetRequestForm"
              element={<StockBudgetRequestForm />}
            />
            <Route
              path="/UpdateStockBudgetRequest/:id"
              element={<UpdateStockBudgetRequest />}
            />
            <Route path="user" element={<UserPortal />} />
            <Route path="profile" element={<Profile />} />
            <Route path="booking" element={<Booking />} />
            <Route path="pets" element={<Pets />} />
            <Route path="events" element={<AllEventUser />} />
            <Route path="registerevent/:id" element={<RegisterEvent />} />
            <Route path="feedbackevent/:id" element={<AddEventFeedback />} />
            <Route path="test" element={<Spinner />} />
            <Route path="petprofile" element={<VetPortal />}>
              <Route path="updatepet/:id" element={<UpdatePetProfile />} />
              <Route path="allpetprofile" element={<AllPetProfile />} />
              <Route path="addpet" element={<AddPetProfile />} />
              <Route path="addhealthprofile" element={<AddHealth />} />
              <Route path="profilepage/:id" element={<ProfilePage />} />
              <Route path="healthprofile" element={<HealthProfile />} />
              <Route path="displayhealth/:id" element={<DisplayHealth />} />
              <Route
                path="/petprofile/addvac/:id/:state/:des"
                element={<Addvac />}
              />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="spets" element={<Shelterpets />} />
              <Route path="breed" element={<Breed />} />
              <Route path="upvac/:id/:index/:state" element={<UpdateVac />} />
            </Route>    
            <Route path="/petprofile/qrresult/:id" element={<QrPetProfile/>}/>

            //Vehicle Management
            <Route path="/vhome" exact element={<VHome />} />
            <Route path="/vehicles" exact element={<Vehicles />} />
            <Route path="/editvehicle/:id" exact element={<EditVehicle />} />
            <Route path="/addnvehicle" exact element={<AddNewVehicle />} />
            <Route path="/pending" element={<PendingBookings />} />
            <Route path="/tbooking" exact element={<AddTBooking />} />
            <Route path="/availability" exact element={<Availabilities />} />
            <Route
              path="/addavailability"
              exact
              element={<AddAvailability />}
            />
            <Route
              path="/editavailability/:id"
              exact
              element={<EditAvailabilities />}
            />
            <Route path="/vbudgets" exact element={<AllVBudgetRequests />} />
            <Route
              path="/addvbudget"
              exact
              element={<AddVehicleBudgetRequestForm />}
            />
            //admin
            <Route path="/employee" element={<Employee />} />
            // EventManagement
            <Route path="eventdashboard" element={<EventPortal />}>
              <Route path="getEvents" element={<AllEvent />} />
              <Route path="addEvent" element={<AddEvent />} />
              <Route path="editEvent/:id" element={<EditEvent />} />
              <Route path="getFeedbacks" element={<AllEventFeedback />} />
              <Route path="budget" element={<AllEventBudget />} />
              <Route path="editbudget/:id" element={<EditBudget />} />
              <Route path="addBudget" element={<BudgetRequestForm />} />
              <Route path="stock" element={<AllEventStock />} />
              <Route path="editstock/:id" element={<StockRequestEdit />} />
              <Route path="addStock" element={<StockRequestForm />} />
              <Route path="eventbooking" element={<AllRegisterEvent />} />
              <Route path="chart" element={<IncomeExpenseReport />} />
              <Route path="dashboard" element={<EventDashboard />} />
              <Route path="report" element={<EventReport />} />
              <Route path="addbooking/:id" element={<RegisterEvent />} />
              <Route path="editBooking/:id" element={<EditBooking />} />
              <Route path="getEventsUser" element={<AllEventUser />} />
              <Route path="addFeedback/:id" element={<AddEventFeedback />} />
            </Route>
            //financial_manager
            <Route path="FinaDashBoard" element={<FinaLeftBar />}>
              <Route path="FinaDashBoard" element={<FinaDashBoard />} />
              <Route path="GetTransaction" element={<GetTransaction />} />
              <Route path="GetPayment" element={<GetPayment />} />
              <Route path="GetDoanation" element={<GetDoanation />} />
              <Route path="GetOrganization" element={<GetOrganization />} />
              <Route path="AddOrganization" element={<AddOrganization />} />
              <Route path="GetBooking" element={<GetBooking />} />
              <Route path="AddDonation" element={<AddDonation />} />
              <Route path="FinaGetEvents" element={<FinaGetEvents />} />
              <Route path="FinaGetVehicle" element={<FinaGetVehicle />} />
              <Route path="FinaGetStock" element={<FinaGetStock />} />
            </Route>
            <Route path="user" element={<UserPortal />} />
            <Route path="profile" element={<Profile />} />
            <Route path="booking" element={<Booking />} />
            <Route path="pets" element={<Pets />} />
            <Route path="events" element={<AllEventUser />} />
            <Route path="registerevent/:id" element={<RegisterEvent />} />
            <Route path="feedbackevent/:id" element={<AddEventFeedback />} />
            <Route path="test" element={<Spinner />} />
            //inventory
            <Route path="/inventory" element={<InvDashboard />} />
            <Route path="/items" element={<InvItems />} />
            <Route path="/additem" element={<InvAddItem />} />
            <Route path="/updateitem/:id" element={<InvItemUpdate />} />
            <Route path="/requeststock" element={<InvRequestStock />} />
            <Route path="/requestedstock" element={<InvRequestedStock />} />
            <Route path="/releasestock" element={<InvReleaseStock />} />
            <Route path="/stockin" element={<InvStockIn />} />
            <Route path="/stockout" element={<InvStockOut />} />
            <Route path="/eventstocks" element={<InvEventStocks />} />
            <Route path="/supplierList" element={<SupplierList />} />
            <Route path="/addSuppliers" element={<AddSuppliers />} />
            <Route path="/manageSuppliers" element={<ManageSuppliers />} />
            <Route path="/updateSuppliers/:id" element={<UpdateSupplier />} />
            <Route path="/stockRequests" element={<StockRequests />} />
            <Route
              path="/StockBudgetRequests"
              element={<StockBudgetRequests />}
            />
            <Route
              path="/StockBudgetRequestForm"
              element={<StockBudgetRequestForm />}
            />
            <Route
              path="/UpdateStockBudgetRequest/:id"
              element={<UpdateStockBudgetRequest />}
            />


            <Route path="test" element={<Spinner />} />
            
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
