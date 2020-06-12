import React from 'react';
// import axios from "axios";


class Math extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gradebook: [
                { id: 1, name: 'Thomas', Water_Cycle: "Completed", Shadows: "In_Progress", Moon_Phases3: "Not_Started",  },
                { id: 2, name: 'William', Water_Cycle: "Completed", Shadows: "In_Progress", Moon_Phases3: "Not_Started",  },
                { id: 3, name: 'Gueniver', Water_Cycle: "Completed", Shadows: "In_Progress", Moon_Phases3: "Not_Started",  },
                { id: 4, name: 'Molly', Water_Cycle: "Completed", Shadows: "In_Progress", Moon_Phases3: "Not_Started",  },
            ]
        };
        this.taskName = React.createRef();
    }



    renderTableHeader() {
        let header = Object.keys(this.state.gradebook[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.state.gradebook.map((student, index) => {
            const { id, name, Water_Cycle, Shadows, Moon_Phases3 } = student //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{Water_Cycle}</td>
                    <td>{Shadows}</td>
                    <td>{Moon_Phases3}</td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div>
                <table className="table table-responsive table-striped w-auto">
                                <tbody>
                                    <tr>{this.renderTableHeader()}</tr>
                                    {this.renderTableData()}
                                </tbody> 
                            </table>
            </div>



        )
    }
}
export default Math;