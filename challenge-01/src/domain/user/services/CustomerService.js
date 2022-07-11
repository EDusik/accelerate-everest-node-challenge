const CustomerRepository = require("../repositories/CustomerRepositories").default;

class CustomerService {
	async create(customer) {
		const customerRepository = new CustomerRepository();
		const { full_name } = customer;
		return await customerRepository.create({
			...customer,
			full_name,
		});
	}
}
// TODO: add joy
exports.default = CustomerService;
