import React, { useState, useEffect } from 'react';
import SectorSelect from './components/SectorSelect';
import { deleteFormDataById, getAllFormData, getAllSectors, saveFormData, updateFormData } from './services/api';
import FormDataTable from './components/FormDataTable';

const Form = () => {
  const [name, setName] = useState('');
  const [selectedObject, setselectedObject] = useState(null);
  const [selectedSectors, setSelectedSectors] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [formDataList, setFormDataList] = useState([]);

  useEffect(() => {
    fetchSectors();
    fetchFormData();
  }, []);

  const fetchFormData = async () => {
    try {
      const response = await getAllFormData();
      setFormDataList(response);
    } catch (error) {
      console.error('Error fetching form data:', error);
    }
  };

  const fetchSectors = async () => {
    try {
      const response = await getAllSectors();
      setSectors(response);
    } catch (error) {
      console.error('Error fetching sectors:', error);
    }
  };

  const resetForm = () => {
    setName('');
    setSelectedSectors([]);
    setAgreeToTerms(false);
    setselectedObject(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || selectedSectors.length === 0 || !agreeToTerms) {
      alert('Please fill in all fields and agree to the terms.');
      return;
    }

    const formData = {
      name,
      selectedSectors,
      agreeToTerms,
      _id: selectedObject,
    };

    if (selectedObject) {
      await updateFormData(formData);
      alert('Response have been updated successfully');
      await fetchFormData();
      return;
    }

    try {
      await saveFormData(formData);
      resetForm();
      alert('Response have been saved successfully');
      await fetchFormData();
    } catch (error) {
      alert('Something went wrong!');
    }
  };

  return (
    <div className='container mt-5'>
      <div className='card border-primary'>
        <div className={'card-header text-white ' + (selectedObject ? 'bg-secondary' : 'bg-primary')}>
          <h3 className='mb-4 text-center'>
            {!selectedObject
              ? 'Please enter your name and pick the Sectors you are currently involved in.'
              : 'Update submitted response'}
          </h3>
        </div>
        <div className='card-body'>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>
                Name:
              </label>
              <input
                type='text'
                id='name'
                className='form-control'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Sectors:</label>
              <SectorSelect
                sectors={sectors}
                selectedSectors={selectedSectors}
                setSelectedSectors={setSelectedSectors}
              />
            </div>
            <div className='form-check mb-3'>
              <input
                type='checkbox'
                className='form-check-input'
                id='agreeToTerms'
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
              />
              <label className='form-check-label' htmlFor='agreeToTerms'>
                Agree to terms
              </label>
            </div>
            <div className='d-grid'>
              <button type='submit' className='btn btn-primary'>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <FormDataTable
        formDataList={formDataList}
        setFormData={(data) => {
          resetForm();
          window.scrollTo(0, 0);
          setName(data.name);
          setAgreeToTerms(data.agreeToTerms);
          setselectedObject(data._id);
        }}
        deleteSelected={async (data) => {
          resetForm();
          await deleteFormDataById(data);
          await fetchFormData();
        }}
      />
    </div>
  );
};

export default Form;
