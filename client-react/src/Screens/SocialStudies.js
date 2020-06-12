import React from 'react';
// import axios from "axios";


class Math extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gradebook: [
                { id: 1, name: 'Thomas', Arrival_of_the_Cars: "Completed", The_Railroad_Boom: "In_Progress", Review_Grography_of_Texas: "Not_Started",  },
                { id: 2, name: 'William', Arrival_of_the_Cars: "Completed", The_Railroad_Boom: "In_Progress", Review_Grography_of_Texas: "Not_Started",  },
                { id: 3, name: 'Gueniver', Arrival_of_the_Cars: "Completed", The_Railroad_Boom: "In_Progress", Review_Grography_of_Texas: "Not_Started",  },
                { id: 4, name: 'Molly', Arrival_of_the_Cars: "Completed", The_Railroad_Boom: "In_Progress", Review_Grography_of_Texas: "Not_Started",  },
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
            const { id, name, Arrival_of_the_Cars, The_Railroad_Boom, Review_Grography_of_Texas } = student //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{Arrival_of_the_Cars}</td>
                    <td>{The_Railroad_Boom}</td>
                    <td>{Review_Grography_of_Texas}</td>
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