### Use Case 01: Login
| Test Case ID | Description | Preconditions | Test Steps | Expected Result |
|--------------|-------------|----------------|------------|-----------------|
| TC01_01 | Verify user can navigate to the login page | None | 1. Open the application<br>2. Navigate to login page | Login page is displayed |
| TC01_02 | Verify user can enter credentials | User is on the login page | 1. Enter username<br>2. Enter password | Credentials are entered |
| TC01_03 | Verify user can submit the login form | User has entered credentials | 1. Click on the login button | Login form is submitted |
| TC01_04 | Verify system grants access with correct credentials | User has submitted the login form | 1. Submit valid credentials | User is logged in and redirected to the dashboard |
| TC01_05 | Verify system prompts for incorrect credentials | User has submitted the login form | 1. Submit invalid credentials | Error message is displayed |

### Use Case 02: Logout
| Test Case ID | Description | Preconditions | Test Steps | Expected Result |
|--------------|-------------|----------------|------------|-----------------|
| TC02_01 | Verify user can navigate to the logout button | User is logged in | 1. Click on the logout button | User is logged out and redirected to the login page |

### Use Case 03: Signup
| Test Case ID | Description | Preconditions | Test Steps | Expected Result |
|--------------|-------------|----------------|------------|-----------------|
| TC03_01 | Verify user can navigate to the signup page | None | 1. Open the application<br>2. Navigate to signup page | Signup page is displayed |
| TC03_02 | Verify user can select role | User is on the signup page | 1. Select role (Applicant/Company) | Role is selected |
| TC03_03 | Verify user can enter required details | User is on the signup page | 1. Enter required details | Details are entered |
| TC03_04 | Verify user can submit the signup form | User has entered required details | 1. Click on the signup button | Signup form is submitted |
| TC03_05 | Verify system creates new account | User has submitted the signup form | 1. Submit valid details | New account is created and user is redirected to login page |

### Use Case 04: Manage Accounts
| Test Case ID | Description | Preconditions | Test Steps | Expected Result |
|--------------|-------------|----------------|------------|-----------------|
| TC04_01 | Verify admin can navigate to Manage Accounts section | Admin is logged in | 1. Navigate to "Manage Accounts" section | "Manage Accounts" section is displayed |
| TC04_02 | Verify admin can select a user account | Admin is in "Manage Accounts" section | 1. Select a user account | User account details are displayed |
| TC04_03 | Verify admin can update user details | Admin has selected a user account | 1. Update user details<br>2. Save changes | User details are updated |
| TC04_04 | Verify admin can grant/revoke access | Admin has selected a user account | 1. Grant/revoke access<br>2. Save changes | Access is granted/revoked |

### Use Case 05: Access Statistics
| Test Case ID | Description | Preconditions | Test Steps | Expected Result |
|--------------|-------------|----------------|------------|-----------------|
| TC05_01 | Verify admin can navigate to Statistics section | Admin is logged in | 1. Navigate to "Statistics" section | "Statistics" section is displayed |
| TC05_02 | Verify admin can view existing statistics | Admin is in "Statistics" section | 1. View existing statistics | Existing statistics are displayed |
| TC05_03 | Verify admin can generate reports | Admin is in "Statistics" section | 1. Select parameters for report<br>2. Generate report | Report is generated and displayed |

### Use Case 06: Access Job Postings
| Test Case ID | Description | Preconditions | Test Steps | Expected Result |
|--------------|-------------|----------------|------------|-----------------|
| TC06_01 | Verify user can navigate to job postings section | User is logged in | 1. Navigate to job postings section | Job postings section is displayed |
| TC06_02 | Verify user can view job postings | User is in job postings section | 1. View list of job postings | Job postings are displayed |

### Use Case 07: View and Search Jobs
| Test Case ID | Description | Preconditions | Test Steps | Expected Result |
|--------------|-------------|----------------|------------|-----------------|
| TC07_01 | Verify user can navigate to job search page | User is logged in | 1. Navigate to job search page | Job search page is displayed |
| TC07_02 | Verify user can enter search criteria | User is on job search page | 1. Enter search criteria | Search criteria is entered |
| TC07_03 | Verify user can view search results | User has entered search criteria | 1. View search results | Search results are displayed |

### Use Case 08: Filter Jobs
| Test Case ID | Description | Preconditions | Test Steps | Expected Result |
|--------------|-------------|----------------|------------|-----------------|
| TC08_01 | Verify user can apply filters to job search | User is logged in | 1. Navigate to job search page<br>2. Apply filters | Filters are applied and results are displayed |

### Use Case 09: Apply for Jobs
| Test Case ID | Description | Preconditions | Test Steps | Expected Result |
|--------------|-------------|----------------|------------|-----------------|
| TC09_01 | Verify user can navigate to a job posting | User is logged in | 1. Navigate to a job posting | Job posting is displayed |
| TC09_02 | Verify user can apply for a job | User is on a job posting | 1. Click on apply button<br>2. Submit application details | Application is submitted and confirmed |

### Use Case 10: Upload CVs
| Test Case ID | Description | Preconditions | Test Steps | Expected Result |
|--------------|-------------|----------------|------------|-----------------|
| TC10_01 | Verify user can upload CV | User is applying for a job | 1. Upload CV while applying | CV is uploaded and stored |

### Use Case 11: Publish Job Postings
| Test Case ID | Description | Preconditions | Test Steps | Expected Result |
|--------------|-------------|----------------|------------|-----------------|
| TC11_01 | Verify company can create and publish job posting | Company is logged in | 1. Navigate to job postings section<br>2. Create a job posting<br>3. Publish job posting | Job posting is published and visible |

### Use Case 12: View and Filter Applicants
| Test Case ID | Description | Preconditions | Test Steps | Expected Result |
|--------------|-------------|----------------|------------|-----------------|
| TC12_01 | Verify company can view and filter applicants | Company is logged in | 1. Navigate to applicants section<br>2. Apply filters<br>3. View filtered applicants | Filtered applicants are displayed |

### Use Case 13: Approve Job Postings
| Test Case ID | Description | Preconditions | Test Steps | Expected Result |
|--------------|-------------|----------------|------------|-----------------|
| TC13_01 | Verify manager can approve job postings | Manager is logged in | 1. Navigate to job approval section<br>2. Review job postings<br>3. Approve/reject job postings | Job postings are approved/rejected |

### Use Case 14: Upload Media Related to Job Postings
| Test Case ID | Description | Preconditions | Test Steps | Expected Result |
|--------------|-------------|----------------|------------|-----------------|
| TC14_01 | Verify manager/company can upload media to job postings | Manager/Company is logged in | 1. Navigate to a job posting<br>2. Upload media<br>3. Save media | Media is uploaded and linked to job posting |

### Use Case 15: Access Uploaded CVs

| Test Case ID | Description | Preconditions | Test Steps | Expected Result |
|--------------|-------------|----------------|------------|-----------------|
| TC15_01 | Verify manager/company can navigate to the applicants section | Manager/Company is logged in | 1. Navigate to applicants section | Applicants section is displayed |
| TC15_02 | Verify manager/company can view uploaded CVs of applicants | Manager/Company is in the applicants section | 1. View list of applicants<br>2. Click on an applicant to view uploaded CV | Uploaded CV of the selected applicant is displayed |