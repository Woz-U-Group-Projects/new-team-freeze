import React from 'react';
// import axios from "axios";


class Math extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gradebook: [
                { id: 1, name: 'Thomas', addition_and_subtraction: "Completed", Multiplication: "In_Progress", multiply_2_digit_numbers: "Not_Started",  },
                { id: 2, name: 'William', addition_and_subtraction: "Completed", Multiplication: "In_Progress", multiply_2_digit_numbers: "Not_Started",  },
                { id: 3, name: 'Guinevere', addition_and_subtraction: "Completed", Multiplication: "In_Progress", multiply_2_digit_numbers: "Not_Started",  },
                { id: 4, name: 'Molly', addition_and_subtraction: "Completed", Multiplication: "In_Progress", multiply_2_digit_numbers: "Not_Started",  },
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
            const { id, name, addition_and_subtraction, Multiplication, multiply_2_digit_numbers } = student //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{addition_and_subtraction}</td>
                    <td>{Multiplication}</td>
                    <td>{multiply_2_digit_numbers}</td>
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