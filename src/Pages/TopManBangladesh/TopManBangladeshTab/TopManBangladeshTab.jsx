import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const TopManBangladeshTab = ({ items }) => {
    console.log(items);
    const Component = (
        <Tabs forceRenderTabPanel defaultIndex={1}>

            <TabList className="lg:mx-20 grid  lg:grid-cols-8 grid-flow-col border rounded-t-md  rounded-b-0 mx-1   text-center ">

                <Tab><span className='lg:px-10 px-3'>All</span></Tab>

                <Tab><span>Eid Collection</span></Tab>
                <Tab></Tab>

            </TabList>


            {/* all tab panel */}
            <TabPanel>
                <Tabs forceRenderTabPanel>
                    <TabList className="gird border rounded-b-md border-t-0 mx-1 lg:mx-20  text-center ">

                        <Tab><span className='lg:px-10'>Panjabi</span></Tab>

                        <Tab><span className='lg:px-10'>Shirt</span></Tab>
                        <Tab></Tab>
                    </TabList>
                    <TabPanel>
                        <p>Husband of Marge; father of Bart, Lisa, and Maggie.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Homer_Simpson_2006.png/212px-Homer_Simpson_2006.png" alt="Homer Simpson" />
                    </TabPanel>
                    <TabPanel>
                        <p>Wife of Homer; mother of Bart, Lisa, and Maggie.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Marge_Simpson.png/220px-Marge_Simpson.png" alt="Marge Simpson" />
                    </TabPanel>
                    <TabPanel>
                        <p>Oldest child and only son of Homer and Marge; brother of Lisa and Maggie.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png" alt="Bart Simpson" />
                    </TabPanel>
                    <TabPanel>
                        <p>Middle child and eldest daughter of Homer and Marge; sister of Bart and Maggie.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/200px-Lisa_Simpson.png" alt="Lisa Simpson" />
                    </TabPanel>
                    <TabPanel>
                        <p>Youngest child and daughter of Homer and Marge; sister of Bart and Lisa.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/223px-Maggie_Simpson.png" alt="Maggie Simpson" />
                    </TabPanel>
                </Tabs>
            </TabPanel>
            {/* Eid Collection */}
            <TabPanel>
                <Tabs forceRenderTabPanel>
                    <TabList className="gird border rounded-b-md border-t-0 mx-1 lg:mx-20  text-center ">

                        <Tab><span className='lg:px-10'>Panjabi</span></Tab>

                        <Tab><span className='lg:px-10'>Shirt</span></Tab>
                        <Tab></Tab>
                    </TabList>
                    <TabPanel>
                        <p>Protagonist, from the 20th Century. Delivery boy. Many times great-uncle to Professor Hubert Farnsworth. Suitor of Leela.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Philip_Fry.png/175px-Philip_Fry.png" alt="Philip J. Fry" />
                    </TabPanel>
                    <TabPanel>
                        <p>Mutant cyclops. Captain of the Planet Express Ship. Love interest of Fry.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Turanga_Leela.png/150px-Turanga_Leela.png" alt="Turanga Leela" />
                    </TabPanel>
                    <TabPanel>
                        <p>A kleptomaniacal, lazy, cigar-smoking, heavy-drinking robot who is Fry's best friend. Built in Tijuana, Mexico, he is the Planet Express Ship's cook.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Bender_Rodriguez.png/220px-Bender_Rodriguez.png" alt="Bender Bending Rodriguez" />
                    </TabPanel>
                    <TabPanel>
                        <p>Chinese-Martian intern at Planet Express. Fonfon Ru of Kif Kroker.</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Many times great-nephew of Fry. CEO and owner of Planet Express delivery company. Tenured professor of Mars University.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/FuturamaProfessorFarnsworth.png/175px-FuturamaProfessorFarnsworth.png" alt="Professor Hubert J. Farnsworth" />
                    </TabPanel>
                    <TabPanel>
                        <p>Alien from Decapod 10. Planet Express' staff doctor and steward. Has a medical degree and Ph.D in art history.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Dr_John_Zoidberg.png/200px-Dr_John_Zoidberg.png" alt="Doctor John Zoidberg" />
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