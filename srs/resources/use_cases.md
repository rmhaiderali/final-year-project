Here is the detailed usage scenario for each use case shown in the use case diagram in table format:

### 1. Manage Accounts
| Use Case Title     | Manage Accounts                                                  |
|--------------------|------------------------------------------------------------------|
| Use Case ID        | 01                                                               |
| Actors             | Admin                                                            |
| Description        | Admin can manage users, managers, and companies accounts (update details, grant access, revoke access).|
| Actions            | 1. Admin logs into the system.<br>2. Admin navigates to the "Manage Accounts" section.<br>3. Admin selects a user account.<br>4. Admin updates details, grants access, or revokes access.<br>5. Admin saves changes.|
| Alternative Paths  | None                                                             |
| Pre/Post Conditions | Pre: Admin must be logged in.<br>Post: Account details are updated, access is granted or revoked as per the admin's actions.|
| Exceptions         | If the account update fails, an error message is displayed.      |
| Author             | [Your Name]                                                      |

### 2. Statistics
| Use Case Title     | Statistics                                                       |
|--------------------|------------------------------------------------------------------|
| Use Case ID        | 02                                                               |
| Actors             | Admin                                                            |
| Description        | Admin can view and generate statistical reports.                |
| Actions            | 1. Admin logs into the system.<br>2. Admin navigates to the "Statistics" section.<br>3. Admin views existing statistics.<br>4. Admin selects parameters for generating a report.<br>5. Admin generates and views the report.|
| Alternative Paths  | None                                                             |
| Pre/Post Conditions | Pre: Admin must be logged in.<br>Post: Statistical reports are generated and viewed.|
| Exceptions         | If the report generation fails, an error message is displayed.   |
| Author             | [Your Name]                                                      |

### 3. Login
| Use Case Title     | Login                                                            |
|--------------------|------------------------------------------------------------------|
| Use Case ID        | 03                                                               |
| Actors             | Admin, Manager, User                                             |
| Description        | Users can log into the system.                                   |
| Actions            | 1. User navigates to the login page.<br>2. User enters credentials.<br>3. User submits the login form.<br>4. System verifies credentials and grants access.|
| Alternative Paths  | If credentials are incorrect, the user is prompted to re-enter them.|
| Pre/Post Conditions | Pre: User must have an account.<br>Post: User is logged in and redirected to the dashboard.|
| Exceptions         | If the login fails, an error message is displayed.               |
| Author             | [Your Name]                                                      |

### 4. Logout
| Use Case Title     | Logout                                                           |
|--------------------|------------------------------------------------------------------|
| Use Case ID        | 04                                                               |
| Actors             | Admin, Manager, User                                             |
| Description        | Users can log out of the system.                                 |
| Actions            | 1. User clicks on the logout button.<br>2. System logs out the user.<br>3. User is redirected to the login page.|
| Alternative Paths  | None                                                             |
| Pre/Post Conditions | Pre: User must be logged in.<br>Post: User is logged out and session is ended.|
| Exceptions         | If the logout process fails, an error message is displayed.      |
| Author             | [Your Name]                                                      |

### 5. Signup
| Use Case Title     | Signup                                                           |
|--------------------|------------------------------------------------------------------|
| Use Case ID        | 05                                                               |
| Actors             | User                                                             |
| Description        | New users can create an account.                                 |
| Actions            | 1. User navigates to the signup page.<br>2. User enters required details.<br>3. User submits the signup form.<br>4. System creates a new account and redirects to the login page.|
| Alternative Paths  | If any details are incorrect, the user is prompted to correct them.|
| Pre/Post Conditions | Pre: User must not have an existing account.<br>Post: New account is created and user is prompted to log in.|
| Exceptions         | If the signup fails, an error message is displayed.              |
| Author             | [Your Name]                                                      |

### 6. Access Job Postings
| Use Case Title     | Access Job Postings                                              |
|--------------------|------------------------------------------------------------------|
| Use Case ID        | 06                                                               |
| Actors             | User                                                             |
| Description        | Users can access and view job postings.                          |
| Actions            | 1. User logs into the system.<br>2. User navigates to the job postings section.<br>3. User views the list of available job postings.|
| Alternative Paths  | None                                                             |
| Pre/Post Conditions | Pre: User must be logged in.<br>Post: Job postings are displayed to the user.|
| Exceptions         | If job postings cannot be retrieved, an error message is displayed.|
| Author             | [Your Name]                                                      |

### 7. View and Search Jobs
| Use Case Title     | View and Search Jobs                                             |
|--------------------|------------------------------------------------------------------|
| Use Case ID        | 07                                                               |
| Actors             | User                                                             |
| Description        | Users can view and search for jobs.                              |
| Actions            | 1. User logs into the system.<br>2. User navigates to the job search page.<br>3. User enters search criteria.<br>4. User views search results.|
| Alternative Paths  | None                                                             |
| Pre/Post Conditions | Pre: User must be logged in.<br>Post: Job search results are displayed.|
| Exceptions         | If the search fails, an error message is displayed.              |
| Author             | [Your Name]                                                      |

### 8. Filter Jobs
| Use Case Title     | Filter Jobs                                                      |
|--------------------|------------------------------------------------------------------|
| Use Case ID        | 08                                                               |
| Actors             | User                                                             |
| Description        | Users can apply filters to job searches.                         |
| Actions            | 1. User logs into the system.<br>2. User navigates to the job search page.<br>3. User applies filters to narrow down search results.<br>4. User views filtered results.|
| Alternative Paths  | None                                                             |
| Pre/Post Conditions | Pre: User must be logged in.<br>Post: Filtered job search results are displayed.|
| Exceptions         | If the filter application fails, an error message is displayed.  |
| Author             | [Your Name]                                                      |

### 9. Apply for Jobs
| Use Case Title     | Apply for Jobs                                                   |
|--------------------|------------------------------------------------------------------|
| Use Case ID        | 09                                                               |
| Actors             | User                                                             |
| Description        | Users can apply for jobs.                                        |
| Actions            | 1. User logs into the system.<br>2. User navigates to a job posting.<br>3. User clicks on the apply button.<br>4. User submits application details.<br>5. System confirms the application.|
| Alternative Paths  | None                                                             |
| Pre/Post Conditions | Pre: User must be logged in and have a completed profile.<br>Post: Job application is submitted.|
| Exceptions         | If the application submission fails, an error message is displayed.|
| Author             | [Your Name]                                                      |

### 10. Upload CVs
| Use Case Title     | Upload CVs                                                       |
|--------------------|------------------------------------------------------------------|
| Use Case ID        | 10                                                               |
| Actors             | User                                                             |
| Description        | Users can upload their CVs.                                      |
| Actions            | 1. User logs into the system.<br>2. User navigates to the profile section.<br>3. User uploads their CV.<br>4. System stores the CV.|
| Alternative Paths  | None                                                             |
| Pre/Post Conditions | Pre: User must be logged in.<br>Post: CV is uploaded and stored.|
| Exceptions         | If the CV upload fails, an error message is displayed.           |
| Author             | [Your Name]                                                      |

### 11. Publish Job Postings
| Use Case Title     | Publish Job Postings                                             |
|--------------------|------------------------------------------------------------------|
| Use Case ID        | 11                                                               |
| Actors             | Manager                                                          |
| Description        | Managers can publish job postings.                               |
| Actions            | 1. Manager logs into the system.<br>2. Manager navigates to the job postings section.<br>3. Manager creates a new job posting.<br>4. Manager publishes the job posting.<br>5. Job posting is available to users.|
| Alternative Paths  | None                                                             |
| Pre/Post Conditions | Pre: Manager must be logged in.<br>Post: Job posting is published and visible to users.|
| Exceptions         | If the job posting fails to publish, an error message is displayed.|
| Author             | [Your Name]                                                      |

### 12. View and Filter Applicants
| Use Case Title     | View and Filter Applicants                                       |
|--------------------|------------------------------------------------------------------|
| Use Case ID        | 12                                                               |
| Actors             | Manager                                                          |
| Description        | Managers can view and filter job applicants.                     |
| Actions            | 1. Manager logs into the system.<br>2. Manager navigates to the applicants section.<br>3. Manager applies filters to view specific applicants.<br>4. Manager views filtered list of applicants.|
| Alternative Paths  | None                                                             |
| Pre/Post Conditions | Pre: Manager must be logged in.<br>Post: Filtered list of applicants is displayed.|
| Exceptions         | If the filtering fails, an error message is displayed.           |
| Author             | [Your Name]                                                      |

### 13. Approve Job Postings
| Use Case Title     | Approve Job Postings                                             |
|--------------------|------------------------------------------------------------------|
| Use Case ID        | 13                                                               |
| Actors             | Manager                                                          |
| Description        | Managers can approve job postings.                               |
| Actions            | 1. Manager logs into the system.<br>2. Manager navigates to the job approval section.<br>3. Manager reviews job postings.<br>4. Manager approves or rejects job postings.|
| Alternative Paths  | None                                                             |
| Pre/Post Conditions | Pre: Manager must be logged in.<br>Post: Job postings are approved or rejected.|
| Exceptions         | If the approval process fails, an error message is displayed.    |
| Author             | [Your Name]                                                      |

### 14. Upload Media Related to Job Postings
| Use Case Title     | Upload Media Related to Job Postings                             |
|--------------------|------------------------------------------------------------------|
| Use Case ID        | 14                                                               |
| Actors             | Manager                                                          |
| Description        | Managers can upload media related to job postings.               |
| Actions            | 1. Manager logs into the system.<br>2. Manager navigates to a specific job posting.<br>3. Manager uploads media (images, videos, etc.).<br>4. System stores the uploaded media.|
| Alternative Paths  | None                                                             |
| Pre/Post Conditions | Pre: Manager must be logged in.<br>Post: Media is uploaded and linked to the job posting.|
| Exceptions         | If the media upload fails, an error message is displayed.        |
| Author             | [Your Name]                                                      |

### 15. Access Uploaded CVs
| Use Case Title     | Access Uploaded CVs                                              |
|--------------------|------------------------------------------------------------------|
| Use Case ID        | 15                                                               |
| Actors             | Manager                                                          |
| Description        | Managers can access uploaded CVs of applicants.                  |
| Actions            | 1. Manager logs into the system.<br>2. Manager navigates to the applicants section.<br>3. Manager views uploaded CVs of applicants.|
| Alternative Paths  | None                                                             |
| Pre/Post Conditions | Pre: Manager must be logged in.<br>Post: Uploaded CVs are displayed for viewing.|
| Exceptions         | If the CV access fails, an error message is displayed.           |
| Author             | [Your Name]                                                      |