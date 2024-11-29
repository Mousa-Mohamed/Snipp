import { recipes } from './data';

export default function RecipeList2() {
    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map(recipe =>
                <div key={recipe.id}>
                    <h2>{recipe.name}</h2>
                    <ul>
                        {recipe.ingredients.map(ingredient =>
                            <li key={recipe.id}>
                                {ingredient}
                            </li>
                        )}
                    </ul>
                </div>
            )}
            <hr/>
        </div>
    );
}