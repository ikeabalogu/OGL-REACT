package com.ogl.devtest.product;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/product")
public class ProductController {

  private final ProductRepository productRepository;

  public ProductController(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }

  @GetMapping(value = "", produces = MediaType.APPLICATION_JSON_VALUE)
  public Iterable<Product> findAll() {
    return productRepository.findAll();
  }

  @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<Product> findById(@PathVariable("id") long id) {
    final Optional<Product> product = productRepository.findById(id);

    return product.isPresent() ? ResponseEntity.of(product) : ResponseEntity.notFound().build();
  }

  @GetMapping(value = "/sku/{sku}", produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<Product> findById(@PathVariable("sku") String sku) {
    final Optional<Product> product = productRepository.findBySku(sku);

    return product.isPresent() ? ResponseEntity.of(product) : ResponseEntity.notFound().build();
  }

  @PostMapping(value = "", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<Product> save(@RequestBody Product product) {
    return ResponseEntity.ok(productRepository.save(product));
  }
  
  @PutMapping(value="/{id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<Product> update(@PathVariable Long id, @RequestBody Product product){
		Optional<Product> existingProduct = productRepository.findById(id);
    Product updatedProduct = existingProduct.get();
    updatedProduct.setPrice(product.getPrice());
    updatedProduct.setSku(product.getDescription());
    updatedProduct.setDescription(product.getDescription());
		//BeanUtils.copyProperties(product,existingProduct.get(),"id");
		return ResponseEntity.ok(productRepository.save(updatedProduct));
	}
}
