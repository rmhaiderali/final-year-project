const data = [
  {
    username: "Apple",
    email: "contact@apple.com",
    name: "Apple Inc.",
    address: "1 Apple Park Way, Cupertino, CA",
    isCompany: true,
    phone: "800-692-7753",
    website: "https://www.apple.com",
    bio: "Innovative technology and design leader.",
    createdJobs: [
      {
        title: "Software Engineer",
        type: "Full Time",
        education: "Bachelor",
        industry: "Telecommunication",
        salary: 85000,
        deadline: "2024-03-15",
        experience: 3,
        description:
          "Develop and maintain cutting-edge software solutions for Apple devices, ensuring high performance and reliability.",
      },
      {
        title: "Product Designer",
        type: "Permanent",
        education: "Master",
        industry: "Others",
        salary: 95000,
        deadline: "2025-02-28",
        experience: 5,
        description:
          "Design intuitive and visually appealing user experiences for Apple's flagship products, working closely with cross-functional teams.",
      },
    ],
  },
  {
    username: "Google",
    email: "contact@google.com",
    name: "Google LLC",
    address: "Mountain View, CA",
    isCompany: true,
    phone: "650-253-0000",
    website: "https://www.google.com",
    bio: "Search, ads, and cloud technology giant.",
    createdJobs: [
      {
        title: "Software Engineer",
        type: "Full Time",
        education: "Bachelor",
        industry: "Telecommunication",
        salary: 60000,
        deadline: "2024-04-15",
        experience: 3,
        description:
          "Develop and maintain scalable applications using modern cloud technologies. Collaborate with cross-functional teams to deliver high-quality software.",
      },
      {
        title: "Data Scientist",
        type: "Permanent",
        education: "Master",
        industry: "Business",
        salary: 92000,
        deadline: "2025-04-20",
        experience: 5,
        description:
          "Analyze large datasets to generate actionable insights. Use machine learning techniques to optimize Google Ads and search algorithms.",
      },
    ],
  },
  {
    username: "Samsung",
    email: "contact@samsung.com",
    name: "Samsung Electronics",
    address: "129 Samsung-ro, Suwon-si, South Korea",
    isCompany: true,
    phone: "+82-2-2255-0114",
    website: "https://www.samsung.com",
    bio: "Global leader in electronics and home appliances.",
    createdJobs: [
      {
        title: "Product Manager",
        type: "Permanent",
        education: "Master",
        industry: "Business",
        salary: 75000,
        deadline: "2025-03-15",
        experience: 5,
        description:
          "We are seeking a product manager to lead cross-functional teams in the development of innovative electronic products. The ideal candidate will have excellent leadership, communication, and problem-solving skills, as well as experience in the electronics industry.",
      },
      {
        title: "Marketing Specialist",
        type: "Full Time",
        education: "Bachelor",
        industry: "Business",
        salary: 60000,
        deadline: "2024-07-01",
        experience: 2,
        description:
          "We are looking for a marketing specialist to drive Samsung's product marketing strategies. The role requires a creative and analytical mindset, with experience in developing marketing campaigns that resonate with a global audience.",
      },
    ],
  },
  {
    username: "Nokia",
    email: "contact@nokia.com",
    name: "Nokia Corporation",
    address: "Karaportti 3, Espoo, Finland",
    isCompany: true,
    phone: "+358-10-448-8000",
    website: "https://www.nokia.com",
    bio: "Pioneer in mobile and network solutions.",
    createdJobs: [
      {
        title: "Network Engineer",
        type: "Full Time",
        education: "Bachelor",
        industry: "Telecommunication",
        salary: 70000,
        deadline: "2024-09-15",
        experience: 3,
        description:
          "Responsible for designing, implementing, and maintaining network systems for our clients.",
      },
      {
        title: "Mobile Application Developer",
        type: "Permanent",
        education: "Master",
        industry: "Telecommunication",
        salary: 85000,
        deadline: "2025-02-28",
        experience: 5,
        description:
          "Develop and maintain mobile applications, ensuring high-quality code and seamless performance across devices.",
      },
    ],
  },
  {
    username: "ChaseBank",
    email: "support@chase.com",
    name: "JPMorgan Chase Bank",
    address: "270 Park Avenue, New York, NY",
    isCompany: true,
    phone: "1-800-935-9935",
    website: "https://www.chase.com",
    bio: "One of the largest financial institutions in the U.S.",
    createdJobs: [
      {
        title: "Financial Analyst",
        type: "Permanent",
        education: "Bachelor",
        industry: "Banking",
        salary: 60000,
        deadline: "2025-02-15",
        experience: 2,
        description:
          "Analyze financial data, prepare reports, and assist in investment strategies for the bank's portfolio.",
      },
      {
        title: "Customer Service Representative",
        type: "Full Time",
        education: "Intermediate",
        industry: "Banking",
        salary: 45000,
        deadline: "2025-03-01",
        experience: 1,
        description:
          "Provide support to clients by addressing inquiries, resolving issues, and promoting banking services.",
      },
    ],
  },
  {
    username: "Harvard",
    email: "info@harvard.edu",
    name: "Harvard University",
    address: "Cambridge, MA, USA",
    isCompany: true,
    phone: "617-495-1000",
    website: "https://www.harvard.edu",
    bio: "World-renowned higher education institute.",
    createdJobs: [
      {
        title: "Research Scientist",
        type: "Full Time",
        education: "Ph.D.",
        industry: "Education",
        salary: 75000,
        deadline: "2024-12-15",
        experience: 2,
        description:
          "Conduct innovative research in the field of biological sciences, publish papers, and collaborate with faculty on various projects.",
      },
      {
        title: "Academic Coordinator",
        type: "Permanent",
        education: "Master",
        industry: "Education",
        salary: 70000,
        deadline: "2024-10-01",
        experience: 3,
        description:
          "Oversee academic programs, coordinate faculty, and ensure the effective implementation of curricula across departments.",
      },
    ],
  },
  {
    username: "Microsoft",
    email: "contact@microsoft.com",
    name: "Microsoft Corporation",
    address: "One Microsoft Way, Redmond, WA",
    isCompany: true,
    phone: "1-800-642-7676",
    website: "https://www.microsoft.com",
    bio: "Technology company revolutionizing productivity software.",
    createdJobs: [
      {
        title: "Hardware Engineer",
        type: "Full Time",
        education: "Bachelor",
        industry: "Others",
        salary: 85000,
        deadline: "2025-03-30",
        experience: 10,
        description:
          "Design and test new hardware components for consumer electronics and enterprise products, ensuring top performance and reliability.",
      },
      {
        title: "Systems Architect",
        type: "Permanent",
        education: "Master",
        industry: "Others",
        salary: 95000,
        deadline: "2025-04-15",
        experience: 5,
        description:
          "Lead the design and development of complex hardware systems for next-generation computing solutions and cloud infrastructure.",
      },
    ],
  },
  {
    username: "Amazon",
    email: "contact@amazon.com",
    name: "Amazon Inc.",
    address: "410 Terry Ave N, Seattle, WA",
    isCompany: true,
    phone: "1-888-280-4331",
    website: "https://www.amazon.com",
    bio: "E-commerce and cloud computing powerhouse.",
    createdJobs: [
      {
        title: "Cloud Solutions Architect",
        type: "Full Time",
        education: "Master",
        industry: "Telecommunication",
        salary: 110000,
        deadline: "2024-07-10",
        experience: 7,
        description:
          "Design and implement scalable cloud infrastructure solutions for enterprise clients, ensuring performance and cost-efficiency.",
      },
      {
        title: "Product Manager E-Commerce",
        type: "Permanent",
        education: "Bachelor",
        industry: "Business",
        salary: 95000,
        deadline: "2025-03-20",
        experience: 2,
        description:
          "Oversee the development and enhancement of Amazon's e-commerce platform, driving user experience improvements and revenue growth.",
      },
    ],
  },
  {
    username: "Tesla",
    email: "contact@tesla.com",
    name: "Tesla Inc.",
    address: "3500 Deer Creek Road, Palo Alto, CA",
    isCompany: true,
    phone: "1-650-681-5000",
    website: "https://www.tesla.com",
    bio: "Leading innovator in electric vehicles and clean energy.",
    createdJobs: [
      {
        title: "Battery Systems Engineer",
        type: "Full Time",
        education: "Master",
        industry: "Telecommunication",
        salary: 95000,
        deadline: "2025-04-05",
        experience: 3,
        description:
          "Design and test advanced battery systems for electric vehicles and energy storage products, ensuring high efficiency and sustainability.",
      },
      {
        title: "Vehicle Design Engineer",
        type: "Permanent",
        education: "Bachelor",
        industry: "Others",
        salary: 100000,
        deadline: "2024-08-25",
        experience: 4,
        description:
          "Lead the development of next-generation electric vehicle models, focusing on vehicle performance, safety, and sustainability.",
      },
    ],
  },
  {
    username: "Intel",
    email: "support@intel.com",
    name: "Intel Corporation",
    address: "Santa Clara, CA",
    isCompany: true,
    phone: "1-408-765-8080",
    website: "https://www.intel.com",
    bio: "Global leader in semiconductor manufacturing.",
    createdJobs: [
      {
        title: "Semiconductor Engineer",
        type: "Full Time",
        education: "Master",
        industry: "Telecommunication",
        salary: 105000,
        deadline: "2025-04-20",
        experience: 6,
        description:
          "Design and develop advanced semiconductor devices, improving performance and energy efficiency for next-generation computing systems.",
      },
      {
        title: "Hardware Validation Engineer",
        type: "Permanent",
        education: "Bachelor",
        industry: "Others",
        salary: 90000,
        deadline: "2025-03-10",
        experience: 9,
        description:
          "Test and validate hardware designs to ensure they meet quality standards, performing simulations and working closely with the design team.",
      },
    ],
  },
  {
    username: "HSBC",
    email: "support@hsbc.com",
    name: "HSBC Holdings",
    address: "8 Canada Square, London, UK",
    isCompany: true,
    phone: "+44-20-7991-8888",
    website: "https://www.hsbc.com",
    bio: "Leading international banking and financial services provider.",
    createdJobs: [
      {
        title: "Financial Analyst",
        type: "Full Time",
        education: "Bachelor",
        industry: "Banking",
        salary: 75000,
        deadline: "2025-03-18",
        experience: 2,
        description:
          "Analyze financial data to assess investment opportunities, prepare reports, and support decision-making in the banking sector.",
      },
      {
        title: "Risk Management Specialist",
        type: "Permanent",
        education: "Master",
        industry: "Banking",
        salary: 90000,
        deadline: "2025-04-05",
        experience: 3,
        description:
          "Identify and assess risks within financial portfolios, develop strategies to mitigate risks, and ensure regulatory compliance.",
      },
    ],
  },
  {
    username: "MIT",
    email: "info@mit.edu",
    name: "MIT",
    address: "77 Massachusetts Ave, Cambridge, MA",
    isCompany: true,
    phone: "617-253-1000",
    website: "https://www.mit.edu",
    bio: "Premier institute for science, technology, and innovation.",
    createdJobs: [
      {
        title: "Research Fellow",
        type: "Full Time",
        education: "Ph.D.",
        industry: "Education",
        salary: 85000,
        deadline: "2024-05-10",
        experience: 8,
        description:
          "Conduct cutting-edge research in science and technology fields, contribute to academic publications, and collaborate with faculty on innovative projects.",
      },
      {
        title: "Lab Manager",
        type: "Permanent",
        education: "Master",
        industry: "Education",
        salary: 90000,
        deadline: "2025-04-01",
        experience: 7,
        description:
          "Manage laboratory operations, supervise research staff, and ensure the proper functioning of equipment and research protocols.",
      },
    ],
  },
  {
    username: "Sony",
    email: "contact@sony.com",
    name: "Sony Corporation",
    address: "1-7-1 Konan, Minato-ku, Tokyo, Japan",
    isCompany: true,
    phone: "+81-3-6748-2111",
    website: "https://www.sony.com",
    bio: "Innovator in electronics, gaming, and entertainment.",
    createdJobs: [
      {
        title: "Hardware Design Engineer",
        type: "Full Time",
        education: "Master",
        industry: "Others",
        salary: 95000,
        deadline: "2025-03-25",
        experience: 4,
        description:
          "Design and develop innovative hardware components for consumer electronics, ensuring high performance, quality, and user experience.",
      },
      {
        title: "Game Development Specialist",
        type: "Permanent",
        education: "Bachelor",
        industry: "Telecommunication",
        salary: 90000,
        deadline: "2025-04-10",
        experience: 3,
        description:
          "Develop and optimize gaming software and technologies for PlayStation and other gaming platforms, focusing on performance and immersive experiences.",
      },
    ],
  },
  {
    username: "CitiBank",
    email: "support@citi.com",
    name: "Citigroup Inc.",
    address: "388 Greenwich Street, New York, NY",
    isCompany: true,
    phone: "1-800-285-3000",
    website: "https://www.citi.com",
    bio: "Global leader in banking and financial services.",
    createdJobs: [
      {
        title: "Credit Risk Analyst",
        type: "Full Time",
        education: "Bachelor",
        industry: "Banking",
        salary: 80000,
        deadline: "2024-02-15",
        experience: 2,
        description:
          "Assess credit risk of clients, analyze financial statements, and develop strategies to manage risk in loan portfolios.",
      },
      {
        title: "Investment Banking Associate",
        type: "Permanent",
        education: "Master",
        industry: "Banking",
        salary: 110000,
        deadline: "2025-04-05",
        experience: 4,
        description:
          "Assist in executing investment banking transactions, conduct financial modeling, and support senior bankers in client relationship management.",
      },
    ],
  },
  {
    username: "Facebook",
    email: "contact@meta.com",
    name: "Meta Platforms, Inc.",
    address: "1 Hacker Way, Menlo Park, CA",
    isCompany: true,
    phone: "1-650-543-4800",
    website: "https://www.meta.com",
    bio: "Social media and virtual reality pioneer.",
    createdJobs: [
      {
        title: "Virtual Reality Engineer",
        type: "Full Time",
        education: "Master",
        industry: "Telecommunication",
        salary: 105000,
        deadline: "2025-03-30",
        experience: 8,
        description:
          "Develop innovative virtual reality technologies, working on hardware and software solutions to enhance user experiences in virtual environments.",
      },
      {
        title: "Social Media Data Analyst",
        type: "Permanent",
        education: "Bachelor",
        industry: "Business",
        salary: 85000,
        deadline: "2025-04-05",
        experience: 7,
        description:
          "Analyze social media data to identify trends, track performance metrics, and support the development of targeted marketing strategies.",
      },
    ],
  },
  {
    username: "IBM",
    email: "support@ibm.com",
    name: "International Business Machines",
    address: "1 Orchard Road, Armonk, NY",
    isCompany: true,
    phone: "1-914-499-1900",
    website: "https://www.ibm.com",
    bio: "Global leader in AI, cloud, and IT services.",
    createdJobs: [
      {
        title: "AI Solutions Architect",
        type: "Full Time",
        education: "Master",
        industry: "Telecommunication",
        salary: 115000,
        deadline: "2025-03-20",
        experience: 4,
        description:
          "Design and implement AI-based solutions for enterprise clients, focusing on integrating machine learning models into business processes.",
      },
      {
        title: "Cloud Systems Engineer",
        type: "Permanent",
        education: "Bachelor",
        industry: "Telecommunication",
        salary: 100000,
        deadline: "2025-04-10",
        experience: 3,
        description:
          "Develop and maintain scalable cloud infrastructure for IBM's cloud solutions, ensuring optimal performance and security.",
      },
    ],
  },
  {
    username: "Stanford",
    email: "info@stanford.edu",
    name: "Stanford University",
    address: "450 Serra Mall, Stanford, CA",
    isCompany: true,
    phone: "650-723-2300",
    website: "https://www.stanford.edu",
    bio: "Top academic institution for research and innovation.",
    createdJobs: [
      {
        title: "Postdoctoral Researcher",
        type: "Full Time",
        education: "Ph.D.",
        industry: "Education",
        salary: 85000,
        deadline: "2025-03-25",
        experience: 1,
        description:
          "Conduct advanced research in scientific fields, collaborate with faculty on projects, and publish research findings in academic journals.",
      },
      {
        title: "Laboratory Technician",
        type: "Permanent",
        education: "Bachelor",
        industry: "Education",
        salary: 65000,
        deadline: "2025-04-10",
        experience: 2,
        description:
          "Support research projects by managing laboratory operations, preparing experiments, and maintaining equipment and materials.",
      },
    ],
  },
  {
    username: "Twitter",
    email: "support@twitter.com",
    name: "Twitter, Inc.",
    address: "1355 Market Street, San Francisco, CA",
    isCompany: true,
    phone: "1-415-222-9670",
    website: "https://www.twitter.com",
    bio: "Real-time social media and communication platform.",
    createdJobs: [
      {
        title: "Data Scientist",
        type: "Full Time",
        education: "Master",
        industry: "Telecommunication",
        salary: 100000,
        deadline: "2025-03-15",
        experience: 3,
        description:
          "Analyze large datasets to derive insights, build models, and support decision-making for Twitter's platform optimization.",
      },
      {
        title: "Content Moderation Specialist",
        type: "Permanent",
        education: "Bachelor",
        industry: "Telecommunication",
        salary: 75000,
        deadline: "2025-04-01",
        experience: 2,
        description:
          "Monitor and review content to ensure compliance with Twitter's community guidelines, working with cross-functional teams to maintain a safe environment.",
      },
    ],
  },
  {
    username: "Netflix",
    email: "contact@netflix.com",
    name: "Netflix, Inc.",
    address: "100 Winchester Circle, Los Gatos, CA",
    isCompany: true,
    phone: "1-888-638-3549",
    website: "https://www.netflix.com",
    bio: "Leading streaming entertainment service provider.",
    createdJobs: [
      {
        title: "Mobile App Developer",
        type: "Full Time",
        education: "Bachelor",
        industry: "Telecommunication",
        salary: 95000,
        deadline: "2025-03-20",
        experience: 3,
        description:
          "Develop and maintain mobile applications for streaming on iOS and Android platforms, ensuring smooth user experiences and integration with Netflix's services.",
      },
      {
        title: "Content Strategy Analyst",
        type: "Permanent",
        education: "Master",
        industry: "Telecommunication",
        salary: 90000,
        deadline: "2025-04-05",
        experience: 4,
        description:
          "Analyze content performance data, collaborate with content teams to optimize the streaming library, and provide strategic recommendations for content acquisition.",
      },
    ],
  },
  {
    username: "Toyota",
    email: "contact@toyota.com",
    name: "Toyota Motor Corporation",
    address: "1 Toyota-cho, Toyota City, Japan",
    isCompany: true,
    phone: "+81-565-28-2121",
    website: "https://www.toyota.com",
    bio: "Global automotive leader in quality and innovation.",
    createdJobs: [
      {
        title: "Automotive Engineer",
        type: "Full Time",
        education: "Master",
        industry: "Others",
        salary: 105000,
        deadline: "2025-03-15",
        experience: 4,
        description:
          "Design, develop, and test automotive systems, components, and vehicles, ensuring quality, safety, and performance standards are met.",
      },
      {
        title: "Supply Chain Analyst",
        type: "Permanent",
        education: "Bachelor",
        industry: "Business",
        salary: 85000,
        deadline: "2025-04-01",
        experience: 3,
        description:
          "Manage the flow of materials and components for manufacturing, optimize inventory processes, and collaborate with global suppliers to ensure timely production.",
      },
    ],
  },
]

const token = ""

if (!token) throw new Error("Please provide a valid token")

async function addJob(job) {
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: job }),
  }

  const response = await fetch(
    "http://127.0.0.1:1337/api/jobs?populate=*",
    requestOptions
  )
  const json = await response.json()
  if (json.error) console.error(json.error.message)
  console.log({ company: json.data.creator.username, job: json.data.title })
}

async function addCompany(company) {
  company.password = "123456"

  const { createdJobs } = company
  delete company.createdJobs

  const requestOptions = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(company),
    redirect: "follow",
  }

  const response = await fetch(
    "http://127.0.0.1:1337/api/auth/local/register",
    requestOptions
  )
  const json = await response.json()
  if (json.error) console.error(json.error.message)
  console.log({ company: json.user.username })

  createdJobs.forEach(async (job) => {
    job.creator = json.user.documentId
    await addJob(job)
  })
}

data.forEach((company) => addCompany(company))
