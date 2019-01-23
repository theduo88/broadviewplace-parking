import React, {Component} from "react";
import ReactTable from "react-table";
import * as ViolationService from "../../services/ViolationService";

export class ViolationLog extends Component {
    constructor(props, context) {
        super(props, context);

        this.getViolation = this.getViolation.bind(this);
        this.filterCaseInsensitive = this.filterCaseInsensitive.bind(this);

        }


    componentWillMount() {
        this.getViolation();
    }

    getViolation(state) {
        let newState = {
            data: []
        };

        this.setState(newState,() => {
            return ViolationService.getViolations(null, this.state.data)
                .then(async response => {
                    this.setState({
                        data: response
                    });
                })
        })
    }

    filterCaseInsensitive(filter, row) {
        const id = filter.pivotId || filter.id;
        return (
            row[id] !== undefined ?
                String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase())
                :
                true
        );
    }

    columns = [
        {
            Header: 'Date',
            accessor: 'date',
            Cell: props => <span className='number'>{props.value}</span>
        },
        {
            Header: 'Time',
            accessor: 'time',
            Cell: props => <span className='number'>{props.value}</span>
        },
        {
            Header: 'License Plate',
            accessor: 'licensePlateNumber',
            Cell: props => <span className='number'>{props.value}</span>
        },
        {
            Header: 'State',
            accessor: 'state',
            Cell: props => <span className='number'>{props.value}</span>
        },
        {
            Header: 'Vehicle',
            accessor: 'vehicle',
            Cell: props => <span className='number'>{props.value}</span>
        },
        {
            Header: 'Location',
            accessor: 'location',
            Cell: props => <span className='number'>{props.value}</span>
        },
        {
            Header: 'Towing Deadline',
            accessor: 'towingDeadline',
            Cell: props => <span className='number'>{props.value}</span>
        },
        {
            Header: 'Reason',
            accessor: 'reason',
            Cell: props => <span className='number'>{props.value}</span>
        },
        {
            Header: 'Recorded By',
            accessor: 'recordedBy',
            Cell: props => <span className='number'>{props.value}</span>
        },
        {
            Header: 'Notes',
            accessor: 'otherNotes',
            Cell: props => <span className='number'>{props.value}</span>
        }
    ];

    render()    {
        return (
            <ReactTable
                data={this.state.data}
                columns={this.columns}
                filterable
                defaultFilterMethod={this.filterCaseInsensitive}
            />
        )
    }
}

export default ViolationLog;