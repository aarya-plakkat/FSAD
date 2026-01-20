import React from "react";

// Row Component
class EdRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.place}</td>
        <td>{this.props.stddeg}</td>
        <td>{this.props.grade}</td>
      </tr>
    );
  }
}

// Table Component
class EdTable extends React.Component {
  render() {
    const education = [
      {
        id: 1,
        name: "National Public School",
        place: "Bengaluru",
        stddeg: "10th",
        grade: "A+",
      },
      {
        id: 2,
        name: "Indian Institute of Science",
        place: "Bengaluru",
        stddeg: "Under Graduate",
        grade: "9.8",
      }
    ];

    const edudetails = education.map((educ) => (
      <EdRow
        key={educ.id}
        id={educ.id}
        name={educ.name}
        place={educ.place}
        stddeg={educ.stddeg}
        grade={educ.grade}
      />
    ));

    return (
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Place</th>
            <th>Education</th>
            <th>Grade</th>
          </tr>
        </thead>

        <tbody>{edudetails}</tbody>
      </table>
    );
  }
}

// Main Education Component
class Education extends React.Component {
  render() {
    return (
      <section>
        <h2>Education Details</h2>
        <EdTable />
      </section>
    );
  }
}

export default Education;
