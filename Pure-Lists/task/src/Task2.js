import { recipes } from './data';

export default function RecipeList1() {
    const listrecipes = recipes.map(recipe =>
        <li key={recipe.id}>
            <h2>{recipe.name}</h2>
        </li>
    );
    return (
        <div>
            <h1>Recipes</h1>
            <ul>{listrecipes}</ul>
            <hr/>
        </div>
    );
}
