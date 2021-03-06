package com.example.backend.services;

import java.util.List;

import com.example.backend.dto.CategoryDto;
import com.example.backend.repositories.CategoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {

   @Autowired
   CategoryRepository categoryRepository;

   public void addCategory(CategoryDto categoryName) {
      categoryRepository.addCategory(categoryName);
   }

   public List<CategoryDto> getAllCategories() {
      return categoryRepository.getAllCategories();
   }

   public CategoryDto getCategory(CategoryDto category_name) {
      return categoryRepository.getCategory(category_name);
   }

   public void deleteCategory(CategoryDto category_name) {
      categoryRepository.deleteCategory(category_name);
   }
}
