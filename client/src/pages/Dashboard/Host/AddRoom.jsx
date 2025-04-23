import { useState } from "react";
import AddRoomForm from "../../../components/Rorms/AddRoomForm";
import useAuth from "../../../hooks/useAuth";


export default function AddRoom() {
  const { user } = useAuth()
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  })
  //Date range handler
  const handleDates = item => {
    setDates(item.selection)
  }
  // Form Heandler
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const form = e.target;
    const location = form?.location?.value;
    const category = form?.category?.value;
    const title = form?.title?.value;
    const to = dates?.endDate;
    const from = dates?.startDate;
    const price = form?.price?.value;
    const guests = form?.total_guest?.value;
    const description = form?.description?.value;
    const bedrooms = form?.bedrooms?.value;
    const image = form?.image?.files[0]
    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    }
  }
  return (
    <div>
      <AddRoomForm dates={dates} handleDates={handleDates} handleSubmit={handleSubmit}/>
    </div>
  )
}
