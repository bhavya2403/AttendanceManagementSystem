import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";
import "./AttendanceSheet.css";

function AttendanceSheet() {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Bob Smith" },
    { id: 4, name: "Alice Johnson" },
    {id: 5, name: "Parth"},
    { id: 6, name: "John Doe" },
    { id: 7, name: "Jane Doe" },
    { id: 8, name: "Bob Smith" },
    { id: 9, name: "Alice Johnson" },
    {id: 10, name: "Parth"},
    { id: 11, name: "John Doe" },
    { id: 12, name: "Jane Doe" },
    { id: 13, name: "Bob Smith" },
    { id: 14, name: "Alice Johnson" },
    {id: 15, name: "Parth"},
    { id: 16, name: "John Doe" },
    { id: 17, name: "Jane Doe" },
    { id: 18, name: "Bob Smith" },
    { id: 19, name: "Alice Johnson" },
    {id: 20 , name: "Parth"},

  ]);

  const [dates, setDates] = useState(eachDayOfInterval({ start: startOfMonth(new Date()), end: endOfMonth(new Date()) }));

  const [attendance, setAttendance] = useState(
    students.map((student) => ({
      studentId: student.id,
      attendance: dates.map((date) => ({ date: format(date, "yyyy-MM-dd"), present: false })),
    }))
  );

  function handleCheckboxChange(studentId, date, present) {
    setAttendance((prevState) =>
      prevState.map((item) => {
        if (item.studentId === studentId) {
          return {
            studentId: item.studentId,
            attendance: item.attendance.map((attendanceItem) => {
              if (attendanceItem.date === date) {
                return {
                  date: attendanceItem.date,
                  present,
                };
              }
              return attendanceItem;
            }),
          };
        }
        return item;
      })
    );
  }

  return (
    <div className="attendance-table">
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Student ID</th>
            {dates.map((date) => (
              <th key={date}>{format(date, "EEE, MMM d")}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {attendance.map((item) => (
            <tr key={item.studentId}>
              <td>{students.find((student) => student.id === item.studentId).name}</td>
              <td>{students.find((student) => student.id === item.studentId).id}</td>
              {item.attendance.map((attendanceItem) => (
                <td key={`${item.studentId}-${attendanceItem.date}`}>
                  <input
                    type="checkbox"
                    checked={attendanceItem.present}
                    onChange={(event) =>
                      handleCheckboxChange(item.studentId, attendanceItem.date, event.target.checked)
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceSheet;