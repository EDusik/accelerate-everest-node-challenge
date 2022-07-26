const CustomerRepository = require("../repositories/CustomerRepositories").default;
const customerRepository = new CustomerRepository();

class CustomerService {
	async create(customer) {
		try {
			return await customerRepository.create(customer);
		} catch (err) {
			throw new Error(err);
		}
	}
}

exports.default = CustomerService;
