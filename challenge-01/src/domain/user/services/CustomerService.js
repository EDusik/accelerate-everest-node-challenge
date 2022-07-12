const CustomerRepository = require("../repositories/CustomerRepositories").default;

class CustomerService {
	async create(customer) {
		const customerRepository = new CustomerRepository();
		customer;

		try {
			return await customerRepository.create({
				...customer,
			});
		} catch (err) {
			throw new Error(err);
		}
	}
}

exports.default = CustomerService;
