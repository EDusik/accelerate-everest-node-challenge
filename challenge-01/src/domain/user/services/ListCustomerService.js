const CustomerRepository = require("../repositories/CustomerRepositories").default;
const customerRepository = new CustomerRepository();

class ListCustomerService {
	async getCustomers() {
		try {
			return await customerRepository.list();
		} catch (err) {
			throw new Error(err);
		}
	}
}

exports.default = ListCustomerService;
