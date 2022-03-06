import React, {useState} from 'react';
import './App.css';
import Header from './site/Header';
import Body from './site/Body';
import Footer from './site/Footer';
import NewComponent from './NewComponent';
import NewComponent2 from './NewComponent2';
import {Button} from './components/Button';
import NewComponentFilter from './NewComponentFilter';
/*import NewComponent3_ from './NewComponent3_';*/

export type FilterType = 'all' | 'dollar' | 'ruble';

function App() {

    let [students, setStudents] = useState([
        {id: 1, name: 'James', age: 8},
        {id: 2, name: 'Robert', age: 18},
        {id: 3, name: 'John', age: 28},
        {id: 4, name: 'Michael', age: 38},
        {id: 5, name: 'William', age: 48},
        {id: 6, name: 'David', age: 58},
        {id: 7, name: 'Richard', age: 68},
        {id: 8, name: 'Joseph', age: 78},
        {id: 9, name: 'Thomas', age: 88},
        {id: 10, name: 'Charles', age: 98},
        {id: 11, name: 'Christopher', age: 108},
    ]);

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ];

    /*    const myFirstSubscriber = (event: React.MouseEvent<HTMLButtonElement>) => {
            console.log('Hello! I am Vasya!')
        }

        const mySecondSubscriber = (event: React.MouseEvent<HTMLButtonElement>) => {
            console.log('Hello! I am Ivan!')
        }*/

    /*    const onClickHandler = (name: string) => {
            console.log(name)
        }*/

    /*
        const foo1= ()=> {
            console.log(100200)
        }

        const foo2= (num: number)=> {
            console.log(num)
        }
    */

    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }

    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }

    const StupidButton = () => {
        console.log('im stupid Button')
    }

    /*    let a = 1*/

    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }

    const onClickReset = () => {
        setA(0)
        a = 0;
        console.log(a)
    }



    const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: 'a1234567890'},
        {banknote: 'dollar', nominal: 50, number: 'z1234567890'},
        {banknote: 'ruble', nominal: 100, number: 'w1234567890'},
        {banknote: 'dollar', nominal: 100, number: 'e1234567890'},
        {banknote: 'dollar', nominal: 50, number: 'c1234567890'},
        {banknote: 'ruble', nominal: 100, number: 'r1234567890'},
        {banknote: 'dollar', nominal: 50, number: 'x1234567890'},
        {banknote: 'ruble', nominal: 50, number: 'v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('all')
    let currentMoney = money;
    // если nameButton === 'dollar'
    // currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'dollar');
    // если nameButton === 'ruble'
    // currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'ruble');

    if (filter === 'dollar') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'dollar');
    } else if (filter === 'ruble') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'ruble');
    }
    // console.log(currentMoney)

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }
        return (
            <div>
                <Header title={'NEW HEADER'}/>
                <Body titleForBody={'NEW BODY'}/>
                <NewComponent students={students}/>
                <NewComponent2 topCars={topCars}/>
                <div className="App">
                    {/*                <button
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => onClickHandler('Vasya')}>MyYoutubeChanel-1
                </button>
                <button
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => onClickHandler("Ivan")}>MyYoutubeChanel-2
                </button>*/}
                    {/*                <button
                    onClick={()=>onClickHandler("some info")}>MyYoutubeChanel-3
                </button>*/}
                    {/*              <button onClick={foo1}>1</button>
                <button onClick={()=>foo2(100200)}>2</button>*/}
                    {/*    <button>MyYoutubeChanel-1</button>
                <button>MyYoutubeChanel-2</button>*/}
                    <Button name={'MyYoutubeChanel-1'} callBack={() => Button1Foo('im Vasya', 21, 'live in Minsk')}/>
                    <Button name={'MyYoutubeChanel-2'} callBack={() => Button2Foo('im Ivan')}/>
                    <Button name={'StupidButton'} callBack={StupidButton}/>
                    <h1>{a}</h1>
                    <button onClick={onClickHandler}>number</button>
                    <button onClick={onClickReset}>0</button>
                </div>
 {/*               <ul>
                    {currentMoney.map((objFromMoneyArr, index) => {
                        return (
                            <li key={index}>
                                <span>{objFromMoneyArr.banknote}</span>
                                <span>{objFromMoneyArr.nominal}</span>
                                <span>{objFromMoneyArr.number}</span>
                            </li>
                        )
                    })}
                </ul>
                <div style={{marginLeft: '35px'}}>
                    <button onClick={() => onClickFilterHandler('all')}>all</button>
                    <button onClick={() => onClickFilterHandler('ruble')}>rubles</button>
                    <button onClick={() => onClickFilterHandler('dollar')}>dollars</button>
                </div>*/}
                <NewComponentFilter  currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
                {/*          <NewComponent3_ currentMoney={currentMoney} setFilter={setFilter}/>*/}
                <Footer titleForFooter={'NEW FOOTER'}/>
            </div>
        );
    }


    export default App;