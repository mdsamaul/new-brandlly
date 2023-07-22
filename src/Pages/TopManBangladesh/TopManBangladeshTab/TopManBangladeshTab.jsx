import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FullCardDesign from '../../../component/FullCardDesign/FullCardDesign.jsx';


const TopManBangladeshTab = ({ items }) => {
    // console.log("samaul",items);
    const Component = (
        <Tabs forceRenderTabPanel defaultIndex={0}>

            <TabList className="lg:mx-20 grid  lg:grid-cols-8 grid-flow-col border rounded-t-md  rounded-b-0 mx-1   text-center ">

                <Tab><span className='lg:px-10 px-3'>All</span></Tab>

                <Tab><span>Eid Collection</span></Tab>
                
            </TabList>


            {/* all tab panel */}
            <TabPanel>
                <Tabs forceRenderTabPanel>
                    <TabList className="gird border rounded-b-md border-t-0 mx-1 lg:mx-20  text-center ">

                        <Tab><span className='lg:px-10'>Panjabi</span></Tab>

                        <Tab><span className='lg:px-10'>Shirt</span></Tab>
                        
                    </TabList>
                    <TabPanel>
                        <div className='grid grid-cols-2 py-4 px-4 container md:grid-cols-3 lg:grid-cols-5 gap-3'>
                            {
                                items.map(item => <FullCardDesign key={item.id} item={item}></FullCardDesign>)
                                // <FullCardDesign items={items}></FullCardDesign>
                            }
                       
                        
                            
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <p>Wife of Homer; mother of Bart, Lisa, and Maggie.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Marge_Simpson.png/220px-Marge_Simpson.png" alt="Marge Simpson" />
                    </TabPanel>
                   
                    
                </Tabs>
            </TabPanel>
            {/* Eid Collection */}
            <TabPanel>
                <Tabs forceRenderTabPanel>
                    <TabList className="gird border rounded-b-md border-t-0 mx-1 lg:mx-20  text-center ">

                        <Tab><span className='lg:px-10'>Panjabi</span></Tab>

                        <Tab><span className='lg:px-10'>Shirt</span></Tab>
                      
                    </TabList>
                    <TabPanel>
                        <div>
                           slider Zoom section
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <p>Mutant cyclops. Captain of the Planet Express Ship. Love interest of Fry.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Turanga_Leela.png/150px-Turanga_Leela.png" alt="Turanga Leela" />
                    </TabPanel>
                    
                </Tabs>
            </TabPanel>
        </Tabs>
    );
    return (
        <div>
            {Component}
        </div>
    );
};

export default TopManBangladeshTab;