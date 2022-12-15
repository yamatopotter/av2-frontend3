import { useEffect, useState } from "react";
import { getAllAppointments } from "../../functions/api";
import { CalendarCard } from "../CalendarCard/CalendarCard";

export const ListAppointments = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await getAllAppointments();
      setTableData(data);
      return data;
    }
    
    return (
        <div className={`row`}>
            {
                tableData.map((data, index)=><CalendarCard key={index} data={data} />)
            }
        </div>
    );
}
