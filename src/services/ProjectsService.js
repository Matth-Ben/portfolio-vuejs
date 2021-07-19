import axios from 'axios'
import * as process from '../../.eslintrc'

const Axios = axios.create({
  baseURL: "https://api.airtable.com/v0/appi0QKsV0ERgFCd1/Projects"
});
Axios.defaults.headers.common = {'Authorization': `Bearer keygFHin7wgEG0SBU`}

export default{
  getProjects () {
    return Axios.get()
  },

  getProject(slug) {
    return Axios.get("?filterByFormula={Slug}='" + slug + "'")
  }
}
