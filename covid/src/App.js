import React from 'react';
//import Cards from './components/Cards/Cards';
//import Cards from './components/Charts/Chart';
//import Cards from './components/CountryPicker/CountryPicker';

import {Cards, Chart} from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './image/image.png';



class App extends React.Component{
   
    state = {
        data: {},

    }

   async componentDidMount (){
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
        
    }
    render() {
        const{data} = this.state;

        return(
        <div className={styles.container}>
            <img className={styles.image}  src={coronaImage} alt="COVID-19" />

            <Cards data={data} />
        
            <Chart />
            
        </div>
        );
    }
}

export default App;