import { fetchUtils } from "react-admin";
import { stringify } from "query-string";

const fetchJson = (url, options = {}) => {
  options.user = {
    authenticated: true,
    token: localStorage.getItem("token")
  };
  return fetchUtils.fetchJson(url, options);
};

const apiUrl = "https://api-softwarelabs.herokuapp.com";
const httpClient = fetchJson;

const dataProvider = {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter)
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    switch (resource) {
      case "Employees.php":
        return httpClient(url).then(({ headers, json }) => ({
          data: json.map(resource => ({
            ...resource,
            id: resource.emp_id
          })),
          // total: parseInt(headers.get('content-range').split('/').pop(), 10),
          total: parseInt(20, 10)
        }));
      default:
    }
  },

  create: (resource, params) =>
    httpClient(`${apiUrl}/create_employee.php`, {
      method: "POST",
      body: JSON.stringify(params.data)
    }).then(({ json }) => ({
      data: { ...params.data, id: json.emp_id }
    })),

  deleteMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids })
    };
    return httpClient(`${apiUrl}/delete_employee.php?${stringify(query)}`, {
      method: "DELETE",
      body: JSON.stringify(params.data)
    }).then(({ json }) => ({ data: json.emp_id }));
  }
};

export default dataProvider;
