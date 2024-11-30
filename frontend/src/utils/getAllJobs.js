import tryCatch from "./tryCatch"

export default tryCatch(async function ({
  title,
  company,
  location,
  filtersArray,
}) {
  let query = ""

  // Salary Filters
  if (filtersArray[0])
    query += "&filters[salary][$gte]=30000&filters[salary][$lte]=50000"
  if (filtersArray[1])
    query += "&filters[salary][$gte]=50000&filters[salary][$lte]=70000"
  if (filtersArray[2])
    query += "&filters[salary][$gte]=70000&filters[salary][$lte]=90000"
  if (filtersArray[3]) query += "&filters[salary][$gte]=90000"

  // Education Filters
  if (filtersArray[4]) query += "&filters[education][$in]=Ph.D."
  if (filtersArray[5]) query += "&filters[education][$in]=Master"
  if (filtersArray[6]) query += "&filters[education][$in]=Bachelor"
  if (filtersArray[7]) query += "&filters[education][$in]=Intermediate"

  // Job Type Filters
  if (filtersArray[8]) query += "&filters[type][$in]=Permanent"
  if (filtersArray[9]) query += "&filters[type][$in]=Contract"
  if (filtersArray[10]) query += "&filters[type][$in]=Full Time"
  if (filtersArray[11]) query += "&filters[type][$in]=Part Time"

  // Experience Required Filters
  if (filtersArray[12])
    query += "&filters[experience][$gte]=1&filters[experience][$lte]=2"
  if (filtersArray[13])
    query += "&filters[experience][$gte]=3&filters[experience][$lte]=5"
  if (filtersArray[14])
    query += "&filters[experience][$gte]=5&filters[experience][$lte]=9"
  if (filtersArray[15]) query += "&filters[experience][$gte]=10"

  // Title Filter
  if (title) {
    query += `&filters[title][$containsi]=${title}`
  }

  // Company Filter
  if (company) {
    query += `&filters[creator][name][$containsi]=${company}`
  }

  // Location Filter
  if (location) {
    query += `&filters[creator][address][$containsi]=${location}`
  }

  const response = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_ORIGIN +
      "/api/jobs?&pagination[pageSize]=300&populate=*" +
      query
  )

  return await response.json()
})
