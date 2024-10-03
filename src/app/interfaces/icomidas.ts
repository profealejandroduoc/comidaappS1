export interface Categorias {
  categories: Categoria[];
}

export interface Categoria{
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface Comidas {
  meals: Comida[];
}

export interface Comida {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}