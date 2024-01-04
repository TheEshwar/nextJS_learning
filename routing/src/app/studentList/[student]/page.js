"use client"

const Student = ({params}) => {
    console.log(params)
  return (
    <div>
        <h3>Student Details</h3>
        <h5>id :- {params.student}</h5>
    </div>
  )
};

export default Student;
