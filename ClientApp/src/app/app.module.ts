import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAppModule } from './ngmaterial.module';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { TagsSortComponent } from './main/tags-sort/tags-sort.component';
import { DayRecipeComponent } from './main/day-recipe/day-recipe.component';
import { SearchForRecipe } from './main/search-for-recipes/search-for-recipe.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { RecipeCardComponent } from './recipe-page/recipe-card/recipe-card.component';
import { IngredientsComponent } from './recipe-page/ingredients/ingredients.component';
import { RecipeStepsComponent } from './recipe-page/recipe-steps/recipe-steps.component';
import { RecipesTagsComponent } from './recipes/recipes-tags/recipes-tags.component';
import { RecipesSearchComponent } from './recipes/recipes-search/recipes-search.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { FooterComponent } from './footer/footer.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FooterComponent,
    HomeComponent,
    MainComponent,
    RecipesComponent,
    CounterComponent,
    FetchDataComponent,
    TagsSortComponent,
    DayRecipeComponent,
    SearchForRecipe,
    RecipesTagsComponent,
    RecipesSearchComponent,
    RecipesListComponent,
    RecipePageComponent,
    RecipeCardComponent,
    IngredientsComponent,
    RecipeStepsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MaterialAppModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
