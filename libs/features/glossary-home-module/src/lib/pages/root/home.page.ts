import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '@mobile-academy/data-access/services';
import { Category } from '@mobile-academy/data-access/models';
@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    items: Category[] = [];

    constructor(private route: Router, private categoryService: CategoryService) {
        // * Reset the selected category
        this.categoryService.selectedCategory = null;
        // * Get the categories
        this.items = this.categoryService.categories;
    }

    viewItem(item) {
        this.route.navigateByUrl('/category', { state: { category: item.title } });
    }
}
