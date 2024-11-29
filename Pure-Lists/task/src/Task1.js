import { people } from './data';
import { getImageUrl } from './utils';

export function List() {
    const chemists = people.filter(person =>
        person.profession === 'chemist');
    const listItems = chemists.map(person =>
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );
    const unchemists = people.filter(person =>
        person.profession !== 'chemist');
    const unlistItems = unchemists.map(person =>
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );
    return (
        <article>
            <h1>Scientists</h1>
            <ul>{listItems}</ul>
            <hr/>
            <ul>{unlistItems}</ul>
            <hr/>
        </article>
    );
}