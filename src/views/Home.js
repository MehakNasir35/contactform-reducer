import { Main } from '../components/Main';
import { NavBar } from '../layouts/NavBar';

export function Home() {
    return (
        <>
            <NavBar color='primary' dark={true} expand={true} />
            <Main />
        </>
    )
}