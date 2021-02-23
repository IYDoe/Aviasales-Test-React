import style from './App.module.css'
import Logo from './components/Logo/Logo'
import Cards from './components/Cards/Cards'
import Button from './components/Button/Button'
import FilterContainer from './components/Filter/FilterContainer'
import TabsContainer from './components/Tabs/TabsContainer'


export default function App() {
    return (

        <div className={style.container}>
            <header className={style.header}>
                <Logo />
            </header>
            <main className={style.appContent}>
                <div className={style.appContentLeft}>
                    <FilterContainer />
                </div>
                <div className={style.appContentRight}>
                    <TabsContainer />
                    <Cards />
                    <Button />
                </div>
            </main>
        </div>

    )
}

