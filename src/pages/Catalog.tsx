import React from 'react';
import AppCard from '../components/AppCard';
import CheckBoxSearchFunctions from '../components/CheckBoxSearchFunctions';
import CheckBoxSearchUsecases from '../components/CheckBoxSearchUsecases';
import WordSearch from '../components/WordSearch';

function Catalog() {
    return (
        <div className="Catalog">
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "green", height: "200px" }}>
                <div>
                    Welcome to PTD AppZone, 
                </div>
                <div>
                    the Digital Transformation App Store
                </div>
                
                
            </div>
            <div style={{ display: "flex", flexDirection: "row"}}>
                <div>
                    <WordSearch></WordSearch>
                </div>
                <div>
                    <CheckBoxSearchUsecases></CheckBoxSearchUsecases>
                </div>
                <div>
                    <CheckBoxSearchFunctions></CheckBoxSearchFunctions>
                </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", margin: "54px", gap: "54px" }}>
                <div>
                    <AppCard></AppCard>
                </div>
                <div>
                    <AppCard></AppCard>
                </div>
                <div>
                    <AppCard></AppCard>
                </div>
                <div>
                    <AppCard></AppCard>
                </div>
                <div>
                    <AppCard></AppCard>
                </div>
                <div>
                    <AppCard></AppCard>
                </div>
            </div>
        </div>
    );
}

export default Catalog;
