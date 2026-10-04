import { startups } from "../data/data.js";

export const getAllData = (req, res) => {

    let filteredData = startups

    const { industry, country, continent, is_seeking_funding, has_mvp } = req.query

    if(industry) {
        filteredData = startups.filter((startup) => 
        startup.industry.toLowerCase() === industry.toLowerCase()
        )
    }

    if(country) {
        filteredData = startups.filter((startup) => 
        startup.country.toLowerCase() === country.toLowerCase()
        )
    }

    if(continent) {
        filteredData = startups.filter((startup) => 
        startup.continent.toLowerCase() === continent.toLowerCase()
        )
    }

    if(is_seeking_funding) {
        filteredData = startups.filter((startup) => 
        startup.is_seeking_funding === JSON.parse(is_seeking_funding.toLowerCase())
        )
    }

    if(has_mvp) {
        filteredData = startups.filter((startup) => 
        startup.has_mvp === JSON.parse(has_mvp.toLowerCase())
        )
    }

    res.json(filteredData)

}