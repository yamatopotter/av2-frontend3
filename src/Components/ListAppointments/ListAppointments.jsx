import { useEffect, useState } from "react";
import { getAllAppointments } from "../../functions/api";
import { ToastContainer, toast } from "react-toastify";
import { CalendarCard } from "../CalendarCard/CalendarCard";

export const ListAppointments = () => {
  const [tableData, setTableData] = useState([]);

  function organizeByDate(a, b){

    const dateA = new Date(a.dataHoraAgendamento);
    const dateB = new Date(b.dataHoraAgendamento);

    if ( dateA.getTime() < dateB.getTime() ){
      return -1;
    }
    if ( dateA.getTime() > dateB.getTime() ){
      return 1;
    }
    return 0;
  }

  useEffect(() => {
    async function getData() {
      let data = await getAllAppointments();
      data.sort(organizeByDate)
      setTableData(data);
    }
    
    getData();
    }, []);
    
    return (
      <>
        <ToastContainer />
        <div className={`row`}>
            {
                tableData.map((data, index)=><CalendarCard key={index} data={data} toast={toast} />)
            }
        </div>
      </>
    );
}
