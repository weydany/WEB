export const companyEndpoints = {
  getAll: (): string => `api/companies/`,
  getById: (id: number): string => `api/companies/${id}/`,
  getAllVacancies: (id: number): string => `api/companies/${id}/vacancies/`,
};
