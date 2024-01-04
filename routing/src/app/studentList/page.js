import Link from "next/link";
import React from "react"

const StudentList = (props) => {
  return (
    <div>
        <h1>Student List</h1>
        <ul>
            <li>
                <Link href="/studentList/1"> A </Link>
            </li>
            <li><Link href="/studentList/2"> B </Link></li>
            <li><Link href="/studentList/3"> C </Link></li>
            <li><Link href="/studentList/4"> D </Link></li>
        </ul>
    </div>
  )
};

export default StudentList;
