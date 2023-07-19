import React from 'react';

const FormDataTable = ({ formDataList, setFormData, deleteSelected }) => {
  if (!formDataList.length) return '';

  return (
    <div className='container mt-5'>
      <h2>All Submissions</h2>
      <table className='table table-bordered text-center'>
        <thead className='table-primary'>
          <tr>
            <th>Name</th>
            <th>Sectors</th>
            <th>Agree to Terms</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {formDataList.map((formData) => (
            <tr key={formData._id}>
              <td>{formData.name}</td>
              <td>
                <ul>
                  {formData.selectedSectors.map((sector) => (
                    <li key={sector._id}>{sector.label}</li>
                  ))}
                </ul>
              </td>
              <td>{formData.agreeToTerms ? 'Yes' : 'No'}</td>
              <td>
                <button
                  onClick={() => {
                    setFormData(formData);
                  }}
                  className='btn btn-sm btn-warning mx-1'
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    deleteSelected(formData);
                  }}
                  className='btn btn-sm btn-danger'
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormDataTable;
