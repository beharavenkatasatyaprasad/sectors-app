import React from 'react';
import Select from 'react-select';

const SectorSelect = ({ sectors, selectedSectors, setSelectedSectors }) => {
  const handleSelectChange = (value) => {
    setSelectedSectors(value);
  };

  return (
    <Select
      onChange={handleSelectChange}
      isMulti
      closeMenuOnSelect={false}
      options={sectors.map((sector) => ({ value: sector._id, label: sector.label }))}
      value={selectedSectors}
    />
  );
};

export default SectorSelect;
