export const vacancyEndpoints = {
  getAll: (): string => `api/vacancies/`,
  getById: (id: number): string => `api/vacancies/${id}/`,
  getTopTen: (): string => `api/vacancies/top_ten/`,
}
