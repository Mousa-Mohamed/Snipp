import { List } from './Task1';
import RecipeList1 from "./Task2";
import RecipeList2 from './Task3';
import Poem from "./Task4";
import App1 from "./Task5";
import App2 from "./Task6";
import App3 from "./Task7";


export default function All() {
    return (
        <div>
            <div>
                <List/>
            </div>
            <div>
                <RecipeList1/>
            </div>
            <div>
                <RecipeList2/>
            </div>
            <div>
                <Poem/>
            </div>
            <div>
                <App1/>
            </div>
            <div>
                <App2/>
            </div>
            <div>
                <App3/>
            </div>
        </div>
    )
}
