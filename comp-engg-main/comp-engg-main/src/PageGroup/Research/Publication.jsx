import React, { useState, useEffect } from 'react'
import HeroSection from '../About/Component/HeroSection'
import image from '../About/assets/aboutjmi.jpeg'
import { Container } from 'react-grid-system'
import data from '../../../data/publication_data'

const Publication = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredResults = data.filter((publication) =>
      publication.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  const [selectedCategory, setSelectedCategory] = useState({year: 'all', code: 'all'});

  useEffect(() => {
    filterData(selectedCategory);
  }, [selectedCategory]);

  const filterData = (category) => {
    if (category.code === "all" && category.year=='all') {
      setFilteredData(data);
      return;
    }
    const filteredResults = data.filter((publication) =>
      publication.code == category.code || publication.year == category.year
    );

    setFilteredData(filteredResults);
  };

  const [button, setButton] = useState(0);
  const [num, setNum] = useState(6);

  const allYears = [...new Set(data.map(item => item.year))]


  return (
    <>
      <HeroSection
        heading={"Publications"}
        image={image}
      />
      <div className="container-fluid">
        <div className="p-4 flex w-full flex-col items-center justify-center gap-y-8 font-[450] bg-green-deep " style={{ borderRadius: "20px", width: "90vw", margin: "auto" }}>
          <div className="flex flex-col items-center justify-center gap-y-8 font-[450]">
            <div className="flex flex-wrap justify-center gap-x-10 ">
              <h3 className="text-2xl font-medium">
                <span className="text-white">{selectedCategory.code.toUpperCase()} PAPERS</span>
              </h3>
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  placeholder="Search publications"
                  value={searchTerm}
                  onChange={handleSearch}
                  className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500n "
                />
              </div>
              
              <select
                className="text-left bg-deep text-grey border-deep-green w-32 border-3 p-4 px-4 py-2"
                value={selectedCategory.code}
                onChange={(e) => setSelectedCategory({...selectedCategory, code: e.target.value})}
              >
                <option value="all">Category</option>
                <option value="science">Science</option>
                <option value="journal">Journals</option>
                <option value="conference">Conference</option>
                {/* Add more options as needed */}
              </select>
              <select
                className="text-left bg-deep text-grey border-deep-green w-32 border-3 p-4 px-4 py-2"
                value={selectedCategory.year}
                onChange={(e) => setSelectedCategory({...selectedCategory, year: e.target.value})}
              > 
                <option value="all">Year</option>
                {allYears.map((year) => ( 
                  <option value={year}>{year}</option>
                ))}

                {/* <option value="all">Year</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option> */}
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
        </div>

        <Container className="flex flex-wrap items-center  place-items-center grid sm:grid-cols-1 md:grid-cols-2 ">
          {filteredData.length > 0 && filteredData.slice(0, num).map((publication => (
            <div className="mt-10 w-11/12 h-4/5
           rounded-3xl border-2 border-[color:var(--green-deep)] bg-white p-4 shadow-md" >
              <div className="flex items-center">
                <div className="text-lg">{publication.year}</div>
                <div className="ml-auto text-sm">Current (WOS) Impact factor: <b>{publication.impactFactor}</b></div>
              </div>
              <div className="flex items-center md:items-start">

                <div>
                  <h3 className=" text-[18px] font-medium">
                    {publication.title}
                  </h3>
                  <p className=" text-md font-medium text-[color:var(--green-deep)]">
                    {publication.desc}
                  </p>
                  <p className="mb-1 text-sm font-medium text-[color:var(--green-deep)]">{publication.journal_paper_details}</p>
                  <br />

                </div>
              </div>
            </div>
          )))}
        </Container>
      </div>
      
      <div className="flex w-full flex-col items-center justify-center my-20 gap-y-20 font-[450]">
        <button className="w-64 bg-green-deep hover:bg-green-700 text-white font-bold py-2 px-4 border border-silver p-4" onClick={() => setNum(num + 6)}>
          Load More
        </button>
      </div>
    </>
  )
}

export default Publication