## Form Submission App

This is a simple single-page application built using React.js and Node.js, allowing users to submit their names, select multiple sectors they are involved in, and agree to the terms. The application also displays a table with all the submitted form data.

### Setup Instructions

To run the app locally, follow these steps:

#### Prerequisites

1. Node.js and npm should be installed on your machine.

2. MongoDB should be installed and running on your system.

#### Frontend Setup

1. Open another terminal and navigate to the "frontend" directory.

2. Install the required frontend dependencies by running the following command:

   ```
   npm install
   ```

3. Start the frontend development server by running the following command:

   ```
   npm start
   ```

   The frontend application will be accessible at http://localhost:3000.

### Features

1. **Form Submission:** Users can enter their names, select multiple sectors they are involved in, and agree to the terms. The form data will be saved in the database.

2. **Form Data Table:** All the submitted form data is displayed in a table, showing the name, selected sectors, and whether the user agreed to the terms.

3. **Form Data Update:** Users can update their submitted form data by clicking the "Update" button in the table. The form will be prefilled with the existing data, and they can make changes and save the updated response.

4. **Form Data Deletion:** Users can delete their submitted form data from the table by clicking the "Delete" button.

5. **Responsive Design:** The application is designed to be responsive, ensuring a seamless experience on various devices.
