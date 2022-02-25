package com.ogl.devtest.customer;

import java.util.Optional;

import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/customer")
public class CustomerController {

	private CustomerRepository customerRepository;

	public CustomerController(CustomerRepository customerRepository) {
		this.customerRepository = customerRepository;
	}

	@GetMapping(value = "", produces = MediaType.APPLICATION_JSON_VALUE)
	public Iterable<Customer> findAll() {
		return customerRepository.findAll();
	}
	
	@GetMapping(value = "/sortedbyname", produces = MediaType.APPLICATION_JSON_VALUE)
	public Iterable<Customer> sortAllCustomersByName() {
		return customerRepository.findAll(Sort.by("name"));
	}
	
	@GetMapping(value = "/sortedbypostcode", produces = MediaType.APPLICATION_JSON_VALUE)
	public Iterable<Customer> sortAllCustomersByPostcode() {
		return customerRepository.findAll(Sort.by("postcode"));
	}
	
	@GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	  public ResponseEntity<Customer> findById(@PathVariable("id") long id) {
	    final Optional<Customer> customer = customerRepository.findById(id);

	    return customer.isPresent() ? ResponseEntity.of(customer) : ResponseEntity.notFound().build();
	  }
	
	@PostMapping(value = "", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	  public ResponseEntity<Customer> save(@RequestBody Customer customer) {
		Optional<Customer> existingCustomer = 
				customerRepository.findCustomerByNameAndPostcode(customer.getName(), customer.getPostcode());
	    return existingCustomer.isEmpty() ? 
	    		ResponseEntity.ok(customerRepository.save(customer)) :
	    						ResponseEntity.badRequest().build();
	  }
	
	@PutMapping(value="/{id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	  public ResponseEntity<Customer> update(@PathVariable Long id, @RequestBody Customer customer){
		Optional<Customer> existingCustomer = customerRepository.findById(id);
		Customer updatedCustomer = existingCustomer.get();
		updatedCustomer.setCity(customer.getCity());
		updatedCustomer.setCounty(customer.getCounty());
		updatedCustomer.setName(customer.getName());
		updatedCustomer.setPostcode(customer.getPostcode());
		updatedCustomer.setStreet(customer.getStreet());
		//BeanUtils.copyProperties(existingCustomer.get(), customer, "id");
		return ResponseEntity.ok(customerRepository.save(updatedCustomer));
	}
}
