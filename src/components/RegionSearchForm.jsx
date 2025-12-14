function RegionsSearchForm({
  results,
  handleRecommend,
  Handlesearch,
  updateRegion,
  region,
  Searched,
}) {
  return (
    <div className="region-wrapper">
      <div className="region-search-form">
        <h1>Search for Region</h1>
        <div className="form-input">
          <input
            type="text"
            placeholder="Enter Region..."
            value={region}
            onChange={(e) => updateRegion(e.target.value)}
          />
        </div>
        <button onClick={Handlesearch}>Search</button>
      </div>

      <div className="region-results-container">
        {Searched &&
          (results.length > 0 ? (
            <ul className="region-results-list">
              {results.map((data) => {
                const details = [
                  { label: 'Type', value: data.type },
                  { label: 'Country', value: data.country },
                  { label: 'Longitude', value: data.lon },
                  { label: 'Latitude', value: data.lat },
                  { label: 'Description', value: data.description },
                  { label: 'Recommendations', value: data.recommendations },
                ];

                return (
                  <li key={data.id} className="region-results-item">
                    <h3>{data.name}</h3>
                    {details.map((d) => (
                      <p key={d.label}>
                        {d.label}: {d.value}
                      </p>
                    ))}
                    <button onClick={(e) => handleRecommend(e, data.id)}>
                      Recommend
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="no-results">No results found.</p>
          ))}
      </div>
    </div>
  );
}

export default RegionsSearchForm;
