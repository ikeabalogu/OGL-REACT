package com.ogl.devtest.customer;

import java.util.Optional;

import org.springframework.data.repository.PagingAndSortingRepository;



public interface CustomerRepository extends PagingAndSortingRepository<Customer, Long> {

	Optional<Customer>findCustomerByNameAndPostcode(String name, String postCode);

}
