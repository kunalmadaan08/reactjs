import React from 'react'
import {getAllContracts} from '../../services';

class ListContracts extends React.Component{
	constructor(){
		super();
		this.state = {
			contracts:[],
			loading: false
		}
	}
	componentDidMount(){
		this.setState({loading: true});
		getAllContracts().then(response=>{
			this.setState({loading: false});
			if(response.status===200){
				this.setState({contracts: response.data.contacts})
			}
		})
		.catch(err=>{
			console.log('There is some error occured while contacting with the service. Please try again later.')
		})
	}
	render(){
		let {contracts,loading} = this.state;
		return(
			<React.Fragment>
				<div className="container">
					{
						(loading) ?
							<div className="overlay-mask">
								<i className="fa fa-refresh fa-spin" style={{ fontSize: '90px' }}></i>
							</div>
						: <div />
					}
					<h2 className="text-center mb-5 mt-2">All Contacts</h2>
					<table className="table table-striped table-bordered">
						<thead>
							<tr>
								<th>S.No</th>
							    <th>Contact Id</th>
							    <th>Contact Name</th>
							    <th>Company Name</th>
							    <th>Email</th>
							    <th>phone</th>
							    <th>Receivables</th>
							    <th>Payables</th>
							</tr>
						</thead>
						<tbody>
						{
							(contracts && contracts.length>0)?
							contracts.map((item,index)=>(
								<tr key={index}>
									<td>{index+1}</td>
									<td>{item.contact_id}</td>
									<td>{item.contact_id}</td>
									<td>{item.company_name}</td>
									<td>{item.email}</td>
									<td>{item.phone}</td>
									<td>{item.outstanding_receivable_amount}</td>
									<td>{item.outstanding_payable_amount}</td>
								</tr>
							))
							:
							<tr>
								<td colSpan="8">No records found!</td>
							</tr>
						}
						</tbody>
					</table>
				</div>
			</React.Fragment>
		);
	}
}

export default ListContracts;