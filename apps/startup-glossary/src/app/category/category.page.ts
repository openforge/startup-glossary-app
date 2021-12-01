import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Component({
    selector: 'app-category',
    templateUrl: 'category.page.html',
    styleUrls: ['category.page.scss'],
})
export class CategoryPage {
    categorySelected: Category;
    constructor(private categoryService: CategoryService, private route: Router) {
        // Set the selected category
        this.categorySelected = this.categoryService.selectedCategory;
    }

    learnNewTerm() {
        // Navigate to the new term page
        this.route.navigateByUrl('/category/new-term');
    }

    alreadyLearned() {
        // Navigate to the already learned terms page
        this.route.navigateByUrl('/category/past-term');
    }
}